import { ReactNode } from 'react';

import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { ThemeProvider } from '@/context/ThemeContext'; 
import { store, persistor } from '@/store';


import type { Metadata } from "next";
import { Inter } from 'next/font/google';

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
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <ThemeProvider>
            {children}
          </ThemeProvider>
        </PersistGate>
      </Provider>
      </body>
    </html>
  );
}
