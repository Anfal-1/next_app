'use client'

import { useState } from 'react'
import { ArrowUpDown, Download, Filter } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { Input } from '@/components/ui/input'

// Mock data for soil erosion measurements
const erosionData = [
  {
    id: '1',
    location: 'سهول القصيم الشمالية',
    erosionRate: 15.2,
    riskLevel: 'متوسط',
    soilType: 'طمي رملي',
    slope: '2-5%',
    vegetation: 'منخفض',
    lastUpdated: '2023-04-15',
  },
  {
    id: '2',
    location: 'مرتفعات بريدة الشرقية',
    erosionRate: 25.7,
    riskLevel: 'مرتفع',
    soilType: 'طيني',
    slope: '5-10%',
    vegetation: 'متوسط',
    lastUpdated: '2023-04-12',
  },
  {
    id: '3',
    location: 'وادي الرمة',
    erosionRate: 8.3,
    riskLevel: 'منخفض',
    soilType: 'طمي',
    slope: '0-2%',
    vegetation: 'مرتفع',
    lastUpdated: '2023-04-18',
  },
  {
    id: '4',
    location: 'هضبة عنيزة الغربية',
    erosionRate: 32.1,
    riskLevel: 'مرتفع جدًا',
    soilType: 'رملي',
    slope: '>10%',
    vegetation: 'منخفض جدًا',
    lastUpdated: '2023-04-10',
  },
  {
    id: '5',
    location: 'وادي البكيرية',
    erosionRate: 12.8,
    riskLevel: 'متوسط',
    soilType: 'طيني طمي',
    slope: '2-5%',
    vegetation: 'متوسط',
    lastUpdated: '2023-04-14',
  },
]

// Helper function to get color based on risk level
const getRiskColor = (risk: string) => {
  switch (risk) {
    case 'مرتفع جدًا':
      return 'bg-red-100 text-red-800'
    case 'مرتفع':
      return 'bg-orange-100 text-orange-800'
    case 'متوسط':
      return 'bg-amber-100 text-amber-800'
    case 'منخفض':
      return 'bg-green-100 text-green-800'
    default:
      return 'bg-gray-100 text-gray-800'
  }
}

export function SoilErosionTable() {
  const [searchTerm, setSearchTerm] = useState('')

  const filteredData = erosionData.filter(
    item =>
      item.location.includes(searchTerm) ||
      item.soilType.includes(searchTerm) ||
      item.riskLevel.includes(searchTerm)
  )

  return (
    <div>
      <div className="mb-4">
        <h3 className="text-lg font-semibold text-green-800">
          قياسات تآكل التربة
        </h3>
        <p className="text-sm text-green-600">
          بيانات تفصيلية عن التآكل عبر مناطق مختلفة (طن/هكتار/سنة)
        </p>
      </div>

      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-4">
        <div className="relative w-full sm:w-64">
          <Input
            placeholder="البحث عن المواقع، أنواع التربة..."
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
            className="pr-8 bg-white"
          />
          <Filter className="absolute right-2.5 top-2.5 h-4 w-4 text-green-600" />
        </div>

        <div className="flex items-center gap-2">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="border-green-200">
                <Filter className="ml-2 h-4 w-4" /> تصفية
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuCheckboxItem checked>
                مناطق عالية المخاطر
              </DropdownMenuCheckboxItem>
              <DropdownMenuCheckboxItem checked>
                مناطق متوسطة المخاطر
              </DropdownMenuCheckboxItem>
              <DropdownMenuCheckboxItem checked>
                مناطق منخفضة المخاطر
              </DropdownMenuCheckboxItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <Button variant="outline" className="border-green-200">
            <Download className="ml-2 h-4 w-4" /> تصدير
          </Button>
        </div>
      </div>

      <div className="rounded-md border border-green-100">
        <Table>
          <TableHeader className="bg-green-50">
            <TableRow>
              <TableHead className="text-green-800">الموقع</TableHead>
              <TableHead className="text-green-800">
                <div className="flex items-center">
                  معدل التآكل
                  <ArrowUpDown className="mr-1 h-4 w-4" />
                </div>
              </TableHead>
              <TableHead className="text-green-800">مستوى الخطر</TableHead>
              <TableHead className="text-green-800 hidden md:table-cell">
                نوع التربة
              </TableHead>
              <TableHead className="text-green-800 hidden md:table-cell">
                الانحدار
              </TableHead>
              <TableHead className="text-green-800 hidden lg:table-cell">
                الغطاء النباتي
              </TableHead>
              <TableHead className="text-green-800 hidden lg:table-cell">
                آخر تحديث
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredData.map(item => (
              <TableRow key={item.id} className="hover:bg-green-50">
                <TableCell className="font-medium">{item.location}</TableCell>
                <TableCell>{item.erosionRate} طن/هكتار/سنة</TableCell>
                <TableCell>
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-medium ${getRiskColor(
                      item.riskLevel
                    )}`}
                  >
                    {item.riskLevel}
                  </span>
                </TableCell>
                <TableCell className="hidden md:table-cell">
                  {item.soilType}
                </TableCell>
                <TableCell className="hidden md:table-cell">
                  {item.slope}
                </TableCell>
                <TableCell className="hidden lg:table-cell">
                  {item.vegetation}
                </TableCell>
                <TableCell className="hidden lg:table-cell">
                  {item.lastUpdated}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}
