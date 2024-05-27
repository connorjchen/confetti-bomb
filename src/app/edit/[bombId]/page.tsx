"use client";

import FileUpload from "@/components/FileUpload";
import HFlex from "@/components/HFlex";
import RichTextEditor from "@/components/RichTextEditor";
import { H1, H3, H4, H5, H6, P } from "@/components/Text";
import VFlex from "@/components/VFlex";

interface EditBombProps {
  params: {
    bombId: string;
  };
}

export default function EditBomb({ params }: EditBombProps) {
  // TODO(connor): cache no store needed for fetch for dynamic data - prisma handles this?
  // const data = await prisma.bomb.findUnique({

  // TODO(connor): more responsive for different screen heights and widths?
  return (
    <HFlex className="h-full">
      <VFlex className="p-4 w-1/4 max-w-xs bg-base-300 gap-4">
        <input type="text" placeholder="Untitled" className="input w-full" />
        <div>
          <P bold>Logo Upload</P>
          <HFlex>
            <img alt="logo" src="https://via.placeholder.com/150" />
            <FileUpload />
          </HFlex>
        </div>
        <div>
          <P bold>Logo Upload</P>
          <RichTextEditor />
        </div>
        <div>Confetti upload / select</div>
        <div>Confetti speed and duration select</div>
      </VFlex>
      <HFlex className="p-4 w-full justify-center overflow-auto bg-base-200">
        <div className=" aspect-[8.5/11] bg-white">
          <div>hi</div>
        </div>
      </HFlex>
    </HFlex>
  );
}
// Open envelope animation, option to choose text color, logo stamp in corner, name address, text, confetti image, confetti speed and duration
