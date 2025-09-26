"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ArrowLeft, Search, Filter, Grid, List } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import leadsData from "@/data/leads.json"

export default function LeadsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [filterSector, setFilterSector] = useState("all")
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")

  const filteredLeads = leadsData.filter((lead) => {
    const matchesSearch =
      lead.empresa.toLowerCase().includes(searchTerm.toLowerCase()) ||
      lead.sector.toLowerCase().includes(searchTerm.toLowerCase()) ||
      lead.ciudad.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesSector = filterSector === "all" || lead.sector === filterSector
    return matchesSearch && matchesSector
  })

  const sectors = [...new Set(leadsData.map((lead) => lead.sector))]

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
              <h1 className="text-2xl font-bold text-[#1A2B4C]">Todos los Leads</h1>
            </div>
            <div className="flex items-center space-x-2">
              <Button
                variant={viewMode === "grid" ? "default" : "outline"}
                size="sm"
                onClick={() => setViewMode("grid")}
                className="bg-[#008080] hover:bg-[#006666] text-white"
              >
                <Grid className="h-4 w-4" />
              </Button>
              <Button
                variant={viewMode === "list" ? "default" : "outline"}
                size="sm"
                onClick={() => setViewMode("list")}
                className="bg-[#008080] hover:bg-[#006666] text-white"
              >
                <List className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Filters */}
        <div className="mb-8 flex flex-col sm:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input
              placeholder="Buscar por empresa, sector o ciudad..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
          <Select value={filterSector} onValueChange={setFilterSector}>
            <SelectTrigger className="w-full sm:w-48">
              <Filter className="h-4 w-4 mr-2" />
              <SelectValue placeholder="Filtrar por sector" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Todos los sectores</SelectItem>
              {sectors.map((sector) => (
                <SelectItem key={sector} value={sector}>
                  {sector}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Results count */}
        <div className="mb-6">
          <p className="text-gray-600">
            Mostrando {filteredLeads.length} de {leadsData.length} leads disponibles
          </p>
        </div>

        {/* Leads Grid/List */}
        {viewMode === "grid" ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredLeads.map((lead, index) => (
              <motion.div
                key={lead.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="hover:shadow-lg transition-shadow cursor-pointer border-l-4 border-l-[#008080]">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <CardTitle className="text-lg text-[#1A2B4C]">{lead.empresa}</CardTitle>
                      <Badge
                        variant={lead.estado === "Disponible" ? "default" : "secondary"}
                        className={lead.estado === "Disponible" ? "bg-[#008080] text-white" : ""}
                      >
                        {lead.estado}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <p className="text-sm text-gray-600">
                        <span className="font-medium">Sector:</span> {lead.sector}
                      </p>
                      <p className="text-sm text-gray-600">
                        <span className="font-medium">Ciudad:</span> {lead.ciudad}
                      </p>
                      <p className="text-sm text-gray-600">
                        <span className="font-medium">Valoración:</span> {lead.valoracion}/5
                      </p>
                      <div className="pt-2">
                        <p className="text-lg font-bold text-[#F2C94C]">{lead.precio}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="space-y-4">
            {filteredLeads.map((lead, index) => (
              <motion.div
                key={lead.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05 }}
              >
                <Card className="hover:shadow-md transition-shadow cursor-pointer">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <div className="flex items-center space-x-4">
                          <h3 className="text-lg font-semibold text-[#1A2B4C]">{lead.empresa}</h3>
                          <Badge
                            variant={lead.estado === "Disponible" ? "default" : "secondary"}
                            className={lead.estado === "Disponible" ? "bg-[#008080] text-white" : ""}
                          >
                            {lead.estado}
                          </Badge>
                        </div>
                        <div className="mt-2 flex items-center space-x-6 text-sm text-gray-600">
                          <span>
                            <span className="font-medium">Sector:</span> {lead.sector}
                          </span>
                          <span>
                            <span className="font-medium">Ciudad:</span> {lead.ciudad}
                          </span>
                          <span>
                            <span className="font-medium">Valoración:</span> {lead.valoracion}/5
                          </span>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-xl font-bold text-[#F2C94C]">{lead.precio}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        )}

        {filteredLeads.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No se encontraron leads que coincidan con tu búsqueda.</p>
          </div>
        )}
      </div>
    </div>
  )
}
