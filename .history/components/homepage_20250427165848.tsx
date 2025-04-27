'use client'

import type React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import { Navbar } from '@/components/shared/navbar'
import { Button } from '@/components/ui/button'
import { useLanguage } from '@/contexts/language-context'

const faqList = [
  {
    question:
      'ما الذي يجعل E-Trek مختلفًا عن الأنظمة الجغرافية البيئية الأخرى؟',
    answer:
      'E-Trek ليس مجرد نظام عرض خرائط، بل منصة تحليل ذكية تعتمد على الذكاء الاصطناعي لتفسير البيانات البيئية من الأقمار الصناعية والطائرات المسيّرة، وتقديم تنبؤات قابلة للتنفيذ.',
  },
  {
    question: 'كيف يخدم المشروع الأهداف الوطنية مثل رؤية السعودية 2030؟',
    answer:
      'يدعم E-Trek مبادرة السعودية الخضراء عبر مراقبة مؤشرات التشجير والتصحر والغطاء النباتي بدقة، مما يساعد في اتخاذ قرارات مبنية على بيانات حقيقية لتحقيق أهداف الاستدامة.',
  },
  {
    question: 'هل تم اختبار المشروع فعليًا؟',
    answer:
      'نعم، تم تطوير نموذج أولي فعّال لمنطقة القصيم، وتم اختباره باستخدام صور الأقمار الصناعية ومؤشرات NDVI وSPI مع واجهة تحليلية تفاعلية.',
  },
  {
    question: 'كيف يمكن للجهات الحكومية استخدام المنصة؟',
    answer:
      'يمكن استخدامها لمراقبة الأداء البيئي في الوقت الفعلي، وتتبع المشاريع الزراعية والتشجيرية، وتقييم فعالية الخطط البيئية بشكل مستمر ومرئي.',
  },
  {
    question: 'ما مصادر البيانات التي يعتمد عليها النظام؟',
    answer:
      'يعتمد على صور الأقمار الصناعية (مثل Sentinel-2 وLandsat)، بيانات الدرون، وتحليلات الذكاء الاصطناعي المبنية على مؤشرات بيئية عالمية مثل NDVI، SPI، وRUSLE.',
  },
  {
    question: 'هل يدعم النظام اللغة العربية؟',
    answer:
      'نعم، الواجهة بالكامل ثنائية اللغة (عربية/إنجليزية)، ومصممة خصيصًا لتكون سهلة الاستخدام للفرق المحلية والحكومية.',
  },
  {
    question: 'هل المنصة آمنة وقابلة للتوسّع؟',
    answer:
      'بُنيت المنصة باستخدام Next.js وGoogle Earth Engine وPower BI Embedded مع إجراءات أمان تشمل حماية الواجهات البرمجية، وتحديد صلاحيات الوصول، ودعم بيئات الإنتاج.',
  },
  {
    question: 'هل يمكن تخصيص مؤشرات أو لوحات معلومات حسب احتياجات الجهة؟',
    answer:
      'نعم، يمكن تخصيص كل من المؤشرات، الخرائط، والتقارير لتتوافق مع مؤشرات الأداء البيئي الخاصة بكل جهة، مثل متابعة مشاريع معينة أو مناطق محددة.',
  },
  {
    question: 'كيف يمكن للجهات المساهمة أو التعاون مع المشروع؟',
    answer:
      'نرحب بالشراكات سواء في توفير البيانات، تجربة النظام، أو تطوير حالات استخدام مخصصة. المنصة مرنة وقابلة للتكامل مع الأنظمة القائمة.',
  },
  {
    question: 'ما الفائدة الفعلية للمنصة على أرض الواقع؟',
    answer:
      'E-Trek يوفر للجهات الحكومية أداة ذكية لصنع القرار، تقلل التكاليف، وتحسن نتائج مشاريع التشجير والتصحر، وتمنح نظرة استراتيجية مبنية على بيانات لحظية.',
  },
]

export function Homepage() {
  const { t, language } = useLanguage()

  return (
    <div className="flex min-h-screen flex-col bg-green-50 dark:bg-gray-900">
      <Navbar />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-white py-20 px-4">
          <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="w-full md:w-1/2 text-center md:text-left">
              <h1 className="text-3xl md:text-5xl font-bold text-green-800 mb-4">
                E-Trek
              </h1>
              <p className="text-md md:text-2xl mb-6 text-gray-700">
                {t('home.hero.title')}
              </p>
              <Button
                asChild
                className="bg-amber-900 text-white hover:bg-amber-800 transition"
              >
                <Link href="/faq">{t('home.hero.learnMoreBtn')}</Link>
              </Button>
            </div>
            <div className="w-full md:w-1/2 flex justify-center">
              <Image
                src="/images/homeimage1.jpg"
                alt="E-Trek cover"
                width={500}
                height={400}
                priority
                className="rounded-md object-cover select-none"
              />
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="bg-white py-20 px-6">
          <div className="container mx-auto">
            <Image
              src="/images/about.jpg"
              alt="عن المشروع"
              width={1200}
              height={500}
              className="rounded-lg object-cover w-full select-none"
            />
          </div>
        </section>

        {/* AI Usage Section */}
        <section className="bg-white py-20 px-6">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold text-green-800 mb-8">
              كيف يستخدم E-Trek الذكاء الاصطناعي لمكافحة التصحر؟
            </h2>
            <Image
              src="/images/ai.jpg"
              alt="الذكاء الاصطناعي"
              width={1200}
              height={500}
              className="rounded-lg object-cover w-full select-none"
            />
          </div>
        </section>

        {/* Features Section */}
        <section className="bg-white py-20 px-6">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold text-green-800 mb-8">
              ماذا يميزنا؟
            </h2>
            <div className="grid grid-cols-1 gap-8">
              {[
                'Feature11.jpg',
                'Feature22.jpg',
                'Feature33.jpg',
                'Feature44.jpg',
              ].map((img, idx) => (
                <Image
                  key={idx}
                  src={`/images/${img}`}
                  alt={`ميزة ${idx + 1}`}
                  width={1200}
                  height={500}
                  className="rounded-lg object-cover w-full select-none"
                />
              ))}
            </div>
          </div>
        </section>

        {/* Dashboard Demo Section */}
        <section className="relative w-full h-[600px]">
          <Image
            src="/images/laptop.png"
            alt="عرض لوحة تحكم E-Trek"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center bg-black/50">
            <Button
              asChild
              size="lg"
              className="bg-transparent border border-white text-white hover:bg-white/10"
            >
              <Link href="/dashboard">{t('home.hero.dashboardBtn')}</Link>
            </Button>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="container mx-auto py-24 sm:py-32 px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            الأسئلة{' '}
            <span className="bg-gradient-to-b from-green-400/60 to-green-700 text-transparent bg-clip-text">
              الشائعة
            </span>
          </h2>

          <div className="space-y-8">
            {faqList.map(({ question, answer }, idx) => (
              <div
                key={idx}
                className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6"
              >
                <h3 className="text-xl font-semibold mb-4 text-green-700 dark:text-green-400">
                  {question}
                </h3>
                <p className="text-gray-700 dark:text-gray-300">{answer}</p>
              </div>
            ))}
          </div>

          <h3 className="font-medium mt-12 text-center">
            هل لديك سؤال آخر؟{' '}
            <a
              href="https://wa.me/966583984034"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-600 hover:underline"
            >
              تواصل معنا
            </a>
          </h3>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white dark:bg-gray-800 border-t border-green-100 dark:border-gray-700 py-12 mt-12">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-6">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Image
                src="/images/logo.png"
                alt={language === 'ar' ? 'شعار إي-تريك' : 'E-Trek Logo'}
                width={40}
                height={40}
                className="object-contain"
              />
              <span className="text-xl font-bold text-green-800 dark:text-green-400">
                E-Trek
              </span>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              {t('footer.description')}
            </p>
          </div>

          <div>
            <h3 className="font-medium text-green-800 dark:text-green-400 mb-4">
              {t('footer.navigation')}
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-sm text-gray-600 hover:text-green-700 dark:text-gray-300"
                >
                  {t('nav.home')}
                </Link>
              </li>
              <li>
                <Link
                  href="/dashboard"
                  className="text-sm text-gray-600 hover:text-green-700 dark:text-gray-300"
                >
                  {t('nav.dashboard')}
                </Link>
              </li>
              <li>
                <Link
                  href="/faq"
                  className="text-sm text-gray-600 hover:text-green-700 dark:text-gray-300"
                >
                  {t('nav.faq')}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium text-green-800 dark:text-green-400 mb-4">
              {t('footer.resources')}
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#"
                  className="text-sm text-gray-600 hover:text-green-700 dark:text-gray-300"
                >
                  {t('footer.documentation')}
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-sm text-gray-600 hover:text-green-700 dark:text-gray-300"
                >
                  {t('footer.apiReference')}
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-sm text-gray-600 hover:text-green-700 dark:text-gray-300"
                >
                  {t('footer.dataPolicy')}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <a
              href="mailto:alrashidiiabrar@gmail.com"
              className="text-green-700 hover:underline font-medium"
            >
              {t('footer.link')}
            </a>
          </div>
        </div>

        <div className="text-center mt-8 text-sm text-gray-500 dark:text-gray-400">
          &copy; {new Date().getFullYear()} E-Trek. {t('footer.copyright')}
        </div>
      </footer>
    </div>
  )
}
