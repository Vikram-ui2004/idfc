import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MessageCircle, Mail, Phone, HelpCircle } from "lucide-react"
import { Navbar } from "@/components/navbar"

export default function SupportPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-bold">Support Center</h1>
            <p className="text-lg text-muted-foreground">
              We're here to help. Get in touch with our support team or find answers to common questions.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardContent className="pt-6 space-y-4 text-center">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto">
                  <MessageCircle className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-lg">Live Chat</h3>
                <p className="text-sm text-muted-foreground">Chat with our support team in real-time</p>
                <Button className="w-full">Start Chat</Button>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6 space-y-4 text-center">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-lg">Email Support</h3>
                <p className="text-sm text-muted-foreground">Send us an email, we'll respond within 24 hours</p>
                <Button variant="outline" className="w-full bg-transparent">
                  Send Email
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6 space-y-4 text-center">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-lg">Phone Support</h3>
                <p className="text-sm text-muted-foreground">Call us Monday-Friday, 9 AM - 6 PM EST</p>
                <Button variant="outline" className="w-full bg-transparent">
                  1-800-SECURE
                </Button>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardContent className="p-8 space-y-6">
              <h2 className="text-2xl font-bold flex items-center gap-2">
                <HelpCircle className="h-6 w-6 text-primary" />
                Frequently Asked Questions
              </h2>
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold mb-2">How do I verify my debit card?</h4>
                  <p className="text-sm text-muted-foreground">
                    After logging in, navigate to the dashboard and click "Verify Card". Enter your card details
                    including card number, expiry date, CVV, and cardholder name. The verification process takes just a
                    few seconds.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Is my card information secure?</h4>
                  <p className="text-sm text-muted-foreground">
                    Yes, absolutely. We use bank-grade 256-bit encryption and are PCI-DSS compliant. Your full card
                    number and CVV are never stored on our servers.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">What if I spot a fraudulent transaction?</h4>
                  <p className="text-sm text-muted-foreground">
                    Contact us immediately via live chat or phone. You can also instantly lock your card from the
                    dashboard to prevent further unauthorized transactions.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">How do transaction alerts work?</h4>
                  <p className="text-sm text-muted-foreground">
                    Once your card is verified, you'll receive instant notifications via email and SMS for every
                    transaction. You can customize alert preferences in your account settings.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Can I verify multiple cards?</h4>
                  <p className="text-sm text-muted-foreground">
                    Yes, you can add and monitor multiple debit cards from your single SecureCard account. Each card
                    will have its own verification and monitoring settings.
                  </p>
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
