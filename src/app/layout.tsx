import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '@/assets/scss/tailwind.scss';
import '@/assets/scss/style.scss';
import Navbar from '@/components/Navbar.Component';
import Footer from '@/components/Footer.Component';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Website title goes here.',
  description:
    'Website description goes here. Website description goes here. Website description goes here. Website description goes here.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' className='scroll-smooth'>
      <body className={`leading-[21px] ${inter.className}`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
