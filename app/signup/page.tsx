"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Image from "next/image"

export default function SignupPage() {
  const router = useRouter()
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    // Step 1: Activation (Basic Info)
    fullName: "",
    email: "",
    mobile: "",
    city: "",
    dob: "",
    // Step 2: Card Credentials (Password for account)
    password: "",
    confirmPassword: "",
  })

  const nextStep = (e: React.FormEvent) => {
    e.preventDefault()
    if (step === 1) {
      setStep(2)
    } else {
      // After basic signup, move to dashboard for card credential verification
      router.push("/dashboard")
    }
  }

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Navbar */}
      <nav className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 py-4">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/idfc-logo2.png"
              alt="IDFC First Bank Logo"
              width={40}
              height={40}
              priority
              className="rounded-xl shadow-sm"
            />
            {/* Changed to Dark Red */}
            <span className="text-xl font-bold text-red-900">IDFC First Bank</span>
          </Link>
        </div>
      </nav>

      <div className="flex-1 flex flex-col items-center justify-center p-4 py-12">
        
        {/* NEW: Banking Image Section above Signup */}
        <div className="w-full max-w-md mb-6 relative h-48 rounded-xl overflow-hidden shadow-md">
          <Image
            src="/idfc-2.jpeg"
            alt="Secure Banking"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-red-900/10" /> {/* Subtle red tint overlay */}
        </div>

        {/* Signup Card */}
        <Card className="w-full max-w-md border-t-4 border-t-red-900 shadow-lg">
          <CardHeader className="space-y-1 text-center">
            {/* Changed to Dark Red */}
            <CardTitle className="text-2xl font-bold text-red-900">
              {step === 1 ? "Card Activation" : "Complete Registration"}
            </CardTitle>
            <CardDescription>
              {step === 1 ? "Enter your basic details to begin activation" : "Create your secure account password"}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={nextStep} className="space-y-4">
              {step === 1 ? (
                <>
                  <div className="space-y-2">
                    <Label htmlFor="fullName">Full Name</Label>
                    <Input
                      id="fullName"
                      placeholder="John Doe"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      required
                      className="focus-visible:ring-red-900"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="name@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      className="focus-visible:ring-red-900"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="mobile">Mobile Number</Label>
                    <Input
                      id="mobile"
                      type="tel"
                      placeholder="+1 (555) 000-0000"
                      value={formData.mobile}
                      onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                      required
                      className="focus-visible:ring-red-900"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="city">City</Label>
                      <Input
                        id="city"
                        placeholder="New York"
                        value={formData.city}
                        onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                        required
                        className="focus-visible:ring-red-900"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="dob">Date of Birth</Label>
                      <Input
                        id="dob"
                        type="date"
                        value={formData.dob}
                        onChange={(e) => setFormData({ ...formData, dob: e.target.value })}
                        required
                        className="focus-visible:ring-red-900"
                      />
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div className="space-y-2">
                    <Label htmlFor="password">Password</Label>
                    <Input
                      id="password"
                      type="password"
                      placeholder="••••••••"
                      value={formData.password}
                      onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                      required
                      className="focus-visible:ring-red-900"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="confirmPassword">Confirm Password</Label>
                    <Input
                      id="confirmPassword"
                      type="password"
                      placeholder="••••••••"
                      value={formData.confirmPassword}
                      onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                      required
                      className="focus-visible:ring-red-900"
                    />
                  </div>
                </>
              )}

              {/* Changed Button to Dark Red */}
              <Button type="submit" className="w-full bg-red-900 hover:bg-red-800 text-white font-bold" size="lg">
                {step === 1 ? "Continue to Account Details" : "Register & Verify Card"}
              </Button>
            </form>

            <div className="mt-6 text-center text-sm">
              <span className="text-muted-foreground">Already have an account? </span>
              {/* Changed Link to Dark Red */}
              <Link href="/login" className="text-red-900 font-medium hover:underline">
                Login
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}