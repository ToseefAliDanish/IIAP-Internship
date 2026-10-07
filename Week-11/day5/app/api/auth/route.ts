import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const response = NextResponse.redirect(new URL("/tasks", req.url));
  // Issue the cookie to bypass the proxy.ts middleware
  response.cookies.set("iiap_session", "active_user", { httpOnly: true });
  return response;
}