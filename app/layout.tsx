import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Bricolage_Grotesque } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { ClerkProvider } from "@clerk/nextjs";
import { Navbar } from "@/components/shared/navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const bricolageGrotesque = Bricolage_Grotesque({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AI Templates - Modern Application Templates Marketplace",
  description: "Discover and download AI-powered application templates. Build modern web applications faster with our curated collection of Next.js, React, and AI templates.",
  keywords: [
    "AI templates",
    "Next.js templates",
    "React templates",
    "web application templates",
    "AI marketplace",
    "development templates",
    "code templates",
    "app templates"
  ],
  authors: [{ name: "AI Templates Team" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://aitemplates.com",
    title: "AI Templates - Modern Application Templates Marketplace",
    description: "Discover and download AI-powered application templates. Build modern web applications faster with our curated collection.",
    siteName: "AI Templates",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "AI Templates Marketplace",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Templates - Modern Application Templates Marketplace",
    description: "Discover and download AI-powered application templates. Build modern web applications faster.",
    images: ["/og-image.png"],
    creator: "@aitemplates",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${bricolageGrotesque.variable} antialiased`}
      >
        <ClerkProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Navbar />
            {children}
          </ThemeProvider>
        </ClerkProvider>
      </body>
    </html>
  );
}
