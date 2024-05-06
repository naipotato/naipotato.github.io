import '~/styles/base.css';
import '~/styles/colors.css';
import '~/styles/curves.css';
import '~/styles/fonts.css';

import type { Metadata, Viewport } from 'next';
import type { ReactNode } from 'react';

import styles from './styles.module.css';

interface Props {
  children: ReactNode[];
}

export const metadata: Metadata = {
  metadataBase: new URL('https://naiara.one'),
};

export const viewport: Viewport = {
  colorScheme: 'light dark',
};

export default function Layout(props: Props) {
  const { children } = props;

  return (
    <html lang="en">
      <body className={styles.body}>{children}</body>
    </html>
  );
}
