"use client"

import { useEffect, useState } from "react"
import { MapContainer, TileLayer, GeoJSON, LayersControl, Marker, Popup } from "react-leaflet"
import "leaflet/dist/leaflet.css"
import "leaflet-defaulticon-compatibility"
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css"
import { useLanguage } from "@/contexts/language-context"
import { useTheme } from "next-themes"

// بيانات GeoJSON تجريبية
const mockGeoJsonData = {
  type: "FeatureCollection",
  features: [
    {
      type: "Feature",
      properties: {
        name_ar: "منطقة غطاء نباتي مرتفع",
        name_en: "High Vegetation Area",
        ndvi: 0.78,
        risk_ar: "منخفض",
        risk_en: "Low",
      },
      geometry: {
        type: "Polygon",
        coordinates: [
          [
            [43.6, 26.2],
            [43.8, 26.2],
            [43.8, 26.4],
            [43.6, 26.4],
            [43.6, 26.2],
          ],
        ],
      },
    },
    {
      type: "Feature",
      properties: {
        name_ar: "منطقة غطاء نباتي متوسط",
        name_en: "Moderate Vegetation Area",
        ndvi: 0.45,
        risk_ar: "متوسط",
        risk_en: "Medium",
      },
      geometry: {
        type: "Polygon",
        coordinates: [
          [
            [43.9, 26.3],
            [44.1, 26.3],
            [44.1, 26.5],
            [43.9, 26.5],
            [43.9, 26.3],
          ],
        ],
      },
    },
    {
      type: "Feature",
      properties: {
        name_ar: "منطقة غطاء نباتي منخفض",
        name_en: "Low Vegetation Area",
        ndvi: 0.22,
        risk_ar: "مرتفع",
        risk_en: "High",
      },
      geometry: {
        type: "Polygon",
        coordinates: [
          [
            [43.7, 26.5],
            [43.9, 26.5],
            [43.9, 26.7],
            [43.7, 26.7],
            [43.7, 26.5],
          ],
        ],
      },
    },
  ],
}

// نمط التلوين حسب NDVI
const getStyle = (feature: any) => {
  const ndvi = feature.properties.ndvi

  if (ndvi > 0.6) {
    return { fillColor: "#2E7D32", color: "#1B5E20", weight: 1, fillOpacity: 0.7 }
  } else if (ndvi > 0.3) {
    return { fillColor: "#AED581", color: "#7CB342", weight: 1, fillOpacity: 0.7 }
  } else {
    return { fillColor: "#FFF59D", color: "#FBC02D", weight: 1, fillOpacity: 0.7 }
  }
}

export function MapView() {
  const [mounted, setMounted] = useState(false)
  const { language, t } = useLanguage()
  const { theme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted)
    return (
      <div className="h-full w-full bg-green-50 dark:bg-gray-800 flex items-center justify-center text-green-800 dark:text-green-400">
        {t("map.loading")}
      </div>
    )

  return (
    <MapContainer center={[26.3284, 43.7733]} zoom={9} style={{ height: "100%", width: "100%" }} zoomControl={false}>
      <LayersControl position="topright">
        <LayersControl.BaseLayer checked name={t("map.streets")}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
        </LayersControl.BaseLayer>
        <LayersControl.BaseLayer name={t("map.satellite")}>
          <TileLayer
            attribution="&copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community"
            url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
          />
        </LayersControl.BaseLayer>

        <LayersControl.Overlay checked name={t("map.ndviZones")}>
          <GeoJSON
            data={mockGeoJsonData as any}
            style={getStyle}
            onEachFeature={(feature, layer) => {
              const name = language === "ar" ? feature.properties.name_ar : feature.properties.name_en
              const risk = language === "ar" ? feature.properties.risk_ar : feature.properties.risk_en

              layer.bindPopup(`