import { Navbar } from "@/components/shared/navbar"

export default function ReportsPage() {
  return (
    <div className="flex min-h-screen flex-col bg-green-50 dark:bg-gray-900">
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold text-green-800 dark:text-green-400 mb-6">Environmental Reports</h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
          This page is under construction. Environmental reports will be available soon.
        </p>
      </main>
    </div>
  )
}
