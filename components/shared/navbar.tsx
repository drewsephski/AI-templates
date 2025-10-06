'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, User, LogOut } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { ThemeToggle } from '@/components/ui/theme-toggle'
import { cn } from '@/lib/utils'
import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton } from '@clerk/nextjs'

const menuItems = [
  { name: 'Chat', href: '/chat' },
  { name: 'Docs', href: '/docs' },
  { name: 'Templates', href: '/templates' },
  { name: 'Sell', href: '/sell' },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled
          ? 'bg-background/80 backdrop-blur-lg border-b border-border/50 py-2'
          : 'bg-transparent py-4'
      )}
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="relative h-8 w-8">
              <svg viewBox="0 0 32 32" className="w-full h-full">
                <defs>
                  <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="currentColor" />
                    <stop offset="100%" stopColor="currentColor" stopOpacity="0.7" />
                  </linearGradient>
                </defs>
                {/* Outer hexagon */}
                <path
                  d="M16 2 L26 8 L26 20 L16 26 L6 20 L6 8 Z"
                  fill="none"
                  stroke="url(#logoGradient)"
                  strokeWidth="1.5"
                  className="text-primary"
                />
                {/* Inner circuit pattern */}
                <circle cx="16" cy="14" r="3" fill="url(#logoGradient)" className="text-primary" />
                <path
                  d="M16 11 L16 7 M16 17 L16 21 M13 14 L9 14 M19 14 L23 14"
                  stroke="url(#logoGradient)"
                  strokeWidth="1"
                  className="text-primary"
                />
                {/* Neural network nodes */}
                <circle cx="10" cy="10" r="1.5" fill="url(#logoGradient)" className="text-primary" />
                <circle cx="22" cy="10" r="1.5" fill="url(#logoGradient)" className="text-primary" />
                <circle cx="10" cy="18" r="1.5" fill="url(#logoGradient)" className="text-primary" />
                <circle cx="22" cy="18" r="1.5" fill="url(#logoGradient)" className="text-primary" />
                {/* Neural connections */}
                <path
                  d="M10 10 L16 11 M22 10 L16 11 M10 18 L16 17 M22 18 L16 17"
                  stroke="url(#logoGradient)"
                  strokeWidth="0.8"
                  className="text-primary"
                />
              </svg>
            </div>
            <span className="text-xl font-bold font-sans bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              AI Templates
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  'text-sm font-medium transition-colors hover:text-primary',
                  pathname === item.href
                    ? 'text-primary'
                    : 'text-muted-foreground'
                )}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Desktop Auth & Theme */}
          <div className="hidden lg:flex items-center space-x-4">
            <SignedOut>
              <div className="flex items-center space-x-2">
                <SignInButton mode="modal">
                  <Button variant="ghost" size="sm">
                    Login
                  </Button>
                </SignInButton>
                <SignUpButton mode="modal">
                  <Button size="sm">
                    Sign Up
                  </Button>
                </SignUpButton>
              </div>
            </SignedOut>

            <SignedIn>
              <div className="flex items-center space-x-2">
                <ThemeToggle />
                <UserButton afterSignOutUrl="/" />
              </div>
            </SignedIn>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="lg:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden mt-4 pt-4 border-t border-border">
            <div className="flex flex-col space-y-4">
              {menuItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    'text-sm font-medium transition-colors hover:text-primary py-2',
                    pathname === item.href
                      ? 'text-primary'
                      : 'text-muted-foreground'
                  )}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}

              <div className="flex items-center justify-between pt-4 border-t border-border">
                <ThemeToggle />
                
                <SignedOut>
                  <div className="flex flex-col space-y-2 w-full">
                    <SignInButton mode="modal">
                      <Button variant="ghost" size="sm" className="w-full justify-start">
                        <User className="h-4 w-4 mr-2" />
                        Login
                      </Button>
                    </SignInButton>
                    <SignUpButton mode="modal">
                      <Button size="sm" className="w-full">
                        Sign Up
                      </Button>
                    </SignUpButton>
                  </div>
                </SignedOut>

                <SignedIn>
                  <div className="flex flex-col space-y-2 w-full">
                    <Button variant="ghost" size="sm" className="w-full justify-start">
                      <User className="h-4 w-4 mr-2" />
                      Profile
                    </Button>
                    <Button variant="ghost" size="sm" className="w-full justify-start">
                      <LogOut className="h-4 w-4 mr-2" />
                      Sign Out
                    </Button>
                  </div>
                </SignedIn>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}