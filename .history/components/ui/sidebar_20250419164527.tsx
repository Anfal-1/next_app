'use client'

import * as React from 'react'
import { Menu } from 'lucide-react'
import { Sheet, SheetContent } from '@/components/ui/sheet'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

function useMediaQuery(query: string) {
  const [matches, setMatches] = React.useState(false)

  React.useEffect(() => {
    if (typeof window === 'undefined') return

    const media = window.matchMedia(query)
    const updateMatch = () => setMatches(media.matches)

    updateMatch()
    media.addEventListener('change', updateMatch)
    return () => media.removeEventListener('change', updateMatch)
  }, [query])

  return matches
}

export function Sidebar() {
  const [open, setOpen] = React.useState(false)
  const isMobile = useMediaQuery('(max-width: 768px)')

  const toggleSidebar = () => setOpen(prev => !prev)

  const trigger = (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleSidebar}
      aria-label="فتح القائمة"
    >
      <Menu />
    </Button>
  )

  if (!open) return trigger

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

  return (
    <>
      {trigger}
      <aside className="fixed left-0 top-0 z-40 h-full w-[250px] bg-white shadow-md p-4">
        <SidebarLinks onClose={() => setOpen(false)} />
      </aside>
    </>
  )
}

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
