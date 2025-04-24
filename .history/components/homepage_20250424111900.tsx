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
        <section className="relative w-full h-[600px]">
          {/* الصورة تغطي كامل العرض والارتفاع */}
          <Image
            src="/laptop.png"
            alt="E-Trek Dashboard in Laptop Mockup"
            fill
            className="object-cover"
            priority
          />

          {/* النص فوق الصورة */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 bg-black/50">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              {t('home.cta.title')}
            </h2>
            <p className="text-lg text-white max-w-3xl mb-6">
              {t('home.cta.description')}
            </p>
            <div className="flex justify-center gap-4 flex-wrap">
              {/* Explore Dashboard */}
              <Button
                asChild
                size="lg"
                className="bg-transparent border border-white text-white hover:bg-white/10 transition"
              >
                <Link href="/dashboard">{t('home.hero.dashboardBtn')}</Link>
              </Button>

              {/* Learn More */}
              <Button
                asChild
                size="lg"
                className="bg-transparent border border-white text-white hover:bg-white/10 transition"
              >
                <Link href="#features">{t('home.hero.learnMoreBtn')}</Link>
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
