import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';

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
      <body  className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
