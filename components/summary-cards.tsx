"use client"

import { ArrowDown, ArrowUp, Droplets, Leaf, Mountain } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { useLanguage } from "@/contexts/language-context"

export function SummaryCards() {
  const { language, t } = useLanguage()

  return (
    <>
      <Card className="dark:bg-gray-800 dark:border-gray-700">
        <CardHeader className="pb-2">
          <CardTitle className="text-lg font-semibold flex items-center text-green-800 dark:text-green-400">
            <Leaf className={`${language === "ar" ? "ml-2" : "mr-2"} h-5 w-5 text-green-600 dark:text-green-500`} />
            {t("cards.vegHealth")}
          </CardTitle>
          <CardDescription className="text-green-600 dark:text-green-500">{t("cards.ndviIndex")}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-end justify-between">
            <div>
              <p className="text-3xl font-bold text-green-800 dark:text-green-400">0.47</p>
              <p className="text-sm text-green-600 dark:text-green-500">{t("cards.modVeg")}</p>
            </div>
            <div className="flex items-center text-emerald-600 dark:text-emerald-400">
              <ArrowUp className={`${language === "ar" ? "ml-1" : "mr-1"} h-4 w-4`} />
              <span className="text-sm font-medium">+12%</span>
            </div>
          </div>
          <Progress
            value={47}
            className="mt-4 bg-green-100 dark:bg-gray-700"
            indicatorClassName="bg-green-600 dark:bg-green-500"
          />
          <p className="mt-2 text-xs text-green-600 dark:text-green-500">47% {t("cards.optVegHealth")}</p>
        </CardContent>
      </Card>

      <Card className="dark:bg-gray-800 dark:border-gray-700">
        <CardHeader className="pb-2">
          <CardTitle className="text-lg font-semibold flex items-center text-green-800 dark:text-green-400">
            <Droplets className={`${language === "ar" ? "ml-2" : "mr-2"} h-5 w-5 text-blue-600 dark:text-blue-400`} />
            {t("cards.droughtStatus")}
          </CardTitle>
          <CardDescription className="text-green-600 dark:text-green-500">{t("cards.spiIndex")}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-end justify-between">
            <div>
              <p className="text-3xl font-bold text-amber-600 dark:text-amber-500">-1.2</p>
              <p className="text-sm text-green-600 dark:text-green-500">{t("cards.modDrought")}</p>
            </div>
            <div className="flex items-center text-red-600 dark:text-red-400">
              <ArrowDown className={`${language === "ar" ? "ml-1" : "mr-1"} h-4 w-4`} />
              <span className="text-sm font-medium">-8%</span>
            </div>
          </div>
          <Progress value={30} className="mt-4 bg-green-100 dark:bg-gray-700" indicatorClassName="bg-amber-500" />
          <p className="mt-2 text-xs text-green-600 dark:text-green-500">30% {t("cards.normalPrecip")}</p>
        </CardContent>
      </Card>

      <Card className="dark:bg-gray-800 dark:border-gray-700">
        <CardHeader className="pb-2">
          <CardTitle className="text-lg font-semibold flex items-center text-green-800 dark:text-green-400">
            <Mountain className={`${language === "ar" ? "ml-2" : "mr-2"} h-5 w-5 text-green-800 dark:text-green-400`} />
            {t("cards.soilErosionRisk")}
          </CardTitle>
          <CardDescription className="text-green-600 dark:text-green-500">{t("cards.rusleModel")}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-end justify-between">
            <div>
              <p className="text-3xl font-bold text-green-700 dark:text-green-500">18.5</p>
              <p className="text-sm text-green-600 dark:text-green-500">{t("cards.tonHectareYear")}</p>
            </div>
            <div className="flex items-center text-amber-600 dark:text-amber-400">
              <ArrowUp className={`${language === "ar" ? "ml-1" : "mr-1"} h-4 w-4`} />
              <span className="text-sm font-medium">+5%</span>
            </div>
          </div>
          <Progress
            value={62}
            className="mt-4 bg-green-100 dark:bg-gray-700"
            indicatorClassName="bg-green-700 dark:bg-green-600"
          />
          <p className="mt-2 text-xs text-green-600 dark:text-green-500">62% {t("cards.highRiskThreshold")}</p>
        </CardContent>
      </Card>
    </>
  )
}
