import { NextResponse } from 'next/server';
import { mockJobs } from '@/lib/db'; 

// 1. READ SINGLE
export async function GET(request, { params }) {
    // FIX: Await the params object first!
    const resolvedParams = await params; 
    const targetId = Number(resolvedParams.id);
    
    const job = mockJobs.find(j => j.id === targetId);

    if (!job) {
        return NextResponse.json({ success: false, error: "Job not found" }, { status: 404 });
    }

    return NextResponse.json({ success: true, data: job }, { status: 200 });
}

// 2. UPDATE
export async function PUT(request, { params }) {
    try {
        // FIX: Await the params object first!
        const resolvedParams = await params;
        const targetId = Number(resolvedParams.id);
        
        const body = await request.json();
        const jobIndex = mockJobs.findIndex(j => j.id === targetId);

        if (jobIndex === -1) {
            return NextResponse.json({ success: false, error: "Job not found" }, { status: 404 });
        }

        mockJobs[jobIndex] = { ...mockJobs[jobIndex], ...body };
        return NextResponse.json({ success: true, message: "Job updated", data: mockJobs[jobIndex] }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ success: false, error: "Invalid request data" }, { status: 400 });
    }
}

// 3. DELETE
export async function DELETE(request, { params }) {
    // FIX: Await the params object first!
    const resolvedParams = await params;
    const targetId = Number(resolvedParams.id);
    
    const jobIndex = mockJobs.findIndex(j => j.id === targetId);

    if (jobIndex === -1) {
        return NextResponse.json({ success: false, error: "Job not found" }, { status: 404 });
    }

    mockJobs.splice(jobIndex, 1);
    return NextResponse.json({ success: true, message: "Job deleted successfully" }, { status: 200 });
}