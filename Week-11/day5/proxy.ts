import { NextResponse, NextRequest } from 'next/server';

export function proxy(req: NextRequest) {
  // Protect all /tasks routes. Redirect to home if no cookie.
  if (req.nextUrl.pathname.startsWith('/tasks') && !req.cookies.has('iiap_session')) {
    return NextResponse.redirect(new URL('/', req.url));
  }
}