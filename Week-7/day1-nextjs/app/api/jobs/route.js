import { NextResponse } from 'next/server';

export async function GET() {
    
    const mockJobs = [
        { id: 1, title: "Frontend Developer", company: "TechCorp" },
        { id: 2, title: "Backend Engineer", company: "DataSystems" }
    ];

    return NextResponse.json(
        { 
            success: true, 
            message: "Welcome to the IIAP API!",
            data: mockJobs 
        }, 
        { 
            status: 200,
            headers: { 'Content-Type': 'application/json' }
        }
    );
}