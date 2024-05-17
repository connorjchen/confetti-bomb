import { redirect } from "next/navigation";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const body = await request.json();
  // hook up to prisma orm, nextauth, vercel db (neon) - deploy on vercel
  if (body.username === "admin" && body.password === "password") {
    redirect("/home");
  } else {
    return NextResponse.json(
      { message: "Username or password incorrect" },
      { status: 400 }
    );
  }
}
