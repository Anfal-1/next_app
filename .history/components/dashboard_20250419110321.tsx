'use client'

import dynamic from 'next/dynamic'
import { useState } from 'react'
import Image from 'next/image'
import { Download, Menu } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { useToast } from '@/components/ui/use-toast'
import { useLanguage } from '@/contexts/language-context'
import { Sidebar } from './sidebar'
import { MapView } from './map-view'
import { NDVIChart } from './ndvi-chart'
import { SummaryCards } from './summary-cards'
import { DesertificationComparison } from './desertification-comparison'
import { SPIChart } from './spi-chart'
import { SoilErosionTable } from './soil-erosion-table'
import { TreeMonitoring } from './tree-monitoring'
import { ThemeToggle } from './theme-toggle'
import { LanguageToggle } from './language-toggle'
import { AIAnalysisSection } from './ai-analysis/ai-analysis-section'

export default function Dashboard() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true)
  const { toast } = useToast()
  const { language, t } = useLanguage()

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen)
  }

  const handleExportPDF = () => {
    toast({
      title: t('dashboard.exportStarted'),
      description: t('dashboard.exportStartedDesc'),
    })

    // In a real implementation, this would trigger the PDF export
    setTimeout(() => {
      toast({
        title: t('dashboard.exportComplete'),
        description: t('dashboard.exportCompleteDesc'),
      })
    }, 2000)
  }

  return (
    <div className="flex h-screen bg-green-50 dark:bg-gray-900">
      <Sidebar isOpen={isSidebarOpen} />

      <div
        className={`flex-1 transition-all duration-300 ${
          language === 'ar'
            ? isSidebarOpen
              ? 'md:mr-64'
              : 'mr-0'
            : isSidebarOpen
            ? 'md:ml-64'
            : 'ml-0'
        }`}
      >
        <header className="bg-white dark:bg-gray-800 border-b border-green-100 dark:border-gray-700 p-4 flex justify-between items-center sticky top-0 z-10">
          <div className="flex items-center">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleSidebar}
              className={`${
                language === 'ar' ? 'ml-2' : 'mr-2'
              } text-green-700 dark:text-green-400`}
            >
              <Menu className="h-5 w-5" />
            </Button>
            <div className="flex items-center">
              <div
                className={`relative h-8 w-8 ${
                  language === 'ar' ? 'ml-2' : 'mr-2'
                } hidden sm:block`}
              >
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
              />{' '}
              {t('dashboard.exportPdf')}
            </Button>
          </div>
        </header>

        <main className="p-4 md:p-6 overflow-auto h-[calc(100vh-64px)]">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <SummaryCards />
          </div>

          {/* AI Analysis Section */}
          <AIAnalysisSection />

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
