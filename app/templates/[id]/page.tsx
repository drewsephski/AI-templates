import { notFound } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { MinimalFooter } from '@/components/ui/minimal-footer'
import { SignedIn, SignedOut, SignInButton } from '@clerk/nextjs'
import Link from 'next/link'
import { ArrowLeft, Download, ExternalLink, Star, Users, Calendar } from 'lucide-react'
import { getTemplateById, templates } from '@/lib/templates-data'
import { Badge } from '@/components/ui/badge'
import TemplateTabs from '@/components/templates/template-tabs'

interface TemplateDetailPageProps {
  params: Promise<{
    id: string
  }>
}

export default async function TemplateDetailPage({ params }: TemplateDetailPageProps) {
  const { id } = await params
  const template = getTemplateById(id)
  
  if (!template) {
    notFound()
  }

  // Get related templates (same category, different template)
  const relatedTemplates = templates
    .filter(t => t.category === template.category && t.id !== template.id)
    .slice(0, 4)

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-accent/5">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
        <div className="mx-auto max-w-7xl px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/templates" className="flex items-center gap-2 text-sm font-medium">
              <ArrowLeft className="w-4 h-4" />
              Back to Templates
            </Link>
            <div className="flex items-center gap-2">
              {template.isPremium && (
                <Badge variant="secondary" className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white">
                  Premium
                </Badge>
              )}
              <Badge variant="outline">{template.category}</Badge>
            </div>
          </div>
        </div>
      </nav>

      <div className="mx-auto max-w-7xl px-6 py-12">
        {/* Breadcrumb */}
        <div className="text-sm text-muted-foreground mb-8">
          <Link href="/" className="hover:text-foreground">Home</Link>
          <span className="mx-2">/</span>
          <Link href="/templates" className="hover:text-foreground">Templates</Link>
          <span className="mx-2">/</span>
          <span className="text-foreground">{template.name}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Hero Section */}
            <div className="bg-gradient-to-br from-background to-muted/30 rounded-2xl border border-border/50 p-8">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h1 className="text-3xl md:text-4xl font-bold font-sans mb-2">
                    {template.name}
                  </h1>
                  <p className="text-lg text-muted-foreground">
                    {template.description}
                  </p>
                </div>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span>4.8</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="w-4 h-4" />
                    <span>234</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span>Updated 2 days ago</span>
                  </div>
                </div>
              </div>

              {/* Preview Image */}
              <div className="aspect-video rounded-lg overflow-hidden mb-6">
                <img
                  src={template.previewImage}
                  alt={template.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <SignedOut>
                  <SignInButton mode="modal">
                    <Button size="lg" className="flex-1 rounded-xl">
                      Sign In to Download
                    </Button>
                  </SignInButton>
                </SignedOut>
                
                <SignedIn>
                  <Button asChild size="lg" className="flex-1 rounded-xl">
                    <Link href={template.downloadUrl} target="_blank" rel="noopener noreferrer">
                      <Download className="w-5 h-5 mr-2" />
                      Download Template
                    </Link>
                  </Button>
                </SignedIn>
                
                <Button asChild size="lg" variant="outline" className="rounded-xl">
                  <Link href={template.previewUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-5 h-5 mr-2" />
                    Live Preview
                  </Link>
                </Button>
              </div>
            </div>

            {/* Tabs */}
            <TemplateTabs template={template} />
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Template Info Card */}
            <div className="bg-gradient-to-br from-background to-muted/30 rounded-2xl border border-border/50 p-6">
              <h3 className="font-semibold mb-4">Template Information</h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Category:</span>
                  <span>{template.category}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Status:</span>
                  <span className="text-green-600">Active</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">License:</span>
                  <span>MIT</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Last Update:</span>
                  <span>2 days ago</span>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-gradient-to-br from-background to-muted/30 rounded-2xl border border-border/50 p-6">
              <h3 className="font-semibold mb-4">Quick Actions</h3>
              <div className="space-y-3">
                <Button asChild className="w-full justify-start" variant="outline">
                  <Link href={template.previewUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Preview Online
                  </Link>
                </Button>
                <Button asChild className="w-full justify-start">
                  <Link href={template.downloadUrl} target="_blank" rel="noopener noreferrer">
                    <Download className="w-4 h-4 mr-2" />
                    Download Files
                  </Link>
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Star className="w-4 h-4 mr-2" />
                  Add to Favorites
                </Button>
              </div>
            </div>

            {/* Author Info */}
            <div className="bg-gradient-to-br from-background to-muted/30 rounded-2xl border border-border/50 p-6">
              <h3 className="font-semibold mb-4">Template Author</h3>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                  <span className="text-sm font-bold text-primary">AI</span>
                </div>
                <div>
                  <h4 className="font-medium">AI Templates Team</h4>
                  <p className="text-sm text-muted-foreground">Verified Seller</p>
                </div>
              </div>
              <div className="space-y-2 text-sm text-muted-foreground">
                <div className="flex justify-between">
                  <span>Templates Sold:</span>
                  <span>1,234</span>
                </div>
                <div className="flex justify-between">
                  <span>Rating:</span>
                  <span className="flex items-center gap-1">
                    <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                    4.8
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Related Templates */}
        {relatedTemplates.length > 0 && (
          <div className="mt-16">
            <h2 className="text-2xl font-bold mb-8">More {template.category} Templates</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedTemplates.map((relatedTemplate) => (
                <Link key={relatedTemplate.id} href={`/templates/${relatedTemplate.id}`}>
                  <div className="bg-gradient-to-b dark:from-neutral-900 from-neutral-100 dark:to-neutral-950 to-white p-6 rounded-3xl overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-primary/5">
                    <div className="aspect-video rounded-lg overflow-hidden mb-4 bg-gradient-to-br from-primary/10 to-accent/10">
                      <img
                        src={relatedTemplate.previewImage}
                        alt={relatedTemplate.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="font-semibold mb-2 line-clamp-1">{relatedTemplate.name}</h3>
                    <p className="text-sm text-muted-foreground line-clamp-2 mb-3">{relatedTemplate.description}</p>
                    <div className="flex items-center justify-between">
                      <Badge variant="outline" className="text-xs">{relatedTemplate.category}</Badge>
                      {relatedTemplate.isPremium && (
                        <Badge variant="secondary" className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-xs">
                          Premium
                        </Badge>
                      )}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Footer */}
      <MinimalFooter />
    </div>
  )
}

export function generateStaticParams() {
  return templates.map((template) => ({
    id: template.id,
  }))
}