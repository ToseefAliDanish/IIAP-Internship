import Link from 'next/link';

const Navbar = () => {
  return (
    <nav style={{ background: '#1E293B', padding: '15px 30px', color: 'white', display: 'flex', gap: '20px' }}>
      <h2 style={{ margin: 0, color: '#60A5FA' }}>IIAP Job Portal</h2>
      
      <div style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
        <Link href="/" style={{ color: 'white', textDecoration: 'none' }}>Home</Link>
        <Link href="/jobs" style={{ color: 'white', textDecoration: 'none' }}>Job Board</Link>
      </div>
    </nav>
  );
};

export default Navbar;