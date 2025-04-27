'use client'

import { useState } from 'react'
import { predictTreeMask } from '@/app/huggingface-api' // مسار استدعاء الدالة اللي كتبناها

export function SimpleTreeAnalysis() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null)
  const [selectedTask, setSelectedTask] = useState<
    'desertification' | 'tree-density'
  >('desertification')
  const [resultUrl, setResultUrl] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      setSelectedFile(file)
      setResultUrl(null) // عشان تمسحين الصورة القديمة لو فيه تحليل قديم
    }
  }

  const handleAnalyze = async () => {
    if (!selectedFile) return

    try {
      setLoading(true)
      setError(null)
      const url = await predictTreeMask(selectedFile, selectedTask)
      setResultUrl(url)
    } catch (err: any) {
      console.error(err)
      setError
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="space-y-4">
      <h2 className="text-lg font-bold text-green-800">تحليل بسيط للأشجار</h2>

      <input
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        className="border p-2"
      />

      <select
        value={selectedTask}
        onChange={e =>
          setSelectedTask(e.target.value as 'desertification' | 'tree-density')
        }
        className="border p-2"
      >
        <option value="desertification">تحليل التصحر من الصور الفضائية</option>
        <option value="tree-density">
          تحليل كثافة الأشجار من الطائرات بدون طيار
        </option>
      </select>

      <button
        onClick={handleAnalyze}
        disabled={!selectedFile || loading}
        className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
      >
        {loading ? 'جارٍ المعالجة...' : 'بدء التحليل'}
      </button>

      {error && <p className="text-red-600">{error}</p>}

      {resultUrl && (
        <div className="mt-4">
          <h3 className="font-semibold mb-2">النتيجة:</h3>
          <img
            src={resultUrl}
            alt="نتيجة التحليل"
            className="border rounded shadow"
          />
        </div>
      )}
    </div>
  )
}
