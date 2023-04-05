import '@/styles/globals.css'
import type { AppProps } from 'next/app'
// import localFont from 'next/font/'

export default function App({ Component, pageProps }: AppProps) {
  return (
        <Component {...pageProps} />
  )
}
