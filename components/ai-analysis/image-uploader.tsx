"use client"

import type React from "react"

import { useState, useRef } from "react"
import { Upload, X, FileImage } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/contexts/language-context"
import type { AnalysisStatus } from "./ai-analysis-section"

interface ImageUploaderProps {
  selectedFile: File | null
  onFileSelected: (file: File | null) => void
  status: AnalysisStatus
}

export function ImageUploader({ selectedFile, onFileSelected, status }: ImageUploaderProps) {
  const { language, t } = useLanguage()
  const [dragActive, setDragActive] = useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const isDisabled = status === "uploading" || status === "processing"

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()

    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true)
    } else if (e.type === "dragleave") {
      setDragActive(false)
    }
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setDragActive(false)

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFiles(e.dataTransfer.files)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()

    if (e.target.files && e.target.files[0]) {
      handleFiles(e.target.files)
    }
  }

  const handleFiles = (files: FileList) => {
    const file = files[0]
    // Check if file is a TIF/TIFF file
    if (file.name.toLowerCase().endsWith(".tif") || file.name.toLowerCase().endsWith(".tiff")) {
      onFileSelected(file)
    } else {
      alert(t("ai.invalidFileType"))
    }
  }

  const handleButtonClick = () => {
    fileInputRef.current?.click()
  }

  const handleRemoveFile = () => {
    onFileSelected(null)
    if (fileInputRef.current) {
      fileInputRef.current.value = ""
    }
  }

  return (
    <div className="flex flex-col">
      <h3 className="text-md font-semibold text-green-800 dark:text-green-400 mb-2">{t("ai.uploadImage")}</h3>

      <div
        className={`relative border-2 border-dashed rounded-lg p-6 flex flex-col items-center justify-center min-h-[250px] transition-colors
          ${dragActive ? "border-green-500 bg-green-50 dark:bg-green-900/20" : "border-gray-300 dark:border-gray-600"}
          ${isDisabled ? "opacity-60 cursor-not-allowed" : "cursor-pointer"}
        `}
        onDragEnter={handleDrag}
        onDragLeave={handleDrag}
        onDragOver={handleDrag}
        onDrop={isDisabled ? undefined : handleDrop}
        onClick={isDisabled ? undefined : handleButtonClick}
      >
        <input
          ref={fileInputRef}
          type="file"
          className="hidden"
          accept=".tif,.tiff"
          onChange={handleChange}
          disabled={isDisabled}
        />

        {selectedFile ? (
          <div className="flex flex-col items-center">
            <FileImage className="h-16 w-16 text-green-600 dark:text-green-500 mb-4" />
            <p className="text-sm font-medium text-center mb-2">{selectedFile.name}</p>
            <p className="text-xs text-gray-500 dark:text-gray-400 mb-4">
              {(selectedFile.size / (1024 * 1024)).toFixed(2)} MB
            </p>
            {!isDisabled && (
              <Button
                variant="outline"
                size="sm"
                className="mt-2"
                onClick={(e) => {
                  e.stopPropagation()
                  handleRemoveFile()
                }}
              >
                <X className={`${language === "ar" ? "ml-2" : "mr-2"} h-4 w-4`} />
                {t("ai.removeFile")}
              </Button>
            )}
          </div>
        ) : (
          <>
            <Upload className="h-12 w-12 text-gray-400 dark:text-gray-500 mb-4" />
            <p className="text-sm font-medium text-center mb-2">{t("ai.dragAndDrop")}</p>
            <p className="text-xs text-gray-500 dark:text-gray-400 text-center mb-4">{t("ai.supportedFormats")}</p>
            <Button variant="outline" size="sm">
              {t("ai.browseFiles")}
            </Button>
          </>
        )}
      </div>

      <div className="mt-4">
        <p className="text-sm text-gray-500 dark:text-gray-400">
          <span className="font-medium">{t("ai.note")}</span> {t("ai.imageRequirements")}
        </p>
      </div>
    </div>
  )
}
