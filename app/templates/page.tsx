'use client'

import { AnimatedGroup } from '@/components/ui/animated-group'
import { Button } from '@/components/ui/button'
import { MinimalFooter } from '@/components/ui/minimal-footer'
import { SignedIn, SignedOut, SignInButton } from '@clerk/nextjs'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { templates, getAllCategories, getTemplatesByCategory } from '@/lib/templates-data'
import { Download, Lock, Check, ExternalLink, Filter } from 'lucide-react'
import { useState } from 'react'

export default function TemplatesPage() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const categories = ['All', ...getAllCategories()]
  
  const filteredTemplates = selectedCategory === 'All'
    ? templates
    : getTemplatesByCategory(selectedCategory)

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-accent/5">
      {/* Hero Section */}
      <section className="relative pt-32 md:pt-40">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center">
            {/* Hero Badge */}
            <Link
              href="#templates-grid"
              className="hover:bg-background dark:hover:border-t-border bg-muted group mx-auto flex w-fit items-center gap-4 rounded-full border p-1 pl-4 shadow-md shadow-black/5 transition-all duration-300 dark:border-t-white/5 dark:shadow-zinc-950">
              <span className="text-foreground text-sm font-sans">New: 16 AI-Powered Templates Available</span>
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
                AI-Powered <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Application Templates</span>
              </h1>
              <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
                Production-ready templates to accelerate your AI application development. Download, customize, and deploy in minutes.
              </p>
              <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium">
                <span>{templates.length}+ Templates Available</span>
              </div>
            </AnimatedGroup>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="pt-12">
        <div className="container mx-auto px-6 items-center justify-center flex mt-12">
          <div className="flex flex-nowrap overflow-x-auto justify-start gap-2 md:gap-4 pb-2">
            
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                  className="rounded-full"
                >
                  {category}
                </Button>
              ))}
          </div>
        </div>
      </section>

      {/* Templates Grid */}
      <section id="templates-grid" className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-sans">
              {selectedCategory} Templates
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              {filteredTemplates.length} templates available
            </p>
          </div>
          
          {filteredTemplates.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No templates found in this category.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
              {filteredTemplates.map((template) => (
                <div key={template.id} className="relative bg-gradient-to-b dark:from-neutral-900 from-neutral-100 dark:to-neutral-950 to-white p-6 rounded-3xl overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 animate-in fade-in-0 zoom-in-95 duration-500">
                  {/* Premium Badge */}
                  {template.isPremium && (
                    <div className="absolute top-4 right-4 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 px-3 py-1 text-xs font-bold text-white">
                      Premium
                    </div>
                  )}
                  
                  {/* Preview Image */}
                  <div className="mb-6 aspect-video rounded-lg overflow-hidden bg-gradient-to-br from-primary/10 to-accent/10">
                    <img
                      src={template.previewImage}
                      alt={template.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Template Info */}
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-xl font-bold font-sans text-neutral-800 dark:text-white">{template.name}</h3>
                      <p className="text-neutral-600 dark:text-neutral-400 text-sm mt-2">{template.description}</p>
                    </div>

                    {/* Category Badge */}
                    <div className="inline-flex items-center gap-1 rounded-full bg-primary/10 px-3 py-1 text-xs font-medium">
                      <Filter className="h-3 w-3" />
                      {template.category}
                    </div>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2">
                      {template.techStack.slice(0, 3).map((tech) => (
                        <span
                          key={tech}
                          className="rounded-full bg-muted px-2 py-1 text-xs font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                      {template.techStack.length > 3 && (
                        <span className="rounded-full bg-muted px-2 py-1 text-xs font-medium">
                          +{template.techStack.length - 3}
                        </span>
                      )}
                    </div>

                    {/* Features */}
                    <div className="space-y-2">
                      {template.features.slice(0, 3).map((feature, index) => (
                        <div key={index} className="flex items-center gap-2 text-sm">
                          <Check className="h-4 w-4 text-green-500" />
                          <span className="text-neutral-600 dark:text-neutral-400">{feature}</span>
                        </div>
                      ))}
                      {template.features.length > 3 && (
                        <p className="text-neutral-600 dark:text-neutral-400 text-sm">
                          +{template.features.length - 3} more features
                        </p>
                      )}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-2 pt-4">
                      <SignedOut>
                        <SignInButton mode="modal">
                          <Button size="sm" className="flex-1 rounded-xl">
                            <Lock className="h-4 w-4 mr-2" />
                            Sign In to View
                          </Button>
                        </SignInButton>
                      </SignedOut>
                      
                      <SignedIn>
                        <Button asChild size="sm" className="flex-1 rounded-xl">
                          <Link href={`/templates/${template.id}`}>
                            <Download className="h-4 w-4 mr-2" />
                            View Details
                          </Link>
                        </Button>
                      </SignedIn>
                      
                      <Button asChild size="sm" variant="ghost" className="rounded-xl">
                        <Link href={template.previewUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Footer */}
      <MinimalFooter />
    </div>
  )
}