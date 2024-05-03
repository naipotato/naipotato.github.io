import '~/common/styles/shared.css';

import type { Viewport } from 'next';
import type { ReactNode } from 'react';

export interface RootLayoutProps {
  children: ReactNode[];
}

export const viewport: Viewport = {
  colorScheme: 'light dark',
};

export default function RootLayout(props: RootLayoutProps) {
  const { children } = props;

  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
