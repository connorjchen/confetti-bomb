import { Bomb } from "@prisma/client";
import React from "react";
import Image from "next/image";

type Props = {
  bomb: Bomb;
};

export default function Letter({ bomb }: Props) {
  return (
    <div className="unreset-css w-[850px] h-[1100px] bg-white p-4 drop-shadow-2xl rounded-md">
      {bomb.iconBlobUrl && (
        <div className="w-[200px] h-[100px] relative ml-auto">
          <Image alt="logo" src={bomb.iconBlobUrl} layout="fill" objectFit="contain" />
        </div>
      )}
      <div dangerouslySetInnerHTML={{ __html: bomb.textContent }} />
    </div>
  );
}
