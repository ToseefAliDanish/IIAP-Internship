import { NextResponse, NextRequest } from 'next/server';

export function middleware(req: NextRequest) {
  // If user tries to access /secure but has no 'iiap_token' cookie, redirect to /login
  if (req.nextUrl.pathname === '/secure' && !req.cookies.has('iiap_token')) {
    return NextResponse.redirect(new URL('/login', req.url));
  }
}