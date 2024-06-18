import { NextResponse } from "next/server";
import { auth, BASE_PATH } from "@/auth";

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};

// TODO(connor): how are api endpoints protected from unauthenticated users?
// Require authentication for all routes except /api, /_next/static, /_next/image, /favicon.ico, /view, and /.
export default auth((req) => {
  const reqUrl = new URL(req.url);
  if (!req.auth && reqUrl?.pathname !== "/" && !reqUrl.pathname.startsWith("/view")) {
    return NextResponse.redirect(
      new URL(`${BASE_PATH}/signin?callbackUrl=${encodeURIComponent(reqUrl?.pathname)}`, req.url)
    );
  }
});
