'use client'

import { useState } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { useLanguage } from '@/contexts/language-context'
import { ImageUploader } from './image-uploader'
import { AnalysisOptions } from './analysis-options'
import { AnalysisResults } from './analysis-results'
import { AnalysisLoading } from './analysis-loading'

export type AnalysisTask = 'desertification' | 'tree-density'
export type AnalysisStatus =
  | 'idle'
  | 'uploading'
  | 'processing'
  | 'complete'
  | 'error'

export interface AnalysisResult {
  taskType: AnalysisTask
  timestamp: string
  metrics: {
    [key: string]: number | string
  }
  riskLevel?: 'low' | 'medium' | 'high' | 'critical'
  recommendations?: string[]
  processedImageUrl?: string
}

export function AIAnalysisSection() {
  const { t } = useLanguage()
  const [selectedFile, setSelectedFile] = useState<File | null>(null)
  const [selectedTask, setSelectedTask] =
    useState<AnalysisTask>('desertification')
  const [status, setStatus] = useState<AnalysisStatus>('idle')
  const [result, setResult] = useState<AnalysisResult | null>(null)
  const [error, setError] = useState<string | null>(null)

  const handleFileSelected = (file: File | null) => {
    setSelectedFile(file)
    // Reset results when a new file is selected
    if (file) {
      setStatus('idle')
      setResult(null)
      setError(null)
    }
  }

  const handleTaskSelected = (task: AnalysisTask) => {
    setSelectedTask(task)
  }

  const handleStartAnalysis = async () => {
    if (!selectedFile) {
      setError(t('ai.noFileError'))
      return
    }

    try {
      setStatus('uploading')

      // Simulate file upload delay
      await new Promise(resolve => setTimeout(resolve, 1500))

      setStatus('processing')

      // Simulate processing delay
      await new Promise(resolve => setTimeout(resolve, 3000))

      // Generate mock results based on the selected task
      const mockResultBase = generateMockResults(selectedTask)

      // Create a temporary URL for the uploaded file
      const processedImage = selectedFile
        ? URL.createObjectURL(selectedFile)
        : undefined

      // Merge the mock result with the uploaded image URL
      const mockResult: AnalysisResult = {
        ...mockResultBase,
        processedImageUrl: processedImage,
      }

      setResult(mockResult)
      setStatus('complete')
    } catch (err) {
      console.error('Analysis error:', err)
      setError(t('ai.processingError'))
      setStatus('error')
    }
  }

  const handleReset = () => {
    setSelectedFile(null)
    setStatus('idle')
    setResult(null)
    setError(null)
  }

  return (
    <Card className="mb-6 dark:bg-gray-800 dark:border-gray-700">
      <CardContent className="p-0">
        <Tabs defaultValue="upload">
          <div className="p-4 border-b border-green-100 dark:border-gray-700 flex justify-between items-center">
            <div>
              <h2 className="text-lg font-semibold text-green-800 dark:text-green-400">
                {t('ai.title')}
              </h2>
            </div>
            <TabsList className="bg-green-100 dark:bg-gray-700">
              <TabsTrigger value="upload">{t('ai.uploadTab')}</TabsTrigger>
              <TabsTrigger value="results" disabled={status !== 'complete'}>
                {t('ai.resultsTab')}
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="upload" className="p-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <ImageUploader
                selectedFile={selectedFile}
                onFileSelected={handleFileSelected}
                status={status}
              />

              <AnalysisOptions
                selectedTask={selectedTask}
                onTaskSelected={handleTaskSelected}
                onStartAnalysis={handleStartAnalysis}
                onReset={handleReset}
                isFileSelected={!!selectedFile}
                status={status}
                error={error}
              />
            </div>

            {status === 'processing' && (
              <div className="mt-6">
                <AnalysisLoading />
              </div>
            )}
          </TabsContent>

          <TabsContent value="results" className="p-4">
            {result && <AnalysisResults result={result} />}
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}

// Helper function to generate mock results
function generateMockResults(task: AnalysisTask): AnalysisResult {
  const now = new Date()

  if (task === 'desertification') {
    return {
      taskType: 'desertification',
      timestamp: now.toISOString(),
      metrics: {
        ndvi: 0.32,
        baresoilIndex: 0.68,
        vegetationCoverage: '27%',
        soilMoisture: '14%',
        landDegradationIndex: 0.58,
      },
      riskLevel: 'medium',
      recommendations: [
        'Implement contour bunding to reduce soil erosion',
        'Introduce drought-resistant native vegetation',
        'Establish windbreaks to reduce wind erosion',
        'Monitor soil moisture levels regularly',
      ],
      processedImageUrl: '/placeholder.svg?height=400&width=600',
    }
  } else {
    return {
      taskType: 'tree-density',
      timestamp: now.toISOString(),
      metrics: {
        treeCount: 342,
        treeDensity: '28 trees/hectare',
        averageCanopyCover: '18%',
        healthyTrees: '76%',
        stressedTrees: '24%',
      },
      riskLevel: 'low',
      recommendations: [
        'Increase planting density in southern sectors',
        'Implement irrigation improvements for stressed trees',
        'Monitor for signs of disease in stressed tree clusters',
        'Consider additional species diversity for resilience',
      ],
      processedImageUrl: '/placeholder.svg?height=400&width=600',
    }
  }
}
