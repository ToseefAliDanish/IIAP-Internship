import Navbar from '../components/Navbar'; 

export const metadata = {
  title: 'Pakistan Airports Authority',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, backgroundColor: '#F8FAFC', fontFamily: 'Segoe UI, sans-serif' }}>
        <Navbar />
        <div style={{ maxWidth: '900px', margin: '0 auto', padding: '40px 20px' }}>
            {children}
        </div>
      </body>
    </html>
  );
}