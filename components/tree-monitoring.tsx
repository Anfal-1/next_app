"use client"

import { useState } from "react"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts"
import { MapContainer, TileLayer, CircleMarker, Popup, LayersControl, GeoJSON } from "react-leaflet"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { AlertTriangle, ArrowUpRight, Calendar, Leaf, MapPin, TreePine } from "lucide-react"

// Mock data for tree planting activity
const treePlantingData = [
  { month: "يناير", trees: 320, target: 400 },
  { month: "فبراير", trees: 450, target: 400 },
  { month: "مارس", trees: 580, target: 400 },
  { month: "أبريل", trees: 620, target: 400 },
  { month: "مايو", trees: 750, target: 400 },
  { month: "يونيو", trees: 890, target: 400 },
  { month: "يوليو", trees: 1020, target: 400 },
  { month: "أغسطس", trees: 850, target: 400 },
  { month: "سبتمبر", trees: 680, target: 400 },
  { month: "أكتوبر", trees: 720, target: 400 },
  { month: "نوفمبر", trees: 380, target: 400 },
  { month: "ديسمبر", trees: 270, target: 400 },
]

// Update the afforestation sites coordinates to be around Al-Qassim region
const afforestationSites = [
  {
    id: 1,
    name: "الحزام الأخضر الشمالي",
    location: [26.4284, 43.8733],
    treeCount: 2450,
    healthStatus: "جيد",
    species: ["السنط", "الغاف", "السدر"],
    lastInspection: "2023-03-15",
  },
  {
    id: 2,
    name: "مستجمع المياه الشرقي",
    location: [26.3584, 43.9733],
    treeCount: 1870,
    healthStatus: "متوسط",
    species: ["الغاف", "نخيل التمر", "الطرفاء"],
    lastInspection: "2023-04-02",
  },
  {
    id: 3,
    name: "الواحة المركزية",
    location: [26.2584, 43.7433],
    treeCount: 3210,
    healthStatus: "جيد",
    species: ["نخيل التمر", "السنط", "السدر"],
    lastInspection: "2023-03-28",
  },
  {
    id: 4,
    name: "الممر الجنوبي",
    location: [26.1584, 43.6733],
    treeCount: 1250,
    healthStatus: "ضعيف",
    species: ["الغاف", "الطرفاء"],
    lastInspection: "2023-04-10",
  },
]

// Update the GeoJSON data for afforested areas to be around Al-Qassim
const afforestedAreasGeoJson = {
  type: "FeatureCollection",
  features: [
    {
      type: "Feature",
      properties: {
        name: "الحزام الأخضر الشمالي",
        treeCount: 2450,
        healthStatus: "جيد",
        coverage: "85%",
      },
      geometry: {
        type: "Polygon",
        coordinates: [
          [
            [43.8233, 26.3784],
            [43.9233, 26.3784],
            [43.9233, 26.4784],
            [43.8233, 26.4784],
            [43.8233, 26.3784],
          ],
        ],
      },
    },
    {
      type: "Feature",
      properties: {
        name: "مستجمع المياه الشرقي",
        treeCount: 1870,
        healthStatus: "متوسط",
        coverage: "65%",
      },
      geometry: {
        type: "Polygon",
        coordinates: [
          [
            [43.9233, 26.3284],
            [44.0233, 26.3284],
            [44.0233, 26.4284],
            [43.9233, 26.4284],
            [43.9233, 26.3284],
          ],
        ],
      },
    },
    {
      type: "Feature",
      properties: {
        name: "الواحة المركزية",
        treeCount: 3210,
        healthStatus: "جيد",
        coverage: "90%",
      },
      geometry: {
        type: "Polygon",
        coordinates: [
          [
            [43.7233, 26.2284],
            [43.8233, 26.2284],
            [43.8233, 26.3284],
            [43.7233, 26.3284],
            [43.7233, 26.2284],
          ],
        ],
      },
    },
    {
      type: "Feature",
      properties: {
        name: "الممر الجنوبي",
        treeCount: 1250,
        healthStatus: "ضعيف",
        coverage: "40%",
      },
      geometry: {
        type: "Polygon",
        coordinates: [
          [
            [43.6733, 26.1284],
            [43.7733, 26.1284],
            [43.7733, 26.2284],
            [43.6733, 26.2284],
            [43.6733, 26.1284],
          ],
        ],
      },
    },
  ],
}

// Style function for GeoJSON layers
const getAfforestationStyle = (feature: any) => {
  const healthStatus = feature.properties.healthStatus

  if (healthStatus === "جيد") {
    return { fillColor: "#2E7D32", color: "#1B5E20", weight: 1, fillOpacity: 0.5 }
  } else if (healthStatus === "متوسط") {
    return { fillColor: "#AED581", color: "#7CB342", weight: 1, fillOpacity: 0.5 }
  } else {
    return { fillColor: "#FFF59D", color: "#FBC02D", weight: 1, fillOpacity: 0.5 }
  }
}

// Get marker color based on health status
const getMarkerColor = (status: string) => {
  switch (status) {
    case "جيد":
      return "#2E7D32"
    case "متوسط":
      return "#FBC02D"
    case "ضعيف":
      return "#D32F2F"
    default:
      return "#2E7D32"
  }
}

export function TreeMonitoring() {
  const [viewType, setViewType] = useState<"yearly" | "monthly">("monthly")
  const [mounted, setMounted] = useState(false)

  // Calculate total trees planted
  const totalTreesPlanted = treePlantingData.reduce((sum, item) => sum + item.trees, 0)

  // Calculate yearly target
  const yearlyTarget = treePlantingData.reduce((sum, item) => sum + item.target, 0)

  // Calculate progress percentage
  const progressPercentage = Math.round((totalTreesPlanted / yearlyTarget) * 100)

  // Sites with poor health for alerts
  const poorHealthSites = afforestationSites.filter((site) => site.healthStatus === "ضعيف")

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Summary Card */}
        <Card className="md:col-span-1 bg-gradient-to-br from-green-50 to-white">
          <CardContent className="p-6">
            <div className="flex flex-col space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center ml-3">
                    <TreePine className="h-6 w-6 text-green-700" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-green-800">إجمالي الأشجار المزروعة</h3>
                    <p className="text-sm text-green-600">مبادرة التشجير السنوية</p>
                  </div>
                </div>
              </div>

              <div className="mt-2">
                <div className="flex items-end justify-between">
                  <div>
                    <p className="text-4xl font-bold text-green-800">{totalTreesPlanted.toLocaleString("ar-SA")}</p>
                    <p className="text-sm text-green-600">شجرة مزروعة هذا العام</p>
                  </div>
                  <div className="flex items-center text-emerald-600">
                    <ArrowUpRight className="ml-1 h-4 w-4" />
                    <span className="text-sm font-medium">+23%</span>
                  </div>
                </div>

                <div className="mt-4 space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-green-700 font-medium">التقدم</span>
                    <span className="text-green-700 font-medium">{progressPercentage}%</span>
                  </div>
                  <Progress value={progressPercentage} className="h-2 bg-green-100" indicatorClassName="bg-green-600" />
                  <p className="text-xs text-green-600">الهدف: {yearlyTarget.toLocaleString("ar-SA")} شجرة</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mt-2">
                <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                  <Leaf className="ml-1 h-3 w-3" />4 مواقع نشطة
                </Badge>
                <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                  <Calendar className="ml-1 h-3 w-3" />
                  مراقبة شهرية
                </Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Tree Planting Activity Chart */}
        <Card className="md:col-span-2">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-lg font-semibold text-green-800">نشاط زراعة الأشجار</h3>
                <p className="text-sm text-green-600">تقدم الزراعة الشهري مقابل الأهداف</p>
              </div>
              <div className="flex bg-green-100 rounded-md p-0.5">
                <Button
                  variant="ghost"
                  size="sm"
                  className={`px-3 py-1 text-xs rounded-md ${
                    viewType === "monthly" ? "bg-green-600 text-white" : "bg-transparent text-green-700"
                  }`}
                  onClick={() => setViewType("monthly")}
                >
                  شهري
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className={`px-3 py-1 text-xs rounded-md ${
                    viewType === "yearly" ? "bg-green-600 text-white" : "bg-transparent text-green-700"
                  }`}
                  onClick={() => setViewType("yearly")}
                >
                  سنوي
                </Button>
              </div>
            </div>

            <div className="h-[250px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={treePlantingData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#E8F5E9" />
                  <XAxis dataKey="month" tick={{ fill: "#2E7D32" }} axisLine={{ stroke: "#C8E6C9" }} />
                  <YAxis tick={{ fill: "#2E7D32" }} axisLine={{ stroke: "#C8E6C9" }} />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "#FFFFFF",
                      borderColor: "#81C784",
                      borderRadius: "4px",
                    }}
                    formatter={(value: number) => [`${value} شجرة`, "العدد"]}
                  />
                  <Legend />
                  <Bar
                    dataKey="trees"
                    name="الأشجار المزروعة"
                    fill="#2E7D32"
                    radius={[4, 4, 0, 0]}
                    isAnimationActive={true}
                  />
                  <Bar
                    dataKey="target"
                    name="الهدف الشهري"
                    fill="#A5D6A7"
                    radius={[4, 4, 0, 0]}
                    isAnimationActive={true}
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Alerts for Poor Health Sites */}
      {poorHealthSites.length > 0 && (
        <Alert variant="destructive" className="bg-red-50 border-red-200 text-red-800">
          <AlertTriangle className="h-4 w-4" />
          <AlertTitle>تم اكتشاف صحة نباتية منخفضة</AlertTitle>
          <AlertDescription>
            {poorHealthSites.map((site) => (
              <div key={site.id} className="mt-2">
                <span className="font-medium">{site.name}:</span> يتطلب اهتمامًا فوريًا. صحة الأشجار ضعيفة مع مخاطر محتملة
                على معدل البقاء.
              </div>
            ))}
          </AlertDescription>
        </Alert>
      )}

      {/* Afforestation Map */}
      <Tabs defaultValue="map" className="w-full">
        <div className="flex justify-between items-center mb-4">
          <div>
            <h3 className="text-lg font-semibold text-green-800">مواقع التشجير</h3>
            <p className="text-sm text-green-600">التوزيع الجغرافي لمبادرات زراعة الأشجار</p>
          </div>
          <TabsList className="bg-green-100">
            <TabsTrigger value="map">عرض الخريطة</TabsTrigger>
            <TabsTrigger value="list">عرض القائمة</TabsTrigger>
          </TabsList>
        </div>

        <TabsContent value="map">
          <div className="h-[400px] w-full rounded-md overflow-hidden border border-green-100">
            <MapContainer
              center={[26.3284, 43.7733]}
              zoom={10}
              style={{ height: "100%", width: "100%" }}
              zoomControl={false}
            >
              <LayersControl position="topright">
                <LayersControl.BaseLayer checked name="خريطة الشوارع">
                  <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  />
                </LayersControl.BaseLayer>
                <LayersControl.BaseLayer name="صور الأقمار الصناعية">
                  <TileLayer
                    attribution="&copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community"
                    url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
                  />
                </LayersControl.BaseLayer>

                <LayersControl.Overlay checked name="مناطق التشجير">
                  <GeoJSON
                    data={afforestedAreasGeoJson as any}
                    style={getAfforestationStyle}
                    onEachFeature={(feature, layer) => {
                      layer.bindPopup(`
                        <strong>${feature.properties.name}</strong><br/>
                        الأشجار: ${feature.properties.treeCount}<br/>
                        الصحة: ${feature.properties.healthStatus}<br/>
                        التغطية: ${feature.properties.coverage}
                      `)
                    }}
                  />
                </LayersControl.Overlay>

                <LayersControl.Overlay checked name="مواقع المراقبة">
                  {afforestationSites.map((site) => (
                    <CircleMarker
                      key={site.id}
                      center={[site.location[0], site.location[1]]}
                      radius={8}
                      pathOptions={{
                        fillColor: getMarkerColor(site.healthStatus),
                        color: getMarkerColor(site.healthStatus),
                        fillOpacity: 0.7,
                      }}
                    >
                      <Popup>
                        <div>
                          <h3 className="font-bold">{site.name}</h3>
                          <p>الأشجار المزروعة: {site.treeCount}</p>
                          <p>حالة الصحة: {site.healthStatus}</p>
                          <p>الأنواع: {site.species.join(", ")}</p>
                          <p>آخر فحص: {site.lastInspection}</p>
                        </div>
                      </Popup>
                    </CircleMarker>
                  ))}
                </LayersControl.Overlay>
              </LayersControl>
            </MapContainer>
          </div>
        </TabsContent>

        <TabsContent value="list">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {afforestationSites.map((site) => (
              <Card
                key={site.id}
                className={`border-r-4 ${
                  site.healthStatus === "جيد"
                    ? "border-r-green-600"
                    : site.healthStatus === "متوسط"
                      ? "border-r-amber-500"
                      : "border-r-red-600"
                }`}
              >
                <CardContent className="p-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-semibold text-green-800">{site.name}</h4>
                      <div className="flex items-center text-green-600 text-sm mt-1">
                        <MapPin className="h-3 w-3 ml-1" />
                        <span>
                          الإحداثيات: {site.location[0].toFixed(2)}, {site.location[1].toFixed(2)}
                        </span>
                      </div>
                    </div>
                    <Badge
                      className={`${
                        site.healthStatus === "جيد"
                          ? "bg-green-100 text-green-800 hover:bg-green-100"
                          : site.healthStatus === "متوسط"
                            ? "bg-amber-100 text-amber-800 hover:bg-amber-100"
                            : "bg-red-100 text-red-800 hover:bg-red-100"
                      }`}
                    >
                      {site.healthStatus}
                    </Badge>
                  </div>

                  <div className="mt-3 grid grid-cols-2 gap-2 text-sm">
                    <div>
                      <span className="text-green-600">الأشجار المزروعة:</span>
                      <p className="font-medium">{site.treeCount}</p>
                    </div>
                    <div>
                      <span className="text-green-600">الأنواع:</span>
                      <p className="font-medium">{site.species.join(", ")}</p>
                    </div>
                    <div>
                      <span className="text-green-600">آخر فحص:</span>
                      <p className="font-medium">{site.lastInspection}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
