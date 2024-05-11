import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '@/assets/styles/main.scss';

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
});

export const metadata: Metadata = {
  title: 'Vantela | Home',
  description: 'E-Commerce App',
  icons: './favicon/vantela.svg',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
