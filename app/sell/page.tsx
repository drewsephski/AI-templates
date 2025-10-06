'use client'

import { AnimatedGroup } from '@/components/ui/animated-group'
import { Button } from '@/components/ui/button'
import { MinimalFooter } from '@/components/ui/minimal-footer'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { DollarSign, TrendingUp, Users, Shield, Zap, Award } from 'lucide-react'

export default function SellPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-accent/5">
      {/* Hero Section */}
      <section className="relative pt-32 md:pt-40">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center">
            {/* Hero Badge */}
            <Link
              href="#benefits"
              className="hover:bg-background dark:hover:border-t-border bg-muted group mx-auto flex w-fit items-center gap-4 rounded-full border p-1 pl-4 shadow-md shadow-black/5 transition-all duration-300 dark:border-t-white/5 dark:shadow-zinc-950">
              <span className="text-foreground text-sm font-sans">Limited Time: 85% Commission for New Sellers</span>
              <span className="dark:border-background block h-4 w-0.5 border-l bg-white dark:bg-zinc-700"></span>

              <div className="bg-background group-hover:bg-muted size-6 overflow-hidden rounded-full duration-500">
                <div className="flex w-12 -translate-x-1/2 duration-500 ease-in-out group-hover:translate-x-0">
                  <span className="flex size-6">
                    <ArrowRight className="m-auto size-3" />
                  </span>
                  <span className="flex size-6">
                    <ArrowRight className="m-auto size-3" />
                  </span>
                </div>
              </div>
            </Link>

            <div className="h-8"></div>

            <AnimatedGroup
              variants={{
                container: {
                  visible: {
                    transition: {
                      staggerChildren: 0.05,
                      delayChildren: 0.75,
                    },
                  },
                },
                item: {
                  hidden: { opacity: 0, y: 20 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: {
                      type: 'spring',
                      bounce: 0.3,
                      duration: 2,
                    },
                  },
                },
              }}
              className="flex flex-col items-center justify-center gap-2"
            >
              <h1 className="text-4xl md:text-6xl font-bold font-sans">
                Monetize Your <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">AI Templates</span>
              </h1>
              <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
                Join our marketplace and earn revenue by selling your AI-powered application templates to thousands of developers worldwide
              </p>
              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="rounded-xl px-8">
                  <Link href="/sell/start">
                    <span className="flex items-center gap-2">
                      <DollarSign className="h-5 w-5" />
                      Start Selling
                    </span>
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="rounded-xl px-8">
                  <Link href="/sign-up">
                    <span className="flex items-center gap-2">
                      <Users className="h-5 w-5" />
                      Join Marketplace
                    </span>
                  </Link>
                </Button>
              </div>
            </AnimatedGroup>
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section id="benefits" className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-sans">Why Sell With Us?</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Join hundreds of creators already earning from their templates
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4 md:gap-6">
              <div className="relative bg-gradient-to-b dark:from-neutral-900 from-neutral-100 dark:to-neutral-950 to-white p-6 rounded-3xl overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-primary/5">
                <div className="flex items-center gap-4">
                  <div className="rounded-lg bg-primary/10 p-3">
                    <DollarSign className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold font-sans text-neutral-800 dark:text-white">Earn Revenue</h3>
                    <p className="text-neutral-600 dark:text-neutral-400 mt-1 text-sm">
                      Set your own prices and earn up to 80% commission on every sale
                    </p>
                  </div>
                </div>
              </div>

              <div className="relative bg-gradient-to-b dark:from-neutral-900 from-neutral-100 dark:to-neutral-950 to-white p-6 rounded-3xl overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-primary/5">
                <div className="flex items-center gap-4">
                  <div className="rounded-lg bg-primary/10 p-3">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold font-sans text-neutral-800 dark:text-white">Global Reach</h3>
                    <p className="text-neutral-600 dark:text-neutral-400 mt-1 text-sm">
                      Access to thousands of developers actively searching for quality templates
                    </p>
                  </div>
                </div>
              </div>

              <div className="relative bg-gradient-to-b dark:from-neutral-900 from-neutral-100 dark:to-neutral-950 to-white p-6 rounded-3xl overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-primary/5">
                <div className="flex items-center gap-4">
                  <div className="rounded-lg bg-primary/10 p-3">
                    <Shield className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold font-sans text-neutral-800 dark:text-white">Secure Payments</h3>
                    <p className="text-neutral-600 dark:text-neutral-400 mt-1 text-sm">
                      Fast, secure payment processing with multiple payout options
                    </p>
                  </div>
                </div>
              </div>

              <div className="relative bg-gradient-to-b dark:from-neutral-900 from-neutral-100 dark:to-neutral-950 to-white p-6 rounded-3xl overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-primary/5">
                <div className="flex items-center gap-4">
                  <div className="rounded-lg bg-primary/10 p-3">
                    <TrendingUp className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold font-sans text-neutral-800 dark:text-white">Marketing Support</h3>
                    <p className="text-neutral-600 dark:text-neutral-400 mt-1 text-sm">
                      Featured listings, promotional campaigns, and SEO optimization
                    </p>
                  </div>
                </div>
              </div>

              <div className="relative bg-gradient-to-b dark:from-neutral-900 from-neutral-100 dark:to-neutral-950 to-white p-6 rounded-3xl overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-primary/5">
                <div className="flex items-center gap-4">
                  <div className="rounded-lg bg-primary/10 p-3">
                    <Zap className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold font-sans text-neutral-800 dark:text-white">Easy Management</h3>
                    <p className="text-neutral-600 dark:text-neutral-400 mt-1 text-sm">
                      Simple dashboard to track sales, analytics, and customer feedback
                    </p>
                  </div>
                </div>
              </div>

              <div className="relative bg-gradient-to-b dark:from-neutral-900 from-neutral-100 dark:to-neutral-950 to-white p-6 rounded-3xl overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-primary/5">
                <div className="flex items-center gap-4">
                  <div className="rounded-lg bg-primary/10 p-3">
                    <Award className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold font-sans text-neutral-800 dark:text-white">Quality Assurance</h3>
                    <p className="text-neutral-600 dark:text-neutral-400 mt-1 text-sm">
                      Our team reviews templates to ensure high standards and customer satisfaction
                    </p>
                  </div>
                </div>
              </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 bg-accent/5">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-sans">How It Works</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Get started in just a few simple steps
            </p>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 md:gap-6">
           
              <div className="text-center">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-lg font-bold text-primary-foreground">
                  1
                </div>
                <h3 className="font-semibold font-sans text-neutral-800 dark:text-white mb-2">Create Your Template</h3>
                <p className="text-neutral-600 dark:text-neutral-400 text-sm">
                  Build high-quality, well-documented AI application templates
                </p>
              </div>

              <div className="text-center">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-lg font-bold text-primary-foreground">
                  2
                </div>
                <h3 className="font-semibold font-sans text-neutral-800 dark:text-white mb-2">Submit for Review</h3>
                <p className="text-neutral-600 dark:text-neutral-400 text-sm">
                  Our team reviews your template for quality and completeness
                </p>
              </div>

              <div className="text-center">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-lg font-bold text-primary-foreground">
                  3
                </div>
                <h3 className="font-semibold font-sans text-neutral-800 dark:text-white mb-2">Set Your Price</h3>
                <p className="text-neutral-600 dark:text-neutral-400 text-sm">
                  Choose your pricing model and commission structure
                </p>
              </div>

              <div className="text-center">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-lg font-bold text-primary-foreground">
                  4
                </div>
                <h3 className="font-semibold font-sans text-neutral-800 dark:text-white mb-2">Start Earning</h3>
                <p className="text-neutral-600 dark:text-neutral-400 text-sm">
                  Your template goes live and you start earning from every sale
                </p>
              </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 text-center">
            <div className="relative bg-gradient-to-b dark:from-neutral-900 from-neutral-100 dark:to-neutral-950 to-white p-6 rounded-3xl overflow-hidden transition-all duration-300 hover:shadow-md animate-in fade-in-0 zoom-in-95 duration-500">
              <div>
                <div className="text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  $500K+
                </div>
                <p className="text-sm text-muted-foreground mt-2">Total Creator Earnings</p>
              </div>
            </div>

            <div className="relative bg-gradient-to-b dark:from-neutral-900 from-neutral-100 dark:to-neutral-950 to-white p-6 rounded-3xl overflow-hidden transition-all duration-300 hover:shadow-md animate-in fade-in-0 zoom-in-95 duration-500">
              <div>
                <div className="text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  10K+
                </div>
                <p className="text-sm text-muted-foreground mt-2">Active Developers</p>
              </div>
            </div>

            <div className="relative bg-gradient-to-b dark:from-neutral-900 from-neutral-100 dark:to-neutral-950 to-white p-6 rounded-3xl overflow-hidden transition-all duration-300 hover:shadow-md animate-in fade-in-0 zoom-in-95 duration-500">
              <div>
                <div className="text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  95%
                </div>
                <p className="text-sm text-muted-foreground mt-2">Customer Satisfaction</p>
              </div>
            </div>

            <div className="relative bg-gradient-to-b dark:from-neutral-900 from-neutral-100 dark:to-neutral-950 to-white p-6 rounded-3xl overflow-hidden transition-all duration-300 hover:shadow-md animate-in fade-in-0 zoom-in-95 duration-500">
              <div>
                <div className="text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  24/7
                </div>
                <p className="text-sm text-muted-foreground mt-2">Support Availability</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-r from-primary/10 to-accent/10">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <AnimatedGroup
            variants={{
              container: {
                visible: {
                  transition: {
                    staggerChildren: 0.05,
                    delayChildren: 0.1,
                  },
                },
              },
              item: {
                hidden: { opacity: 0, y: 20 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    type: 'spring',
                    bounce: 0.3,
                    duration: 1.5,
                  },
                },
              },
            }}
          >
            <h2 className="text-3xl md:text-4xl font-bold font-sans">
              Ready to Start Selling?
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Join hundreds of creators already earning from their templates
            </p>
            <div className="mt-8">
              <Button asChild size="lg" className="rounded-xl px-8">
                <Link href="/sign-up">
                  <span className="flex items-center gap-2">
                    <DollarSign className="h-5 w-5" />
                    Create Seller Account
                  </span>
                </Link>
              </Button>
            </div>
          </AnimatedGroup>
        </div>
      </section>

      {/* Footer */}
      <MinimalFooter />
    </div>
  )
}