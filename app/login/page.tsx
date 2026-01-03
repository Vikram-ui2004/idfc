'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import Image from "next/image"

export default function LoginPage() {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Simulate login - in real app, would validate credentials
    if (email && password) {
      router.push('/dashboard')
    }
  }

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Navbar */}
      <nav className="border-b bg-card">
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

      {/* Login Form */}
      <div className="flex-1 flex items-center justify-center p-4">
        {/* Added top border in Dark Red for consistency */}
        <Card className="w-full max-w-md border-t-4 border-t-red-900 shadow-lg">
          <CardHeader className="space-y-1 text-center">
            {/* Changed to Dark Red */}
            <CardTitle className="text-2xl font-bold text-red-900">Welcome Back</CardTitle>
            <CardDescription>
              Enter your credentials to access your secure card portal
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="name@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="focus-visible:ring-red-900"
                />
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="password">Password</Label>
                  <Link
                    href="/forgot-password"
                    // Changed to Dark Red
                    className="text-sm text-red-900 font-semibold hover:underline"
                  >
                    Forgot password?
                  </Link>
                </div>
                <Input
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="focus-visible:ring-red-900"
                />
              </div>
              {/* Changed Button to Dark Red */}
              <Button type="submit" className="w-full bg-red-900 hover:bg-red-800 text-white font-bold" size="lg">
                Login
              </Button>
            </form>

            <div className="mt-6 text-center text-sm">
              <span className="text-muted-foreground">Don't have an account? </span>
              {/* Changed Link to Dark Red */}
              <Link href="/signup" className="text-red-900 font-bold hover:underline">
                Sign up
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}