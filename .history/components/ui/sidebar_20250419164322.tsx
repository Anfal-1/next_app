'use client'

import * as React from 'react'
import { Menu } from 'lucide-react'
import { Sheet, SheetContent } from '@/components/ui/sheet'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

export function Sidebar() {
  const [open, setOpen] = React.useState(false)
  const [isMobile, setIsMobile] = React.useState(false)

  // تحديث حالة الجهاز (جوال أو لا)
  React.useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768)
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])

  // ✅ الزر اللي يفتح السايدبار
  const trigger = (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setOpen(true)}
      aria-label="فتح القائمة"
    >
      <Menu />
    </Button>
  )

  // ✅ إذا مو مفتوح، لا تعرض شيء إلا الزر
  if (!open) return trigger

  // ✅ عرض للجوال (Sheet)
  if (isMobile) {
    return (
      <>
        {trigger}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetContent side="left" className="w-[250px] p-0">
            <div className="h-full bg-white border-r p-4 space-y-4">
              <SidebarLinks onClose={() => setOpen(false)} />
            </div>
          </SheetContent>
        </Sheet>
      </>
    )
  }

  // ✅ عرض لسطح المكتب
  return (
    <>
      {trigger}
      <aside className="fixed left-0 top-0 z-40 h-full w-[250px] bg-white shadow-md p-4">
        <SidebarLinks onClose={() => setOpen(false)} />
      </aside>
    </>
  )
}

// ✅ روابط القائمة
function SidebarLinks({ onClose }: { onClose?: () => void }) {
  return (
    <ul className="space-y-3">
      <li>
        <a
          href="/dashboard"
          onClick={onClose}
          className="block hover:text-green-700"
        >
          لوحة المعلومات
        </a>
      </li>
      <li>
        <a
          href="/maps"
          onClick={onClose}
          className="block hover:text-green-700"
        >
          الخرائط
        </a>
      </li>
      <li>
        <a
          href="/analysis"
          onClick={onClose}
          className="block hover:text-green-700"
        >
          التحليلات
        </a>
      </li>
      <li>
        <a
          href="/trees"
          onClick={onClose}
          className="block hover:text-green-700"
        >
          مراقبة الأشجار
        </a>
      </li>
      <li>
        <a href="/spi" onClick={onClose} className="block hover:text-green-700">
          مؤشر الجفاف (SPI)
        </a>
      </li>
    </ul>
  )
}
