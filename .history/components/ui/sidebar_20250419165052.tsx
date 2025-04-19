export function Sidebar({ isOpen }: { isOpen: boolean }) {
  const [isMounted, setIsMounted] = React.useState(false)
  const isMobile = useMediaQuery('(max-width: 768px)')

  React.useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted || !isOpen) return null

  if (isMobile) {
    return (
      <Sheet open={isOpen} onOpenChange={() => {}}>
        <SheetContent side="left" className="w-[250px] p-0">
          <div className="h-full bg-white border-r p-4 space-y-4">
            <SidebarLinks />
          </div>
        </SheetContent>
      </Sheet>
    )
  }

  return (
    <aside className="fixed left-0 top-0 z-40 h-full w-64 bg-white shadow-md p-4">
      <SidebarLinks />
    </aside>
  )
}
