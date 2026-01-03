"use client"

import type React from "react"
import { Navbar } from "@/components/navbar"
import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Shield, CreditCard, Lock, CheckCircle2, AlertCircle } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

export default function DashboardPage() {
  const { toast } = useToast()
  const [isVerifying, setIsVerifying] = useState(false)
  const [isVerified, setIsVerified] = useState(false)
  const [formData, setFormData] = useState({
    cardholderName: "",
    cardNumber: "",
    expiryDate: "",
    cvv: "",
  })

  const formatCardNumber = (value: string) => {
    const v = value.replace(/\s+/g, "").replace(/[^0-9]/gi, "")
    const matches = v.match(/\d{4,16}/g)
    const match = (matches && matches[0]) || ""
    const parts = []

    for (let i = 0, len = match.length; i < len; i += 4) {
      parts.push(match.substring(i, i + 4))
    }

    if (parts.length) {
      return parts.join(" ")
    } else {
      return value
    }
  }

  const formatExpiry = (value: string) => {
    return value
      .replace(/[^0-9]/g, "")
      .replace(/^([2-9])$/g, "0$1")
      .replace(/^(1[3-9])$/g, "0$1")
      .replace(/^([0-1][0-2])([0-9]{2,4})$/g, "$1/$2")
      .substring(0, 5)
  }

  const handleVerify = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsVerifying(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000))

    setIsVerifying(false)
    setIsVerified(true)
    toast({
      title: "Card Verified Successfully",
      description: "Your card is now protected by SecureCard monitoring.",
    })
  }

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />

      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Header Section */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              {/* Changed to Dark Red */}
              <h1 className="text-3xl font-bold text-red-900">Secure Dashboard</h1>
              <p className="text-muted-foreground">Manage and protect your debit cards</p>
            </div>
            {/* Changed Badge to Red Theme */}
            <div className="flex items-center gap-2 bg-red-100 text-red-900 px-4 py-2 rounded-full text-sm font-medium border border-red-200">
              <Shield className="h-4 w-4" />
              Secure Session Active
            </div>
          </div>

          {!isVerified ? (
            <div className="grid lg:grid-cols-5 gap-8">
              {/* Verification Form */}
              <div className="lg:col-span-3">
                <Card className="border-t-4 border-t-red-900 shadow-md">
                  <CardHeader>
                    {/* Changed to Dark Red */}
                    <CardTitle className="flex items-center gap-2 text-red-900">
                      <CreditCard className="h-5 w-5 text-red-900" />
                      Card Verification
                    </CardTitle>
                    <CardDescription>Enter your debit card details exactly as they appear on the card</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleVerify} className="space-y-6">
                      <div className="space-y-2">
                        <Label htmlFor="cardholderName">Cardholder Name</Label>
                        <Input
                          id="cardholderName"
                          placeholder="JOHN DOE"
                          className="uppercase focus-visible:ring-red-900"
                          value={formData.cardholderName}
                          onChange={(e) => setFormData({ ...formData, cardholderName: e.target.value })}
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="cardNumber">Card Number</Label>
                        <Input
                          id="cardNumber"
                          placeholder="0000 0000 0000 0000"
                          maxLength={19}
                          className="focus-visible:ring-red-900"
                          value={formData.cardNumber}
                          onChange={(e) => setFormData({ ...formData, cardNumber: formatCardNumber(e.target.value) })}
                          required
                        />
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="expiryDate">Expiry Date</Label>
                          <Input
                            id="expiryDate"
                            placeholder="MM/YY"
                            maxLength={5}
                            className="focus-visible:ring-red-900"
                            value={formData.expiryDate}
                            onChange={(e) => setFormData({ ...formData, expiryDate: formatExpiry(e.target.value) })}
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="cvv">CVV</Label>
                          <div className="relative">
                            <Input
                              id="cvv"
                              type="password"
                              placeholder="•••"
                              maxLength={3}
                              className="focus-visible:ring-red-900"
                              value={formData.cvv}
                              onChange={(e) => setFormData({ ...formData, cvv: e.target.value.replace(/\D/g, "") })}
                              required
                            />
                            <Lock className="absolute right-3 top-2.5 h-4 w-4 text-muted-foreground" />
                          </div>
                        </div>
                      </div>

                      <div className="bg-muted/50 p-4 rounded-lg flex gap-3 border border-gray-100">
                        <AlertCircle className="h-5 w-5 text-red-900 flex-shrink-0" />
                        <p className="text-xs text-muted-foreground">
                          SecureCard uses 256-bit encryption. Your CVV and full card number are processed securely and
                          never stored in plain text.
                        </p>
                      </div>

                      {/* Changed Button to Dark Red */}
                      <Button type="submit" className="w-full bg-red-900 hover:bg-red-800 text-white font-bold" size="lg" disabled={isVerifying}>
                        {isVerifying ? "Verifying..." : "Verify & Secure Card"}
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>

              {/* Sidebar / Visual Card */}
              <div className="lg:col-span-2 space-y-6">
                {/* Changed Card Background to Dark Red */}
                <div className="bg-red-900 text-white rounded-xl p-6 shadow-xl relative overflow-hidden h-48 flex flex-col justify-between">
                  <div className="flex justify-between items-start z-10">
                    <Shield className="h-8 w-8 opacity-80" />
                    <span className="text-xs font-mono tracking-tighter opacity-70 italic">SECURE CARD</span>
                  </div>
                  <div className="z-10">
                    <p className="text-xl font-mono tracking-widest mb-1">
                      {formData.cardNumber || "•••• •••• •••• ••••"}
                    </p>
                    <div className="flex justify-between items-end">
                      <p className="text-sm font-medium uppercase truncate pr-4">
                        {formData.cardholderName || "Cardholder Name"}
                      </p>
                      <p className="text-sm font-mono">{formData.expiryDate || "MM/YY"}</p>
                    </div>
                  </div>
                  {/* Subtle design element */}
                  <div className="absolute -right-8 -bottom-8 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
                </div>

                <Card className="border-t-4 border-t-red-900 shadow-md">
                  <CardHeader className="pb-2">
                    {/* Changed to Dark Red */}
                    <CardTitle className="text-sm text-red-900 font-bold">Why Verify?</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex gap-3 text-sm">
                      <CheckCircle2 className="h-4 w-4 text-red-900 flex-shrink-0" />
                      <span>Instant fraud detection alerts</span>
                    </div>
                    <div className="flex gap-3 text-sm">
                      <CheckCircle2 className="h-4 w-4 text-red-900 flex-shrink-0" />
                      <span>Zero liability protection guarantee</span>
                    </div>
                    <div className="flex gap-3 text-sm">
                      <CheckCircle2 className="h-4 w-4 text-red-900 flex-shrink-0" />
                      <span>Priority 24/7 security support</span>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          ) : (
            /* Verified Success State */
            <div className="max-w-2xl mx-auto text-center space-y-6 py-12">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-red-100 mb-4">
                <CheckCircle2 className="h-10 w-10 text-red-900" />
              </div>
              {/* Changed to Dark Red */}
              <h2 className="text-3xl font-bold text-red-900">Verification Complete</h2>
              <p className="text-muted-foreground text-lg">
                Your card ending in <strong>{formData.cardNumber.slice(-4)}</strong> is now protected by our bank-grade
                security systems.
              </p>

              <div className="grid md:grid-cols-3 gap-4 py-6">
                <div className="p-4 rounded-lg border-t-4 border-t-red-900 bg-card shadow-sm space-y-2">
                  <p className="text-2xl font-bold text-red-900">Active</p>
                  <p className="text-xs text-muted-foreground uppercase">Monitoring</p>
                </div>
                <div className="p-4 rounded-lg border-t-4 border-t-red-900 bg-card shadow-sm space-y-2">
                  <p className="text-2xl font-bold text-red-900">0</p>
                  <p className="text-xs text-muted-foreground uppercase">Threats Found</p>
                </div>
                <div className="p-4 rounded-lg border-t-4 border-t-red-900 bg-card shadow-sm space-y-2">
                  <p className="text-2xl font-bold text-red-900">100%</p>
                  <p className="text-xs text-muted-foreground uppercase">Security Score</p>
                </div>
              </div>

              <div className="flex flex-wrap justify-center gap-4">
                {/* Changed Button to Dark Red */}
                <Button onClick={() => setIsVerified(false)} className="bg-red-900 hover:bg-red-800 text-white font-bold">
                  Add Another Card
                </Button>
                <Button variant="outline" className="text-red-900 border-red-900 hover:bg-red-50">
                  View Protection History
                </Button>
              </div>
            </div>
          )}
        </div>
      </main>

      <footer className="border-t py-8 mt-auto">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
          <p>© 2026 IDFC. PCI-DSS Level 1 Compliant Security Portal.</p>
        </div>
      </footer>
    </div>
  )
}