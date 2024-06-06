import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

import { updateSession } from "@/services/supabase/middleware";
import { createClient } from "@/services/supabase/server";

export async function middleware(req: NextRequest) {
  const res = NextResponse.next();
  const pathname = req.nextUrl.pathname;
  const supabase = createClient();

  await updateSession(req);

  const {
    data: { user },
  } = await supabase.auth.getUser();

  /*
   Redirect the user to /login if:
      1. supabase.auth.getUser() returned null (NOT logged in)
      2. NOT already in an /login
  */
  if (!user && pathname !== "/login")
    return NextResponse.redirect(new URL("/login", req.url));

  /*
   Redirect the user to / if:
      1. supabase.auth.getUser() returned the user (IS logged in)
      2. IS in the /login route
  */
  if (user && pathname === "/login")
    return NextResponse.redirect(new URL("/", req.url));

  return res;
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
