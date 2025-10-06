'use client'

import { AnimatedGroup } from '@/components/ui/animated-group'
import { Button } from '@/components/ui/button'
import { MinimalFooter } from '@/components/ui/minimal-footer'
import { ChatMessage } from '@/components/ui/chat-message'
import { PromptSuggestions } from '@/components/ui/prompt-suggestions'
import Link from 'next/link'
import { ArrowRight, Send, Bot, MessageSquare, Sparkles, Zap, Shield } from 'lucide-react'
import { useChat } from '@ai-sdk/react'
import { DefaultChatTransport } from 'ai'
import { useEffect, useRef } from 'react'

export default function ChatPage() {
  const { messages, input, setInput, handleSubmit, isLoading, error } = useChat({
    api: '/api/chat',
  })

  const messagesEndRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-accent/5">
      {/* Hero Section */}
      <section className="relative pt-32 md:pt-40">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center">
            {/* Hero Badge */}
            <Link
              href="#chat-interface"
              className="hover:bg-background dark:hover:border-t-border bg-muted group mx-auto flex w-fit items-center gap-4 rounded-full border p-1 pl-4 shadow-md shadow-black/5 transition-all duration-300 dark:border-t-white/5 dark:shadow-zinc-950">
              <span className="text-foreground text-sm font-sans">Beta: Voice Chat Support Now Available</span>
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
                AI-Powered <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Chat Interface</span>
              </h1>
              <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
                Engage with intelligent AI assistants that understand context and deliver precise responses in real-time
              </p>
              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="rounded-xl px-8">
                  <Link href="#chat-interface">
                    <span className="flex items-center gap-2">
                      <MessageSquare className="h-5 w-5" />
                      Start Chatting
                    </span>
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="rounded-xl px-8">
                  <Link href="/sign-up">
                    <span className="flex items-center gap-2">
                      <Sparkles className="h-5 w-5" />
                      Try Free
                    </span>
                  </Link>
                </Button>
              </div>
            </AnimatedGroup>
          </div>
        </div>
      </section>

      {/* Chat Interface */}
      <section id="chat-interface" className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sidebar with Prompt Suggestions */}
            <div className="lg:col-span-1">
              <div className="sticky top-8">
                <div className="bg-gradient-to-br from-background to-muted/30 rounded-2xl border border-border/50 p-6 shadow-sm">
                  <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
                    <Bot className="w-5 h-5 text-primary" />
                    Quick Start
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Click on any prompt below to get started with a conversation:
                  </p>
                  <div className="max-h-[calc(100vh-200px)] overflow-y-auto pr-2 -mr-2 scrollbar-thin scrollbar-thumb-border/50 scrollbar-track-transparent hover:scrollbar-thumb-border/70">
                    <PromptSuggestions onPromptSelect={(prompt) => {
                      setInput(prompt)
                      setTimeout(() => {
                        const chatInterface = document.getElementById('chat-interface')
                        if (chatInterface) {
                          chatInterface.scrollIntoView({ behavior: 'smooth' })
                        }
                      }, 100)
                    }} />
                  </div>
                </div>
              </div>
            </div>

            {/* Main Chat Area */}
            <div className="lg:col-span-3">
              <div className="bg-gradient-to-br from-background to-muted/30 rounded-2xl border border-border/50 h-[600px] flex flex-col">
                {/* Messages Area */}
                <div className="flex-1 overflow-y-auto p-6 space-y-4 chat-scroll-container">
                  {messages.length === 0 && (
                    <div className="text-center py-12">
                      <div className="w-16 h-16 bg-gradient-to-br from-primary/10 to-primary/5 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Bot className="w-8 h-8 text-primary" />
                      </div>
                      <h3 className="text-lg font-semibold mb-2">Welcome to AI Chat</h3>
                      <p className="text-muted-foreground">
                        Ask me anything about AI templates, development, or how to get started!
                      </p>
                    </div>
                  )}
                  
                  {messages.map((message: any, index: number) => (
                    <ChatMessage
                      key={index}
                      role={message.role}
                      content={message.content}
                      isStreaming={message.role === 'assistant' && isLoading}
                    />
                  ))}
                  
                  {error && (
                    <div className="text-center py-4">
                      <p className="text-destructive text-sm">
                        Sorry, there was an error. Please try again.
                      </p>
                    </div>
                  )}
                  
                  <div ref={messagesEndRef} />
                </div>

                {/* Input Area */}
                <div className="border-t border-border/50 p-4">
                  <form onSubmit={handleSubmit} className="flex gap-2">
                    <div className="flex-1 relative">
                      <textarea
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        placeholder="Type your message here..."
                        className="w-full resize-none rounded-lg border border-border/50 bg-background px-4 py-3 pr-12 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-transparent"
                        rows={1}
                        onKeyDown={(e) => {
                          if (e.key === 'Enter' && !e.shiftKey) {
                            e.preventDefault()
                            handleSubmit(e)
                          }
                        }}
                      />
                      <Button
                        type="submit"
                        size="sm"
                        disabled={!input.trim() || isLoading}
                        className="absolute right-1 bottom-1"
                      >
                        <Send className="w-4 h-4" />
                      </Button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-sans">Powerful Features</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Everything you need to build intelligent conversational experiences
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
            <div className="relative bg-gradient-to-b dark:from-neutral-900 from-neutral-100 dark:to-neutral-950 to-white p-6 rounded-3xl overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 animate-in fade-in-0 zoom-in-95 duration-500">
              <div className="flex items-center gap-4">
                <div className="rounded-lg bg-primary/10 p-3">
                  <MessageSquare className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold font-sans text-neutral-800 dark:text-white">Real-Time Responses</h3>
                  <p className="text-neutral-600 dark:text-neutral-400 mt-1 text-sm">
                    Instant AI-powered answers with context awareness
                  </p>
                </div>
              </div>
            </div>

            <div className="relative bg-gradient-to-b dark:from-neutral-900 from-neutral-100 dark:to-neutral-950 to-white p-6 rounded-3xl overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 animate-in fade-in-0 zoom-in-95 duration-500">
              <div className="flex items-center gap-4">
                <div className="rounded-lg bg-primary/10 p-3">
                  <Sparkles className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold font-sans text-neutral-800 dark:text-white">Multi-Model Support</h3>
                  <p className="text-neutral-600 dark:text-neutral-400 mt-1 text-sm">
                    Choose from various AI models for different tasks
                  </p>
                </div>
              </div>
            </div>

            <div className="relative bg-gradient-to-b dark:from-neutral-900 from-neutral-100 dark:to-neutral-950 to-white p-6 rounded-3xl overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 animate-in fade-in-0 zoom-in-95 duration-500">
              <div className="flex items-center gap-4">
                <div className="rounded-lg bg-primary/10 p-3">
                  <Zap className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold font-sans text-neutral-800 dark:text-white">Conversation History</h3>
                  <p className="text-neutral-600 dark:text-neutral-400 mt-1 text-sm">
                    Access and continue previous conversations seamlessly
                  </p>
                </div>
              </div>
            </div>

            <div className="relative bg-gradient-to-b dark:from-neutral-900 from-neutral-100 dark:to-neutral-950 to-white p-6 rounded-3xl overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 animate-in fade-in-0 zoom-in-95 duration-500">
              <div className="flex items-center gap-4">
                <div className="rounded-lg bg-primary/10 p-3">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold font-sans text-neutral-800 dark:text-white">Smart Suggestions</h3>
                  <p className="text-neutral-600 dark:text-neutral-400 mt-1 text-sm">
                    Get intelligent prompt suggestions and completions
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <MinimalFooter />
    </div>
  )
}