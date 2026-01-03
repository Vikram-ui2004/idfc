import { Card, CardContent } from "@/components/ui/card"
import { CreditCard, Shield, Bell, Lock } from "lucide-react"
import { Navbar } from "@/components/navbar"

export default function InfoPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Page Header */}
          <div className="space-y-4">
            <h1 className="text-4xl font-bold text-red-900">Debit Card Information</h1>
            <p className="text-lg text-muted-foreground">
              Everything you need to know about protecting and managing your debit card with SecureCard.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="border-t-4 border-t-red-900 shadow-md">
              <CardContent className="pt-6 space-y-4">
                <div className="h-12 w-12 rounded-lg bg-red-100 flex items-center justify-center">
                  <CreditCard className="h-6 w-6 text-red-900" />
                </div>
                <h3 className="font-semibold text-xl text-red-900">Card Verification</h3>
                <p className="text-muted-foreground">
                  Our secure verification process ensures your card details are protected with end-to-end encryption. We
                  never store your full card number or CVV on our servers.
                </p>
              </CardContent>
            </Card>

            <Card className="border-t-4 border-t-red-900 shadow-md">
              <CardContent className="pt-6 space-y-4">
                <div className="h-12 w-12 rounded-lg bg-red-100 flex items-center justify-center">
                  <Shield className="h-6 w-6 text-red-900" />
                </div>
                <h3 className="font-semibold text-xl text-red-900">Fraud Protection</h3>
                <p className="text-muted-foreground">
                  Advanced AI algorithms monitor your card activity 24/7, detecting and blocking suspicious transactions
                  before they happen.
                </p>
              </CardContent>
            </Card>

            <Card className="border-t-4 border-t-red-900 shadow-md">
              <CardContent className="pt-6 space-y-4">
                <div className="h-12 w-12 rounded-lg bg-red-100 flex items-center justify-center">
                  <Bell className="h-6 w-6 text-red-900" />
                </div>
                <h3 className="font-semibold text-xl text-red-900">Instant Alerts</h3>
                <p className="text-muted-foreground">
                  Receive real-time notifications for every transaction, helping you spot unauthorized activity
                  immediately.
                </p>
              </CardContent>
            </Card>

            <Card className="border-t-4 border-t-red-900 shadow-md">
              <CardContent className="pt-6 space-y-4">
                <div className="h-12 w-12 rounded-lg bg-red-100 flex items-center justify-center">
                  <Lock className="h-6 w-6 text-red-900" />
                </div>
                <h3 className="font-semibold text-xl text-red-900">Secure Storage</h3>
                <p className="text-muted-foreground">
                  All data is encrypted using bank-level 256-bit SSL encryption and stored in PCI-DSS compliant data
                  centers.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* How It Works Section */}
          <Card className="bg-muted/50 border border-gray-200">
            <CardContent className="p-8 space-y-6">
              <h2 className="text-2xl font-bold text-red-900">How Card Verification Works</h2>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-red-900 text-white flex items-center justify-center font-bold">
                    1
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1 text-red-900">Login to Your Account</h4>
                    <p className="text-sm text-muted-foreground">
                      Access your secure SecureCard dashboard with your credentials.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-red-900 text-white flex items-center justify-center font-bold">
                    2
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1 text-red-900">Enter Card Details</h4>
                    <p className="text-sm text-muted-foreground">
                      Provide your card number, expiry date, CVV, and cardholder name.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-red-900 text-white flex items-center justify-center font-bold">
                    3
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1 text-red-900">Instant Verification</h4>
                    <p className="text-sm text-muted-foreground">
                      Our system verifies your card and activates protection in seconds.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <footer className="border-t py-8 mt-12">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
          <p>© 2026 SecureCard. All rights reserved. Your card security is our priority.</p>
        </div>
      </footer>
    </div>
  )
}