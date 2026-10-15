import type { ReactNode } from 'react';
export const metadata = { title: 'Week 12 Lab' };
export default function Layout({children}:{children:ReactNode}) { return <html lang="en"><body style={{fontFamily:'Arial',maxWidth:800,margin:'40px auto',padding:16}}>{children}</body></html>; }
