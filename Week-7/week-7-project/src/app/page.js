import Link from 'next/link';

export default function Home() {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1 style={{ fontSize: '3rem', color: '#0F172A', marginBottom: '10px' }}>Welcome to Islamabad Airport</h1>
      <p style={{ color: '#64748B', fontSize: '1.2rem', marginBottom: '30px' }}>Here You Explore All Latest Jobs at IIAP.</p>
      
      <Link href="/jobs" style={{ background: '#38BDF8', color: 'white', padding: '12px 25px', borderRadius: '6px', textDecoration: 'none', fontWeight: 'bold' }}>
        Enter Dashboard
      </Link>
    </div>
  );
}