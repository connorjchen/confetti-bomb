import { put } from "@vercel/blob";
import { NextResponse } from "next/server";
import { ErrorResponse, SuccessResponse } from "../utils";
import { UploadType } from "@/components/FileUpload";
import prisma from "@/lib/prisma";

export async function POST(request: Request): Promise<NextResponse> {
  const { searchParams } = new URL(request.url);
  const bombId = searchParams.get("bombId");
  const uploadType = searchParams.get("uploadType");
  const fileName = searchParams.get("fileName");
  const file = request.body;
  if (!file || !bombId || !uploadType || !fileName) {
    return ErrorResponse("Missing one of following: file, bombId, uploadType, fileName");
  }

  const blob = await put(fileName, file, {
    access: "public",
  });

  if (uploadType === UploadType.LOGO) {
    await prisma.bomb.update({
      where: {
        id: bombId,
      },
      data: {
        iconBlobUrl: blob.url,
      },
    });
  }

  return SuccessResponse(blob.url);
}
