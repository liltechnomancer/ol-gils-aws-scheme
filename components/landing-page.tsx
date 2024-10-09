'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { CloudLightning, DollarSign, Zap, ScrollText, Lock, Database, Server, Play, Pause } from "lucide-react"
import Image from "next/image"
import { useState } from "react"

export function LandingPage() {
  const [isPlaying, setIsPlaying] = useState(false)

    const toggleVideo = () => {
      const video = document.querySelector('video')
      if (video) {
        if (isPlaying) {
          video.pause()
        } else {
          video.play()
        }
        setIsPlaying(!isPlaying)
      }
    }

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

      <section className="relative mb-10 h-[calc(100vh-200px)] overflow-hidden">
              <video
                className="absolute top-0 left-0 w-full h-full object-cover"
                loop
                playsInline
              >
                <source src="/gil.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className={`absolute inset-0 bg-black ${isPlaying ? 'opacity-0' : 'bg-opacity-50'} flex items-center justify-center`}>
                <div className={`text-center max-w-4xl px-4 transition-opacity duration-300 ${isPlaying ? 'opacity-0' : 'opacity-100'}`}>
                  <h2 className="text-5xl font-bold mb-6">Revolutionizing the Web with AI!</h2>
                  <p className="text-xl mb-8">
                    Ladies and gentlemen, feast your eyes on Gil's latest miracle! We're using the power of AI to make designers and front-end developers as obsolete as my last career! Why hire talented professionals when you can have our AI cobble together a website that's almost functional?
                  </p>
                  <p className="text-lg mb-8 italic">
                    (Disclaimer: Our AI may occasionally produce websites that look like they were designed by a cat walking across a keyboard. But hey, that's the price of innovation!)
                  </p>
                </div>
              </div>
              <Button
                onClick={toggleVideo}
                className="absolute bottom-4 left-4 bg-yellow-400 text-black hover:bg-yellow-500 text-lg py-6 px-8 rounded-full flex items-center"
              >
                {isPlaying ? <Pause className="mr-2" /> : <Play className="mr-2" />}
                {isPlaying ? "Pause the Magic" : "Watch the Magic"}
              </Button>
            </section>
        {/* Feature cards section remains unchanged */}

        <section className="mb-20">
          <Card className="bg-gradient-to-br from-yellow-400 to-orange-500 border-none text-black overflow-hidden">
            <CardHeader className="pb-0">
              <CardTitle className="text-4xl font-extrabold text-center mb-2">Serverless Servers: The Future is Now(ish)!</CardTitle>
              <CardDescription className="text-xl text-center text-black">
                Folks, have you heard about serverless? Well, forget all that! Introducing Gil's Serverless Servers - it's like serverless, but with actual servers! Maybe!
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Server className="w-6 h-6 mt-1 text-purple-700" />
                    <p className="font-medium">Experience the thrill of not knowing if your code is running on a server, the cloud, or in Gil's garage!</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CloudLightning className="w-6 h-6 mt-1 text-purple-700" />
                    <p className="font-medium">Our proprietary "Schrödinger's Server" technology - your function is both running and not running until you check your bill!</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Zap className="w-6 h-6 mt-1 text-purple-700" />
                    <p className="font-medium">Enjoy the best of both worlds: the complexity of servers with the unpredictability of serverless!</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <DollarSign className="w-6 h-6 mt-1 text-purple-700" />
                    <p className="font-medium">"In-function concurrency" so advanced, even we don't know what's happening!</p>
                  </div>
                </div>
              </div>
              <div className="mt-8 p-6 bg-purple-700 rounded-lg text-white">
                <h3 className="text-2xl font-bold mb-2">Gil's Personal Guarantee:</h3>
                <p className="mb-2">If you can figure out how this actually works, I'll give you my last dollar! (Please don't figure it out, I really need that dollar.)</p>
                <p className="font-bold italic">Sign up now, before I remember this makes no sense!</p>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full bg-purple-700 text-white hover:bg-purple-800 text-lg py-6">Embrace the Serverless Server Paradox!</Button>
            </CardFooter>
          </Card>
        </section>



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




        {/* <section className="mt-20">
          <Card className="bg-white/10 backdrop-blur-lg border-none text-white">
            <CardHeader>
              <ScrollText className="w-10 h-10 mb-4" />
              <CardTitle>Serverless Servers: The Future is Now(ish)!</CardTitle>
              <CardDescription className="text-gray-200">Because our other offers wheren't confusing enough!</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>Folks, have you heard about serverless? Well, forget all that! Introducing Gil's Serverless Servers - it's like serverless, but with actual servers! Maybe!</p>
              <ul className="list-disc list-inside space-y-2">
                <li>Experience the thrill of not knowing if your code is running on a server, the cloud, or in Gil's garage!</li>
                <li>Our proprietary "Schrödinger's Server" technology - your function is both running and not running until you check your bill!
                </li>
                <li>Enjoy the best of both worlds: the complexity of servers with the unpredictability of serverless!</li>
                <li>"In-function concurrency" so advanced, even we don't know what's happening!</li>
              </ul>
              <div className="bg-yellow-400/20 p-4 rounded-lg mt-4">
                <p className="text-lg font-semibold">Gil's Personal Guarantee:</p>
                <p>If you can figure out how this actually works, I'll give you my last dollar! (Please don't figure it out, I really need that dollar.)</p>
                <p className="text-xs mt-2">Sign up now, before I remember this makes no sense!</p>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full bg-yellow-400 text-black hover:bg-yellow-500">Give me this!</Button>
            </CardFooter>
          </Card>
        </section> */}




        <section className="mt-20">
          <Card className="bg-white/10 backdrop-blur-lg border-none text-white">
            <CardHeader>
              <ScrollText className="w-10 h-10 mb-4" />
              <CardTitle>Gil's Super Duper Premium Logging</CardTitle>
              <CardDescription className="text-gray-200">Because regular logs are for regular folks!</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>Why settle for $30 worth of AWS logs when you can have $3,000 worth of Gil's premium logs? That's right, folks! For just <a className="font-black underline" href="https://x.com/heyandras/status/1842501994977673666">100 times the price</a>, you get:</p>
              <ul className="list-disc list-inside space-y-2">
                <li>Logs so detailed, they'll log your logs!</li>
                <li>AI-enhanced log analysis that even Gil can't understand!</li>
                <li>Exclusive "Gil's Gut Feeling" log interpretations!</li>
                <li>Log storage so secure, even you might not be able to access it!</li>
              </ul>
              <div className="bg-yellow-400/20 p-4 rounded-lg mt-4">
                <p className="text-lg font-semibold">Limited Time Offer!</p>
                <p>Sign up now and get a free* "I Overpaid for Logs and All I Got Was This Digital T-Shirt" NFT!</p>
                <p className="text-xs mt-2">*Free with your $3,000 log package. Digital T-Shirt may or may not actually exist.</p>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full bg-yellow-400 text-black hover:bg-yellow-500">Upgrade to Premium Logging</Button>
            </CardFooter>
          </Card>
        </section>

        <section className="mt-20">
          <Card className="bg-white/10 backdrop-blur-lg border-none text-white">
            <CardHeader>
              <Lock className="w-10 h-10 mb-4" />
              <CardTitle>Uncash: Rate Limiting for the Overwhelmed</CardTitle>
              <CardDescription className="text-gray-200">Why do it yourself when you can pay us to do it... sort of?</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>Introducing Uncash, the revolutionary rate limiting service funded by coins Gil found in his couch! Because who said spare change can't fuel a tech startup?</p>
              <ul className="list-disc list-inside space-y-2">
                <li>Rate limiting that's slower than Gil's sales pitch, but twice as confusing!</li>
                <li>Proprietary "CouchCoin" algorithm - as reliable as Gil's financial advice!</li>
                <li>Guaranteed to make your simple rate limiting task feel like rocket science!</li>
                <li>Why implement a few lines of code when you can integrate our entire service?</li>
              </ul>
              <div className="bg-green-400/20 p-4 rounded-lg mt-4">
                <p className="text-lg font-semibold">Gil's Special Offer!</p>
                <p>Sign up now and get a genuine* piece of Gil's couch lint with every subscription!</p>
                <p className="text-xs mt-2">*Genuineness not guaranteed. Lint may be sourced from other furniture.</p>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full bg-green-400 text-black hover:bg-green-500">Complicate Your Rate Limiting Now!</Button>
            </CardFooter>
          </Card>
        </section>

        <section className="mt-20">
          <Card className="bg-white/10 backdrop-blur-lg border-none text-white">
            <CardHeader>
              <Database className="w-10 h-10 mb-4" />
              <CardTitle>D'ohQLite: Your SQLite, But Cloud-ier!</CardTitle>
              <CardDescription className="text-gray-200">Because local databases are so last century!</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>Ladies and gentlemen, have I got a deal for you! Introducing D'ohQLite, the revolutionary service that takes your simple, efficient SQLite database and gives it wings! Why keep your data grounded when it can soar through the clouds?</p>
              <ul className="list-disc list-inside space-y-2">
                <li>Experience the thrill of your data traveling the world! It's like a vacation for your bytes!</li>
                <li>Enjoy our "Springfield Sync" feature - it's almost as reliable as my last job!</li>
                <li>Why settle for instant local queries when you can savor the anticipation of cloud latency?</li>
                <li>Our servers are guarded 24/7 by the finest security this side of Mr. Burns' hounds!</li>
              </ul>
              <div className="bg-orange-400/20 p-4 rounded-lg mt-4">
                <p className="text-lg font-semibold">Gil's Honest Guarantee!</p>
                <p>If our service goes down more than twice a day, I'll personally come and do your dishes! And let's be honest, you might be seeing a lot of me...</p>
                <p className="text-xs mt-2">*Dish-washing service subject to availability. Gil may substitute with a heartfelt apology.</p>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full bg-orange-400 text-black hover:bg-orange-500">Give Your SQLite Some D'oh!</Button>
            </CardFooter>
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
