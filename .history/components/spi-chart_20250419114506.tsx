'use client'

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  ReferenceLine,
} from 'recharts'

// Mock data for SPI (Standardized Precipitation Index) values
const spiData = [
  { month: 'يناير', spi: -0.8 },
  { month: 'فبراير', spi: -1.2 },
  { month: 'مارس', spi: -1.5 },
  { month: 'أبريل', spi: -0.9 },
  { month: 'مايو', spi: -0.3 },
  { month: 'يونيو', spi: 0.2 },
  { month: 'يوليو', spi: 0.5 },
  { month: 'أغسطس', spi: 0.8 },
  { month: 'سبتمبر', spi: 0.3 },
  { month: 'أكتوبر', spi: -0.2 },
  { month: 'نوفمبر', spi: -0.5 },
  { month: 'ديسمبر', spi: -0.7 },
]

// Helper function to determine bar color based on SPI value
const getBarColor = (spi: number) => {
  if (spi <= -2) return '#D32F2F' // Extreme drought
  if (spi <= -1.5) return '#F57C00' // Severe drought
  if (spi <= -1) return '#FFA000' // Moderate drought
  if (spi < 0) return '#FFD54F' // Mild drought
  if (spi >= 2) return '#1B5E20' // Extremely wet
  if (spi >= 1.5) return '#2E7D32' // Very wet
  if (spi >= 1) return '#388E3C' // Moderately wet
  return '#81C784' // Near normal
}

export function SPIChart() {
  return (
    <div className="h-[400px] w-full">
      <div className="mb-4">
        <h3 className="text-lg font-semibold text-green-800">
          مؤشر هطول الأمطار القياسي (SPI)
        </h3>
        <p className="text-sm text-green-600">
          يقيس ظروف الجفاف: القيم السالبة تشير إلى الجفاف، والقيم الموجبة تشير
          إلى ظروف رطبة
        </p>
      </div>

      <div className="flex mb-4 text-sm">
        <div className="flex items-center ml-4">
          <div className="w-3 h-3 bg-red-600 ml-1 rounded-sm"></div>
          <span>جفاف شديد</span>
        </div>
        <div className="flex items-center ml-4">
          <div className="w-3 h-3 bg-orange-500 ml-1 rounded-sm"></div>
          <span>جفاف حاد</span>
        </div>
        <div className="flex items-center ml-4">
          <div className="w-3 h-3 bg-amber-500 ml-1 rounded-sm"></div>
          <span>جفاف متوسط</span>
        </div>
        <div className="flex items-center">
          <div className="w-3 h-3 bg-green-600 ml-1 rounded-sm"></div>
          <span>ظروف رطبة</span>
        </div>
      </div>

      <ResponsiveContainer width="100%" height="80%">
        <BarChart
          data={spiData}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#E8F5E9" />
          <XAxis
            dataKey="month"
            tick={{ fill: '#2E7D32' }}
            axisLine={{ stroke: '#C8E6C9' }}
          />
          <YAxis
            domain={[-2, 2]}
            tick={{ fill: '#2E7D32' }}
            axisLine={{ stroke: '#C8E6C9' }}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: '#FFFFFF',
              borderColor: '#81C784',
              borderRadius: '4px',
            }}
            formatter={(value: number) => [value.toFixed(2), 'قيمة SPI']}
          />
          <Legend />
          <ReferenceLine y={0} stroke="#66BB6A" strokeWidth={2} />
          <ReferenceLine y={-1} stroke="#FFA000" strokeDasharray="3 3" />
          <ReferenceLine y={-1.5} stroke="#F57C00" strokeDasharray="3 3" />
          <ReferenceLine y={-2} stroke="#D32F2F" strokeDasharray="3 3" />
          <Bar
            dataKey="spi"
            name="قيمة SPI"
            fill="#81C784"
            radius={[4, 4, 0, 0]}
            isAnimationActive={true}
            animationDuration={1000}
          >
            {spiData.map((entry, index) => (
              <rect key={`rect-${index}`} fill={getBarColor(entry.spi)} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}
