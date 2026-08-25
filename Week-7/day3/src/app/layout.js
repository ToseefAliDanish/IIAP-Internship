import Navbar from '../components/Navbar';

export const metadata = {
  title: 'TechHire | Tech Job Board',
  description: 'Find your next full-stack role.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, backgroundColor: '#F8FAFC' }}>
        
        <Navbar />
        
        {children}
        
      </body>
    </html>
  );
}