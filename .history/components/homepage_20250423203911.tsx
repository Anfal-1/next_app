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

export function Homepage() {
  const { t, language } = useLanguage()

  return (
    <div className="flex min-h-screen flex-col bg-green-50 dark:bg-gray-900">
      <Navbar />

      <main className="flex-1">
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
          {/* خلفية الصورة */}
          <Image
            src="/images/homeimage1.jpg"
            alt="E-Trek Background"
            layout="fill"
            objectFit="cover"
            className="z-0"
            priority
          />

          {/* تغطية داكنة لتحسين وضوح النص */}
          <div className="absolute inset-0 bg-black/60 z-10"></div>

          {/* المحتوى */}
          <div className="relative z-20 text-center px-6 max-w-3xl text-white">
            <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
              إي-تريك: المراقبة البيئية الذكية
            </h1>
            <p className="text-lg md:text-xl text-white/80 mb-8">
              منصة متكاملة لمراقبة وتحليل البيانات البيئية تساعد في اتخاذ قرارات
              مستدامة وحماية الموارد الطبيعية.
            </p>

            <div className="flex justify-center flex-wrap gap-4">
              {/* زر معرفة المزيد */}
              <Button
                asChild
                size="lg"
                className="bg-transparent border border-white text-white hover:bg-white/10 transition"
              >
                <Link href="#features">معرفة المزيد</Link>
              </Button>

              {/* زر مشاهدة الفيديو */}
              <Button
                asChild
                size="lg"
                className="bg-transparent border border-white text-white hover:bg-white/10 transition flex items-center gap-2"
              >
                <Link
                  href="https://www.youtube.com/watch?v=VIDEO_ID"
                  target="_blank"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 fill-white"
                    viewBox="0 0 24 24"
                  >
                    <path d="M10 8.64L15.27 12 10 15.36V8.64M8 5v14l11-7L8 5z" />
                  </svg>
                  مشاهدة الفيديو
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-20 bg-white dark:bg-gray-800">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-green-800 dark:text-green-400 mb-4">
                {t('home.features.title')}
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                {t('home.features.subtitle')}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <FeatureCard
                icon={
                  <Globe className="h-10 w-10 text-green-600 dark:text-green-500" />
                }
                title={t('home.features.cards.monitoring.title')}
                description={t('home.features.cards.monitoring.description')}
              />
              <FeatureCard
                icon={
                  <BarChart3 className="h-10 w-10 text-green-600 dark:text-green-500" />
                }
                title={t('home.features.cards.analysis.title')}
                description={t('home.features.cards.analysis.description')}
              />
              <FeatureCard
                icon={
                  <Leaf className="h-10 w-10 text-green-600 dark:text-green-500" />
                }
                title={t('home.features.cards.conservation.title')}
                description={t('home.features.cards.conservation.description')}
              />
              <FeatureCard
                icon={
                  <Shield className="h-10 w-10 text-green-600 dark:text-green-500" />
                }
                title={t('home.features.cards.risk.title')}
                description={t('home.features.cards.risk.description')}
              />
              <FeatureCard
                icon={
                  <MapPin className="h-10 w-10 text-green-600 dark:text-green-500" />
                }
                title={t('home.features.cards.mapping.title')}
                description={t('home.features.cards.mapping.description')}
              />
              <FeatureCard
                icon={
                  <BarChart3 className="h-10 w-10 text-green-600 dark:text-green-500" />
                }
                title={t('home.features.cards.ai.title')}
                description={t('home.features.cards.ai.description')}
              />
            </div>
          </div>
        </section>

        {/* About Al-Qassim Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div
                className={`${language === 'ar' ? 'md:order-1' : 'md:order-2'}`}
              >
                <h2 className="text-3xl font-bold text-green-800 dark:text-green-400 mb-6">
                  {t('home.about.title')}
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                  {t('home.about.description1')}
                </p>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                  {t('home.about.description2')}
                </p>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm">
                    <p className="text-3xl font-bold text-green-700 dark:text-green-500">
                      28,200
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {t('home.about.stats.area')}
                    </p>
                  </div>
                  <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm">
                    <p className="text-3xl font-bold text-green-700 dark:text-green-500">
                      1.5M+
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {t('home.about.stats.population')}
                    </p>
                  </div>
                </div>
              </div>
              <div
                className={`${language === 'ar' ? 'md:order-2' : 'md:order-1'}`}
              >
                <div className="grid grid-cols-2 gap-4">
                  <div className="relative h-48 rounded-lg overflow-hidden">
                    <Image
                      src="./images/feature1.jpg?height=200&width=300"
                      alt="Al-Qassim Landscape"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="relative h-48 rounded-lg overflow-hidden">
                    <Image
                      src="./images/feature2.jpg?height=200&width=300"
                      alt="Al-Qassim Agriculture"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="relative h-48 rounded-lg overflow-hidden">
                    <Image
                      src="./images/feature3.jpg?height=200&width=300"
                      alt="Al-Qassim Desert"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="relative h-48 rounded-lg overflow-hidden">
                    <Image
                      src="./images/feature4.jpg?height=200&width=300"
                      alt="Al-Qassim City"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-green-700 dark:bg-green-800">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              {t('home.cta.title')}
            </h2>
            <p className="text-lg text-green-100 max-w-3xl mx-auto mb-8">
              {t('home.cta.description')}
            </p>
            <Button asChild size="lg" variant="secondary">
              <Link href="/dashboard">{t('home.cta.button')}</Link>
            </Button>
          </div>
        </section>
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
                <li>
                  <Link
                    href="/reports"
                    className="text-sm text-gray-600 hover:text-green-700 dark:text-gray-300 dark:hover:text-green-400"
                  >
                    {t('nav.reports')}
                  </Link>
                </li>
                <li>
                  <Link
                    href="/faq"
                    className="text-sm text-gray-600 hover:text-green-700 dark:text-gray-300 dark:hover:text-green-400"
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

            <div>
              <h3 className="font-medium text-green-800 dark:text-green-400 mb-4">
                {t('footer.contact')}
              </h3>
              <ul className="space-y-2">
                <li className="text-sm text-gray-600 dark:text-gray-300">
                  <strong>{t('footer.email')}:</strong> info@e-trek.sa
                </li>
                <li className="text-sm text-gray-600 dark:text-gray-300">
                  <strong>{t('footer.phone')}:</strong> +966 12 345 6789
                </li>
              </ul>
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

interface FeatureCardProps {
  icon: React.ReactNode
  title: string
  description: string
}

function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <Card className="border-green-100 dark:border-gray-700">
      <CardHeader>
        <div className="mb-4">{icon}</div>
        <CardTitle className="text-xl text-green-800 dark:text-green-400">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-gray-600 dark:text-gray-300">
          {description}
        </CardDescription>
      </CardContent>
    </Card>
  )
}
