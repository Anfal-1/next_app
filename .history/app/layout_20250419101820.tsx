import type React from 'react'
import type { Metadata } from 'next'
const cairo = {
  className: 'font-cairo',
}
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import { LanguageProvider } from '@/contexts/language-context'
import { Toaster } from '@/components/ui/toaster'

const cairo = Cairo({ subsets: ['arabic'] })

export const metadata: Metadata = {
  title: 'E-Trek | Environmental Monitoring System for Al-Qassim Region',
  description:
    'Dashboard for monitoring and analyzing environmental data in Al-Qassim region',
  generator: 'v0.dev',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html suppressHydrationWarning>
      <body className={cairo.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <LanguageProvider>
            {children}
            <Toaster />
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}

import './globals.css'
