"use client";

import FileUpload from "@/components/FileUpload";
import HFlex from "@/components/HFlex";
import Input from "@/components/Input";
import RichTextEditor from "@/components/RichTextEditor/RichTextEditor";
import { P } from "@/components/Text";
import VFlex from "@/components/VFlex";
import Image from "next/image";
import { useState } from "react";
import JSConfetti from "js-confetti";
import { Compact } from "@uiw/react-color";
import ColorCircle from "@/components/ColorCircle";
import Button from "@/components/Button";

type Props = {
  params: {
    bombId: string;
  };
};

type ConfettiSettings = {
  selectedIndex: number;
  colors: string[];
  radius: number;
  number: number;
};

export default function EditBomb({ params }: Props) {
  // TODO(connor): cache no store needed for fetch for dynamic data - prisma handles this?
  // const data = await prisma.bomb.findUnique({
  const [richTextContent, setRichTextContent] = useState<string>("");
  const [confettiSettings, setConfettiSettings] = useState<ConfettiSettings>({
    selectedIndex: 0,
    colors: ["#F32E2E", "#F3912E", "#F3F32E"],
    radius: 10,
    number: 300,
  });

  // TODO(connor): easier to make confetti letter without writing so much text -> openai integration or make text bigger or custom templates
  // TODO(connor): constant auto save (can also display save icon when changes are made)
  // TODO(connor): tailwind prettier import sorting + classname sorting
  // TODO(connor): more responsive for different screen heights and widths?
  // TODO(connor): confetti custom image upload, different types like cannon or rain - https://www.kirilv.com/canvas-confetti/
  return (
    <HFlex className="h-full">
      <VFlex className="p-4 w-1/3 max-w-lg bg-base-300 gap-4">
        <div>
          <P bold>File Name</P>
          <Input type="text" placeholder="Untitled" />
        </div>
        <div>
          <P bold>Logo Upload</P>
          <HFlex>
            <Image alt="logo" src="" width={100} height={100} />
            <FileUpload />
          </HFlex>
        </div>
        <div>
          <P bold>Text Content</P>
          <RichTextEditor content={richTextContent} updateContent={setRichTextContent} />
        </div>
        <VFlex className="gap-2">
          <P bold>Confetti Settings</P>
          <HFlex className="gap-2">
            <div>
              {confettiSettings.colors.map((color, index) => (
                <HFlex itemsCenter key={index} className="gap-1">
                  <P>Color {index + 1}</P>
                  <button
                    onClick={() =>
                      setConfettiSettings((prevConfettiSettings) => {
                        return {
                          ...prevConfettiSettings,
                          selectedIndex: index,
                        };
                      })
                    }
                  >
                    <ColorCircle color={color} size={40} border={index === confettiSettings.selectedIndex} />
                  </button>
                </HFlex>
              ))}
            </div>
            <Compact
              className="!w-[245px]"
              color={confettiSettings.colors[confettiSettings.selectedIndex]}
              onChange={(color) => {
                setConfettiSettings((prevConfettiSettings) => {
                  const newColors = [...prevConfettiSettings.colors];
                  newColors[confettiSettings.selectedIndex] = color.hex;
                  return {
                    ...prevConfettiSettings,
                    colors: newColors,
                  };
                });
              }}
            />
          </HFlex>
          <div>
            <P>Size</P>
            <Input
              type="number"
              value={confettiSettings.radius}
              onChange={(e) =>
                setConfettiSettings(() => {
                  return {
                    ...confettiSettings,
                    radius: parseInt(e.target.value),
                  };
                })
              }
            />
          </div>
          <div>
            <P>Quantity</P>
            <Input
              type="number"
              value={confettiSettings.number}
              onChange={(e) =>
                setConfettiSettings(() => {
                  return {
                    ...confettiSettings,
                    number: parseInt(e.target.value),
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
                confettiNumber: confettiSettings.number,
                confettiRadius: confettiSettings.radius,
                confettiColors: confettiSettings.colors,
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
          dangerouslySetInnerHTML={{ __html: richTextContent }}
        />
      </HFlex>
    </HFlex>
  );
}
// Open envelope animation, option to choose text color, logo stamp in corner, name address, text, confetti image, confetti speed and duration
