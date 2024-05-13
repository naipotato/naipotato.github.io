import type { Metadata } from 'next';

import { TextLink } from '~/components';

import styles from './styles.module.css';

export const metadata: Metadata = {
  title: 'Oops! 😓 | Naiara',
};

export default function NotFound() {
  return (
    <main className={styles['root-not-found']}>
      <div>
        <h1>Oops! 😓</h1>
        <p>What you were looking for wasn&apos;t found</p>
      </div>

      <TextLink to="/">Return home</TextLink>
    </main>
  );
}
