import React from 'react'
import './globals.css'
import './tweakcnshacdn.css'
import { ThemeProvider } from 'next-themes'

export const metadata = {
  description: 'A blank template using Payload in a Next.js app.',
  title: 'Payload Blank Template',
}

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props

  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" defaultTheme="dark">
          <main className="w-svw h-svh overflow-hidden">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  )
}
