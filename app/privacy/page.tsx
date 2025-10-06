import { MinimalFooter } from '@/components/ui/minimal-footer'
import Link from 'next/link'
import { ArrowLeft, Shield, FileText, Calendar, User, Lock, Database, Globe } from 'lucide-react'

export default function PrivacyPage() {
  const currentDate = new Date().toLocaleDateString('en-US', { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  })

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-accent/5">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
        <div className="mx-auto max-w-7xl px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2 text-sm font-medium">
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Link>
            <div className="text-sm text-muted-foreground">
              Privacy Policy
            </div>
          </div>
        </div>
      </nav>

      <div className="mx-auto max-w-4xl px-6 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <Shield className="w-8 h-8 text-primary" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold font-sans mb-4">
            Privacy Policy
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-4">
            Last updated: {currentDate}
          </p>
          <p className="text-base text-muted-foreground max-w-3xl mx-auto">
            Your privacy is important to us. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website.
          </p>
        </div>

        {/* Content */}
        <div className="space-y-12">
          {/* Introduction */}
          <section className="bg-gradient-to-br from-background to-muted/30 rounded-2xl border border-border/50 p-8">
            <div className="flex items-center gap-3 mb-6">
              <FileText className="w-6 h-6 text-primary" />
              <h2 className="text-2xl font-semibold">1. Information We Collect</h2>
            </div>
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold mb-3 flex items-center gap-2">
                  <User className="w-5 h-5" />
                  Personal Information
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  When you register for an account, we may collect personal information such as your name, email address, and other details you choose to provide. We use this information to create and manage your account, communicate with you, and provide our services.
                </p>
              </div>
              
              <div>
                <h3 className="font-semibold mb-3 flex items-center gap-2">
                  <Database className="w-5 h-5" />
                  Usage Data
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  We automatically collect certain information when you use our website, including your IP address, browser type, operating system, pages visited, time spent on our site, and other technical information. This data helps us understand how our site is being used and improve our services.
                </p>
              </div>

              <div>
                <h3 className="font-semibold mb-3 flex items-center gap-2">
                  <Globe className="w-5 h-5" />
                  Cookies and Tracking Technologies
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  We use cookies and similar tracking technologies to enhance your browsing experience, analyze site traffic, and for security purposes. You can control cookies through your browser settings, but disabling certain cookies may affect your experience on our site.
                </p>
              </div>
            </div>
          </section>

          {/* How We Use Information */}
          <section className="bg-gradient-to-br from-background to-muted/30 rounded-2xl border border-border/50 p-8">
            <div className="flex items-center gap-3 mb-6">
              <Lock className="w-6 h-6 text-primary" />
              <h2 className="text-2xl font-semibold">2. How We Use Your Information</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-xs font-bold text-primary">1</span>
                  </div>
                  <div>
                    <h4 className="font-medium">Account Management</h4>
                    <p className="text-sm text-muted-foreground mt-1">
                      To create, maintain, and manage your user account
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-xs font-bold text-primary">2</span>
                  </div>
                  <div>
                    <h4 className="font-medium">Service Delivery</h4>
                    <p className="text-sm text-muted-foreground mt-1">
                      To provide and improve our template marketplace services
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-xs font-bold text-primary">3</span>
                  </div>
                  <div>
                    <h4 className="font-medium">Communication</h4>
                    <p className="text-sm text-muted-foreground mt-1">
                      To send important updates, notifications, and support messages
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-xs font-bold text-primary">4</span>
                  </div>
                  <div>
                    <h4 className="font-medium">Security</h4>
                    <p className="text-sm text-muted-foreground mt-1">
                      To protect against fraud, abuse, and ensure platform security
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Information Sharing */}
          <section className="bg-gradient-to-br from-background to-muted/30 rounded-2xl border border-border/50 p-8">
            <div className="flex items-center gap-3 mb-6">
              <Globe className="w-6 h-6 text-primary" />
              <h2 className="text-2xl font-semibold">3. Information Sharing and Disclosure</h2>
            </div>
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold mb-3">We do not sell your personal information</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as described in this Privacy Policy.
                </p>
              </div>
              
              <div>
                <h3 className="font-semibold mb-3">Third-Party Services</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We use third-party services to help operate our business, including:
                </p>
                <ul className="mt-3 space-y-2 text-muted-foreground">
                  <li>• <strong>Clerk:</strong> For user authentication and account management</li>
                  <li>• <strong>OpenRouter:</strong> For AI chat functionality</li>
                  <li>• <strong>Analytics Services:</strong> To understand website usage and performance</li>
                  <li>• <strong>Payment Processors:</strong> For handling premium template purchases</li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold mb-3">Legal Requirements</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We may disclose your information if required by law, in response to valid legal requests, or to protect our rights, safety, or property.
                </p>
              </div>
            </div>
          </section>

          {/* Data Security */}
          <section className="bg-gradient-to-br from-background to-muted/30 rounded-2xl border border-border/50 p-8">
            <div className="flex items-center gap-3 mb-6">
              <Shield className="w-6 h-6 text-primary" />
              <h2 className="text-2xl font-semibold">4. Data Security</h2>
            </div>
            <div className="space-y-6">
              <p className="text-muted-foreground leading-relaxed">
                We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-muted/30 rounded-lg p-4">
                  <h4 className="font-medium mb-2">Encryption</h4>
                  <p className="text-sm text-muted-foreground">
                    Data transmission and storage are encrypted using industry-standard protocols
                  </p>
                </div>
                
                <div className="bg-muted/30 rounded-lg p-4">
                  <h4 className="font-medium mb-2">Access Controls</h4>
                  <p className="text-sm text-muted-foreground">
                    Strict access controls and authentication mechanisms for sensitive data
                  </p>
                </div>
                
                <div className="bg-muted/30 rounded-lg p-4">
                  <h4 className="font-medium mb-2">Regular Audits</h4>
                  <p className="text-sm text-muted-foreground">
                    Regular security assessments and vulnerability testing
                  </p>
                </div>
                
                <div className="bg-muted/30 rounded-lg p-4">
                  <h4 className="font-medium mb-2">Staff Training</h4>
                  <p className="text-sm text-muted-foreground">
                    Comprehensive security training for all employees handling user data
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Your Rights */}
          <section className="bg-gradient-to-br from-background to-muted/30 rounded-2xl border border-border/50 p-8">
            <div className="flex items-center gap-3 mb-6">
              <User className="w-6 h-6 text-primary" />
              <h2 className="text-2xl font-semibold">5. Your Privacy Rights</h2>
            </div>
            <div className="space-y-6">
              <p className="text-muted-foreground leading-relaxed">
                Depending on your location, you may have certain rights regarding your personal information, including:
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-xs font-bold text-primary">✓</span>
                  </div>
                  <div>
                    <h4 className="font-medium">Access and Correction</h4>
                    <p className="text-sm text-muted-foreground mt-1">
                      Request access to your personal information and correct inaccuracies
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-xs font-bold text-primary">✓</span>
                  </div>
                  <div>
                    <h4 className="font-medium">Data Portability</h4>
                    <p className="text-sm text-muted-foreground mt-1">
                      Request your personal information in a commonly used format
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-xs font-bold text-primary">✓</span>
                  </div>
                  <div>
                    <h4 className="font-medium">Deletion</h4>
                    <p className="text-sm text-muted-foreground mt-1">
                      Request deletion of your personal information in certain circumstances
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-xs font-bold text-primary">✓</span>
                  </div>
                  <div>
                    <h4 className="font-medium">Withdrawal of Consent</h4>
                    <p className="text-sm text-muted-foreground mt-1">
                      Withdraw consent for processing of personal information
                    </p>
                  </div>
                </div>
              </div>
              
              <p className="text-muted-foreground leading-relaxed">
                To exercise these rights, please contact us using the information provided below.
              </p>
            </div>
          </section>

          {/* Children's Privacy */}
          <section className="bg-gradient-to-br from-background to-muted/30 rounded-2xl border border-border/50 p-8">
            <div className="flex items-center gap-3 mb-6">
              <Calendar className="w-6 h-6 text-primary" />
              <h2 className="text-2xl font-semibold">6. Children's Privacy</h2>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Our website is not intended for use by children under the age of 13. We do not knowingly collect personal information from children under 13. If you are a parent or guardian and you are aware that your child has provided us with personal information, please contact us so that we can delete such information.
            </p>
          </section>

          {/* International Data Transfers */}
          <section className="bg-gradient-to-br from-background to-muted/30 rounded-2xl border border-border/50 p-8">
            <div className="flex items-center gap-3 mb-6">
              <Globe className="w-6 h-6 text-primary" />
              <h2 className="text-2xl font-semibold">7. International Data Transfers</h2>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Your information may be transferred to and processed in countries other than your own. We take steps to ensure that your personal information receives an adequate level of protection in accordance with applicable data protection laws.
            </p>
          </section>

          {/* Changes to This Policy */}
          <section className="bg-gradient-to-br from-background to-muted/30 rounded-2xl border border-border/50 p-8">
            <div className="flex items-center gap-3 mb-6">
              <Calendar className="w-6 h-6 text-primary" />
              <h2 className="text-2xl font-semibold">8. Changes to This Privacy Policy</h2>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              We may update this Privacy Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. We will notify you of any material changes by posting the updated Privacy Policy on this page with a revised "Last Updated" date.
            </p>
          </section>

          {/* Contact Us */}
          <section className="bg-gradient-to-br from-background to-muted/30 rounded-2xl border border-border/50 p-8">
            <div className="flex items-center gap-3 mb-6">
              <User className="w-6 h-6 text-primary" />
              <h2 className="text-2xl font-semibold">9. Contact Us</h2>
            </div>
            <div className="space-y-6">
              <p className="text-muted-foreground leading-relaxed">
                If you have any questions about this Privacy Policy or our data practices, please contact us:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-muted/30 rounded-lg p-4">
                  <h4 className="font-medium mb-2">Email</h4>
                  <p className="text-sm text-muted-foreground">
                    privacy@aitemplates.com
                  </p>
                </div>
                
                <div className="bg-muted/30 rounded-lg p-4">
                  <h4 className="font-medium mb-2">Mail</h4>
                  <p className="text-sm text-muted-foreground">
                    AI Templates Privacy Team<br />
                    123 Innovation Drive<br />
                    Tech City, TC 12345<br />
                    United States
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>

      {/* Footer */}
      <MinimalFooter />
    </div>
  )
}