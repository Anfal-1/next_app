'use client'

import * as React from 'react'
import { Sheet, SheetContent } from '@/components/ui/sheet'
import { cn } from '@/lib/utils'

export const SidebarContext = React.createContext<{
  open: boolean
  setOpen: (value: boolean) => void
  isMobile: boolean
}>({ open: false, setOpen: () => {}, isMobile: false })

export const useSidebar = () => React.useContext(SidebarContext)

export function SidebarProvider({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = React.useState(false)
  const [isMobile, setIsMobile] = React.useState(false)

  React.useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768)
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  return (
    <SidebarContext.Provider value={{ open, setOpen, isMobile }}>
      {children}
    </SidebarContext.Provider>
  )
}
