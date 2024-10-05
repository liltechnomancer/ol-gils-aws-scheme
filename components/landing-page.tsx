'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { CloudLightning, DollarSign, Zap } from "lucide-react"
import Image from "next/image"

export function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-500 to-purple-600 text-white">
      <header className="container mx-auto py-8 flex flex-col items-center">
        <Image
          src="/gil.webp" // Assuming you've added this image to your public folder
          alt="Gil Gunderson"
          width={100}
          height={100}
          className="rounded-full border-4 border-yellow-400 mb-4"
        />
        <h1 className="text-4xl font-bold text-center mb-4">Gil's Cloud Revolution</h1>
        <p className="text-xl text-center">Why pay less when you can pay more?</p>
      </header>
      <main className="container mx-auto py-12">
        {/* Feature cards section remains unchanged */}
        <section className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
          <Card className="bg-white/10 backdrop-blur-lg border-none text-white">
            <CardHeader>
              <CloudLightning className="w-10 h-10 mb-4" />
              <CardTitle>100x AWS Power</CardTitle>
              <CardDescription className="text-gray-200">It's like regular AWS, but way more expensive!</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Experience the thrill of overpaying for cloud services. It's not just computing, it's computing with style!</p>
            </CardContent>
          </Card>
          <Card className="bg-white/10 backdrop-blur-lg border-none text-white">
            <CardHeader>
              <Zap className="w-10 h-10 mb-4" />
              <CardTitle>AI-Generated UIs</CardTitle>
              <CardDescription className="text-gray-200">Because human-designed UIs are so last season</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Our AI creates UIs that even we don't understand. Impress your clients with inexplicable design choices!</p>
            </CardContent>
          </Card>
          <Card className="bg-white/10 backdrop-blur-lg border-none text-white">
            <CardHeader>
              <DollarSign className="w-10 h-10 mb-4" />
              <CardTitle>Unbeatable Pricing</CardTitle>
              <CardDescription className="text-gray-200">If you can afford it, you're not paying enough</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Our prices are so high, you'll wonder if we made a mistake. Spoiler: We didn't!</p>
            </CardContent>
          </Card>
        </section>
        <section className="mt-20 flex flex-col md:flex-row items-center justify-center gap-8">
          <Image
            src="/gil-computer.jpg" // Using a Vercel Blob Storage URL
            alt="Gil selling cloud services"
            width={300}
            height={300}
            className="rounded-lg shadow-lg"
          />
          <Card className="bg-white/10 backdrop-blur-lg border-none text-white max-w-md">
            <CardHeader>
              <CardTitle>Ready to Overpay?</CardTitle>
              <CardDescription className="text-gray-200">Sign up now before Gil changes his mind!</CardDescription>
            </CardHeader>
            <CardContent>
              <form>
                <div className="grid w-full items-center gap-4">
                  <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" placeholder="Enter your name" className="bg-white/20 border-none placeholder:text-gray-300" />
                  </div>
                  <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" placeholder="Enter your email" type="email" className="bg-white/20 border-none placeholder:text-gray-300" />
                  </div>
                </div>
              </form>
            </CardContent>
            <CardFooter>
              <Button className="w-full bg-yellow-400 text-black hover:bg-yellow-500">Sign Up for the Deal of a Lifetime!</Button>
            </CardFooter>
          </Card>
        </section>
      </main>
      <footer className="container mx-auto py-8 text-center">
        <Image
          src="/gil-desperate.webp" // Assuming you've added this image to your public folder
          alt="Gil's signature"
          width={50}
          height={50}
          className="mx-auto mb-4"
        />
        <p className="text-sm opacity-70">© 2024 Gil's Cloud Revolution. All your money is our money.</p>
        <p className="text-xs mt-2 opacity-50">Disclaimer: This is a parody website. Please don't actually give Gil your money.</p>
      </footer>
    </div>
  )
}