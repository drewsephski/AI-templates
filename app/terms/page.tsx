import { MinimalFooter } from '@/components/ui/minimal-footer'
import Link from 'next/link'
import { ArrowLeft, FileText, Calendar, User, Shield, CheckCircle, AlertTriangle } from 'lucide-react'

export default function TermsPage() {
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
              Terms of Service
            </div>
          </div>
        </div>
      </nav>

      <div className="mx-auto max-w-4xl px-6 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <FileText className="w-8 h-8 text-primary" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold font-sans mb-4">
            Terms of Service
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-4">
            Last updated: {currentDate}
          </p>
          <p className="text-base text-muted-foreground max-w-3xl mx-auto">
            Welcome to AI Templates. These Terms of Service govern your use of our website and services. By accessing or using our platform, you agree to comply with and be bound by these terms.
          </p>
        </div>

        {/* Content */}
        <div className="space-y-12">
          {/* Acceptance of Terms */}
          <section className="bg-gradient-to-br from-background to-muted/30 rounded-2xl border border-border/50 p-8">
            <div className="flex items-center gap-3 mb-6">
              <CheckCircle className="w-6 h-6 text-primary" />
              <h2 className="text-2xl font-semibold">1. Acceptance of Terms</h2>
            </div>
            <div className="space-y-6">
              <p className="text-muted-foreground leading-relaxed">
                By accessing and using AI Templates (the "Platform"), you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
              </p>
              
              <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-amber-800">Important Notice</h4>
                    <p className="text-sm text-amber-700 mt-1">
                      These terms constitute a legally binding agreement between you and AI Templates. Please read them carefully before using our services.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* User Accounts */}
          <section className="bg-gradient-to-br from-background to-muted/30 rounded-2xl border border-border/50 p-8">
            <div className="flex items-center gap-3 mb-6">
              <User className="w-6 h-6 text-primary" />
              <h2 className="text-2xl font-semibold">2. User Accounts and Registration</h2>
            </div>
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold mb-3">Account Registration</h3>
                <p className="text-muted-foreground leading-relaxed">
                  You may be required to register for an account to access certain features of our Platform. You agree to provide accurate, current, and complete information during the registration process and to maintain and promptly update such information to keep it accurate, current, and complete.
                </p>
              </div>
              
              <div>
                <h3 className="font-semibold mb-3">Account Security</h3>
                <p className="text-muted-foreground leading-relaxed">
                  You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You agree to immediately notify AI Templates of any unauthorized use of your account or any other breach of security.
                </p>
              </div>
              
              <div>
                <h3 className="font-semibold mb-3">Age Requirement</h3>
                <p className="text-muted-foreground leading-relaxed">
                  By using this Platform, you represent and warrant that you are at least 18 years of age or that you are the age of majority in your jurisdiction, whichever is greater, and that you have the legal capacity to enter into this agreement.
                </p>
              </div>
            </div>
          </section>

          {/* Template Usage */}
          <section className="bg-gradient-to-br from-background to-muted/30 rounded-2xl border border-border/50 p-8">
            <div className="flex items-center gap-3 mb-6">
              <FileText className="w-6 h-6 text-primary" />
              <h2 className="text-2xl font-semibold">3. Template Usage and Licensing</h2>
            </div>
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold mb-3">License Grant</h3>
                <p className="text-muted-foreground leading-relaxed">
                  AI Templates grants you a non-exclusive, non-transferable, limited license to access and use the templates made available through the Platform for your personal or internal business purposes, subject to the terms and conditions of this agreement.
                </p>
              </div>
              
              <div>
                <h3 className="font-semibold mb-3">Restrictions</h3>
                <p className="text-muted-foreground leading-relaxed">
                  You may not, and you may not permit others to:
                </p>
                <ul className="mt-3 space-y-2 text-muted-foreground">
                  <li>• Sell, sublicense, or redistribute templates</li>
                  <li>• Modify templates and sell the modified versions</li>
                  <li>• Use templates for illegal or harmful purposes</li>
                  <li>• Remove or alter any copyright notices</li>
                  <li>• Reverse engineer, decompile, or disassemble templates</li>
                  <li>• Use templates to create competing template marketplaces</li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold mb-3">Premium Templates</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Premium templates may be subject to additional terms and conditions. By purchasing or downloading premium templates, you agree to comply with any additional licensing terms provided at the time of purchase.
                </p>
              </div>
            </div>
          </section>

          {/* Seller Terms */}
          <section className="bg-gradient-to-br from-background to-muted/30 rounded-2xl border border-border/50 p-8">
            <div className="flex items-center gap-3 mb-6">
              <Shield className="w-6 h-6 text-primary" />
              <h2 className="text-2xl font-semibold">4. Seller Terms and Commission</h2>
            </div>
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold mb-3">Seller Eligibility</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To submit templates for sale on the Platform, you must complete our seller onboarding process and agree to our Seller Agreement. You represent and warrant that you have all necessary rights and permissions to submit templates for sale.
                </p>
              </div>
              
              <div>
                <h3 className="font-semibold mb-3">Commission Structure</h3>
                <p className="text-muted-foreground leading-relaxed">
                  AI Templates operates on a commission-based model. We retain a percentage of each template sale as our commission. The current commission rates are:
                </p>
                <div className="mt-3 bg-muted/30 rounded-lg p-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-medium">Standard Templates</h4>
                      <p className="text-sm text-muted-foreground mt-1">80% to seller, 20% to AI Templates</p>
                    </div>
                    <div>
                      <h4 className="font-medium">Premium Templates</h4>
                      <p className="text-sm text-muted-foreground mt-1">85% to seller, 15% to AI Templates</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="font-semibold mb-3">Payment Terms</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Payments to sellers are processed on a monthly basis, subject to a minimum payout threshold. You must provide valid payment information and complete tax forms as required by law.
                </p>
              </div>
            </div>
          </section>

          {/* Prohibited Activities */}
          <section className="bg-gradient-to-br from-background to-muted/30 rounded-2xl border border-border/50 p-8">
            <div className="flex items-center gap-3 mb-6">
              <AlertTriangle className="w-6 h-6 text-primary" />
              <h2 className="text-2xl font-semibold">5. Prohibited Activities</h2>
            </div>
            <div className="space-y-6">
              <p className="text-muted-foreground leading-relaxed">
                You may not access or use the Platform for any purpose other than that for which we make the Platform available. The Platform may not be used in connection with any commercial endeavors except those that are specifically endorsed or approved by AI Templates.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-muted/30 rounded-lg p-4">
                  <h4 className="font-medium mb-2 text-red-600">Prohibited Uses</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Illegal activities</li>
                    <li>• Harassment or abuse</li>
                    <li>• Spam or unsolicited communications</li>
                    <li>• Malicious code distribution</li>
                    <li>• Copyright infringement</li>
                  </ul>
                </div>
                
                <div className="bg-muted/30 rounded-lg p-4">
                  <h4 className="font-medium mb-2 text-red-600">Content Restrictions</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Harmful or dangerous content</li>
                    <li>• Deceptive or misleading information</li>
                    <li>• Adult content</li>
                    <li>• Hate speech or discrimination</li>
                    <li>• Privacy violations</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Intellectual Property */}
          <section className="bg-gradient-to-br from-background to-muted/30 rounded-2xl border border-border/50 p-8">
            <div className="flex items-center gap-3 mb-6">
              <Shield className="w-6 h-6 text-primary" />
              <h2 className="text-2xl font-semibold">6. Intellectual Property</h2>
            </div>
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold mb-3">Platform Content</h3>
                <p className="text-muted-foreground leading-relaxed">
                  All content included on or made available through the Platform, including but not limited to text, graphics, logos, images, audio clips, digital downloads, and software, is the property of AI Templates or its content suppliers and is protected by international copyright and trademark laws.
                </p>
              </div>
              
              <div>
                <h3 className="font-semibold mb-3">Template Ownership</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Templates remain the property of their respective authors. When you purchase or download a template, you receive a license to use it according to the terms specified, but you do not acquire ownership rights to the template itself.
                </p>
              </div>
              
              <div>
                <h3 className="font-semibold mb-3">User Content</h3>
                <p className="text-muted-foreground leading-relaxed">
                  You retain ownership of any content you submit to the Platform. By submitting content, you grant AI Templates a worldwide, non-exclusive, royalty-free license to use, reproduce, modify, and display such content in connection with the operation of the Platform.
                </p>
              </div>
            </div>
          </section>

          {/* Limitation of Liability */}
          <section className="bg-gradient-to-br from-background to-muted/30 rounded-2xl border border-border/50 p-8">
            <div className="flex items-center gap-3 mb-6">
              <Shield className="w-6 h-6 text-primary" />
              <h2 className="text-2xl font-semibold">7. Limitation of Liability</h2>
            </div>
            <div className="space-y-6">
              <p className="text-muted-foreground leading-relaxed">
                AI Templates shall not be liable for any damages of any kind arising out of the use of or inability to use the Platform, including but not limited to direct, indirect, incidental, punitive, and consequential damages.
              </p>
              
              <div className="bg-muted/30 rounded-lg p-4">
                <h4 className="font-medium mb-2">Disclaimer of Warranties</h4>
                <p className="text-sm text-muted-foreground">
                  The Platform is provided on an "as is" and "as available" basis, without any warranties of any kind, either express or implied, including but not limited to implied warranties of merchantability, fitness for a particular purpose, or non-infringement.
                </p>
              </div>
            </div>
          </section>

          {/* Termination */}
          <section className="bg-gradient-to-br from-background to-muted/30 rounded-2xl border border-border/50 p-8">
            <div className="flex items-center gap-3 mb-6">
              <Calendar className="w-6 h-6 text-primary" />
              <h2 className="text-2xl font-semibold">8. Termination</h2>
            </div>
            <div className="space-y-6">
              <p className="text-muted-foreground leading-relaxed">
                AI Templates reserves the right to terminate or suspend your access to the Platform immediately, without prior notice or liability, for any reason, including but not limited to breach of these Terms.
              </p>
              
              <div>
                <h3 className="font-semibold mb-3">Effect of Termination</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Upon termination, your right to use the Platform will cease immediately. All provisions of these Terms which by their nature should survive termination shall survive, including, without limitation, ownership provisions, warranty disclaimers, and limitation of liability.
                </p>
              </div>
            </div>
          </section>

          {/* Changes to Terms */}
          <section className="bg-gradient-to-br from-background to-muted/30 rounded-2xl border border-border/50 p-8">
            <div className="flex items-center gap-3 mb-6">
              <Calendar className="w-6 h-6 text-primary" />
              <h2 className="text-2xl font-semibold">9. Changes to Terms</h2>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              AI Templates reserves the right to modify these Terms at any time. We will notify you of any material changes by posting the updated Terms on this page with a revised "Last Updated" date. Your continued use of the Platform after any such changes constitutes your acceptance of the new Terms.
            </p>
          </section>

          {/* Contact Information */}
          <section className="bg-gradient-to-br from-background to-muted/30 rounded-2xl border border-border/50 p-8">
            <div className="flex items-center gap-3 mb-6">
              <User className="w-6 h-6 text-primary" />
              <h2 className="text-2xl font-semibold">10. Contact Information</h2>
            </div>
            <div className="space-y-6">
              <p className="text-muted-foreground leading-relaxed">
                If you have any questions about these Terms of Service, please contact us:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-muted/30 rounded-lg p-4">
                  <h4 className="font-medium mb-2">Email</h4>
                  <p className="text-sm text-muted-foreground">
                    terms@aitemplates.com
                  </p>
                </div>
                
                <div className="bg-muted/30 rounded-lg p-4">
                  <h4 className="font-medium mb-2">Mail</h4>
                  <p className="text-sm text-muted-foreground">
                    AI Templates Legal Team<br />
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