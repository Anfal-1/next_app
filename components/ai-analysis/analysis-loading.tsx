"use client"

import { useLanguage } from "@/contexts/language-context"

export function AnalysisLoading() {
  const { t } = useLanguage()

  return (
    <div className="flex flex-col items-center justify-center py-8">
      <div className="relative w-24 h-24">
        <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center">
          <svg className="w-16 h-16 text-green-200 dark:text-green-900" viewBox="0 0 100 100">
            <circle className="opacity-25" cx="50" cy="50" r="40" stroke="currentColor" strokeWidth="8" fill="none" />
          </svg>
          <svg className="animate-spin absolute w-16 h-16 text-green-600 dark:text-green-500" viewBox="0 0 100 100">
            <circle
              className="opacity-75"
              cx="50"
              cy="50"
              r="40"
              stroke="currentColor"
              strokeWidth="8"
              fill="none"
              strokeDasharray="180"
              strokeDashoffset="60"
            />
          </svg>
        </div>
      </div>

      <div className="mt-6 text-center">
        <h3 className="text-lg font-medium text-green-800 dark:text-green-400 mb-2">{t("ai.processingImage")}</h3>
        <p className="text-sm text-green-600 dark:text-green-500 max-w-md">{t("ai.processingDescription")}</p>

        <div className="mt-6 flex flex-col items-center">
          <div className="w-full max-w-md bg-gray-200 dark:bg-gray-700 rounded-full h-2.5 mb-4">
            <div className="bg-green-600 dark:bg-green-500 h-2.5 rounded-full w-3/4 animate-pulse"></div>
          </div>
          <p className="text-xs text-gray-500 dark:text-gray-400">{t("ai.estimatedTime")}</p>
        </div>
      </div>
    </div>
  )
}
