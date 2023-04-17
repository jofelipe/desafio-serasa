import type { AppProps } from 'next/app';
import { Roboto } from 'next/font/google';

import '../styles/global.css';

const inter = Roboto({ subsets: ['latin'], weight: ['400', '700'] });

export default function App({ Component, pageProps }: AppProps) {
  return <Component className={inter.className} {...pageProps} />;
}
