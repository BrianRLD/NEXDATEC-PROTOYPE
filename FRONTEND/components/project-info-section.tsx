"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowRight, Shield, TrendingUp, Users, Zap, Globe, Lock } from "lucide-react"
import Link from "next/link"

export function ProjectInfoSection() {
  const features = [
    {
      icon: Shield,
      title: "Seguridad Blockchain",
      description:
        "Cada lead está protegido por la inmutabilidad de la blockchain, garantizando autenticidad y trazabilidad completa.",
    },
    {
      icon: TrendingUp,
      title: "Valorización Dinámica",
      description:
        "Los leads se valorizan según su calidad, sector y potencial de conversión, creando un mercado eficiente.",
    },
    {
      icon: Users,
      title: "Ecosistema Colaborativo",
      description: "Conectamos generadores de leads con empresas que los necesitan, creando valor para ambas partes.",
    },
    {
      icon: Zap,
      title: "Transacciones Instantáneas",
      description: "Compra y venta de leads de forma inmediata con contratos inteligentes automatizados.",
    },
    {
      icon: Globe,
      title: "Alcance Global",
      description: "Accede a leads de cualquier parte del mundo, expandiendo tu mercado sin fronteras.",
    },
    {
      icon: Lock,
      title: "Propiedad Verificable",
      description: "Los NFTs garantizan la propiedad única de cada lead, eliminando duplicados y fraudes.",
    },
  ]

  const stats = [
    { number: "10,000+", label: "Leads Tokenizados" },
    { number: "500+", label: "Empresas Activas" },
    { number: "95%", label: "Tasa de Satisfacción" },
    { number: "$2M+", label: "Volumen Transaccional" },
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <Badge variant="outline" className="mb-4 text-[#1e3a8a] border-[#1e3a8a]">
          Revolución en Lead Generation
        </Badge>
        <h2 className="text-4xl md:text-5xl font-bold text-[#1e3a8a] mb-6">¿Por qué NexDatec?</h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Transformamos la industria de leads comerciales mediante blockchain y NFTs, creando un marketplace
          transparente, seguro y eficiente que beneficia a todos los participantes.
        </p>
      </motion.div>

      {/* Stats */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
        className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20"
      >
        {stats.map((stat, index) => (
          <div key={index} className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-[#1e3a8a] mb-2">{stat.number}</div>
            <div className="text-gray-600 font-medium">{stat.label}</div>
          </div>
        ))}
      </motion.div>

      {/* Features Grid */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
      >
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 * index }}
            viewport={{ once: true }}
          >
            <Card className="h-full hover:shadow-lg transition-shadow duration-300 border-gray-200">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="p-3 rounded-lg bg-gradient-to-r from-[#1e3a8a] to-[#0891b2] text-white mr-4">
                    <feature.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold text-[#1e3a8a]">{feature.title}</h3>
                </div>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>

      {/* How it Works */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        viewport={{ once: true }}
        className="bg-gradient-to-r from-[#1e3a8a] to-[#0891b2] rounded-2xl p-8 md:p-12 text-white mb-16"
      >
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl md:text-4xl font-bold mb-6">Cómo Funciona NexDatec</h3>
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">1</span>
              </div>
              <h4 className="text-xl font-semibold mb-2">Tokenización</h4>
              <p className="text-white/90">Los leads se convierten en NFTs únicos con metadata verificable</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">2</span>
              </div>
              <h4 className="text-xl font-semibold mb-2">Marketplace</h4>
              <p className="text-white/90">Compra y vende leads en un mercado transparente y eficiente</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">3</span>
              </div>
              <h4 className="text-xl font-semibold mb-2">Conversión</h4>
              <p className="text-white/90">Utiliza los leads para generar ventas y hacer crecer tu negocio</p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        viewport={{ once: true }}
        className="text-center"
      >
        <h3 className="text-3xl font-bold text-[#1e3a8a] mb-6">¿Listo para Revolucionar tu Lead Generation?</h3>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Únete a la nueva era de leads comerciales tokenizados y descubre un mundo de oportunidades.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/leads">
            <Button size="lg" className="bg-[#1e3a8a] hover:bg-[#1e3a8a]/90 text-white px-8 py-3">
              Explorar Leads
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
          <Link href="/marketplace">
            <Button
              variant="outline"
              size="lg"
              className="border-[#1e3a8a] text-[#1e3a8a] hover:bg-[#1e3a8a] hover:text-white px-8 py-3 bg-transparent"
            >
              Ver Estadísticas
            </Button>
          </Link>
        </div>
      </motion.div>
    </section>
  )
}
