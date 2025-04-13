import type { Metadata } from "next";
import { Inter } from 'next/font/google';
// import { Providers } from '@/store/providers';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: "Currency Converter",
  description: "Desafio técnico com cadastro, tema e conversão de moedas",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
      {/* <Providers> */}
          {children}
        {/* </Providers> */}
      </body>
    </html>
  );
}
