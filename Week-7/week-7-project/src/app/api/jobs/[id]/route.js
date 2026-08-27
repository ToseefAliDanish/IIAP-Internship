import { NextResponse } from 'next/server';
import { mockJobs } from '@/lib/db'; 

export async function DELETE(request, { params }) {
    try {
        // Next.js 15 Requirement: Await the params!
        const resolvedParams = await params;
        const targetId = Number(resolvedParams.id);
        
        const jobIndex = mockJobs.findIndex(j => j.id === targetId);

        if (jobIndex === -1) {
            return NextResponse.json({ success: false, error: "Job not found" }, { status: 404 });
        }

        mockJobs.splice(jobIndex, 1);
        return NextResponse.json({ success: true, message: "Job deleted" }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ success: false, error: "Server Error" }, { status: 500 });
    }
}