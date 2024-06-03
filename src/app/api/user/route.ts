import { NextResponse } from "next/server";
import { SuccessResponse } from "../utils";
import { auth } from "@/auth";

export const GET = auth(async ({ auth }): Promise<NextResponse> => {
  console.log(auth?.user);
  // TODO(connor): not used but good example to get auth in backned endpoint
  // TODO(connor): get user from db and return it here or create one if it doesn't exist

  return SuccessResponse("hi");
});
