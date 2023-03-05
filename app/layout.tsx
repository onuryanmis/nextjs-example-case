import '@/styles/reset.scss';
import '@/styles/grid.scss';
import '@/styles/global.scss';
import { Inter } from 'next/font/google';
import React from 'react';
import Header from '@/components/Header';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
});

export const metadata = {
  title: 'Deneme Firma',
  description: 'Deneme firma açıklaması',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='tr' className={inter.className}>
    <body>
    <Header />
    <main>
      {children}
    </main>
    </body>
    </html>
  );
}
