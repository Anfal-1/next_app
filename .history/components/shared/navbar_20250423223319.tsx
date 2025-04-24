'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { ThemeToggle } from '@/components/theme-toggle'
import { LanguageToggle } from '@/components/language-toggle'
import { useLanguage } from '@/contexts/language-context'

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { t, language } = useLanguage()

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-green-100 bg-white/80 backdrop-blur-md dark:border-gray-800 dark:bg-gray-950/80">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-2">
            <div className="relative h-8 w-8">
              <Image
                src="/images/logo.png"
                alt={language === 'ar' ? 'شعار إي-تريك' : 'E-Trek Logo'}
                fill
                className="object-contain"
              />
            </div>
            <span className="text-xl font-bold text-green-800 dark:text-green-400">
              E-Trek
            </span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <Link
            href="/"
            className="text-sm font-medium text-gray-700 transition-colors hover:text-green-700 dark:text-gray-300 dark:hover:text-green-400"
          >
            {t('nav.home')}
          </Link>
          <Link
            href="/dashboard"
            className="text-sm font-medium text-gray-700 transition-colors hover:text-green-700 dark:text-gray-300 dark:hover:text-green-400"
          >
            {t('nav.dashboard')}
          </Link>

          <Link
            href="/faq"
            className="text-sm font-medium text-gray-700 transition-colors hover:text-green-700 dark:text-gray-300 dark:hover:text-green-400"
          >
            {t('nav.faq')}
          </Link>
        </nav>

        <div className="flex items-center gap-2">
          <div className="hidden md:flex items-center gap-2">
            <ThemeToggle />
            <LanguageToggle />
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={toggleMenu}
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {isMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-green-100 dark:border-gray-800">
          <div className="container mx-auto px-4 py-4 flex flex-col">
            <nav className="flex flex-col space-y-4 mb-6">
              <Link
                href="/"
                className="text-sm font-medium text-gray-700 transition-colors hover:text-green-700 dark:text-gray-300 dark:hover:text-green-400"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('nav.home')}
              </Link>
              <Link
                href="/dashboard"
                className="text-sm font-medium text-gray-700 transition-colors hover:text-green-700 dark:text-gray-300 dark:hover:text-green-400"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('nav.dashboard')}
              </Link>

              <Link
                href="/faq"
                className="text-sm font-medium text-gray-700 transition-colors hover:text-green-700 dark:text-gray-300 dark:hover:text-green-400"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('nav.faq')}
              </Link>
            </nav>
            <div className="flex items-center gap-2">
              <ThemeToggle />
              <LanguageToggle />
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
