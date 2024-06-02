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

interface EditBombProps {
  params: {
    bombId: string;
  };
}

export default function EditBomb({ params }: EditBombProps) {
  // TODO(connor): cache no store needed for fetch for dynamic data - prisma handles this?
  // const data = await prisma.bomb.findUnique({
  const [richTextContent, setRichTextContent] = useState<string>("");

  // TODO(connor): more responsive for different screen heights and widths?
  // TODO(connor): confetti custom image upload, different types like cannon or rain - https://www.kirilv.com/canvas-confetti/
  return (
    <HFlex className="h-full">
      <VFlex className="p-4 w-1/3 max-w-lg bg-base-300 gap-4">
        <Input type="text" placeholder="Untitled" />
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
        <div>
          <P bold>Confetti Select</P>
          <button
            onClick={() => {
              new JSConfetti().addConfetti({
                confettiNumber: 300, // number of emoji or confetti
                confettiRadius: 10, // radius of confetti
                confettiColors: ["#ff0a54", "#ffdd00"], // color of confetti
                // emojis: ["🎓"], // emojis
                // emojiSize: 40, // size of emoji
              });
            }}
          >
            🎓
          </button>
        </div>
        <div>Confetti speed and duration select</div>
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
