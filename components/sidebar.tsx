"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import {
  BarChart3,
  FileText,
  Home,
  Layers,
  Map,
  Settings,
  Droplets,
  Wind,
  Mountain,
  AlertTriangle,
  TreePine,
} from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { useLanguage } from "@/contexts/language-context"

interface SidebarProps {
  isOpen: boolean
}

export function Sidebar({ isOpen }: SidebarProps) {
  const [activeItem, setActiveItem] = useState("dashboard")
  const { language, t } = useLanguage()

  return (
    <aside
      className={cn(
        "fixed inset-y-0 z-20 flex w-64 flex-col border-green-100 bg-white transition-transform duration-300 md:translate-x-0 dark:bg-gray-800 dark:border-gray-700",
        language === "ar"
          ? "right-0 border-l" + (isOpen ? " translate-x-0" : " translate-x-full")
          : "left-0 border-r" + (isOpen ? " translate-x-0" : " -translate-x-full"),
      )}
    >
      <div className="border-b border-green-100 p-4 dark:border-gray-700">
        <div className="flex flex-col items-center gap-2">
          <div className="relative h-16 w-16">
            <Image
              src="/images/logo.png"
              alt={language === "ar" ? "شعار إي-تريك" : "E-Trek Logo"}
              fill
              className="object-contain"
              priority
            />
          </div>
          <div className="text-center">
            <h2 className="text-xl font-bold text-green-800 dark:text-green-400">{t("sidebar.title")}</h2>
            <p className="mt-1 text-xs text-green-600 dark:text-green-500">{t("sidebar.subtitle")}</p>
          </div>
        </div>
      </div>

      <ScrollArea className="flex-1 px-3 py-4">
        <nav className="space-y-1">
          <NavItem
            icon={Home}
            label={t("sidebar.dashboard")}
            isActive={activeItem === "dashboard"}
            onClick={() => setActiveItem("dashboard")}
          />
          <NavItem
            icon={Map}
            label={t("sidebar.maps")}
            isActive={activeItem === "maps"}
            onClick={() => setActiveItem("maps")}
          />
          <NavItem
            icon={BarChart3}
            label={t("sidebar.analytics")}
            isActive={activeItem === "analytics"}
            onClick={() => setActiveItem("analytics")}
          />
          <NavItem
            icon={FileText}
            label={t("sidebar.reports")}
            isActive={activeItem === "reports"}
            onClick={() => setActiveItem("reports")}
          />

          <div className="mt-6 mb-2 px-3">
            <h3 className="text-xs font-medium text-green-600 uppercase dark:text-green-500">{t("sidebar.envData")}</h3>
          </div>

          <NavItem
            icon={TreePine}
            label={t("sidebar.treeMonitoring")}
            isActive={activeItem === "trees"}
            onClick={() => setActiveItem("trees")}
          />
          <NavItem
            icon={Droplets}
            label={t("sidebar.droughtIndex")}
            isActive={activeItem === "spi"}
            onClick={() => setActiveItem("spi")}
          />
          <NavItem
            icon={Mountain}
            label={t("sidebar.soilErosion")}
            isActive={activeItem === "erosion"}
            onClick={() => setActiveItem("erosion")}
          />
          <NavItem
            icon={Wind}
            label={t("sidebar.landDegradation")}
            isActive={activeItem === "degradation"}
            onClick={() => setActiveItem("degradation")}
          />
          <NavItem
            icon={AlertTriangle}
            label={t("sidebar.riskAssessment")}
            isActive={activeItem === "risk"}
            onClick={() => setActiveItem("risk")}
          />

          <div className="mt-6 mb-2 px-3">
            <h3 className="text-xs font-medium text-green-600 uppercase dark:text-green-500">
              {t("sidebar.settings")}
            </h3>
          </div>

          <NavItem
            icon={Layers}
            label={t("sidebar.dataSources")}
            isActive={activeItem === "sources"}
            onClick={() => setActiveItem("sources")}
          />
          <NavItem
            icon={Settings}
            label={t("sidebar.preferences")}
            isActive={activeItem === "preferences"}
            onClick={() => setActiveItem("preferences")}
          />
        </nav>
      </ScrollArea>

      <div className="border-t border-green-100 p-4 dark:border-gray-700">
        <div className="flex items-center gap-3">
          <div>
            <p className="text-sm font-medium text-green-800 dark:text-green-400">{t("sidebar.adminUser")}</p>
            <p className="text-xs text-green-600 dark:text-green-500">{t("sidebar.envAnalyst")}</p>
          </div>
          <div className="h-8 w-8 rounded-full bg-green-200 flex items-center justify-center mr-auto dark:bg-green-900">
            <span className="text-sm font-medium text-green-800 dark:text-green-400">
              {language === "ar" ? "م س" : "AU"}
            </span>
          </div>
        </div>
      </div>
    </aside>
  )
}

interface NavItemProps {
  icon: React.ElementType
  label: string
  isActive: boolean
  onClick: () => void
}

function NavItem({ icon: Icon, label, isActive, onClick }: NavItemProps) {
  return (
    <Button
      variant="ghost"
      className={cn(
        "w-full justify-start gap-3 text-green-700 hover:bg-green-50 hover:text-green-800 dark:text-green-400 dark:hover:bg-gray-700 dark:hover:text-green-300",
        isActive && "bg-green-100 text-green-800 font-medium dark:bg-gray-700 dark:text-green-300",
      )}
      onClick={onClick}
    >
      <Icon className="h-4 w-4" />
      {label}
    </Button>
  )
}
