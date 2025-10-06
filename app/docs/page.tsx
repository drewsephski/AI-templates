'use client'

import { AnimatedGroup } from '@/components/ui/animated-group'
import { Button } from '@/components/ui/button'
import { MinimalFooter } from '@/components/ui/minimal-footer'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { BookOpen, Code, Rocket, Users } from 'lucide-react'

export default function DocsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-accent/5">
      {/* Hero Section */}
      <section className="relative pt-32 md:pt-40">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center">
            {/* Hero Badge */}
            <Link
              href="#categories"
              className="hover:bg-background dark:hover:border-t-border bg-muted group mx-auto flex w-fit items-center gap-4 rounded-full border p-1 pl-4 shadow-md shadow-black/5 transition-all duration-300 dark:border-t-white/5 dark:shadow-zinc-950">
              <span className="text-foreground text-sm font-sans">New: Interactive API Playground</span>
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
                Comprehensive <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Documentation</span>
              </h1>
              <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
                Everything you need to build, deploy, and scale AI-powered applications with our platform
              </p>
              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="rounded-xl px-8">
                  <Link href="#getting-started">
                    <span className="flex items-center gap-2">
                      <Rocket className="h-5 w-5" />
                      Get Started
                    </span>
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="rounded-xl px-8">
                  <Link href="/sign-up">
                    <span className="flex items-center gap-2">
                      <BookOpen className="h-5 w-5" />
                      Sign Up Free
                    </span>
                  </Link>
                </Button>
              </div>
            </AnimatedGroup>
          </div>
        </div>
      </section>

      {/* Documentation Categories */}
      <section id="categories" className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-sans">Documentation Categories</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Explore our comprehensive guides and resources
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
            <Link href="#quick-start">
              <div className="relative bg-gradient-to-b dark:from-neutral-900 from-neutral-100 dark:to-neutral-950 to-white p-6 rounded-3xl overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 cursor-pointer animate-in fade-in-0 zoom-in-95 duration-500">
                <div className="flex items-center gap-4">
                  <div className="rounded-lg bg-primary/10 p-3">
                    <BookOpen className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold font-sans text-neutral-800 dark:text-white">Quick Start Guide</h3>
                    <p className="text-neutral-600 dark:text-neutral-400 mt-1 text-sm">
                      Get up and running in minutes with step-by-step tutorials
                    </p>
                  </div>
                </div>
              </div>
            </Link>

            <Link href="#api-reference">
              <div className="relative bg-gradient-to-b dark:from-neutral-900 from-neutral-100 dark:to-neutral-950 to-white p-6 rounded-3xl overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 cursor-pointer animate-in fade-in-0 zoom-in-95 duration-500">
                <div className="flex items-center gap-4">
                  <div className="rounded-lg bg-primary/10 p-3">
                    <Code className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold font-sans text-neutral-800 dark:text-white">API Documentation</h3>
                    <p className="text-neutral-600 dark:text-neutral-400 mt-1 text-sm">
                      Complete reference for all endpoints and integrations
                    </p>
                  </div>
                </div>
              </div>
            </Link>

            <Link href="#best-practices">
              <div className="relative bg-gradient-to-b dark:from-neutral-900 from-neutral-100 dark:to-neutral-950 to-white p-6 rounded-3xl overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 cursor-pointer animate-in fade-in-0 zoom-in-95 duration-500">
                <div className="flex items-center gap-4">
                  <div className="rounded-lg bg-primary/10 p-3">
                    <Rocket className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold font-sans text-neutral-800 dark:text-white">Best Practices</h3>
                    <p className="text-neutral-600 dark:text-neutral-400 mt-1 text-sm">
                      Learn optimization techniques and architectural patterns
                    </p>
                  </div>
                </div>
              </div>
            </Link>

            <Link href="#community">
              <div className="relative bg-gradient-to-b dark:from-neutral-900 from-neutral-100 dark:to-neutral-950 to-white p-6 rounded-3xl overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 cursor-pointer animate-in fade-in-0 zoom-in-95 duration-500">
                <div className="flex items-center gap-4">
                  <div className="rounded-lg bg-primary/10 p-3">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold font-sans text-neutral-800 dark:text-white">Community Resources</h3>
                    <p className="text-neutral-600 dark:text-neutral-400 mt-1 text-sm">
                      Access tutorials, examples, and community contributions
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Popular Topics */}
      <section className="py-20 bg-accent/5">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-sans">Popular Topics</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Frequently asked questions and guides
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
            <div className="relative bg-gradient-to-b dark:from-neutral-900 from-neutral-100 dark:to-neutral-950 to-white p-6 rounded-3xl overflow-hidden transition-all duration-300 hover:shadow-md animate-in fade-in-0 zoom-in-95 duration-500">
              <h4 className="font-semibold font-sans text-neutral-800 dark:text-white mb-2">Authentication</h4>
              <p className="text-neutral-600 dark:text-neutral-400 text-sm">
                Learn how to implement secure authentication in your applications
              </p>
            </div>

            <div className="relative bg-gradient-to-b dark:from-neutral-900 from-neutral-100 dark:to-neutral-950 to-white p-6 rounded-3xl overflow-hidden transition-all duration-300 hover:shadow-md animate-in fade-in-0 zoom-in-95 duration-500">
              <h4 className="font-semibold font-sans text-neutral-800 dark:text-white mb-2">Templates</h4>
              <p className="text-neutral-600 dark:text-neutral-400 text-sm">
                Explore our AI-powered templates and customization options
              </p>
            </div>

            <div className="relative bg-gradient-to-b dark:from-neutral-900 from-neutral-100 dark:to-neutral-950 to-white p-6 rounded-3xl overflow-hidden transition-all duration-300 hover:shadow-md animate-in fade-in-0 zoom-in-95 duration-500">
              <h4 className="font-semibold font-sans text-neutral-800 dark:text-white mb-2">Deployment</h4>
              <p className="text-neutral-600 dark:text-neutral-400 text-sm">
                Deploy your applications to various platforms and services
              </p>
            </div>

            <div className="relative bg-gradient-to-b dark:from-neutral-900 from-neutral-100 dark:to-neutral-950 to-white p-6 rounded-3xl overflow-hidden transition-all duration-300 hover:shadow-md animate-in fade-in-0 zoom-in-95 duration-500">
              <h4 className="font-semibold font-sans text-neutral-800 dark:text-white mb-2">Troubleshooting</h4>
              <p className="text-neutral-600 dark:text-neutral-400 text-sm">
                Common issues and their solutions for smooth development
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <section id="getting-started" className="py-20">
        <div className="mx-auto max-w-4xl px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-sans">Getting Started</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Your journey to building AI-powered applications starts here
            </p>
          </div>
          
          <div className="bg-gradient-to-br from-background to-muted/30 rounded-2xl border border-border/50 p-8">
            <h3 className="text-xl font-semibold mb-4">Welcome to AI Templates</h3>
            <p className="text-muted-foreground mb-6">
              AI Templates is a comprehensive marketplace for modern web application templates powered by artificial intelligence. 
              Our platform provides you with ready-to-use, customizable templates that help you build applications faster and more efficiently.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-2">Quick Setup</h4>
                <p className="text-sm text-muted-foreground">
                  Get started in minutes with our intuitive setup process. Choose from 15+ professionally designed templates.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">AI-Powered Features</h4>
                <p className="text-sm text-muted-foreground">
                  Leverage cutting-edge AI models and features to enhance your applications with intelligent capabilities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="quick-start" className="py-20 bg-accent/5">
        <div className="mx-auto max-w-4xl px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-sans">Quick Start Guide</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Follow these simple steps to get your first AI template running
            </p>
          </div>
          
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-background to-muted/30 rounded-2xl border border-border/50 p-6">
              <h3 className="text-lg font-semibold mb-3">Step 1: Choose Your Template</h3>
              <p className="text-muted-foreground mb-4">
                Browse our collection of 15+ AI-powered templates. Each template is designed with modern best practices and includes:
              </p>
              <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                <li>Pre-configured AI integrations</li>
                <li>Responsive design systems</li>
                <li>Authentication systems</li>
                <li>Database schemas</li>
                <li>API endpoints</li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-background to-muted/30 rounded-2xl border border-border/50 p-6">
              <h3 className="text-lg font-semibold mb-3">Step 2: Clone and Setup</h3>
              <p className="text-muted-foreground mb-4">
                Once you've selected a template, clone the repository and install dependencies:
              </p>
              <div className="bg-muted rounded-lg p-4 font-mono text-sm">
                <code>git clone &lt;template-url&gt;<br />
                cd &lt;template-name&gt;<br />
                npm install<br />
                npm run dev</code>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-background to-muted/30 rounded-2xl border border-border/50 p-6">
              <h3 className="text-lg font-semibold mb-3">Step 3: Customize and Deploy</h3>
              <p className="text-muted-foreground">
                Customize the template to fit your needs, then deploy to your preferred hosting platform. 
                Our templates are optimized for Vercel, Netlify, and other modern hosting solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="api-reference" className="py-20">
        <div className="mx-auto max-w-4xl px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-sans">API Reference</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Complete documentation for all available endpoints and features
            </p>
          </div>
          
          <div className="bg-gradient-to-br from-background to-muted/30 rounded-2xl border border-border/50 p-8">
            <h3 className="text-xl font-semibold mb-6">Core API Endpoints</h3>
            
            <div className="space-y-6">
              <div>
                <h4 className="font-semibold mb-2 text-primary">/api/chat</h4>
                <p className="text-muted-foreground mb-2">
                  Streaming AI chat interface powered by OpenRouter
                </p>
                <div className="bg-muted rounded-lg p-4 font-mono text-sm">
                  <code>POST /api/chat<br />
                  Content-Type: application/json<br />
                  {`{<br />
                  &nbsp;&nbsp;"messages": [{"role": "user", "content": "Hello"}]<br />
                  }`}</code>
                </div>
              </div>
              
              <div>
                <h4 className="font-semibold mb-2 text-primary">/api/templates/download/[id]</h4>
                <p className="text-muted-foreground mb-2">
                  Download template files and assets
                </p>
                <div className="bg-muted rounded-lg p-4 font-mono text-sm">
                  <code>GET /api/templates/download/[id]<br />
                  Authorization: Bearer &lt;token&gt;</code>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="best-practices" className="py-20 bg-accent/5">
        <div className="mx-auto max-w-4xl px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-sans">Best Practices</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Learn optimization techniques and architectural patterns
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-background to-muted/30 rounded-2xl border border-border/50 p-6">
              <h3 className="text-lg font-semibold mb-3">Performance Optimization</h3>
              <ul className="text-sm text-muted-foreground space-y-2">
                <li>• Use Next.js static generation where possible</li>
                <li>• Implement proper image optimization</li>
                <li>• Leverage caching strategies</li>
                <li>• Monitor API response times</li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-background to-muted/30 rounded-2xl border border-border/50 p-6">
              <h3 className="text-lg font-semibold mb-3">Security Considerations</h3>
              <ul className="text-sm text-muted-foreground space-y-2">
                <li>• Implement proper authentication</li>
                <li>• Validate all user inputs</li>
                <li>• Use environment variables for secrets</li>
                <li>• Regular security audits</li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-background to-muted/30 rounded-2xl border border-border/50 p-6">
              <h3 className="text-lg font-semibold mb-3">AI Integration</h3>
              <ul className="text-sm text-muted-foreground space-y-2">
                <li>• Provide clear user prompts</li>
                <li>• Handle API failures gracefully</li>
                <li>• Implement rate limiting</li>
                <li>• Monitor AI response quality</li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-background to-muted/30 rounded-2xl border border-border/50 p-6">
              <h3 className="text-lg font-semibold mb-3">Code Organization</h3>
              <ul className="text-sm text-muted-foreground space-y-2">
                <li>• Follow consistent naming conventions</li>
                <li>• Use TypeScript for type safety</li>
                <li>• Implement proper error handling</li>
                <li>• Write comprehensive tests</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="community" className="py-20">
        <div className="mx-auto max-w-4xl px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-sans">Community Resources</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Connect with other developers and access community resources
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-background to-muted/30 rounded-2xl border border-border/50 p-6">
              <h3 className="text-lg font-semibold mb-3">Community Discord</h3>
              <p className="text-muted-foreground mb-4">
                Join our active community of developers, designers, and AI enthusiasts. Get help, share ideas, and collaborate on projects.
              </p>
              <Link href="/contact">
                <Button variant="outline" size="sm">
                  Join Discord
                </Button>
              </Link>
            </div>
            
            <div className="bg-gradient-to-br from-background to-muted/30 rounded-2xl border border-border/50 p-6">
              <h3 className="text-lg font-semibold mb-3">GitHub Repository</h3>
              <p className="text-muted-foreground mb-4">
                Contribute to our open-source project. Report issues, submit pull requests, and help improve the platform.
              </p>
              <Link href="https://github.com/drewsephski" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="sm">
                  View on GitHub
                </Button>
              </Link>
            </div>
            
            <div className="bg-gradient-to-br from-background to-muted/30 rounded-2xl border border-border/50 p-6">
              <h3 className="text-lg font-semibold mb-3">Blog & Tutorials</h3>
              <p className="text-muted-foreground mb-4">
                Stay updated with the latest tutorials, guides, and articles about AI development and template customization.
              </p>
              <Link href="/docs" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="sm">
                  Read Blog
                </Button>
              </Link>
            </div>
            
            <div className="bg-gradient-to-br from-background to-muted/30 rounded-2xl border border-border/50 p-6">
              <h3 className="text-lg font-semibold mb-3">Support Center</h3>
              <p className="text-muted-foreground mb-4">
                Access comprehensive documentation, FAQs, and contact support for any questions or issues you may have.
              </p>
              <Link href="/contact">
                <Button variant="outline" size="sm">
                  Get Support
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <MinimalFooter />
    </div>
  )
}