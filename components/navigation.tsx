"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link
            href="/"
            className="font-bold text-xl bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
          >
            MAM
          </Link>

          <div className="hidden md:flex gap-8">
            <Link href="/" className="text-foreground hover:text-primary transition-colors">
              About
            </Link>
            <Link href="/experience" className="text-foreground hover:text-primary transition-colors">
              Experience
            </Link>
            <Link href="/projects" className="text-foreground hover:text-primary transition-colors">
              Projects
            </Link>
            <Link href="/contact" className="text-foreground hover:text-primary transition-colors">
              Contact
            </Link>
          </div>

          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden pb-4 flex flex-col gap-4">
            <Link href="/" className="text-foreground hover:text-primary transition-colors block">
              About
            </Link>
            <Link href="/experience" className="text-foreground hover:text-primary transition-colors block">
              Experience
            </Link>
            <Link href="/projects" className="text-foreground hover:text-primary transition-colors block">
              Projects
            </Link>
            <Link href="/contact" className="text-foreground hover:text-primary transition-colors block">
              Contact
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}
