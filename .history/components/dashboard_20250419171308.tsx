'use client'

import dynamic from 'next/dynamic'
import { useState } from 'react'
import Image from 'next/image'
import { Download } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { useToast } from '@/components/ui/use-toast'
import { useLanguage } from '@/contexts/language-context'
import { SummaryCards } from '@/components/summary-cards'
import { DesertificationComparison } from '@/components/desertification-comparison'
import { ThemeToggle } from '@/components/theme-toggle'
import { LanguageToggle } from '@/components/language-toggle'
import { AIAnalysisSection } from '@/components/ai-analysis/ai-analysis-section'

// مكونات تُحمّل فقط على العميل
const MapView = dynamic(() => import('@/components/map-view'), { ssr: false })
const NDVIChart = dynamic(() => import('@/components/ndvi-chart'), { ssr: false })
const SPIChart = dynamic(() => import('@/components/spi-chart'), { ssr: false })
const SoilErosionTable = dynamic(() => import('@/components/soil-erosion-table'), { ssr: false })
const TreeMonitoring = dynamic(() => import('@/components/tree-monitoring'), { ssr: false })

export default function Dashboard() {
  const { toast } = useToast()
  const { language, t } = useLanguage()

  const handleExportPDF = () => {
    toast({
      title: t('dashboard.exportStarted'),
      description: t('dashboard.exportStartedDesc'),
    })

    setTimeout(() => {
      toast({
        title: t('dashboard.exportComplete'),
        description: t('dashboard.exportCompleteDesc'),
      })
    }, 2000)
  }

  return (
    <div className="flex h-screen bg-green-50 dark:bg-gray-900">
      <div className="flex-1">
        <header className="bg-white dark:bg-gray-800 border-b border-green-100 dark:border-gray-700 p-4 flex justify-between items-center sticky top-0 z-10">
          <div className="flex items-center">
            <div className="relative h-8 w-8 mr-2 hidden sm:block">
              <Image
                src="/images/logo.png"
                alt={language === 'ar' ? 'شعار إي-تريك' : 'E-Trek Logo'}
                fill
                className="object-contain"
              />
            </div>
            <h1 className="text-xl font-bold text-green-800 dark:text-green-400">
              {t('dashboard.title')}
            </h1>
          </div>
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <LanguageToggle />
            <Button
              onClick={handleExportPDF}
              className="bg-green-700 hover:bg-green-800 dark:bg-green-700 dark:hover:bg-green-600"
            >
              <Download
                className={`${language === 'ar' ? 'ml-2' : 'mr-2'} h-4 w-4`}
              />
              {t('dashboard.exportPdf')}
            </Button>
          </div>
        </header>

        <main className="p-4 md:p-6 overflow-auto h-[calc(100vh-64px)]">
          {/* التحليل الذكي أول شيء */}
          <AIAnalysisSection />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <SummaryCards />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
            <Card className="dark:bg-gray-800 dark:border-gray-700">
              <CardContent className="p-0">
                <div className="p-4 border-b border-green-100 dark:border-gray-700">
                  <h2 className="text-lg font-semibold text-green-800 dark:text-green-400">
                    {t('map.title')}
                  </h2>
                  <p className="text-sm text-green-600 dark:text-green-500">
                    {t('map.subtitle')}
                  </p>
                </div>
                <div className="h-[400px] w-full">
                  <MapView />
                </div>
              </CardContent>
            </Card>

            <Card className="dark:bg-gray-800 dark:border-gray-700">
              <CardContent className="p-0">