'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useLanguage } from '@/contexts/language-context'

export default function FAQPage() {
  const { t, language } = useLanguage()
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <div className="relative w-full h-64">
        <Image
          src=".\images\NDVI_IMAGE.jpg" // غيّرها لصورة جوية للقصيم أو خريطة
          alt="E-Trek FAQ Banner"
          fill
          className="object-cover brightness-75"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-5xl font-bold text-white">FAQ</h1>
        </div>
      </div>
    </div>
  )
}
