"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Shield, Menu, X } from "lucide-react"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import Image from 'next/image';


export function Navbar() {
  const pathname = usePathname()
  const isAuthenticated = pathname.includes("/dashboard")
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Card Info", href: "/info" }
  ]

  return (
    <nav className="bg-primary text-primary-foreground border-b border-black/10 shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
<Image
        src="/idfc-logo2.png"           // → /public/images/hero.jpg
        alt="Beautiful mountain landscape"
        width={40}
        height={40}
        border-radius="50%"
        priority                         // optional: for LCP / above-the-fold images
        className="rounded-xl shadow-lg"
      />     
            <span className="text-xl font-bold">IDFC First Bank</span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`text-sm font-medium hover:text-red-100 transition-colors ${
                  pathname === link.href ? "underline underline-offset-4" : ""
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-2">
            {!isAuthenticated ? (
              <>
                <Button className="bg-white text-primary hover:bg-red-50 font-bold px-6" asChild>
                  <Link href="/signup">Activate Now</Link>
                </Button>
              </>
            ) : (
              <Button className="bg-white text-primary hover:bg-red-50" asChild>
                <Link href="/">Logout</Link>
              </Button>
            )}
          </div>

          <button
            className="md:hidden p-2 text-white hover:bg-black/10 rounded-md"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-primary border-t border-black/10 overflow-hidden"
          >
            <div className="container mx-auto px-4 py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-lg font-medium py-2 border-b border-white/10"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <div className="flex flex-col gap-3 pt-4">
                {!isAuthenticated ? (
                  <>
                    <Button className="bg-white text-primary hover:bg-red-50 w-full font-bold" size="lg" asChild>
                      <Link href="/signup" onClick={() => setIsMenuOpen(false)}>
                        Activate Now
                      </Link>
                    </Button>
                  </>
                ) : (
                  <Button className="bg-white text-primary hover:bg-red-50 w-full" asChild>
                    <Link href="/" onClick={() => setIsMenuOpen(false)}>
                      Logout
                    </Link>
                  </Button>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
