import { useState } from 'react'
import { predictTreeMask } from '@/app/huggingface-api'

export function SimpleTreeAnalysis() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null)
  const [taskType, setTaskType] = useState<'tree-density' | 'desertification'>(
    'tree-density'
  )
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [resultUrl, setResultUrl] = useState<string | null>(null)

  const handleAnalyze = async () => {
    if (!selectedFile) return

    try {
      setLoading(true)
      setError(null)

      const url = await predictTreeMask(selectedFile, taskType)
      setResultUrl(url)
    } catch (err: any) {
      console.error(err)
      setError(err.message || 'Error during analysis')
    } finally {
      setLoading(false)
    }
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null
    setSelectedFile(file)
    setResultUrl(null) // نلغي النتيجة السابقة لو اختار ملف جديد
  }

  return (
    <div className="p-6 border rounded-md">
      <h2 className="text-xl font-bold mb-4">
        تحليل الصور باستخدام الذكاء الاصطناعي
      </h2>

      {/* اختيار المهمة */}
      <div className="mb-4">
        <label className="block mb-2 font-semibold">اختر نوع المهمة:</label>
        <div className="flex gap-4">
          <label>
            <input
              type="radio"
              name="taskType"
              value="tree-density"
              checked={taskType === 'tree-density'}
              onChange={() => setTaskType('tree-density')}
            />
            <span className="ml-2">تحليل كثافة الأشجار</span>
          </label>

          <label>
            <input
              type="radio"
              name="taskType"
              value="desertification"
              checked={taskType === 'desertification'}
              onChange={() => setTaskType('desertification')}
            />
            <span className="ml-2">تحليل التصحر</span>
          </label>
        </div>
      </div>

      {/* رفع صورة */}
      <div className="mb-4">
        <input type="file" accept="image/*" onChange={handleFileChange} />
      </div>

      {/* زر بدء التحليل */}
      <div className="mb-4">
        <button
          onClick={handleAnalyze}
          disabled={!selectedFile || loading}
          className="bg-green-700 hover:bg-green-800 text-white font-semibold py-2 px-6 rounded"
        >
          {loading ? 'جاري التحليل...' : 'بدء التحليل'}
        </button>
      </div>

      {/* عرض النتيجة */}
      {error && <p className="text-red-500">{error}</p>}

      {resultUrl && (
        <div className="mt-6">
          <h3 className="text-lg font-semibold mb-2">نتيجة التحليل:</h3>
          <img
            src={resultUrl}
            alt="نتيجة التحليل"
            className="rounded-md border"
          />
        </div>
      )}
    </div>
  )
}
