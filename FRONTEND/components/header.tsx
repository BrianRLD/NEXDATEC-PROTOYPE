"use client"

import { Button } from "@/components/ui/button"
import { Wallet } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export function Header() {
  return (
    <header className="border-b border-nexdatec-gray/20 bg-white/95 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <Image src="/images/icono.jpg" alt="NexDatec Icon" width={40} height={40} className="object-contain" />
          <Image src="/images/logo-secundario.jpg" alt="NexDatec" width={120} height={30} className="object-contain" />
        </div>

        <nav className="hidden md:flex items-center space-x-6">
          <Link href="/" className="text-nexdatec-navy hover:text-nexdatec-teal transition-colors font-medium">
            Dashboard
          </Link>
          <Link href="/leads" className="text-nexdatec-gray hover:text-nexdatec-teal transition-colors font-medium">
            Leads
          </Link>
          <Link
            href="/marketplace"
            className="text-nexdatec-gray hover:text-nexdatec-teal transition-colors font-medium"
          >
            Marketplace
          </Link>
        </nav>

        <Button className="bg-nexdatec-teal hover:bg-nexdatec-teal/90 text-white font-medium" size="sm">
          <Wallet className="w-4 h-4 mr-2" />
          Conectar Wallet
        </Button>
      </div>
    </header>
  )
}
