import '@/components/ui/global.css';
import { inter } from '@/components/ui/fonts';

import { Metadata } from 'next';
 
export const metadata: Metadata = {
  title: 'Parzival Dashboard',
  description: 'Personal Dashboard for Parzival',
  metadataBase: new URL('https://parzival-dash.vercel.app/'),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased scroll-smooth dark:bg-slate-950 dark:text-white bg-white text-slate-950`}>{children}</body>
    </html>
  );
}
