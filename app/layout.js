'use client'
import { Work_Sans } from 'next/font/google'
import './globals.css'
import './token.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { ThemeProvider } from '@mui/material/styles';
import { theme } from '../utils/themeSettings'
import Script from 'next/script'
import { GoogleTagManager } from '@next/third-parties/google'

// fonts settings

const work_sans = Work_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-work-sans',
  preload: true
})

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${work_sans.variable}`}>
      <GoogleTagManager gtmId="GTM-KM9QSZJB" />
      <meta name="google-site-verification" content="nhl6S-17MLASKBDxzyKV0cJbyIEGmnh3mAinNPPrV4w" />

      <body >
        <ThemeProvider theme={theme}>
          {children}
        </ThemeProvider>
      </body>
    </html >
  )
}
