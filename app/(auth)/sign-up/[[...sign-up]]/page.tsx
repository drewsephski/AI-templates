'use client'

import { SignUp } from '@clerk/nextjs'

export default function SignUpPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background to-accent/5 px-4 py-12">
      <div className="relative w-full max-w-md">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-2xl blur-3xl" />
        <div className="relative bg-background/80 backdrop-blur-lg border border-border rounded-2xl p-8 shadow-xl">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold font-sans">Join Us</h1>
            <p className="text-muted-foreground mt-2">Create your account</p>
          </div>
          <SignUp />
        </div>
      </div>
    </div>
  )
}