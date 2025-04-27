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
import { SimpleTreeAnalysis } from '@/components/ai-analysis/SimpleTreeAnalysis'
import TestConnectionButton from '@/components/TestConnectionButton'
// مكونات تُحمّل فقط على العميل
const MapView = dynamic(() => import('@/components/map-view'), { ssr: false })
const NDVIChart = dynamic(() => import('@/components/ndvi-chart'), {
  ssr: false,
})
const SPIChart = dynamic(() => import('@/components/spi-chart'), { ssr: false })
const SoilErosionTable = dynamic(
  () => import('@/components/soil-erosion-table'),
  { ssr: false }
)
const TreeMonitoring = dynamic(() => import('@/components/tree-monitoring'), {
  ssr: false,
})

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
          </div>
        </header>

        <main className="p-4 md:p-6 overflow-auto h-[calc(100vh-64px)]">
          {/* التحليل الذكي أول شيء */}
          <AIAnalysisSection />

          <Card className="mb-6 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-4 border-b border-green-100 dark:border-gray-700"></div>
            <div className="p-4">
              <iframe
                src="https://ee-anfalalharbi826.projects.earthengine.app/view/e-analysis"
                width="100%"
                height="500"
                style={{ border: 'none' }}
                loading="lazy"
              />
            </div>
          </Card>
          <div className="grid grid-cols-3 md:grid-cols-1 gap-6 mb-6">
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
                <div className="p-4 border-b border-green-100 dark:border-gray-700">
                  <h2 className="text-lg font-semibold text-green-800 dark:text-green-400">
                    {t('ndvi.title')}
                  </h2>
                  <p className="text-sm text-green-600 dark:text-green-500">
                    {t('ndvi.subtitle')}
                  </p>
                </div>
                <div className="p-4 h-[400px]">
                  <NDVIChart />
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="mb-6 dark:bg-gray-800 dark:border-gray-700">
            <CardContent className="p-0">
              <Tabs defaultValue="desertification">
                <div className="p-4 border-b border-green-100 dark:border-gray-700 flex justify-between items-center">
                  <div>
                    <h2 className="text-lg font-semibold text-green-800 dark:text-green-400">
                      {t('env.title')}
                    </h2>
                    <p className="text-sm text-green-600 dark:text-green-500">
                      {t('env.subtitle')}
                    </p>
                  </div>
                  <TabsList className="bg-green-100 dark:bg-gray-700">
                    <TabsTrigger value="desertification">
                      {t('env.desertification')}
                    </TabsTrigger>
                    <TabsTrigger value="drought">
                      {t('env.droughtIndex')}
                    </TabsTrigger>
                    <TabsTrigger value="erosion">
                      {t('env.soilErosion')}
                    </TabsTrigger>
                  </TabsList>
                </div>

                <TabsContent value="desertification" className="p-4">
                  <DesertificationComparison />
                </TabsContent>

                <TabsContent value="drought" className="p-4">
                  <SPIChart />
                </TabsContent>

                <TabsContent value="erosion" className="p-4">
                  <SoilErosionTable />
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>

          <Card className="mb-6 dark:bg-gray-800 dark:border-gray-700">
            <CardContent className="p-0">
              <div className="p-4 border-b border-green-100 dark:border-gray-700">
                <h2 className="text-lg font-semibold text-green-800 dark:text-green-400">
                  {t('tree.title')}
                </h2>
                <p className="text-sm text-green-600 dark:text-green-500">
                  {t('tree.subtitle')}
                </p>
              </div>
              <div className="p-4">
                <TreeMonitoring />
              </div>
            </CardContent>
          </Card>
        </main>
      </div>
    </div>
  )
}
