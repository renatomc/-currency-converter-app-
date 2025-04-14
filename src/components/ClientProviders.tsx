'use client';

import { ReactNode } from 'react';
import { PersistGate } from 'redux-persist/integration/react';
import { ThemeProvider } from '@/context/ThemeContext';
import { store, persistor } from '@/store';
import { Provider } from 'react-redux';

export const ClientProviders = ({ children }: { children: ReactNode }) => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ThemeProvider>{children}</ThemeProvider>
      </PersistGate>
    </Provider>
  );
};
