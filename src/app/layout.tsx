import '~/styles/shared.css';

import type { Metadata, Viewport } from 'next';
import type { ReactNode } from 'react';

export interface RootLayoutProps {
  children: ReactNode[];
}

export const metadata: Metadata = {
  metadataBase: new URL('https://naiara.one'),
};

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
