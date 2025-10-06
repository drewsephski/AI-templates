import React from 'react'
import { motion } from 'framer-motion'
import { 
  Lightbulb, 
  Code, 
  BookOpen, 
  MessageSquare, 
  Star, 
  Sparkles,
  Settings,
  TrendingUp,
  Users,
  Zap
} from 'lucide-react'

interface PromptSuggestion {
  title: string
  prompt: string
  icon: React.ReactNode
}

interface PromptSuggestionsProps {
  onPromptSelect: (prompt: string) => void
  suggestions?: PromptSuggestion[]
}

const defaultSuggestions: PromptSuggestion[] = [
  {
    title: 'Getting Started',
    prompt: 'How do I get started with AI Templates? What are the first steps?',
    icon: <BookOpen className="w-4 h-4" />
  },
  {
    title: 'Template Customization',
    prompt: 'How can I customize a template after downloading it?',
    icon: <Settings className="w-4 h-4" />
  },
  {
    title: 'Best Practices',
    prompt: 'What are the best practices for deploying AI applications?',
    icon: <TrendingUp className="w-4 h-4" />
  },
  {
    title: 'Technical Support',
    prompt: 'I need help with template integration. Can you guide me?',
    icon: <Code className="w-4 h-4" />
  },
  {
    title: 'Pricing & Plans',
    prompt: 'What\'s the difference between free and premium templates?',
    icon: <Star className="w-4 h-4" />
  },
  {
    title: 'AI Features',
    prompt: 'What AI features are included in the templates?',
    icon: <Sparkles className="w-4 h-4" />
  }
]

export function PromptSuggestions({ onPromptSelect, suggestions = defaultSuggestions }: PromptSuggestionsProps) {
  const handleSuggestionClick = (prompt: string) => {
    onPromptSelect(prompt)
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      {suggestions.map((suggestion, index) => (
        <motion.button
          key={index}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.2, delay: index * 0.05 }}
          whileHover={{
            scale: 1.02,
            y: -2,
            boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
          }}
          whileTap={{ scale: 0.98 }}
          onClick={() => handleSuggestionClick(suggestion.prompt)}
          className="group relative overflow-hidden rounded-xl border border-border/50 bg-gradient-to-br from-background to-muted/30 p-4 text-left transition-all duration-200 hover:border-primary/50 hover:shadow-lg h-fit"
        >
          {/* Icon */}
          <div className="flex items-center gap-3 mb-3">
            <div className="flex-shrink-0 w-9 h-9 rounded-lg bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center text-primary">
              {suggestion.icon}
            </div>
            <h3 className="font-semibold text-sm text-foreground truncate pr-2">{suggestion.title}</h3>
          </div>

          {/* Prompt preview */}
          <p className="text-xs text-muted-foreground line-clamp-3 leading-relaxed mb-3">
            {suggestion.prompt}
          </p>

          {/* Action indicator */}
          <div className="flex items-center justify-between">
            <div className="w-full h-px bg-gradient-to-r from-transparent via-border/50 to-transparent" />
            <div className="flex-shrink-0 ml-3">
              <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                <Sparkles className="w-3 h-3 text-primary" />
              </div>
            </div>
          </div>

          {/* Hover overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
        </motion.button>
      ))}
    </div>
  )
}