'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { AnimatedGroup } from '@/components/ui/animated-group'
import { MinimalFooter } from '@/components/ui/minimal-footer'
import { SignedIn, SignedOut, SignInButton } from '@clerk/nextjs'
import Link from 'next/link'
import { ArrowLeft, Upload, FileText, Code, Globe, DollarSign, CheckCircle } from 'lucide-react'
import { templates } from '@/lib/templates-data'

export default function SellerStartPage() {
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    category: '',
    techStack: [] as string[],
    features: [] as string[],
    premium: false,
    previewUrl: '',
    downloadUrl: '',
  })

  const categories = ['AI & Machine Learning', 'E-commerce', 'Social Media', 'Productivity', 'Gaming', 'Education', 'Health & Fitness', 'Finance', 'Real Estate', 'Travel']

  const techStackOptions = ['Next.js', 'React', 'TypeScript', 'Node.js', 'Python', 'Tailwind CSS', 'Framer Motion', 'OpenAI', 'Clerk', 'Stripe', 'PostgreSQL', 'MongoDB', 'Redis', 'Docker', 'AWS']

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission logic here
    console.log('Form submitted:', formData)
    alert('Template submitted successfully! We will review it and get back to you.')
  }

  const addTechStack = (tech: string) => {
    if (!formData.techStack.includes(tech)) {
      setFormData(prev => ({ ...prev, techStack: [...prev.techStack, tech] }))
    }
  }

  const removeTechStack = (tech: string) => {
    setFormData(prev => ({ ...prev, techStack: prev.techStack.filter(t => t !== tech) }))
  }

  const addFeature = () => {
    const newFeature = `Feature ${formData.features.length + 1}`
    setFormData(prev => ({ ...prev, features: [...prev.features, newFeature] }))
  }

  const removeFeature = (index: number) => {
    setFormData(prev => ({ ...prev, features: prev.features.filter((_, i) => i !== index) }))
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-accent/5">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
        <div className="mx-auto max-w-7xl px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/sell" className="flex items-center gap-2 text-sm font-medium">
              <ArrowLeft className="w-4 h-4" />
              Back to Sell
            </Link>
            <div className="text-sm text-muted-foreground">
              Step {currentStep} of 4
            </div>
          </div>
        </div>
      </nav>

      <div className="mx-auto max-w-4xl px-6 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold font-sans mb-4">
            Submit Your <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">AI Template</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Share your AI-powered template with thousands of developers and start earning revenue
          </p>
        </div>

        {/* Progress Steps */}
        <div className="flex justify-center mb-12">
          <div className="flex items-center space-x-4">
            {[1, 2, 3, 4].map((step) => (
              <div key={step} className="flex items-center">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium ${
                    currentStep >= step
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-muted text-muted-foreground'
                  }`}
                >
                  {currentStep >= step ? (
                    <CheckCircle className="w-5 h-5" />
                  ) : (
                    step
                  )}
                </div>
                {step < 4 && (
                  <div
                    className={`w-16 h-1 mx-2 ${
                      currentStep > step ? 'bg-primary' : 'bg-muted'
                    }`}
                  />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Form Content */}
        <SignedOut>
          <div className="text-center py-16">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <FileText className="w-8 h-8 text-primary" />
            </div>
            <h2 className="text-2xl font-semibold mb-4">Sign In to Continue</h2>
            <p className="text-muted-foreground mb-8 max-w-md mx-auto">
              You need to be signed in to submit templates to our marketplace
            </p>
            <SignInButton mode="modal">
              <Button size="lg" className="rounded-xl px-8">
                Sign In to Continue
              </Button>
            </SignInButton>
          </div>
        </SignedOut>

        <SignedIn>
          <form onSubmit={handleSubmit} className="space-y-12">
            {/* Step 1: Template Information */}
            {currentStep === 1 && (
              <AnimatedGroup
                variants={{
                  container: {
                    visible: {
                      transition: {
                        staggerChildren: 0.05,
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
                        duration: 0.5,
                      },
                    },
                  },
                }}
              >
                <div className="bg-gradient-to-br from-background to-muted/30 rounded-2xl border border-border/50 p-8">
                  <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
                    <FileText className="w-6 h-6 text-primary" />
                    Template Information
                  </h2>
                  
                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium mb-2">Template Name</label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                        className="w-full px-4 py-3 rounded-lg border border-border/50 bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-transparent"
                        placeholder="Enter your template name"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">Description</label>
                      <textarea
                        value={formData.description}
                        onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
                        rows={4}
                        className="w-full px-4 py-3 rounded-lg border border-border/50 bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-transparent"
                        placeholder="Describe what your template does and its key features"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">Category</label>
                      <select
                        value={formData.category}
                        onChange={(e) => setFormData(prev => ({ ...prev, category: e.target.value }))}
                        className="w-full px-4 py-3 rounded-lg border border-border/50 bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-transparent"
                        required
                      >
                        <option value="">Select a category</option>
                        {categories.map((category) => (
                          <option key={category} value={category}>{category}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="flex justify-end mt-8">
                    <Button type="button" onClick={() => setCurrentStep(2)} size="lg" className="rounded-xl px-8">
                      Continue to Technical Details
                    </Button>
                  </div>
                </div>
              </AnimatedGroup>
            )}

            {/* Step 2: Technical Details */}
            {currentStep === 2 && (
              <AnimatedGroup
                variants={{
                  container: {
                    visible: {
                      transition: {
                        staggerChildren: 0.05,
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
                        duration: 0.5,
                      },
                    },
                  },
                }}
              >
                <div className="bg-gradient-to-br from-background to-muted/30 rounded-2xl border border-border/50 p-8">
                  <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
                    <Code className="w-6 h-6 text-primary" />
                    Technical Details
                  </h2>
                  
                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium mb-2">Technology Stack</label>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-2 mb-4">
                        {techStackOptions.map((tech) => (
                          <button
                            key={tech}
                            type="button"
                            onClick={() => addTechStack(tech)}
                            className={`px-3 py-2 rounded-lg text-sm border transition-colors ${
                              formData.techStack.includes(tech)
                                ? 'bg-primary text-primary-foreground border-primary'
                                : 'bg-muted border-border/50 hover:bg-muted/80'
                            }`}
                          >
                            {tech}
                          </button>
                        ))}
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {formData.techStack.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm flex items-center gap-1"
                          >
                            {tech}
                            <button
                              type="button"
                              onClick={() => removeTechStack(tech)}
                              className="ml-1 hover:text-primary-foreground"
                            >
                              ×
                            </button>
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">Key Features</label>
                      <div className="space-y-2 mb-4">
                        {formData.features.map((feature, index) => (
                          <div key={index} className="flex items-center gap-2">
                            <input
                              type="text"
                              value={feature}
                              onChange={(e) => {
                                const newFeatures = [...formData.features]
                                newFeatures[index] = e.target.value
                                setFormData(prev => ({ ...prev, features: newFeatures }))
                              }}
                              className="flex-1 px-3 py-2 rounded-lg border border-border/50 bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-transparent"
                              placeholder="Feature description"
                            />
                            <button
                              type="button"
                              onClick={() => removeFeature(index)}
                              className="p-2 text-destructive hover:bg-destructive/10 rounded-lg"
                            >
                              ×
                            </button>
                          </div>
                        ))}
                      </div>
                      <Button
                        type="button"
                        variant="outline"
                        onClick={addFeature}
                        className="w-full"
                      >
                        Add Feature
                      </Button>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">Preview Image</label>
                      <div className="border-2 border-dashed border-border/50 rounded-lg p-8 text-center">
                        <Upload className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                        <p className="text-muted-foreground mb-2">Upload a preview image</p>
                        <p className="text-sm text-muted-foreground">PNG, JPG up to 10MB</p>
                        <Button type="button" variant="outline" className="mt-4">
                          Choose File
                        </Button>
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-between mt-8">
                    <Button type="button" onClick={() => setCurrentStep(1)} variant="outline">
                      Back
                    </Button>
                    <Button type="button" onClick={() => setCurrentStep(3)} size="lg" className="rounded-xl px-8">
                      Continue to Pricing
                    </Button>
                  </div>
                </div>
              </AnimatedGroup>
            )}

            {/* Step 3: Pricing & URLs */}
            {currentStep === 3 && (
              <AnimatedGroup
                variants={{
                  container: {
                    visible: {
                      transition: {
                        staggerChildren: 0.05,
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
                        duration: 0.5,
                      },
                    },
                  },
                }}
              >
                <div className="bg-gradient-to-br from-background to-muted/30 rounded-2xl border border-border/50 p-8">
                  <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
                    <DollarSign className="w-6 h-6 text-primary" />
                    Pricing & URLs
                  </h2>
                  
                  <div className="space-y-6">
                    <div className="flex items-center gap-4">
                      <input
                        type="checkbox"
                        id="premium"
                        checked={formData.premium}
                        onChange={(e) => setFormData(prev => ({ ...prev, premium: e.target.checked }))}
                        className="w-4 h-4 rounded border-primary text-primary focus:ring-primary/20"
                      />
                      <label htmlFor="premium" className="text-sm font-medium">
                        This is a Premium Template
                      </label>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Live Preview URL
                      </label>
                      <input
                        type="url"
                        value={formData.previewUrl}
                        onChange={(e) => setFormData(prev => ({ ...prev, previewUrl: e.target.value }))}
                        className="w-full px-4 py-3 rounded-lg border border-border/50 bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-transparent"
                        placeholder="https://your-template-demo.com"
                        required
                      />
                      <p className="text-xs text-muted-foreground mt-1">
                        URL where users can preview your template in action
                      </p>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Download / Repository URL
                      </label>
                      <input
                        type="url"
                        value={formData.downloadUrl}
                        onChange={(e) => setFormData(prev => ({ ...prev, downloadUrl: e.target.value }))}
                        className="w-full px-4 py-3 rounded-lg border border-border/50 bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-transparent"
                        placeholder="https://github.com/your-username/your-template"
                        required
                      />
                      <p className="text-xs text-muted-foreground mt-1">
                        GitHub repository or download link for your template
                      </p>
                    </div>

                    {formData.premium && (
                      <div className="bg-muted/50 rounded-lg p-4">
                        <h3 className="font-medium mb-2">Premium Template Benefits</h3>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          <li>• Higher commission rate (85% vs 80%)</li>
                          <li>• Featured placement in marketplace</li>
                          <li>• Priority review and support</li>
                          <li>• Access to premium buyer audience</li>
                        </ul>
                      </div>
                    )}
                  </div>

                  <div className="flex justify-between mt-8">
                    <Button type="button" onClick={() => setCurrentStep(2)} variant="outline">
                      Back
                    </Button>
                    <Button type="button" onClick={() => setCurrentStep(4)} size="lg" className="rounded-xl px-8">
                      Continue to Review
                    </Button>
                  </div>
                </div>
              </AnimatedGroup>
            )}

            {/* Step 4: Review & Submit */}
            {currentStep === 4 && (
              <AnimatedGroup
                variants={{
                  container: {
                    visible: {
                      transition: {
                        staggerChildren: 0.05,
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
                        duration: 0.5,
                      },
                    },
                  },
                }}
              >
                <div className="bg-gradient-to-br from-background to-muted/30 rounded-2xl border border-border/50 p-8">
                  <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
                    <CheckCircle className="w-6 h-6 text-primary" />
                    Review & Submit
                  </h2>
                  
                  <div className="space-y-6">
                    <div>
                      <h3 className="font-medium mb-2">Template Information</h3>
                      <div className="bg-muted/50 rounded-lg p-4 space-y-2">
                        <div><span className="text-muted-foreground">Name:</span> {formData.name}</div>
                        <div><span className="text-muted-foreground">Category:</span> {formData.category}</div>
                        <div><span className="text-muted-foreground">Premium:</span> {formData.premium ? 'Yes' : 'No'}</div>
                      </div>
                    </div>

                    <div>
                      <h3 className="font-medium mb-2">Description</h3>
                      <div className="bg-muted/50 rounded-lg p-4">
                        <p className="text-sm">{formData.description}</p>
                      </div>
                    </div>

                    <div>
                      <h3 className="font-medium mb-2">Technology Stack</h3>
                      <div className="flex flex-wrap gap-2">
                        {formData.techStack.map((tech) => (
                          <span key={tech} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h3 className="font-medium mb-2">Key Features</h3>
                      <div className="bg-muted/50 rounded-lg p-4 space-y-1">
                        {formData.features.map((feature, index) => (
                          <div key={index} className="text-sm">• {feature}</div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h3 className="font-medium mb-2">URLs</h3>
                      <div className="bg-muted/50 rounded-lg p-4 space-y-2">
                        <div>
                          <span className="text-muted-foreground text-sm">Preview:</span>
                          <a href={formData.previewUrl} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline ml-2">
                            {formData.previewUrl}
                          </a>
                        </div>
                        <div>
                          <span className="text-muted-foreground text-sm">Download:</span>
                          <a href={formData.downloadUrl} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline ml-2">
                            {formData.downloadUrl}
                          </a>
                        </div>
                      </div>
                    </div>

                    <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
                      <h3 className="font-medium text-amber-800 mb-2">Submission Guidelines</h3>
                      <ul className="text-sm text-amber-700 space-y-1">
                        <li>• Your template will be reviewed within 3-5 business days</li>
                        <li>• Ensure all links are working and accessible</li>
                        <li>• Templates must be original work or properly licensed</li>
                        <li>• Premium templates must demonstrate exceptional quality and value</li>
                      </ul>
                    </div>
                  </div>

                  <div className="flex justify-between mt-8">
                    <Button type="button" onClick={() => setCurrentStep(3)} variant="outline">
                      Back
                    </Button>
                    <Button type="submit" size="lg" className="rounded-xl px-8">
                      Submit Template for Review
                    </Button>
                  </div>
                </div>
              </AnimatedGroup>
            )}
          </form>
        </SignedIn>
      </div>

      {/* Footer */}
      <MinimalFooter />
    </div>
  )
}