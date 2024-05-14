import '~/styles/base.css';
import '~/styles/colors.css';
import '~/styles/curves.css';

import { clsx } from 'clsx';
import type { Metadata, Viewport } from 'next';
import type { ReactNode } from 'react';

import { inter, shantellSans } from '~/fonts';

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
    <html lang="en" className={clsx(inter.variable, shantellSans.variable)}>
      <body className={styles['root-layout']}>{children}</body>
    </html>
  );
}
