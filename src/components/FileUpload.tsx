"use client";

import { postFetch } from "@/app/api/utils";
import { useState, useRef } from "react";
import Button from "./Button";

export default function FileUpload() {
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

    const response = await postFetch(
      `/api/upload?bombId=${123}&uploadType=${"logo"}&fileName=${file.name}`,
      file,
      false
    );
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
