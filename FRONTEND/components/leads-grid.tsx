"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Building2, MapPin, Star, Eye } from "lucide-react"
import leadsData from "@/data/leads.json"

interface Lead {
  id: string
  empresa: string
  sector: string
  ciudad: string
  estado: string
  telefono: string
  website: string
  email: string
  descripcion: string
  valoracion: number
  empleados: string
  facturacion: string
}

interface LeadsGridProps {
  onLeadSelect: (lead: Lead) => void
}

export function LeadsGrid({ onLeadSelect }: LeadsGridProps) {
  const [leads] = useState<Lead[]>(leadsData)

  const getStatusColor = (estado: string) => {
    switch (estado) {
      case "Disponible":
        return "bg-green-100 text-green-800 border-green-200"
      case "Vendido":
        return "bg-red-100 text-red-800 border-red-200"
      case "Reservado":
        return "bg-yellow-100 text-yellow-800 border-yellow-200"
      default:
        return "bg-gray-100 text-gray-800 border-gray-200"
    }
  }

  return (
    <section id="leads-section" className="py-16 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-nexdatec-navy mb-4">Leads Tokenizados Disponibles</h2>
          <p className="text-xl text-nexdatec-gray max-w-2xl mx-auto">
            Descubre oportunidades de negocio únicas convertidas en NFTs verificables
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {leads.map((lead, index) => (
            <motion.div
              key={lead.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-lg transition-all duration-300 border-nexdatec-gray/20 hover:border-nexdatec-teal/30">
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between mb-2">
                    <CardTitle className="text-lg font-semibold text-nexdatec-navy line-clamp-1">
                      {lead.empresa}
                    </CardTitle>
                    <Badge className={`text-xs ${getStatusColor(lead.estado)}`}>{lead.estado}</Badge>
                  </div>

                  <div className="flex items-center text-sm text-nexdatec-gray mb-2">
                    <Building2 className="w-4 h-4 mr-1" />
                    {lead.sector}
                  </div>

                  <div className="flex items-center text-sm text-nexdatec-gray">
                    <MapPin className="w-4 h-4 mr-1" />
                    {lead.ciudad}
                  </div>
                </CardHeader>

                <CardContent className="pt-0">
                  <div className="flex items-center mb-4">
                    <Star className="w-4 h-4 text-nexdatec-yellow fill-current mr-1" />
                    <span className="text-sm font-medium text-nexdatec-navy">{lead.valoracion}</span>
                    <span className="text-xs text-nexdatec-gray ml-1">({lead.empleados} empleados)</span>
                  </div>

                  <p className="text-sm text-nexdatec-gray mb-4 line-clamp-2">{lead.descripcion}</p>

                  <div className="flex items-center justify-between">
                    <div className="text-xs text-nexdatec-gray">NFT ID: {lead.id}</div>
                    <Button
                      size="sm"
                      onClick={() => onLeadSelect(lead)}
                      className="bg-nexdatec-teal hover:bg-nexdatec-teal/90 text-white"
                    >
                      <Eye className="w-4 h-4 mr-1" />
                      Ver Detalle
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
