import NextLink from 'next/link';
import { type ReactNode, useId } from 'react';

import styles from './styles.module.css';

interface Props {
  children: ReactNode;
  label: string;
  rel: string;
  to: string;
}

export default function IconLink(props: Props) {
  const { children, label, rel, to } = props;

  const labelId = useId();

  return (
    <>
      <NextLink
        className={styles['icon-link']}
        href={to}
        rel={rel}
        aria-labelledby={labelId}
      >
        {children}
      </NextLink>
      <div id={labelId} role="tooltip">
        {label}
      </div>
    </>
  );
}
