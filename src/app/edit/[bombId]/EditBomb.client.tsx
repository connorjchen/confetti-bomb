"use client";
import FileUpload from "@/components/FileUpload";
import HFlex from "@/components/HFlex";
import Input from "@/components/Input";
import RichTextEditor from "@/components/RichTextEditor/RichTextEditor";
import { P } from "@/components/Text";
import VFlex from "@/components/VFlex";
import Image from "next/image";
import { useEffect, useState } from "react";
import JSConfetti from "js-confetti";
import { Compact } from "@uiw/react-color";
import ColorCircle from "@/components/ColorCircle";
import Button from "@/components/Button";
import { Bomb } from "@prisma/client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHourglassStart, faCircleCheck, faTriangleExclamation } from "@fortawesome/free-solid-svg-icons";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { cn } from "@/utils";
import { debounce } from "lodash";

enum SaveState {
  SAVING,
  SAVED,
  ERROR,
  NONE,
}

type SaveStateProperties = {
  text: string;
  icon: IconDefinition;
  color: string;
};

const saveStateMap: Record<SaveState, SaveStateProperties> = {
  [SaveState.SAVING]: {
    text: "Saving...",
    icon: faHourglassStart,
    color: "text-success",
  },
  [SaveState.SAVED]: {
    text: "Saved",
    icon: faCircleCheck,
    color: "text-success",
  },
  [SaveState.ERROR]: {
    text: "Error",
    icon: faTriangleExclamation,
    color: "text-error",
  },
  [SaveState.NONE]: {
    text: "",
    icon: faCircleCheck,
    color: "",
  },
};

type Props = {
  bomb: Bomb;
  updateBomb: (bomb: Bomb) => Promise<boolean>;
};

export default function EditBombClient({ bomb: initialBomb, updateBomb }: Props) {
  const [selectedColorIdx, setSelectedColorIdx] = useState(0);
  const [bomb, setBomb] = useState(initialBomb);
  const [saveState, setSaveState] = useState(SaveState.NONE);
  const [firstRender, setFirstRender] = useState(true);

  // TODO(connor): refactor everything afterwards
  // TODO(connor): easier to make confetti letter without writing so much text -> openai integration or make text bigger or custom templates
  // TODO(connor): tailwind prettier import sorting + classname sorting
  // TODO(connor): more responsive for different screen heights and widths?
  // TODO(connor): confetti custom image upload, different types like cannon or rain - https://www.kirilv.com/canvas-confetti/

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    async function callBombUpdate(bomb: Bomb) {
      setSaveState(SaveState.SAVING);
      const updateSucceeded = await updateBomb(bomb);
      setSaveState(updateSucceeded ? SaveState.SAVED : SaveState.ERROR);

      if (updateSucceeded) {
        timeoutId = setTimeout(() => {
          setSaveState(SaveState.NONE);
        }, 5000);
      }
    }
    const debouncedUpdate = debounce(callBombUpdate, 500);

    if (firstRender) {
      setFirstRender(false);
    } else {
      debouncedUpdate(bomb);
    }

    return () => {
      debouncedUpdate.cancel();

      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [bomb]);

  return (
    <HFlex className="h-full">
      <VFlex className="p-4 w-1/3 max-w-lg bg-base-300 gap-4">
        <div>
          <HFlex className="justify-between">
            <P bold>File Name</P>
            {saveState !== SaveState.NONE && (
              <HFlex itemsCenter className={cn("gap-2", saveStateMap[saveState].color)}>
                <FontAwesomeIcon icon={saveStateMap[saveState].icon} />
                <P className="inline">{saveStateMap[saveState].text}</P>
              </HFlex>
            )}
          </HFlex>
          <Input
            type="text"
            value={bomb.fileName}
            onChange={(e) =>
              setBomb((prev) => {
                return {
                  ...prev,
                  fileName: e.target.value,
                };
              })
            }
          />
        </div>
        <div>
          <P bold>Logo Upload</P>
          <HFlex itemsCenter className="gap-2">
            {bomb.iconBlobUrl ? (
              <>
                <Image
                  alt="logo"
                  src="https://jdu1spj3hhoewnhk.public.blob.vercel-storage.com/00606_1fkFplPupwv_0b50ew_600x450-KZpyE1KEThZZEhR1EXx4jZp12qCDkx.jpg"
                  width={100}
                  height={100}
                />
                <Button
                  outline
                  className="btn-black"
                  onClick={() =>
                    setBomb((prev) => {
                      return {
                        ...prev,
                        iconBlobUrl: "",
                      };
                    })
                  }
                >
                  Remove Logo
                </Button>
              </>
            ) : (
              <P>No Logo Uploaded</P>
            )}
            <FileUpload />
          </HFlex>
        </div>
        <div>
          <P bold>Text Content</P>
          <RichTextEditor
            content={bomb.textContent}
            updateContent={(newContent) =>
              setBomb((prev) => {
                return {
                  ...prev,
                  textContent: newContent,
                };
              })
            }
          />
        </div>
        <VFlex className="gap-2">
          <P bold>Confetti Settings</P>
          <HFlex className="gap-2">
            <div>
              {bomb.confettiColors.map((color, index) => (
                <HFlex itemsCenter key={index} className="gap-1">
                  <P>Color {index + 1}</P>
                  <button onClick={() => setSelectedColorIdx(index)}>
                    <ColorCircle color={color} size={40} border={index === selectedColorIdx} />
                  </button>
                </HFlex>
              ))}
            </div>
            <Compact
              className="!w-[245px]"
              color={bomb.confettiColors[selectedColorIdx]}
              onChange={(color) => {
                setBomb((prev: Bomb) => {
                  return {
                    ...prev,
                    confettiColors: prev.confettiColors.map((c, idx) => {
                      return idx === selectedColorIdx ? color.hex : c;
                    }),
                  };
                });
              }}
            />
          </HFlex>
          <div>
            <P>Size</P>
            <Input
              type="number"
              value={bomb.confettiRadius}
              onChange={(e) =>
                setBomb((prev) => {
                  return {
                    ...prev,
                    confettiRadius: parseInt(e.target.value),
                  };
                })
              }
            />
          </div>
          <div>
            <P>Quantity</P>
            <Input
              type="number"
              value={bomb.confettiNumber}
              onChange={(e) =>
                setBomb((prev) => {
                  return {
                    ...prev,
                    confettiNumber: parseInt(e.target.value),
                  };
                })
              }
            />
          </div>
        </VFlex>
        <HFlex className="gap-4">
          <Button
            outline
            className="btn-primary"
            onClick={() => {
              new JSConfetti().addConfetti({
                confettiNumber: bomb.confettiNumber,
                confettiRadius: bomb.confettiRadius,
                confettiColors: bomb.confettiColors,
                // TODO(connor): can add emoji but cannot be used with confettiColors
                // emojis: ["🎓"], // emojis
                // emojiSize: 40, // size of emoji
              });
            }}
          >
            Test Confetti
          </Button>
          <Button
            outline
            className="btn-secondary"
            onClick={() => {
              console.log("Copy Link to Share");
            }}
          >
            Copy Link to Share
          </Button>
        </HFlex>
      </VFlex>
      <HFlex className="p-4 w-full justify-center bg-base-200">
        <div
          className="unreset-css aspect-[8.5/11] bg-white p-4"
          dangerouslySetInnerHTML={{ __html: bomb.textContent }}
        />
      </HFlex>
    </HFlex>
  );
}
