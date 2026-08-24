import Link from 'next/link';

export default function JobsPage() {
  return (
    <main style={{ padding: '40px', fontFamily: 'sans-serif' }}>
      <h1>Active Job Postings</h1>
      
      <div style={{ border: '1px solid #ccc', padding: '15px', margin: '20px 0', borderRadius: '8px' }}>
        <h2>Frontend Developer</h2>
        <p>TechCorp - Remote</p>
      </div>

      <Link href="/" style={{ color: 'blue', textDecoration: 'underline' }}>
        ← Back to Home
      </Link>
    </main>
  );
}