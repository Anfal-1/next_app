'use client'

import type React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import { Navbar } from '@/components/shared/navbar'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { useLanguage } from '@/contexts/language-context'
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '@/components/ui/accordion'

const faqList = [
  {
    question: 'ما أنواع الصور المدعومة؟',
    answer: 'ندعم صور الأقمار الصناعية بصيغة .tif وصور الدرون عالية الدقة.',
    value: 'faq-1',
  },
  {
    question: 'هل التقارير مدعومة باللغة العربية؟',
    answer: 'نعم، يمكنك توليد تقارير ذكية بالعربية والإنجليزية.',
    value: 'faq-2',
  },
]

export function Homepage() {
  const { t, language } = useLanguage()

  return (
    <div className="flex min-h-screen flex-col bg-green-50 dark:bg-gray-900">
      <Navbar />

      <main className="flex-1">
        {/* Section: Hero */}
        <section className="bg-white py-20 px-4">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="w-full md:w-1/2 text-center">
              <h1 className="text-lg md:text-4xl font-bold text-[#5C4033] mb-4">
                E-Trek
              </h1>
              <p className="text-xs md:text-2xl mb-6 text-gray-800">
                {t('home.hero.title')}
              </p>
              <Button
                asChild
                className="bg-amber-900 text-white hover:bg-amber-800 transition"
              >
                <Link href="/faq">{t('home.hero.learnMoreBtn')}</Link>
              </Button>
            </div>

            <div className="w-full md:w-1/2 flex justify-center">
              <Image
                src="/images/homeimage1.jpg"
                alt="E-Trek cover"
                width={400}
                height={400}
                className="rounded-md select-none pointer-events-none"
              />
            </div>
          </div>
        </section>

        {/* Section: About */}
        <section className="bg-white py-20 px-6">
          <Image
            src="/images/about.jpg"
            alt="عن المشروع"
            width={1200}
            height={400}
            className="w-full h-auto object-cover rounded-md select-none"
          />
        </section>

        {/* Section: AI Usage */}
        <section className="bg-white py-20 px-6">
          <h2 className="text-2xl font-bold text-center text-[#5C4033] mb-8">
            كيف يستخدم E-Trek الذكاء الاصطناعي لمكافحة التصحر؟
          </h2>
          <Image
            src="/images/ai.jpg"
            alt="الذكاء الاصطناعي"
            width={1200}
            height={400}
            className="w-full h-auto object-cover rounded-md select-none"
          />
        </section>

        {/* Section: Features */}
        <section className="bg-white py-20 px-6">
          <h2 className="text-2xl font-bold text-center text-[#5C4033] mb-8">
            ماذا يميزنا؟
          </h2>
          <div className="flex flex-col gap-8">
            {[
              'Feature11.jpg',
              'Feature22.jpg',
              'Feature33.jpg',
              'Feature44.jpg',
            ].map((img, idx) => (
              <Image
                key={idx}
                src={`/images/${img}`}
                alt={`ميزة ${idx + 1}`}
                width={1200}
                height={500}
                className="w-full h-auto object-cover rounded-md select-none"
              />
            ))}
          </div>
        </section>

        {/* Section: Dashboard Demo */}
        <section className="relative w-full h-[600px]">
          <Image
            src="/images/laptop.png"
            alt="E-Trek Dashboard Mockup"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center bg-black/50">
            <Button
              asChild
              size="lg"
              className="bg-transparent border border-white text-white hover:bg-white/10"
            >
              <Link href="/dashboard">{t('home.hero.dashboardBtn')}</Link>
            </Button>
          </div>
        </section>

        {/* Section: FAQ */}
        <section id="faq" className="container py-24 sm:py-32">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            الأسئلة{' '}
            <span className="bg-gradient-to-b from-green-400/60 to-green-700 text-transparent bg-clip-text">
              الشائعة
            </span>
          </h2>

          <Accordion type="single" collapsible className="w-full">
            {faqList.map(({ question, answer, value }) => (
              <AccordionItem key={value} value={value}>
                <AccordionTrigger className="text-right">
                  {question}
                </AccordionTrigger>
                <AccordionContent className="text-right">
                  {answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <h3 className="font-medium mt-4 text-center">
            هل لديك سؤال آخر؟{' '}
            <a
              href="https://wa.me/966583984034"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-600 hover:underline"
            >
              تواصل معنا
            </a>
          </h3>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white dark:bg-gray-800 border-t border-green-100 dark:border-gray-700 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Logo Section */}
            <div>
              <div className="flex items-center gap-2 mb-4">
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
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                {t('footer.description')}
              </p>
            </div>

            {/* Navigation Links */}
            <div>
              <h3 className="font-medium text-green-800 dark:text-green-400 mb-4">
                {t('footer.navigation')}
              </h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/"
                    className="text-sm text-gray-600 hover:text-green-700 dark:text-gray-300"
                  >
                    {t('nav.home')}
                  </Link>
                </li>
                <li>
                  <Link
                    href="/dashboard"
                    className="text-sm text-gray-600 hover:text-green-700 dark:text-gray-300"
                  >
                    {t('nav.dashboard')}
                  </Link>
                </li>
                <li>
                  <Link
                    href="/faq"
                    className="text-sm text-gray-600 hover:text-green-700 dark:text-gray-300"
                  >
                    {t('nav.faq')}
                  </Link>
                </li>
              </ul>
            </div>

            {/* Resources Links */}
            <div>
              <h3 className="font-medium text-green-800 dark:text-green-400 mb-4">
                {t('footer.resources')}
              </h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="#"
                    className="text-sm text-gray-600 hover:text-green-700 dark:text-gray-300"
                  >
                    {t('footer.documentation')}
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-sm text-gray-600 hover:text-green-700 dark:text-gray-300"
                  >
                    {t('footer.apiReference')}
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-sm text-gray-600 hover:text-green-700 dark:text-gray-300"
                  >
                    {t('footer.dataPolicy')}
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Link */}
            <div>
              <a
                href="mailto:alrashidiiabrar@gmail.com"
                className="text-green-700 hover:underline font-medium"
              >
                {t('footer.link')}
              </a>
            </div>
          </div>

          <div className="border-t border-green-100 dark:border-gray-700 mt-8 pt-8 text-center">
            <p className="text-sm text-gray-500 dark:text-gray-400">
              &copy; {new Date().getFullYear()} E-Trek. {t('footer.copyright')}
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
