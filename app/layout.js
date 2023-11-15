'use client'
import { Inter } from 'next/font/google'
import './globals.css'
import './token.css'


import { ThemeProvider } from '@mui/material/styles';
import { theme } from '../utils/themeSettings'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body >
        <ThemeProvider theme={theme}>
          {children}
        </ThemeProvider>
      </body>
    </html >
  )
}
