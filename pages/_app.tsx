import '../styles/globals.css'
import { createTheme, ThemeProvider } from '@mui/material'
import type { AppProps } from 'next/app'
import Seo from '../components/seo'

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 768,
      lg: 1025,
      xl: 1536,
    },
  },
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
