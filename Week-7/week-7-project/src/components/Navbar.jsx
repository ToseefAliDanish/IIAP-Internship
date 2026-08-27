import Link from 'next/link';

const Navbar = () => {
  return (
    <nav style={{ background: '#0F172A', padding: '20px 40px', color: 'white', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <h2 style={{ margin: 0, color: '#38BDF8', letterSpacing: '1px' }}>IIAP Job Portal</h2>
      <div style={{ display: 'flex', gap: '20px' }}>
        <Link href="/" style={{ color: 'white', textDecoration: 'none', fontWeight: 'bold' }}>Home</Link>
        <Link href="/jobs" style={{ color: '#38BDF8', textDecoration: 'none', fontWeight: 'bold' }}>Job Board</Link>
      </div>
    </nav>
  );
};

export default Navbar;