import { NextResponse } from "next/server";

export async function GET(req: Request) {
  // 1. Redirect the user directly to the secure page
  const response = NextResponse.redirect(new URL("/secure", req.url));
  
  // 2. Attach a secure HTTP-only cookie to the response
  response.cookies.set("iiap_token", "active_session", { httpOnly: true });
  
  return response;
}