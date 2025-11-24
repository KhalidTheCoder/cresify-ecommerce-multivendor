/**
 * @file AllProvider.jsx
 * @description Root application provider wrapping the tree with Redux, NextAuth Session, and i18n providers.
 * @component AllProvider
 */

'use client';

import { SessionProvider } from 'next-auth/react';
import LanguageProvider from './LanguageProvider';
import { Provider } from 'react-redux';
import { store } from '@/store/store';

export default function AllProvider({ children }) {
  return (
    <Provider store={store}>
      <SessionProvider>
        <LanguageProvider>{children}</LanguageProvider>
      </SessionProvider>
    </Provider>
  );
}
