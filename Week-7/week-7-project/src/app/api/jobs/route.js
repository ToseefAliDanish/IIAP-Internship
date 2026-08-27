import { NextResponse } from 'next/server';
import { mockJobs } from '@/lib/db'; 

export async function GET() {
    return NextResponse.json({ success: true, data: mockJobs }, { status: 200 });
}

export async function POST(request) {
    try {
        const body = await request.json();
        const { title, company } = body;

        if (!title || !company) {
            return NextResponse.json({ success: false, error: "Title and company required." }, { status: 400 });
        }

        const newJob = { id: Date.now(), title, company };
        mockJobs.push(newJob);

        return NextResponse.json({ success: true, data: newJob }, { status: 201 });
    } catch (error) {
        return NextResponse.json({ success: false, error: "Internal Server Error" }, { status: 500 });
    }
}