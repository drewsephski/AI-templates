'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Star, Users, Calendar, Zap } from 'lucide-react'
import { Template } from '@/lib/templates-data'

interface TemplateTabsProps {
  template: Template
}

export default function TemplateTabs({ template }: TemplateTabsProps) {
  const [selectedTab, setSelectedTab] = useState<'overview' | 'features' | 'tech' | 'reviews'>('overview')

  return (
    <div className="bg-gradient-to-br from-background to-muted/30 rounded-2xl border border-border/50">
      <div className="border-b border-border/50">
        <nav className="flex space-x-8 px-8">
          {[
            { key: 'overview', label: 'Overview' },
            { key: 'features', label: 'Features' },
            { key: 'tech', label: 'Tech Stack' },
            { key: 'reviews', label: 'Reviews' }
          ].map((tab) => (
            <button
              key={tab.key}
              onClick={() => setSelectedTab(tab.key as any)}
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                selectedTab === tab.key
                  ? 'border-primary text-primary'
                  : 'border-transparent text-muted-foreground hover:text-foreground hover:border-muted-foreground/50'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </nav>
      </div>

      {/* Tab Content */}
      <div className="p-8">
        {selectedTab === 'overview' && (
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-4">About This Template</h3>
              <p className="text-muted-foreground leading-relaxed">
                This {template.category.toLowerCase()} template is built with modern best practices and includes 
                everything you need to get started quickly. It features a clean, responsive design and is 
                optimized for performance and scalability.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-3">Key Benefits</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <Zap className="w-4 h-4 mt-0.5 text-primary flex-shrink-0" />
                  <span>Production-ready code with comprehensive documentation</span>
                </li>
                <li className="flex items-start gap-2">
                  <Zap className="w-4 h-4 mt-0.5 text-primary flex-shrink-0" />
                  <span>Built-in authentication and user management</span>
                </li>
                <li className="flex items-start gap-2">
                  <Zap className="w-4 h-4 mt-0.5 text-primary flex-shrink-0" />
                  <span>Responsive design that works on all devices</span>
                </li>
                <li className="flex items-start gap-2">
                  <Zap className="w-4 h-4 mt-0.5 text-primary flex-shrink-0" />
                  <span>Regular updates and community support</span>
                </li>
              </ul>
            </div>
          </div>
        )}

        {selectedTab === 'features' && (
          <div className="space-y-4">
            <h3 className="text-xl font-semibold mb-4">Features</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {template.features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3 p-4 bg-muted/30 rounded-lg">
                  <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Star className="w-3 h-3 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium">{feature}</h4>
                    <p className="text-sm text-muted-foreground mt-1">
                      Professional implementation with best practices
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {selectedTab === 'tech' && (
          <div className="space-y-6">
            <h3 className="text-xl font-semibold mb-4">Technology Stack</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {template.techStack.map((tech) => (
                <div key={tech} className="p-4 bg-muted/30 rounded-lg text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <span className="text-sm font-bold text-primary">{tech.charAt(0)}</span>
                  </div>
                  <span className="font-medium">{tech}</span>
                </div>
              ))}
            </div>
            
            <div>
              <h4 className="font-semibold mb-3">System Requirements</h4>
              <div className="bg-muted/30 rounded-lg p-4 space-y-2 text-sm">
                <div>• Node.js 18.0 or higher</div>
                <div>• npm or yarn package manager</div>
                <div>• Modern web browser for preview</div>
                <div>• Git for version control</div>
              </div>
            </div>
          </div>
        )}

        {selectedTab === 'reviews' && (
          <div className="space-y-6">
            <h3 className="text-xl font-semibold mb-4">Customer Reviews</h3>
            
            <div className="space-y-4">
              {/* Review 1 */}
              <div className="border border-border/50 rounded-lg p-6">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h4 className="font-semibold">Sarah Johnson</h4>
                    <div className="flex items-center gap-1 mt-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className={`w-4 h-4 ${i < 5 ? 'fill-yellow-400 text-yellow-400' : 'text-muted-foreground'}`} />
                      ))}
                    </div>
                  </div>
                  <span className="text-sm text-muted-foreground">2 days ago</span>
                </div>
                <p className="text-muted-foreground">
                  Amazing template! Saved me weeks of development time. The code quality is excellent and 
                  the documentation is comprehensive. Highly recommended for anyone building a {template.category.toLowerCase()} application.
                </p>
              </div>

              {/* Review 2 */}
              <div className="border border-border/50 rounded-lg p-6">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h4 className="font-semibold">Mike Chen</h4>
                    <div className="flex items-center gap-1 mt-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className={`w-4 h-4 ${i < 4 ? 'fill-yellow-400 text-yellow-400' : 'text-muted-foreground'}`} />
                      ))}
                    </div>
                  </div>
                  <span className="text-sm text-muted-foreground">1 week ago</span>
                </div>
                <p className="text-muted-foreground">
                  Great starting point for my project. The AI integration works seamlessly and the 
                  customization options are extensive. Only minor issue was some styling conflicts 
                  that were easily resolved.
                </p>
              </div>
            </div>

            <div className="text-center pt-4">
              <Button variant="outline" size="sm">
                Write a Review
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}