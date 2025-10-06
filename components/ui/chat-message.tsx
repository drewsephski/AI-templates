import React from 'react'
import { motion } from 'framer-motion'
import { Bot, User, Sparkles } from 'lucide-react'
import { formatChatMessage, sanitizeHtml } from '@/lib/utils'

interface ChatMessageProps {
  role: 'user' | 'assistant' | 'system'
  content: string
  isStreaming?: boolean
  timestamp?: Date
}

export function ChatMessage({ role, content, isStreaming = false, timestamp }: ChatMessageProps) {
  const isUser = role === 'user'
  const isAssistant = role === 'assistant'

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className={`flex gap-3 ${isUser ? 'flex-row-reverse' : 'flex-row'} items-start`}
    >
      {/* Avatar */}
      <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${
        isUser 
          ? 'bg-primary text-primary-foreground' 
          : isAssistant 
            ? 'bg-gradient-to-br from-purple-500 to-pink-500 text-white' 
            : 'bg-muted text-muted-foreground'
      }`}>
        {isUser ? <User className="w-4 h-4" /> : isAssistant ? <Sparkles className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
      </div>

      {/* Message Content */}
      <div className={`max-w-[80%] rounded-2xl px-4 py-3 ${
        isUser 
          ? 'bg-primary text-primary-foreground rounded-br-none' 
          : isAssistant 
            ? 'bg-gradient-to-r from-muted/50 to-muted/80 text-foreground rounded-bl-none border border-border/50' 
            : 'bg-muted text-muted-foreground rounded-bl-none'
      }`}>
        <div className="text-sm leading-relaxed">
          {isAssistant ? (
            <div
              className="prose prose-sm max-w-none"
              dangerouslySetInnerHTML={{
                __html: sanitizeHtml(formatChatMessage(content))
              }}
            />
          ) : (
            content
          )}
        </div>
        
        {/* Streaming indicator */}
        {isStreaming && (
          <div className="flex gap-1 mt-2">
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity, delay: 0 }}
              className="w-1.5 h-1.5 bg-current rounded-full"
            />
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity, delay: 0.2 }}
              className="w-1.5 h-1.5 bg-current rounded-full"
            />
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity, delay: 0.4 }}
              className="w-1.5 h-1.5 bg-current rounded-full"
            />
          </div>
        )}

        {/* Timestamp */}
        {timestamp && (
          <div className={`text-xs mt-1 opacity-70 ${isUser ? 'text-primary-foreground/70' : 'text-muted-foreground'}`}>
            {formatTime(timestamp)}
          </div>
        )}
      </div>
    </motion.div>
  )
}