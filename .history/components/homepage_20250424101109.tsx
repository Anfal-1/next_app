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
        {/* Hero Section Styled Like Google Earth Engine */}
        <section className="relative h-screen flex items-center justify-center overflow-hidden bg-black">
          {/* Background Image */}
          <Image
            src="/images/homeimage1.jpg"
            alt="E-Trek Background"
            layout="fill"
            objectFit="cover"
            className="z-0"
            priority
          />

          {/* Overlay Gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent z-10"></div>

          {/* Content */}
          <div className="relative z-20 text-center px-6 max-w-3xl">
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
              {t('home.hero.title')}
            </h1>

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

        {/* CTA Section */}
        <section className="py-20 bg-green-700 dark:bg-green-800">
          <div className="container mx-auto px-4 text-center">
            {/* صورة مدمجة */}
            <div className="mb-8">
              <div className="container mx-auto px-4">
                <div className="flex justify-center">
                  <div className="relative w-full max-w-4xl rounded-lg overflow-hidden shadow-xl">
                    <Image
                      src="/laptop.png"
                      alt="E-Trek Dashboard in Laptop Mockup"
                      width={1200}
                      height={800}
                      className="object-contain w-full h-auto"
                      priority
                    />
                  </div>
                </div>
              </div>
            </div>
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
      