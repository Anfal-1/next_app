"use client"

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts"
import { useLanguage } from "@/contexts/language-context"
import { useTheme } from "next-themes"

// Mock data for NDVI values over time
const ndviDataAr = [
  { month: "يناير", ndvi: 0.32, average: 0.28 },
  { month: "فبراير", ndvi: 0.38, average: 0.3 },
  { month: "مارس", ndvi: 0.45, average: 0.35 },
  { month: "أبريل", ndvi: 0.52, average: 0.42 },
  { month: "مايو", ndvi: 0.58, average: 0.48 },
  { month: "يونيو", ndvi: 0.48, average: 0.45 },
  { month: "يوليو", ndvi: 0.42, average: 0.4 },
  { month: "أغسطس", ndvi: 0.38, average: 0.38 },
  { month: "سبتمبر", ndvi: 0.35, average: 0.36 },
  { month: "أكتوبر", ndvi: 0.4, average: 0.38 },
  { month: "نوفمبر", ndvi: 0.45, average: 0.4 },
  { month: "ديسمبر", ndvi: 0.38, average: 0.35 },
]

const ndviDataEn = [
  { month: "Jan", ndvi: 0.32, average: 0.28 },
  { month: "Feb", ndvi: 0.38, average: 0.3 },
  { month: "Mar", ndvi: 0.45, average: 0.35 },
  { month: "Apr", ndvi: 0.52, average: 0.42 },
  { month: "May", ndvi: 0.58, average: 0.48 },
  { month: "Jun", ndvi: 0.48, average: 0.45 },
  { month: "Jul", ndvi: 0.42, average: 0.4 },
  { month: "Aug", ndvi: 0.38, average: 0.38 },
  { month: "Sep", ndvi: 0.35, average: 0.36 },
  { month: "Oct", ndvi: 0.4, average: 0.38 },
  { month: "Nov", ndvi: 0.45, average: 0.4 },
  { month: "Dec", ndvi: 0.38, average: 0.35 },
]

export  NDVIChart() {
  const { language, t } = useLanguage()
  const { theme } = useTheme()
  const isDark = theme === "dark"

  const ndviData = language === "ar" ? ndviDataAr : ndviDataEn

  return (
    <div className="h-full w-full">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={ndviData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" stroke={isDark ? "#374151" : "#E8F5E9"} />
          <XAxis
            dataKey="month"
            tick={{ fill: isDark ? "#A7F3D0" : "#2E7D32" }}
            axisLine={{ stroke: isDark ? "#4B5563" : "#C8E6C9" }}
          />
          <YAxis
            domain={[0, 1]}
            tick={{ fill: isDark ? "#A7F3D0" : "#2E7D32" }}
            axisLine={{ stroke: isDark ? "#4B5563" : "#C8E6C9" }}
            tickFormatter={(value) => value.toFixed(1)}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: isDark ? "#1F2937" : "#FFFFFF",
              borderColor: isDark ? "#4B5563" : "#81C784",
              borderRadius: "4px",
              color: isDark ? "#E5E7EB" : "inherit",
            }}
            formatter={(value: number) => [value.toFixed(2), t("ndvi.value")]}
          />
          <Legend />
          <Line
            type="monotone"
            dataKey="ndvi"
            name={t("ndvi.currentYear")}
            stroke={isDark ? "#10B981" : "#2E7D32"}
            strokeWidth={2}
            activeDot={{ r: 8, fill: isDark ? "#10B981" : "#2E7D32" }}
          />
          <Line
            type="monotone"
            dataKey="average"
            name={t("ndvi.fiveYearAvg")}
            stroke={isDark ? "#6EE7B7" : "#81C784"}
            strokeDasharray="5 5"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}
