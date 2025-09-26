"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { ProjectInfoSection } from "@/components/project-info-section"
import { LeadDetailModal } from "@/components/lead-detail-modal"

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

export default function HomePage() {
  const [selectedLead, setSelectedLead] = useState<Lead | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleLeadSelect = (lead: Lead) => {
    setSelectedLead(lead)
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
    setSelectedLead(null)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-blue-50/20 to-teal-50/20">
      <Header />
      <main>
        <HeroSection />
        <ProjectInfoSection />
      </main>

      <LeadDetailModal lead={selectedLead} isOpen={isModalOpen} onClose={handleCloseModal} />
    </div>
  )
}
