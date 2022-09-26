import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Seo from '../components/seo'
import { createTheme, ThemeProvider } from '@mui/material'

const theme = createTheme({
  
})

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Seo />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
