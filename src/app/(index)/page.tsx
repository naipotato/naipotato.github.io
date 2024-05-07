import type { Metadata } from 'next';

import { IconLink, TextLink } from '~/components';
import { DiscordIcon, FediverseIcon, MatrixIcon, TelegramIcon } from '~/icons';

import styles from './styles.module.css';

export const metadata: Metadata = {
  title: 'Naiara',
  description: 'A programmer girl based in Argentina',
  openGraph: {
    title: 'Naiara',
    description: 'A programmer girl based in Argentina',
    url: 'https://naiara.one',
    siteName: 'Naiara',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Naiara',
    description: 'A programmer girl based in Argentina',
  },
};

export default function Page() {
  return (
    <>
      <main className={styles['index-content']}>
        <div>
          <h1>
            Hi there,
            <br />
            <span>
              I&apos;m{' '}
              <span>
                Naiara <span aria-hidden="true">♡</span>
              </span>
              ,
            </span>
            <br />a programmer girl based in Argentina
          </h1>
          <img src="/images/drawing.avif" alt="" />
        </div>
      </main>

      <footer className={styles['index-footer']}>
        <ul>
          <li>
            <IconLink
              to="https://t.me/naipotato"
              label="Telegram"
              rel="me noreferrer"
            >
              <TelegramIcon />
            </IconLink>
          </li>
          <li>
            <IconLink
              to="https://transfem.social/@naipotato"
              label="Fediverse"
              rel="me noreferrer"
            >
              <FediverseIcon />
            </IconLink>
          </li>
          <li>
            <IconLink
              to="https://matrix.to/#/@naipotato:catgirl.cloud"
              label="Matrix"
              rel="me noreferrer"
            >
              <MatrixIcon />
            </IconLink>
          </li>
          <li>
            <IconLink
              to="https://discord.com/users/441308128387006467"
              label="Discord"
              rel="me noreferrer"
            >
              <DiscordIcon />
            </IconLink>
          </li>
        </ul>

        <div>
          <p>© 2024 Naiara Gomez Castro</p>
          <div>
            <p>
              Powered by{' '}
              <TextLink to="https://nextjs.org" rel="noreferrer">
                Next.js
              </TextLink>
            </p>
            <div aria-hidden="true">·</div>
            <p>
              Hosted on{' '}
              <TextLink to="https://pages.github.com/" rel="noreferrer">
                GitHub Pages
              </TextLink>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
