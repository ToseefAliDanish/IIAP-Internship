import { NextResponse } from 'next/server';
import { mockJobs } from '@/lib/db';

export async function GET() {
    return NextResponse.json(
        { 
            success: true, 
            message: "Welcome to the IIAP API!",
            count: mockJobs.length,
            data: mockJobs 
        }, 
        { 
            status: 200,
            headers: { 'Content-Type': 'application/json' }
        }
    );
}

export async function POST(request) {
    
    try {
        const body = await request.json();
        const { title, company } = body;
        if (!title || !company) {
            return NextResponse.json(
                { success: false, error: "Validation failed: Title and company are required." },
                { status: 400 }
            );
        }

        const newJob = { id: Date.now(), title, company };

        return NextResponse.json(
            { success: true, message: "Job successfully posted!", data: newJob },
            { status: 201 }
        );

    } catch (error) {
        console.error("API Crash Prevented:", error.message);
        return NextResponse.json(
            { success: false, error: "Internal Server Error. Please try again later." },
            { status: 500 }
        );
    }
}