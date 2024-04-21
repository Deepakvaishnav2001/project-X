"use client"
import React from 'react'
import { useMediaQuery } from '@mui/material'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)')
  const theme = createTheme({
    palette: {
      mode: prefersDarkMode ? 'dark' : 'light',
    },
  })

  return (
    <html lang="en">
      <body>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}