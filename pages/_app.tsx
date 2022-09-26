import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Seo from '../components/seo'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Seo />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
