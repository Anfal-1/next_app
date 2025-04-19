import { Navbar } from "@/components/shared/navbar"

export default function FAQPage() {
  return (
    <div className="flex min-h-screen flex-col bg-green-50 dark:bg-gray-900">
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold text-green-800 dark:text-green-400 mb-6">Frequently Asked Questions</h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
          This page is under construction. FAQ content will be available soon.
        </p>
      </main>
    </div>
  )
}
