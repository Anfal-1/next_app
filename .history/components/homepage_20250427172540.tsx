'use client'

import type React from 'react'

import {
  ArrowRight,
  BarChart3,
  Globe,
  Leaf,
  MapPin,
  Shield,
} from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Navbar } from '@/components/shared/navbar'
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
  {
    question:
      'ما الذي يجعل E-Trek مختلفًا عن الأنظمة الجغرافية البيئية الأخرى؟',
    answer:
      'E-Trek ليس مجرد نظام عرض خرائط، بل منصة تحليل ذكية تعتمد على الذكاء الاصطناعي لتفسير البيانات البيئية من الأقمار الصناعية والطائرات المسيّرة، وتقديم تنبؤات قابلة للتنفيذ.',
    value: 'faq-3',
  },
  {
    question:
      'ما الذي يجعل E-Trek مختلفًا عن الأنظمة الجغرافية البيئية الأخرى؟',
    answer:
      'E-Trek ليس مجرد نظام عرض خرائط، بل منصة تحليل ذكية تعتمد على الذكاء الاصطناعي لتفسير البيانات البيئية من الأقمار الصناعية والطائرات المسيّرة، وتقديم تنبؤات قابلة للتنفيذ.',
    value: 'faq-4',
  },
]

export function Homepage() {
  const { t, language } = useLanguage()

  return (
    <div className="flex min-h-screen flex-col bg-green-50 dark:bg-gray-900">
      <Navbar />

      <main className="flex-1">
        <section className="bg-white py-20 px-4">
          <div className="max-w-7xl mx-auto flex flex-row items-center justify-between gap-4">
            {/* النص */}
            <div className="w-1/2 text-center">
              <h1 className="text-lg md:text-4xl font-bold text-[#5C4033] mb-4">
                E-Trek
              </h1>
              <p className="text-xs md:text-2xl mb-6 text-gray-800">
                {t('home.hero.title')}
              </p>
              <button className="bg-amber-900 text-white text-xs md:text-base py-1 px-1 md:px-6 rounded hover:bg-amber-800 transition">
                <Link href="/faq">{t('home.hero.learnMoreBtn')}</Link>
              </button>
            </div>

            {/* الصورة */}
            <div className="w-1/2 flex justify-center">
              <Image
                src="/images/homeimage1.jpg"
                alt="E-Trek cover"
                width={180}
                height={180}
                className="rounded-md select-none pointer-events-none"
              />
            </div>
          </div>
        </section>
        <section className="bg-white py-20 ">
          <div className="flex flex-col gap-10">
            {/* عنوان السكشن الأول */}

            {/* الصورة */}
            <Image
              src="/images/about.jpg"
              alt="ميزة 1"
              width={500}
              height={200}
              className="w-full h-auto object-cover select-none pointer-events-none"
            />
          </div>
        </section>
        <section className="bg-white py-20 px-6">
          <div className="flex flex-col gap-10">
            {/* عنوان السكشن الأول */}
            <h2 className="text-1xl font-bold text-center text-[#5C4033] mb-8">
              كيف E-Trek يستخدم الذكاء الإصطناعي لمكافحة التصحر
            </h2>

            {/* الصورة */}
            <Image
              src="/images/ai.jpg"
              alt="ميزة 1"
              width={500}
              height={200}
              className="w-full h-auto object-cover select-none pointer-events-none"
            />
          </div>
        </section>

        <section className="bg-white py-20 px-6">
          <div className="flex flex-col gap-10">
            {/* عنوان السكشن الثاني */}
            <h2 className="text-1xl font-bold text-center text-[#5C4033] mb-8">
              ماذا يميزنا
            </h2>

            {/* الصور */}
            <Image
              src="/images/Feature11.jpg"
              alt="ميزة 1"
              width={500}
              height={200}
              className="w-full h-auto object-cover select-none pointer-events-none"
            />
            <Image
              src="/images/Feature22.jpg"
              alt="ميزة 2"
              width={1200}
              height={500}
              className="w-full h-auto object-cover select-none pointer-events-none"
            />
            <Image
              src="/images/Feature33.jpg"
              alt="ميزة 3"
              width={1200}
              height={500}
              className="w-full h-auto object-cover select-none pointer-events-none"
            />
            <Image
              src="/images/Feature44.jpg"
              alt="ميزة 4"
              width={1200}
              height={500}
              className="w-full h-auto object-cover select-none pointer-events-none"
            />
          </div>
        </section>
        <section className="relative w-full h-[600px]">
          {/* الصورة تغطي كامل العرض والارتفاع */}
          <Image
            src="images/laptop.png"
            alt="E-Trek Dashboard in Laptop Mockup"
            fill
            className="object-cover"
            priority
          />

          {/* النص فوق الصورة */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 bg-black/50">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4"></h2>
            <p className="text-lg text-white max-w-3xl mb-6"></p>
            <div className="flex justify-center gap-4 flex-wrap">
              {/* Explore Dashboard */}
              <Button
                asChild
                size="lg"
                className="bg-transparent border border-white text-white hover:bg-white/10 transition"
              >
                <Link href="/dashboard">{t('home.hero.dashboardBtn')}</Link>
              </Button>
            </div>
          </div>
        </section>
        {/* ===== FAQ Section ===== */}
        <section id="faq" className="container py-24 sm:py-32">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-right">
            الأسئلة{' '}
            <span className="bg-gradient-to-b  text-transparent bg-clip-text">
              الشائعة
            </span>
          </h2>

          <Accordion type="single" collapsible className="w-full AccordionRoot">
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

          <h3 className="font-medium mt-4 text-right">
            هل لديك سؤال آخر؟{' '}
            <a
              rel="noreferrer noopener"
              target="_blank"
              href="https://wa.me/966583984034"
              className="text-green-600 transition-all border-green-600 hover:border-b-2"
            >
              تواصل معنا
            </a>
          </h3>
        </section>
        <section className="py-20 bg-white dark:bg-gray-900"></section>
      </main>
      <footer className="bg-white dark:bg-gray-800 border-t border-green-100 dark:border-gray-700 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
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

            <div>
              <h3 className="font-medium text-green-800 dark:text-green-400 mb-4">
                {t('footer.navigation')}
              </h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/"
                    className="text-sm text-gray-600 hover:text-green-700 dark:text-gray-300 dark:hover:text-green-400"
                  >
                    {t('nav.home')}
                  </Link>
                </li>
                <li>
                  <Link
                    href="/dashboard"
                    className="text-sm text-gray-600 hover:text-green-700 dark:text-gray-300 dark:hover:text-green-400"
                  >
                    {t('nav.dashboard')}
                  </Link>
                </li>
                <li></li>
                <li>
                  <Link
                    href="/faq"
                    className="text-sm text-gray-600 hover:text-green-500 dark:text-gray-300 dark:hover:text-green-400"
                  >
                    {t('nav.faq')}
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-medium text-green-800 dark:text-green-400 mb-4">
                {t('footer.resources')}
              </h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="#"
                    className="text-sm text-gray-600 hover:text-green-700 dark:text-gray-300 dark:hover:text-green-400"
                  >
                    {t('footer.documentation')}
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-sm text-gray-600 hover:text-green-700 dark:text-gray-300 dark:hover:text-green-400"
                  >
                    {t('footer.apiReference')}
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-sm text-gray-600 hover:text-green-700 dark:text-gray-300 dark:hover:text-green-400"
                  >
                    {t('footer.dataPolicy')}
                  </Link>
                </li>
              </ul>
            </div>

            <a
              href="mailto:alrashidiiabrar@gmail.com"
              className="text-green-700 hover:underline font-medium"
            >
              {t('footer.link')}
            </a>
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

interface FeatureCardProps {
  icon: React.ReactNode
  title: string
}

function FeatureCard({ icon, title }: FeatureCardProps) {
  return (
    <Card className="border-green-100 dark:border-gray-700">
      <CardHeader>
        <div className="mb-4">{icon}</div>
        <CardTitle className="text-xl text-green-800 dark:text-green-400">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-gray-600 dark:text-gray-300"></CardDescription>
      </CardContent>
    </Card>
  )
}
