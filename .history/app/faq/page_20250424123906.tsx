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

      <div className="max-w-4xl mx-auto py-12 px-6 space-y-12">
        <section>
          <h2 className="text-2xl font-semibold">What is E-Trek?</h2>
          <p className="mt-2 text-lg">{t('q1')}</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">
            How is E-Trek different from Google Earth Engine?
          </h2>
          <p className="mt-2 text-lg">
            While GEE offers powerful raw geospatial processing tools, E-Trek is
            tailored for Saudi Arabia’s climate challenges. It integrates
            localized models (NDVI, SPI, RUSLE), AI analytics, and presents
            insights through a bilingual and policy-aligned dashboard made for
            researchers and decision-makers.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">
            How does E-Trek support Vision 2030?
          </h2>
          <p className="mt-2 text-lg">
            E-Trek aligns with Vision 2030 goals under the Saudi Green
            Initiative and National Center for Vegetation Development. It helps
            track afforestation KPIs, assess vegetation cover, and monitor
            desertification risks — enabling data-driven environmental
            governance.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">
            What data sources does E-Trek use?
          </h2>
          <ul className="mt-2 list-disc list-inside text-lg space-y-1">
            <li>Sentinel-2 and Landsat imagery via Google Earth Engine</li>
            <li>Drone-captured imagery (orthophotos)</li>
            <li>Ground-based IoT sensors (if available)</li>
            <li>AI-generated vegetation forecasts</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">Who can use E-Trek?</h2>
          <p className="mt-2 text-lg">
            E-Trek is designed for researchers, environmental scientists,
            policymakers, and students interested in geospatial analysis and
            sustainable land use planning in Saudi Arabia.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">
            Is E-Trek scalable and secure?
          </h2>
          <p className="mt-2 text-lg">
            Yes. Built on modern frameworks (Next.js + Power BI Embedded + GEE),
            E-Trek supports scalable deployments, production-ready security (CSP
            headers, API rate limits, role-based access), and localization for
            Arabic/English users.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">
            Can we contribute or integrate with E-Trek?
          </h2>
          <p className="mt-2 text-lg">
            Yes! Our codebase is modular. We support API integration, spatial
            data ingestion, and open contributions through GitHub. Contact us
            for collaborations.
          </p>
        </section>
      </div>
    </div>
  )
}
