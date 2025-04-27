// components/SimpleTreeAnalysis.tsx
'use client'

import { useState } from 'react'
import { predictTreeMask } from '@/app/huggingface-api'

export function SimpleTreeAnalysis() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null)
  const [resultUrl, setResultUrl] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleAnalyze = async () => {
    if (!selectedFile) return

    try {
      setLoading(true)
      setError(null)
      const url = await predictTreeMask(selectedFile, 'tree-density') // نحط المهمة مباشرة
      setResultUrl(url)
    } catch (err: any) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="space-y-4 p-4 border rounded-lg">
      <h2 className="text-xl font-bold">تحليل الأشجار بالذكاء الاصطناعي</h2>

      <input
        type="file"
        accept="image/*"
        onChange={e => setSelectedFile(e.target.files?.[0] || null)}
        className="block"
      />

      <button
        onClick={handleAnalyze}
        disabled={!selectedFile || loading}
        className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 disabled:opacity-50"
      >
        {loading ? 'جاري التحليل...' : 'ابدأ التحليل'}
      </button>

      {error && <p className="text-red-600">{error}</p>}

      {resultUrl && (
        <div className="mt-4">
          <h3 className="text-lg font-semibold">نتيجة التحليل:</h3>
          <img src={resultUrl} alt="نتيجة التحليل" className="mt-2 rounded" />
        </div>
      )}
    </div>
  )
}
