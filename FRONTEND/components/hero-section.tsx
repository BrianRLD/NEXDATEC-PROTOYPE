"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Zap, Shield, TrendingUp } from "lucide-react"

export function HeroSection() {
  const scrollToLeads = () => {
    const leadsSection = document.getElementById("leads-section")
    if (leadsSection) {
      leadsSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="relative py-20 px-4 bg-gradient-to-br from-white via-blue-50/30 to-teal-50/30">
      <div className="container mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-nexdatec-navy mb-6 text-balance">
            Explora leads tokenizados con <span className="text-nexdatec-teal">NexDatec</span>
          </h1>

          <p className="text-xl text-nexdatec-gray mb-8 max-w-2xl mx-auto text-pretty">
            Convierte leads empresariales en NFTs únicos y trazables. La nueva era de la gestión comercial
            descentralizada.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button
              onClick={scrollToLeads}
              size="lg"
              className="bg-nexdatec-teal hover:bg-nexdatec-teal/90 text-white font-semibold"
            >
              Explorar Leads
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-nexdatec-navy text-nexdatec-navy hover:bg-nexdatec-navy hover:text-white bg-transparent"
              onClick={() => alert("Demo próximamente disponible")}
            >
              Ver Demo
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-nexdatec-teal/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-nexdatec-teal" />
              </div>
              <h3 className="text-xl font-semibold text-nexdatec-navy mb-2">Tokenización Rápida</h3>
              <p className="text-nexdatec-gray">
                Convierte leads en NFTs en segundos con nuestra tecnología blockchain
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-nexdatec-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-nexdatec-blue" />
              </div>
              <h3 className="text-xl font-semibold text-nexdatec-navy mb-2">Trazabilidad Total</h3>
              <p className="text-nexdatec-gray">Seguimiento completo del historial y transferencias de cada lead</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-nexdatec-yellow/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-nexdatec-yellow" />
              </div>
              <h3 className="text-xl font-semibold text-nexdatec-navy mb-2">Valor Creciente</h3>
              <p className="text-nexdatec-gray">Los leads de calidad aumentan su valor en el marketplace</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
