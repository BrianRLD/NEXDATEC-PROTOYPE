"use client"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import {
  Building2,
  MapPin,
  Phone,
  Globe,
  Mail,
  Star,
  Users,
  DollarSign,
  ShoppingCart,
  ArrowRightLeft,
} from "lucide-react"

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

interface LeadDetailModalProps {
  lead: Lead | null
  isOpen: boolean
  onClose: () => void
}

export function LeadDetailModal({ lead, isOpen, onClose }: LeadDetailModalProps) {
  if (!lead) return null

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
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <div className="flex items-start justify-between">
            <div>
              <DialogTitle className="text-2xl font-bold text-nexdatec-navy mb-2">{lead.empresa}</DialogTitle>
              <Badge className={`${getStatusColor(lead.estado)} mb-4`}>{lead.estado}</Badge>
            </div>
          </div>
        </DialogHeader>

        <div className="space-y-6">
          {/* NFT Info */}
          <div className="bg-nexdatec-teal/5 p-4 rounded-lg border border-nexdatec-teal/20">
            <h3 className="font-semibold text-nexdatec-navy mb-2">Información NFT</h3>
            <div className="text-sm text-nexdatec-gray">
              <strong>Token ID:</strong> {lead.id}
            </div>
            <div className="text-sm text-nexdatec-gray">
              <strong>Blockchain:</strong> Ethereum (Simulado)
            </div>
            <div className="text-sm text-nexdatec-gray">
              <strong>Estándar:</strong> ERC-721
            </div>
          </div>

          {/* Company Details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-3">
              <div className="flex items-center text-nexdatec-gray">
                <Building2 className="w-5 h-5 mr-3 text-nexdatec-teal" />
                <div>
                  <div className="text-sm font-medium text-nexdatec-navy">Sector</div>
                  <div className="text-sm">{lead.sector}</div>
                </div>
              </div>

              <div className="flex items-center text-nexdatec-gray">
                <MapPin className="w-5 h-5 mr-3 text-nexdatec-teal" />
                <div>
                  <div className="text-sm font-medium text-nexdatec-navy">Ubicación</div>
                  <div className="text-sm">{lead.ciudad}</div>
                </div>
              </div>

              <div className="flex items-center text-nexdatec-gray">
                <Users className="w-5 h-5 mr-3 text-nexdatec-teal" />
                <div>
                  <div className="text-sm font-medium text-nexdatec-navy">Empleados</div>
                  <div className="text-sm">{lead.empleados}</div>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex items-center text-nexdatec-gray">
                <Phone className="w-5 h-5 mr-3 text-nexdatec-teal" />
                <div>
                  <div className="text-sm font-medium text-nexdatec-navy">Teléfono</div>
                  <div className="text-sm">{lead.telefono}</div>
                </div>
              </div>

              <div className="flex items-center text-nexdatec-gray">
                <Globe className="w-5 h-5 mr-3 text-nexdatec-teal" />
                <div>
                  <div className="text-sm font-medium text-nexdatec-navy">Website</div>
                  <div className="text-sm">{lead.website}</div>
                </div>
              </div>

              <div className="flex items-center text-nexdatec-gray">
                <DollarSign className="w-5 h-5 mr-3 text-nexdatec-teal" />
                <div>
                  <div className="text-sm font-medium text-nexdatec-navy">Facturación</div>
                  <div className="text-sm">{lead.facturacion}</div>
                </div>
              </div>
            </div>
          </div>

          <Separator />

          {/* Rating */}
          <div className="flex items-center space-x-2">
            <Star className="w-5 h-5 text-nexdatec-yellow fill-current" />
            <span className="font-semibold text-nexdatec-navy">{lead.valoracion}</span>
            <span className="text-nexdatec-gray">/ 5.0</span>
          </div>

          {/* Description */}
          <div>
            <h3 className="font-semibold text-nexdatec-navy mb-2">Descripción</h3>
            <p className="text-nexdatec-gray leading-relaxed">{lead.descripcion}</p>
          </div>

          {/* Contact Info */}
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="font-semibold text-nexdatec-navy mb-2">Información de Contacto</h3>
            <div className="flex items-center text-nexdatec-gray">
              <Mail className="w-4 h-4 mr-2 text-nexdatec-teal" />
              <span className="text-sm">{lead.email}</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 pt-4">
            {lead.estado === "Disponible" ? (
              <>
                <Button className="flex-1 bg-nexdatec-teal hover:bg-nexdatec-teal/90 text-white">
                  <ShoppingCart className="w-4 h-4 mr-2" />
                  Comprar NFT
                </Button>
                <Button
                  variant="outline"
                  className="flex-1 border-nexdatec-navy text-nexdatec-navy hover:bg-nexdatec-navy hover:text-white bg-transparent"
                >
                  <ArrowRightLeft className="w-4 h-4 mr-2" />
                  Hacer Oferta
                </Button>
              </>
            ) : (
              <Button disabled className="flex-1">
                No Disponible
              </Button>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
