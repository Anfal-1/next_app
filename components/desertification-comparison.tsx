"use client"

import { useState } from "react"
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from "recharts"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

// Mock data for desertification zones
const desertificationData = [
  { name: "شديد", value: 15, color: "#D32F2F" },
  { name: "مرتفع", value: 25, color: "#F57C00" },
  { name: "متوسط", value: 35, color: "#FFA000" },
  { name: "منخفض", value: 25, color: "#81C784" },
]

// Mock data for yearly comparison
const yearlyData = [
  { year: "2018", severe: 10, high: 20, moderate: 40, low: 30 },
  { year: "2019", severe: 12, high: 22, moderate: 38, low: 28 },
  { year: "2020", severe: 13, high: 23, moderate: 37, low: 27 },
  { year: "2021", severe: 14, high: 24, moderate: 36, low: 26 },
  { year: "2022", severe: 15, high: 25, moderate: 35, low: 25 },
]

export function DesertificationComparison() {
  const [selectedYear, setSelectedYear] = useState("2022")

  const currentYearData = yearlyData.find((item) => item.year === selectedYear)

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <Card>
        <CardContent className="p-4">
          <h3 className="text-lg font-semibold text-green-800 mb-4">توزيع مناطق التصحر</h3>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={desertificationData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  outerRadius={100}
                  fill="#8884d8"
                  dataKey="value"
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                >
                  {desertificationData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip
                  formatter={(value) => [`${value}%`, "تغطية المنطقة"]}
                  contentStyle={{ backgroundColor: "#FFFFFF", borderColor: "#81C784" }}
                />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="p-4">
          <h3 className="text-lg font-semibold text-green-800 mb-4">المقارنة السنوية</h3>
          <Tabs defaultValue="chart" className="w-full">
            <TabsList className="mb-4 bg-green-100">
              <TabsTrigger value="chart">عرض الرسم البياني</TabsTrigger>
              <TabsTrigger value="map">عرض الخريطة</TabsTrigger>
            </TabsList>

            <TabsContent value="chart">
              <div className="mb-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium text-green-700">اختر السنة:</span>
                  <div className="flex gap-2">
                    {yearlyData.map((item) => (
                      <button
                        key={item.year}
                        className={`px-3 py-1 text-sm rounded-md ${
                          selectedYear === item.year
                            ? "bg-green-600 text-white"
                            : "bg-green-100 text-green-800 hover:bg-green-200"
                        }`}
                        onClick={() => setSelectedYear(item.year)}
                      >
                        {item.year}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {currentYearData && (
                <div className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm font-medium">شديد</span>
                      <span className="text-sm font-medium">{currentYearData.severe}%</span>
                    </div>
                    <div className="h-2 bg-green-100 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-red-600 rounded-full"
                        style={{ width: `${currentYearData.severe}%` }}
                      ></div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm font-medium">مرتفع</span>
                      <span className="text-sm font-medium">{currentYearData.high}%</span>
                    </div>
                    <div className="h-2 bg-green-100 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-orange-500 rounded-full"
                        style={{ width: `${currentYearData.high}%` }}
                      ></div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm font-medium">متوسط</span>
                      <span className="text-sm font-medium">{currentYearData.moderate}%</span>
                    </div>
                    <div className="h-2 bg-green-100 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-amber-500 rounded-full"
                        style={{ width: `${currentYearData.moderate}%` }}
                      ></div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm font-medium">منخفض</span>
                      <span className="text-sm font-medium">{currentYearData.low}%</span>
                    </div>
                    <div className="h-2 bg-green-100 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-green-600 rounded-full"
                        style={{ width: `${currentYearData.low}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              )}
            </TabsContent>

            <TabsContent value="map">
              <div className="relative h-[250px] w-full bg-green-50 rounded-md overflow-hidden border border-green-100">
                <div className="absolute inset-0 flex items-center justify-center text-green-600">
                  <p className="text-center">
                    سيتم عرض مقارنة صور الأقمار الصناعية هنا.
                    <br />
                    عرض تقدم التصحر من 2018 إلى 2022.
                  </p>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  )
}
