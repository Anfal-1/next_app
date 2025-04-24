'use client'

import Image from 'next/image'
import { useLanguage } from '@/contexts/language-context'

export default function FAQPage() {
  const { t, language } = useLanguage()

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* العنوان بخلفية صورة */}
      <div className="relative w-full h-64">
        <Image
          src="/images/NDVI_IMAGE.jpg"
          alt="E-Trek FAQ Banner"
          fill
          className="object-cover brightness-75"
        />
      </div>

      {/* الأسئلة */}
      <div className="max-w-5xl mx-auto py-12 px-6 space-y-10">
        {[...Array(10)].map((_, i) => (
          <div key={i}>
            <h2 className="text-xl font-semibold text-green-700 mb-2">
              {t(`gov-faq.q${i + 1}.question`)}
            </h2>
            <p className="text-gray-700 text-lg">
              {t(`gov-faq.q${i + 1}.answer`)}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}
