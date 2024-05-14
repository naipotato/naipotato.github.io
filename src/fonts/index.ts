import localFont from 'next/font/local';

const inter = localFont({
  src: [
    {
      path: './inter-variable.woff2',
      weight: '100 900',
      style: 'normal',
    },
    {
      path: './inter-variable-italic.woff2',
      weight: '100 900',
      style: 'italic',
    },
  ],
  display: 'swap',
  fallback: ['sans-serif'],
  variable: '--font-inter',
});

const shantellSans = localFont({
  src: './shantell-sans.woff2',
  weight: '100 900',
  style: 'normal',
  display: 'swap',
  fallback: ['sans-serif'],
  variable: '--font-shantell-sans',
});

export { inter, shantellSans };
