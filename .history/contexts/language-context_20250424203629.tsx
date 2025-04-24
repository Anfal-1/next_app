'use client'

import type React from 'react'
import { createContext, useContext, useState, useEffect } from 'react'
import { translations } from '../translations' // تأكد من المسار

type Language = 'ar' | 'en'

type LanguageContextType = {
  language: Language
  setLanguage: (language: Language) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>('ar')

  useEffect(() => {
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr'
    document.documentElement.lang = language
  }, [language])

  const setLanguage = (newLanguage: Language) => {
    setLanguageState(newLanguage)
    localStorage.setItem('language', newLanguage)
  }

  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') as Language
    if (savedLanguage === 'ar' || savedLanguage === 'en') {
      setLanguageState(savedLanguage)
    }
  }, [])

  const t = (key: string): string => {
    return translations[language]?.[key] ?? key
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}
