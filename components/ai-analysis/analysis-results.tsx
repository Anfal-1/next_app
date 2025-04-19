"use client"

import { useState } from "react"
import { Download, FileDown, Share2, AlertTriangle, CheckCircle, Info } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { useLanguage } from "@/contexts/language-context"
import { useToast } from "@/components/ui/use-toast"
import type { AnalysisResult } from "./ai-analysis-section"

interface AnalysisResultsProps {
  result: AnalysisResult
}

export function AnalysisResults({ result }: AnalysisResultsProps) {
  const { language, t } = useLanguage()
  const { toast } = useToast()
  const [activeTab, setActiveTab] = useState("summary")

  const handleExportPDF = () => {
    toast({
      title: t("ai.exportStarted"),
      description: t("ai.exportDescription"),
    })

    // In a real implementation, this would generate and download a PDF
    setTimeout(() => {
      toast({
        title: t("ai.exportComplete"),
        description: t("ai.exportSuccess"),
      })
    }, 2000)
  }

  const handleShare = () => {
    toast({
      title: t("ai.shareLinkGenerated"),
      description: t("ai.shareLinkDescription"),
    })
  }

  const getRiskBadge = (risk: string | undefined) => {
    if (!risk) return null

    const colors = {
      low: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300",
      medium: "bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-300",
      high: "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-300",
      critical: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300",
    }

    const riskText = {
      low: t("ai.riskLow"),
      medium: t("ai.riskMedium"),
      high: t("ai.riskHigh"),
      critical: t("ai.riskCritical"),
    }

    return <Badge className={colors[risk as keyof typeof colors]}>{riskText[risk as keyof typeof riskText]}</Badge>
  }

  const getMetricIcon = (value: number | string) => {
    if (typeof value === "number") {
      if (value < 0.3) return <AlertTriangle className="h-4 w-4 text-red-500" />
      if (value > 0.7) return <CheckCircle className="h-4 w-4 text-green-500" />
    }
    return <Info className="h-4 w-4 text-blue-500" />
  }

  const formatDate = (isoString: string) => {
    const date = new Date(isoString)
    return new Intl.DateTimeFormat(language === "ar" ? "ar-SA" : "en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    }).format(date)
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h3 className="text-xl font-semibold text-green-800 dark:text-green-400">
            {result.taskType === "desertification" ? t("ai.desertificationResults") : t("ai.treeDensityResults")}
          </h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            {t("ai.analysisCompleted")}: {formatDate(result.timestamp)}
          </p>
        </div>

        <div className="flex gap-2">
          <Button variant="outline" size="sm" onClick={handleShare} className="border-green-200 dark:border-green-900">
            <Share2 className={`${language === "ar" ? "ml-2" : "mr-2"} h-4 w-4`} />
            {t("ai.share")}
          </Button>

          <Button
            size="sm"
            onClick={handleExportPDF}
            className="bg-green-700 hover:bg-green-800 dark:bg-green-700 dark:hover:bg-green-600"
          >
            <FileDown className={`${language === "ar" ? "ml-2" : "mr-2"} h-4 w-4`} />
            {t("ai.exportReport")}
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <Card className="dark:bg-gray-800 dark:border-gray-700">
            <CardContent className="p-0">
              <Tabs value={activeTab} onValueChange={setActiveTab}>
                <div className="p-4 border-b border-green-100 dark:border-gray-700">
                  <TabsList className="bg-green-100 dark:bg-gray-700">
                    <TabsTrigger value="summary">{t("ai.summary")}</TabsTrigger>
                    <TabsTrigger value="visualization">{t("ai.visualization")}</TabsTrigger>
                    <TabsTrigger value="recommendations">{t("ai.recommendations")}</TabsTrigger>
                  </TabsList>
                </div>

                <TabsContent value="summary" className="p-4">
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-lg font-medium text-green-800 dark:text-green-400 mb-4">
                        {t("ai.keyMetrics")}
                      </h4>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {Object.entries(result.metrics).map(([key, value]) => (
                          <div key={key} className="flex items-center p-3 border rounded-md dark:border-gray-700">
                            <div className={`${language === "ar" ? "ml-3" : "mr-3"}`}>{getMetricIcon(value)}</div>
                            <div>
                              <p className="text-sm font-medium text-gray-700 dark:text-gray-300">
                                {t(`ai.metric.${key}`)}
                              </p>
                              <p className="text-lg font-semibold text-green-800 dark:text-green-400">{value}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="text-lg font-medium text-green-800 dark:text-green-400 mb-2">
                        {t("ai.riskAssessment")}
                      </h4>
                      <div className="flex items-center">
                        <div className={`${language === "ar" ? "ml-2" : "mr-2"}`}>{getRiskBadge(result.riskLevel)}</div>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          {t(`ai.riskDescription.${result.riskLevel}`)}
                        </p>
                      </div>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="visualization" className="p-4">
                  <div className="space-y-4">
                    <h4 className="text-lg font-medium text-green-800 dark:text-green-400">{t("ai.processedImage")}</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{t("ai.visualizationDescription")}</p>

                    <div className="relative aspect-video w-full overflow-hidden rounded-lg border dark:border-gray-700">
                      <img
                        src={result.processedImageUrl || "/placeholder.svg"}
                        alt={t("ai.processedImageAlt")}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    <div className="flex flex-wrap gap-2 mt-4">
                      <Badge
                        variant="outline"
                        className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
                      >
                        {t("ai.healthyVegetation")}
                      </Badge>
                      <Badge
                        variant="outline"
                        className="bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-300"
                      >
                        {t("ai.stressedVegetation")}
                      </Badge>
                      <Badge variant="outline" className="bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300">
                        {t("ai.bareSoil")}
                      </Badge>
                      <Badge
                        variant="outline"
                        className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300"
                      >
                        {t("ai.water")}
                      </Badge>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="recommendations" className="p-4">
                  <div className="space-y-4">
                    <h4 className="text-lg font-medium text-green-800 dark:text-green-400">
                      {t("ai.aiRecommendations")}
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{t("ai.recommendationsDescription")}</p>

                    <ul className="space-y-3 mt-4">
                      {result.recommendations?.map((recommendation, index) => (
                        <li
                          key={index}
                          className="flex items-start p-3 border rounded-md dark:border-gray-700"
                          className="flex items-start p-3 border rounded-md dark:border-gray-700"
                        >
                          <CheckCircle
                            className={`${language === "ar" ? "ml-3" : "mr-3"} h-5 w-5 text-green-500 shrink-0 mt-0.5`}
                          />
                          <span className="text-sm text-gray-700 dark:text-gray-300">{recommendation}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>

        <div className="lg:col-span-1">
          <Card className="dark:bg-gray-800 dark:border-gray-700">
            <CardContent className="p-4">
              <h4 className="text-lg font-medium text-green-800 dark:text-green-400 mb-4">{t("ai.analysisDetails")}</h4>

              <div className="space-y-4">
                <div>
                  <p className="text-sm font-medium text-gray-600 dark:text-gray-400">{t("ai.analysisType")}</p>
                  <p className="text-base font-semibold text-gray-800 dark:text-gray-200">
                    {result.taskType === "desertification"
                      ? t("ai.desertificationAnalysis")
                      : t("ai.treeDensityAnalysis")}
                  </p>
                </div>

                <div>
                  <p className="text-sm font-medium text-gray-600 dark:text-gray-400">{t("ai.dateProcessed")}</p>
                  <p className="text-base font-semibold text-gray-800 dark:text-gray-200">
                    {formatDate(result.timestamp)}
                  </p>
                </div>

                <div>
                  <p className="text-sm font-medium text-gray-600 dark:text-gray-400">{t("ai.overallRisk")}</p>
                  <div className="mt-1">{getRiskBadge(result.riskLevel)}</div>
                </div>

                <div className="pt-4 border-t dark:border-gray-700">
                  <p className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-2">{t("ai.nextSteps")}</p>
                  <ul className="space-y-2">
                    <li className="text-sm text-gray-700 dark:text-gray-300 flex items-start">
                      <div className={`${language === "ar" ? "ml-2" : "mr-2"} mt-0.5`}>•</div>
                      {t("ai.nextStep1")}
                    </li>
                    <li className="text-sm text-gray-700 dark:text-gray-300 flex items-start">
                      <div className={`${language === "ar" ? "ml-2" : "mr-2"} mt-0.5`}>•</div>
                      {t("ai.nextStep2")}
                    </li>
                    <li className="text-sm text-gray-700 dark:text-gray-300 flex items-start">
                      <div className={`${language === "ar" ? "ml-2" : "mr-2"} mt-0.5`}>•</div>
                      {t("ai.nextStep3")}
                    </li>
                  </ul>
                </div>

                <div className="pt-4">
                  <Button
                    className="w-full bg-green-700 hover:bg-green-800 dark:bg-green-700 dark:hover:bg-green-600"
                    onClick={handleExportPDF}
                  >
                    <Download className={`${language === "ar" ? "ml-2" : "mr-2"} h-4 w-4`} />
                    {t("ai.downloadFullReport")}
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
