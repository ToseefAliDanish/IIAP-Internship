import { NextResponse } from 'next/server';

export function middleware(request) {
    const urlPath = request.nextUrl.pathname;
    const method = request.method;
    const time = new Date().toLocaleTimeString();
    
    console.log(`[API TRAFFIC] ${method} request to ${urlPath} at ${time}`);
    
    return NextResponse.next();
}

export const config = {
    matcher: '/api/:path*',
};