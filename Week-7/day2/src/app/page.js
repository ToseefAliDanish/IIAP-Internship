import Link from 'next/link';

export default function Home() {
  return (
    <main style={{ padding: '40px', fontFamily: 'sans-serif' }}>
      <h1>Welcome to IIAP</h1>
      <p>The number one job board for Full-Stack Engineers.</p>
      
      <Link href="/jobs" style={{ color: 'blue', textDecoration: 'underline' }}>
        View the Job Board →
      </Link>
    </main>
  );
}