"use client";
import { useSession } from "next-auth/react";
import { signIn, signOut } from "@/auth/utils";
import Button from "../Button";

export default function AuthButton() {
  const session = useSession();

  return session?.data?.user ? (
    <Button onClick={async () => await signOut()}>Sign Out</Button>
  ) : (
    <Button onClick={async () => await signIn()}>Sign In</Button>
  );
}
