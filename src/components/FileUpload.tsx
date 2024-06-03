"use client";

import { postFetch } from "@/app/api/utils";
import React, { useRef } from "react";
import Button from "./Button";
import { Bomb } from "@prisma/client";

export enum UploadType {
  LOGO = "logo",
}

type Props = {
  bombId: string;
  uploadType: UploadType;
  setBomb: React.Dispatch<React.SetStateAction<Bomb>>;
};

export default function FileUpload({ bombId, uploadType, setBomb }: Props) {
  const inputFileRef = useRef<HTMLInputElement>(null);

  async function uploadFile() {
    if (!inputFileRef.current?.files) {
      throw new Error("No file selected");
    }

    const file = inputFileRef.current.files[0];
    const extension = file.name.split(".").pop();
    if (!extension || !["png", "jpg", "jpeg"].includes(extension)) {
      throw new Error("Only png, jpg, and jpeg files are allowed.");
    }

    const blobUrl = await postFetch(
      `/api/upload?bombId=${bombId}&uploadType=${uploadType}&fileName=${file.name}`,
      file,
      false
    );
    setBomb((prev) => ({
      ...prev,
      iconBlobUrl: blobUrl,
    }));
  }

  return (
    <div>
      <input
        name="file"
        ref={inputFileRef}
        type="file"
        accept=".png,.jpg,.jpeg"
        required
        onChange={uploadFile}
        className="hidden"
      />
      <Button onClick={() => inputFileRef.current?.click()}>Upload</Button>
    </div>
  );
}
