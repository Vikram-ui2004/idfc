"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Shield, Lock, Eye, CheckCircle, ChevronLeft, ChevronRight } from "lucide-react"
import { Navbar } from "@/components/navbar"
import { IntroScreen } from "@/components/intro-screen"
import Image from "next/image"

const HERO_IMAGES = [
  {
    url: "/idfc-1.jpeg",
    title: "Protect Your Debit Card with Advanced Security",
    desc: "Verify your card securely and monitor transactions in real-time.",
  },
  {
    url: "/idfc-2.jpeg",
    title: "Bank-Grade Protection Anywhere You Go",
    desc: "Our encryption keeps your sensitive data safe from unauthorized access.",
  },
  {
    url: "/idfc-3.jpeg",
    title: "Secure Your Financial Future Today",
    desc: "Join thousands who trust SecureCard for their verification needs.",
  },
]

export default function HomePage() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_IMAGES.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="min-h-screen bg-background">
      {/* Intro Screen */}
      <IntroScreen />

      {/* Navbar */}
      <Navbar />

      {/* Sliding Hero Section */}
      <section className="relative h-[400px] md:h-[500px] overflow-hidden">
        {HERO_IMAGES.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          >
            {/* Image Background */}
            <div className="absolute inset-0">
              <Image
                src={image.url}
                alt={image.title}
                fill
                priority={index === 0}
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-black/50" />
            </div>

            {/* Content (Text Only - Buttons Moved Below) */}
            <div className="container mx-auto px-4 h-full flex flex-col justify-center relative z-20 text-white">
              <div className="max-w-3xl space-y-4 md:space-y-6">
                <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-balance leading-tight">
                  {image.title}
                </h1>
                <p className="text-lg md:text-xl opacity-90 text-pretty max-w-2xl">
                  {image.desc}
                </p>
              </div>
            </div>
          </div>
        ))}

        {/* Navigation Arrows */}
        <button
          onClick={() => setCurrentSlide((prev) => (prev - 1 + HERO_IMAGES.length) % HERO_IMAGES.length)}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-30 p-2 bg-black/20 hover:bg-black/40 rounded-full text-white"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
        <button
          onClick={() => setCurrentSlide((prev) => (prev + 1) % HERO_IMAGES.length)}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-30 p-2 bg-black/20 hover:bg-black/40 rounded-full text-white"
        >
          <ChevronRight className="h-6 w-6" />
        </button>
      </section>

      {/* NEW: Action Section (Separated from Hero) */}
      <section className="bg-white border-b shadow-sm py-8 relative z-30">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-center gap-6 text-center md:text-left">
           <div>
              <h2 className="text-xl font-semibold text-red-900 mb-1">Get Started Today</h2>
              <p className="text-muted-foreground text-sm">Secure your financial data in minutes.</p>
           </div>
           <div className="flex gap-4">
              <Button size="lg" className="bg-red-900 hover:bg-red-800 text-white font-bold px-8 shadow-md" asChild>
                <Link href="/signup">Activate Now</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-red-900 border-red-900 hover:bg-red-50 bg-transparent font-semibold"
                asChild
              >
                <Link href="/info">Learn More</Link>
              </Button>
           </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-muted/30 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            {/* Changed to Dark Red */}
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-red-900">Bank-Grade Security Features</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our multi-layered security approach keeps your card safe from fraud and unauthorized access.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="border-t-4 border-t-red-900 shadow-md">
              <CardContent className="pt-6 space-y-4">
                <div className="h-12 w-12 rounded-lg bg-red-100 flex items-center justify-center">
                  <Shield className="h-6 w-6 text-red-900" />
                </div>
                {/* Changed to Dark Red */}
                <h3 className="font-semibold text-lg text-red-900">Secure Verification</h3>
                <p className="text-sm text-muted-foreground">
                  Multi-factor authentication and encrypted data transmission.
                </p>
              </CardContent>
            </Card>

            <Card className="border-t-4 border-t-red-900 shadow-md">
              <CardContent className="pt-6 space-y-4">
                <div className="h-12 w-12 rounded-lg bg-red-100 flex items-center justify-center">
                  <Lock className="h-6 w-6 text-red-900" />
                </div>
                 {/* Changed to Dark Red */}
                <h3 className="font-semibold text-lg text-red-900">Data Encryption</h3>
                <p className="text-sm text-muted-foreground">
                  256-bit encryption protects your sensitive card information.
                </p>
              </CardContent>
            </Card>

            <Card className="border-t-4 border-t-red-900 shadow-md">
              <CardContent className="pt-6 space-y-4">
                <div className="h-12 w-12 rounded-lg bg-red-100 flex items-center justify-center">
                  <Eye className="h-6 w-6 text-red-900" />
                </div>
                 {/* Changed to Dark Red */}
                <h3 className="font-semibold text-lg text-red-900">Real-Time Monitoring</h3>
                <p className="text-sm text-muted-foreground">
                  24/7 fraud detection alerts you to suspicious activity instantly.
                </p>
              </CardContent>
            </Card>

            <Card className="border-t-4 border-t-red-900 shadow-md">
              <CardContent className="pt-6 space-y-4">
                <div className="h-12 w-12 rounded-lg bg-red-100 flex items-center justify-center">
                  <CheckCircle className="h-6 w-6 text-red-900" />
                </div>
                 {/* Changed to Dark Red */}
                <h3 className="font-semibold text-lg text-red-900">Instant Verification</h3>
                <p className="text-sm text-muted-foreground">Quick and easy card verification process in seconds.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        {/* Changed Card background to Dark Red */}
        <Card className="bg-red-900 text-white shadow-xl">
          <CardContent className="p-8 md:p-12 text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">Ready to Secure Your Card?</h2>
            <p className="text-lg opacity-90 max-w-2xl mx-auto">
              Join thousands of users who trust SecureCard for their debit card safety and verification needs.
            </p>
            <Button size="lg" variant="secondary" className="text-red-900 font-bold px-8 hover:bg-gray-100" asChild>
              <Link href="/signup">Activate Now</Link>
            </Button>
          </CardContent>
        </Card>
      </section>

      {/* Footer */}
      <footer className="border-t py-8 bg-gray-50">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
          <p>© 2026 IDFC SECURE Card. All rights reserved.</p>
          <div className="mt-4">
             <Link href="/signup" className="text-red-900 font-bold hover:underline">Activate Now</Link>
          </div>
        </div>
      </footer>
    </div>
  )
}