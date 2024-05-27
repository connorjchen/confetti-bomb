import { put } from "@vercel/blob";
import { NextResponse } from "next/server";
import { ErrorResponse, SuccessResponse } from "../utils";

export async function POST(request: Request): Promise<NextResponse> {
  const { searchParams } = new URL(request.url);
  const bombId = searchParams.get("bombId");
  const uploadType = searchParams.get("uploadType");
  const fileName = searchParams.get("fileName");
  const file = request.body;
  if (!file || !bombId || !uploadType || !fileName) {
    return ErrorResponse("Missing one of following: file, bombId, uploadType, fileName");
  }

  // TODO(connor): store this data somewhere in prisma and attachit to bomb object depending on the upload type
  const blob = await put(fileName, file, {
    access: "public",
  });

  return SuccessResponse(blob.url);
}
