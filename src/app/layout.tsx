import { ReactNode } from 'react';

import type { Metadata } from "next";
import { Inter } from 'next/font/google';
import { ClientProviders } from '@/components/ClientProviders';
import { Header } from '@/components/Header';
import { MainContent } from '@/components/MainContent';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: "Currency Converter",
  description: "Desafio técnico com cadastro, tema e conversão de moedas",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
      <ClientProviders>
        <Header />
        <MainContent>
          {children}
        </MainContent>
      </ClientProviders>
      </body>
    </html>
  );
}
