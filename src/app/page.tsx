import '~/features/home/styles/index.css';

import { IconLink } from '~/common/components';
import {
  DiscordIcon,
  FediverseIcon,
  MatrixIcon,
  TelegramIcon,
} from '~/common/icons';

export default function Page() {
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
              <a href="https://nextjs.org" rel="noreferrer">
                <b>Next.js</b>
              </a>
            </p>
            <div aria-hidden="true">·</div>
            <p>
              Hosted on{' '}
              <a href="https://pages.github.com/" rel="noreferrer">
                <b>GitHub Pages</b>
              </a>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
