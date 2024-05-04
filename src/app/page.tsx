import '~/features/home/styles/index.css';

import { useId } from 'react';

import { Discord, Fediverse, Matrix, Telegram } from '~/common/icons';

export default function Page() {
  const telegramLabel = useId();
  const fediverseLabel = useId();
  const matrixLabel = useId();
  const discordLabel = useId();

  return (
    <>
      <main>
        <div>
          <h1>
            Hi there,
            <br />
            <span>
              I&apos;m <span>Naiara ♡</span>,
            </span>
            <br />a programmer girl based in Argentina
          </h1>
          <img src="/images/drawing.avif" alt="" />
        </div>
      </main>

      <footer>
        <ul>
          <li>
            <a
              href="https://t.me/naipotato"
              rel="me noreferrer"
              aria-labelledby={telegramLabel}
            >
              <Telegram />
            </a>
            <div role="tooltip" id={telegramLabel}>
              Telegram
            </div>
          </li>
          <li>
            <a
              href="https://transfem.social/@naipotato"
              rel="me noreferrer"
              aria-labelledby={fediverseLabel}
            >
              <Fediverse />
            </a>
            <div role="tooltip" id={fediverseLabel}>
              Fediverse
            </div>
          </li>
          <li>
            <a
              href="https://matrix.to/#/@naipotato:catgirl.cloud"
              rel="me noreferrer"
              aria-labelledby={matrixLabel}
            >
              <Matrix />
            </a>
            <div role="tooltip" id={matrixLabel}>
              Matrix
            </div>
          </li>
          <li>
            <a
              href="https://discord.com/users/441308128387006467"
              rel="me noreferrer"
              aria-labelledby={discordLabel}
            >
              <Discord />
            </a>
            <div role="tooltip" id={discordLabel}>
              Discord
            </div>
          </li>
        </ul>

        <p>
          © 2024 Naiara Gomez Castro
          <br />
          Powered by{' '}
          <a href="https://nextjs.org" rel="noreferrer">
            <b>Next.js</b>
          </a>{' '}
          <b>·</b> Hosted on{' '}
          <a href="https://pages.github.com/" rel="noreferrer">
            <b>GitHub Pages</b>
          </a>
        </p>
      </footer>
    </>
  );
}
