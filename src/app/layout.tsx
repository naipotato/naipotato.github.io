import '~/common/styles/shared.css';

import type { Metadata, Viewport } from 'next';
import type { ReactNode } from 'react';

export interface RootLayoutProps {
  children: ReactNode[];
}

export const metadata: Metadata = {
  metadataBase: new URL('https://naiara.one'),
  title: 'Naiara 💖️',
  description: 'A programmer girl based in Argentina',
  openGraph: {
    title: 'Naiara 💖️',
    description: 'A programmer girl based in Argentina',
    url: 'https://naiara.one',
    siteName: 'Naiara 💖️',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Naiara 💖️',
    description: 'A programmer girl based in Argentina',
  },
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
