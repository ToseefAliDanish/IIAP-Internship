import { NextResponse } from 'next/server';

export function middleware(request) {
    
    const urlPath = request.nextUrl.pathname;
    
    const time = new Date().toLocaleTimeString();
    console.log(`[API LOGGER] Request received at ${urlPath} at ${time}`);

        return NextResponse.next();
}

export const config = {
    matcher: '/api/:path*',
};