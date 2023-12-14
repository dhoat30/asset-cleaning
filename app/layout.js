'use client'
import { Inter } from 'next/font/google'
import './globals.css'
import './token.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { ThemeProvider } from '@mui/material/styles';
import { theme } from '../utils/themeSettings'
import Script from 'next/script'
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <Script id="google-analytics" strategy="lazyOnload" src="https://www.googletagmanager.com/gtag/js?id=G-5C66G9MTCY"> </Script>
        <Script id="google-analtyics-datalayer" strategy="lazyOnload">
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
        
          gtag('config', 'G-5C66G9MTCY');
        `}
        </Script>
      </head>
      <body >
        <ThemeProvider theme={theme}>
          {children}
        </ThemeProvider>
      </body>
    </html >
  )
}
