"use client"
import { motion } from "framer-motion"
import { ArrowLeft, TrendingUp, Users, DollarSign, Activity, Star, Award } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import leadsData from "@/data/leads.json"

export default function MarketplacePage() {
  const totalLeads = leadsData.length
  const availableLeads = leadsData.filter((lead) => lead.estado === "Disponible").length
  const soldLeads = leadsData.filter((lead) => lead.estado === "Vendido").length
  const averageRating = (leadsData.reduce((sum, lead) => sum + lead.valoracion, 0) / totalLeads).toFixed(1)

  // Datos mock para usuarios activos
  const topUsers = [
    { id: 1, name: "María González", trades: 24, rating: 4.9, avatar: "MG" },
    { id: 2, name: "Carlos Rodríguez", trades: 18, rating: 4.8, avatar: "CR" },
    { id: 3, name: "Ana Martínez", trades: 15, rating: 4.7, avatar: "AM" },
    { id: 4, name: "Luis Fernández", trades: 12, rating: 4.6, avatar: "LF" },
    { id: 5, name: "Sofia López", trades: 10, rating: 4.5, avatar: "SL" },
  ]

  const sectorStats = leadsData.reduce(
    (acc, lead) => {
      if (!acc[lead.sector]) {
        acc[lead.sector] = { count: 0, avgRating: 0 }
      }
      acc[lead.sector].count++
      acc[lead.sector].avgRating =
        (acc[lead.sector].avgRating * (acc[lead.sector].count - 1) + lead.valoracion) / acc[lead.sector].count
      return acc
    },
    {} as Record<string, { count: number; avgRating: number }>,
  )

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link href="/">
                <Button variant="ghost" size="sm" className="text-[#1A2B4C]">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Volver al Dashboard
                </Button>
              </Link>
              <div className="h-6 w-px bg-gray-300" />
              <h1 className="text-2xl font-bold text-[#1A2B4C]">Marketplace</h1>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Estadísticas principales */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
            <Card className="border-l-4 border-l-[#008080]">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-gray-600">Total Leads</CardTitle>
                <Activity className="h-4 w-4 text-[#008080]" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-[#1A2B4C]">{totalLeads}</div>
                <p className="text-xs text-gray-600 mt-1">NFTs tokenizados</p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
            <Card className="border-l-4 border-l-[#4A90E2]">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-gray-600">Disponibles</CardTitle>
                <TrendingUp className="h-4 w-4 text-[#4A90E2]" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-[#1A2B4C]">{availableLeads}</div>
                <p className="text-xs text-gray-600 mt-1">Listos para comprar</p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
            <Card className="border-l-4 border-l-[#F2C94C]">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-gray-600">Vendidos</CardTitle>
                <DollarSign className="h-4 w-4 text-[#F2C94C]" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-[#1A2B4C]">{soldLeads}</div>
                <p className="text-xs text-gray-600 mt-1">Transacciones completadas</p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
            <Card className="border-l-4 border-l-[#7A869A]">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-gray-600">Valoración Promedio</CardTitle>
                <Star className="h-4 w-4 text-[#7A869A]" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-[#1A2B4C]">{averageRating}</div>
                <p className="text-xs text-gray-600 mt-1">De 5 estrellas</p>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Usuarios más activos */}
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5 }}>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-[#1A2B4C]">
                  <Users className="h-5 w-5 mr-2 text-[#008080]" />
                  Usuarios Más Activos
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {topUsers.map((user, index) => (
                    <div key={user.id} className="flex items-center justify-between p-3 rounded-lg bg-gray-50">
                      <div className="flex items-center space-x-3">
                        <div className="flex items-center justify-center w-10 h-10 rounded-full bg-[#008080] text-white font-semibold">
                          {user.avatar}
                        </div>
                        <div>
                          <p className="font-medium text-[#1A2B4C]">{user.name}</p>
                          <p className="text-sm text-gray-600">{user.trades} transacciones</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="flex items-center space-x-1">
                          <Star className="h-4 w-4 text-[#F2C94C] fill-current" />
                          <span className="text-sm font-medium">{user.rating}</span>
                        </div>
                        {index < 3 && (
                          <Badge variant="secondary" className="mt-1">
                            <Award className="h-3 w-3 mr-1" />
                            Top {index + 1}
                          </Badge>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Estadísticas por sector */}
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.6 }}>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-[#1A2B4C]">
                  <TrendingUp className="h-5 w-5 mr-2 text-[#008080]" />
                  Distribución por Sector
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {Object.entries(sectorStats).map(([sector, stats]) => {
                    const percentage = (stats.count / totalLeads) * 100
                    return (
                      <div key={sector} className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="text-sm font-medium text-[#1A2B4C]">{sector}</span>
                          <span className="text-sm text-gray-600">{stats.count} leads</span>
                        </div>
                        <Progress value={percentage} className="h-2" />
                        <div className="flex justify-between text-xs text-gray-500">
                          <span>{percentage.toFixed(1)}% del total</span>
                          <span>Valoración promedio: {stats.avgRating.toFixed(1)}/5</span>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Actividad reciente */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="mt-8"
        >
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center text-[#1A2B4C]">
                <Activity className="h-5 w-5 mr-2 text-[#008080]" />
                Actividad Reciente
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  { action: "Nuevo lead tokenizado", company: "TechCorp Solutions", time: "Hace 2 horas", type: "new" },
                  { action: "Lead vendido", company: "Fashion Forward", time: "Hace 4 horas", type: "sold" },
                  { action: "Usuario registrado", company: "Ana Martínez", time: "Hace 6 horas", type: "user" },
                  {
                    action: "Lead actualizado",
                    company: "HealthTech Innovations",
                    time: "Hace 8 horas",
                    type: "update",
                  },
                ].map((activity, index) => (
                  <div key={index} className="flex items-center justify-between p-3 rounded-lg border">
                    <div className="flex items-center space-x-3">
                      <div
                        className={`w-2 h-2 rounded-full ${
                          activity.type === "new"
                            ? "bg-[#008080]"
                            : activity.type === "sold"
                              ? "bg-[#F2C94C]"
                              : activity.type === "user"
                                ? "bg-[#4A90E2]"
                                : "bg-[#7A869A]"
                        }`}
                      />
                      <div>
                        <p className="font-medium text-[#1A2B4C]">{activity.action}</p>
                        <p className="text-sm text-gray-600">{activity.company}</p>
                      </div>
                    </div>
                    <span className="text-sm text-gray-500">{activity.time}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}
