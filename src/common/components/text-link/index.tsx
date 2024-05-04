import NextLink from 'next/link';
import type { ReactNode } from 'react';

import styles from './styles.module.css';

interface Props {
  children: ReactNode;
  rel: string;
  to: string;
}

export default function TextLink(props: Props) {
  const { children, rel, to } = props;

  return (
    <NextLink className={styles['text-link']} href={to} rel={rel}>
      {children}
    </NextLink>
  );
}
