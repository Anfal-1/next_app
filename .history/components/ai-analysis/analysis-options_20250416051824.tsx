"use client"

import { AlertCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { useLanguage } from "@/contexts/language-context"
import type { AnalysisTask, AnalysisStatus } from "./ai-analysis-section"

interface AnalysisOptionsProps {
  selectedTask: AnalysisTask
  onTaskSelected: (task: AnalysisTask) => void
  onStartAnalysis: () => void
  onReset: () => void
  isFileSelected: boolean
  status: AnalysisStatus
  error: string | null
}

export function AnalysisOptions({
  selectedTask,
  onTaskSelected,
  onStartAnalysis,
  onReset,
  isFileSelected,
  status,
  error,
}: AnalysisOptionsProps) {
  const { language, t } = useLanguage()

  const isProcessing = status === "uploading" || status === "processing"
  const isComplete = status === "complete"

  return (
    <div className="flex flex-col">
      <h3 className="text-md font-semibold text-green-800 dark:text-green-400 mb-2">{t("ai.analysisOptions")}</h3>

      <div className="border rounded-lg p-6 dark:border-gray-700">
        <div className="mb-6">
          <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">{t("ai.selectTask")}</h4>

          <RadioGroup
            value={selectedTask}
            onValueChange={(value) => onTaskSelected(value as AnalysisTask)}
            className="space-y-3"
            disabled={isProcessing}
          >
            <div className="flex items-center space-x-2 space-x-reverse">
              <RadioGroupItem value="desertification" id="desertification" />
              <Label
                htmlFor="desertification"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                {t("ai.desertificationAnalysis")}
              </Label>
            </div>

            <div className="flex items-center space-x-2 space-x-reverse">
              <RadioGroupItem value="tree-density" id="tree-density" disabled />
              <Label
                htmlFor="tree-density"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 flex items-center"
              >
                {t("ai.treeDensityAnalysis")}
                <span className="ml-2 text-xs bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 px-2 py-0.5 rounded">
                  {t("ai.comingSoon")}
                </span>
              </Label>
            </div>
          </RadioGroup>
        </div>

        <div className="mb-6">
          <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">{t("ai.analysisDetails")}</h4>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            {selectedTask === "desertification" ? t("ai.desertificationDetails") : t("ai.treeDensityDetails")}
          </p>
        </div>

        {error && (
          <Alert variant="destructive" className="mb-4">
            <AlertCircle className="h-4 w-4" />
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}

        <div className="flex flex-col sm:flex-row gap-3">
          <Button
            onClick={onStartAnalysis}
            disabled={!isFileSelected || isProcessing}
            className="bg-green-700 hover:bg-green-800 dark:bg-green-700 dark:hover:bg-green-600 flex-1"
          >
            {isProcessing ? t("ai.processing") : t("ai.startAnalysis")}
          </Button>

          {(isFileSelected || isComplete) && (
            <Button
              variant="outline"
              onClick={onReset}
              disabled={isProcessing}
              className="border-green-200 dark:border-green-900"
            >
              {t("ai.reset")}
            </Button>
          )}
        </div>
      </div>
    </div>
  )
}
