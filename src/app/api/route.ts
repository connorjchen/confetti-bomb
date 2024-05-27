import { NextResponse } from "next/server";
import { SuccessResponse } from "./utils";

export async function GET(): Promise<NextResponse> {
  return SuccessResponse({ message: "Hello, World!" });
}
