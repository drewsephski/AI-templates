# AI Templates Marketplace

A modern Next.js 15 AI templates marketplace with Clerk authentication, AI-powered chat interface, and comprehensive template discovery platform.

## Project Overview

AI Templates Marketplace is a cutting-edge platform that enables developers to discover, download, and contribute AI-powered application templates. Built with Next.js 15 and featuring a sophisticated AI chat assistant, this platform combines modern web development best practices with intelligent user experiences.

### Tech Stack

- **Next.js 15** - React framework with App Router and TypeScript
- **Tailwind CSS** - Modern utility-first CSS with OKLCH color system
- **Framer Motion** - Production-ready motion library for smooth animations
- **Clerk** - Complete authentication and user management solution
- **Vercel AI SDK** - OpenRouter provider for AI chat functionality
- **Lucide React** - Beautiful & consistent icon library
- **Radix UI** - Low-level UI primitives for accessible components
- **TypeScript** - Type-safe JavaScript development

### Key Features

#### 🤖 AI-Powered Chat Interface
- **Streaming Chat Responses**: Real-time AI conversations using OpenRouter's GLM-4.5-Air model
- **Smart Prompt Suggestions**: Quick-start prompts for common template inquiries
- **Context-Aware Responses**: AI assistant specialized in AI templates and development guidance
- **ChatGPT-Inspired UI**: Familiar chat interface with message bubbles and typing indicators

#### 🎨 Modern Design System
- **Gradient-Based Design**: Beautiful gradient backgrounds and modern aesthetics
- **Dark/Light Theme**: Full theme support with system preference detection
- **Responsive Layout**: Mobile-first approach that works seamlessly across all devices
- **Smooth Animations**: Framer Motion-powered transitions and micro-interactions

#### 🚀 Template Marketplace
- **15+ Curated Templates**: Pre-built AI-powered application templates across multiple categories
- **Dynamic Detail Pages**: Individual template pages with full feature descriptions
- **Premium & Free Templates**: Mix of free and premium template options
- **Tech Stack Filtering**: Browse templates by technology stack and features
- **Live Previews**: Direct links to template demos and implementations

#### 🔐 Authentication & Security
- **Clerk Integration**: Complete authentication with sign-in, sign-up, and user management
- **Route Protection**: Middleware-protected routes for premium content
- **Secure Downloads**: Auth-gated template downloads with proper access control
- **User Profiles**: Personal dashboard and template management

#### 💰 Seller Platform
- **Template Submission**: Multi-step onboarding process for template creators
- **Revenue Sharing**: Monetization opportunities for template authors
- **Quality Control**: Template review and approval process
- **Performance Analytics**: Template download and usage statistics

#### 📚 Documentation & Support
- **Comprehensive Docs**: Getting started guides, API references, and best practices
- **Contact System**: Professional contact page with multiple support channels
- **Legal Pages**: Privacy policy, terms of service, and security information
- **Community Resources**: Discord/Slack integration and community forums

## Getting Started

### Prerequisites

- **Node.js 18+** - JavaScript runtime environment
- **npm, yarn, pnpm, or bun** - Package manager
- **Clerk Account** - For authentication (free available)
- **OpenRouter API Key** - For AI chat functionality (free available)

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd tinker
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   # or
   bun install
   ```

3. **Set up Environment Variables**
   
   Copy the environment template:
   ```bash
   cp .env.local.example .env.local
   ```
   
   You'll need to configure both Clerk and OpenRouter:

   #### Clerk Authentication Setup
   a. Create a Clerk account at [https://dashboard.clerk.com](https://dashboard.clerk.com)
   b. Create a new application in your Clerk dashboard
   c. Copy your API keys from the "API Keys" section
   d. Update `.env.local` with your Clerk values:
   ```env
   # Clerk API Keys
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_your_publishable_key
   CLERK_SECRET_KEY=sk_test_your_secret_key
   
   # Clerk URLs
   NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
   NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
   NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/templates
   NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/templates
   ```

   #### OpenRouter AI Setup
   a. Get your API key from [https://openrouter.ai/keys](https://openrouter.ai/keys)
   b. Add to your `.env.local` file:
   ```env
   # OpenRouter API Configuration
   OPENROUTER_API_KEY=your_openrouter_api_key_here
   
   # Optional attribution headers
   NEXT_PUBLIC_APP_URL=http://localhost:3000
   NEXT_PUBLIC_APP_NAME=AI Templates
   ```

4. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   # or
   bun dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to see the application.

### First-Time Setup

#### Clerk Configuration
1. **Create Clerk Account**: Visit [https://dashboard.clerk.com](https://dashboard.clerk.com) and sign up
2. **Create Application**: Set up a new application in your dashboard
3. **Configure Redirect URLs**: Add these URLs in your Clerk settings:
   - Sign-in URL: `/sign-in`
   - Sign-up URL: `/sign-up`
   - After sign-in: `/templates`
   - After sign-up: `/templates`
4. **Copy API Keys**: Get your Publishable and Secret keys from the API Keys section

#### OpenRouter Configuration
1. **Get API Key**: Sign up at [https://openrouter.ai/keys](https://openrouter.ai/keys)
2. **Free Tier**: The GLM-4.5-Air model is available in the free tier
3. **Add Key**: Paste your API key into the `.env.local` file

### Testing the AI Chat
The AI chat interface is available at `/chat` and works without authentication. Test it by:
1. Opening the chat page
2. Using the prompt suggestions or typing your own questions
3. Getting real-time responses from the AI assistant

## Project Structure

```
app/
├── (auth)/                    # Authentication pages
│   ├── sign-in/[[...sign-in]]/
│   └── sign-up/[[...sign-up]]/
├── api/                       # API routes
│   ├── chat/                  # AI chat streaming endpoint
│   └── templates/download/[id]/
├── chat/                      # AI chat interface page
├── contact/                   # Contact support page
├── docs/                      # Documentation page with content sections
├── sell/                      # Seller platform page
├── sell/start/                # Seller onboarding page (protected)
├── templates/                 # Templates marketplace page
├── templates/[id]/            # Dynamic template detail pages
├── privacy/                   # Privacy policy page
├── terms/                     # Terms of service page
├── layout.tsx                 # Root layout with enhanced metadata
├── page.tsx                   # Homepage with smooth scrolling sections
└── globals.css                # Global styles with chat interface support

components/
├── shared/                    # Shared components
│   └── navbar.tsx             # Navigation component
├── blocks/                    # Page sections
│   └── hero-section-1.tsx     # Hero section component
├── ui/                        # Reusable UI components
│   ├── animated-group.tsx     # Animation wrapper
│   ├── badge.tsx              # Badge component
│   ├── button.tsx             # Button component
│   ├── chat-message.tsx       # AI chat message component (NEW)
│   ├── minimal-footer.tsx     # Footer component with updated links
│   ├── prompt-suggestions.tsx # Quick prompt suggestions (NEW)
│   ├── separator.tsx          # Separator component
│   ├── text-effect.tsx        # Text animation effects
│   ├── theme-toggle.tsx       # Theme switcher
│   └── wave-path.tsx          # Wave decoration component
└── theme-provider.tsx         # Theme context

lib/
├── templates-data.ts          # Template definitions and helpers
└── utils.ts                   # Enhanced utility functions
```

### Key Directories

#### `app/` - Application Pages
- **Authentication**: Clerk-powered sign-in and sign-up pages with catch-all routes
- **AI Chat**: Streaming chat interface with OpenRouter integration
- **Templates**: Dynamic marketplace with individual template detail pages
- **Seller Platform**: Protected seller onboarding and monetization pages
- **Legal**: Privacy policy, terms of service, and contact pages
- **API Routes**: Chat streaming and template download endpoints

#### `components/` - Reusable Components
- **UI Components**: Modern, accessible components following design system
- **Chat Interface**: Specialized components for AI chat functionality
- **Shared Navigation**: Consistent navbar across all pages
- **Animations**: Framer Motion-powered smooth transitions

#### `lib/` - Utilities and Data
- **Template Data**: Curated collection of 15+ AI templates with metadata
- **Utility Functions**: Enhanced helper functions for chat, formatting, and UX

## Available Pages

### Public Pages (No Authentication Required)
- **`/`** - Homepage with hero section and smooth scrolling features
- **`/chat`** - AI-powered chat interface with streaming responses
- **`/docs`** - Comprehensive documentation with content sections
- **`/sell`** - Seller platform overview and monetization information

### Authentication Pages
- **`/sign-in`** - User authentication page with Clerk integration
- **`/sign-up`** - User registration page with Clerk integration

### Protected Pages (Authentication Required)
- **`/templates`** - AI templates marketplace with auth-gated downloads
- **`/templates/[id]`** - Individual template detail pages with download options
- **`/sell/start`** - Seller onboarding and template submission form

### Legal & Support Pages
- **`/privacy`** - Privacy policy and data handling information
- **`/terms`** - Terms of service and usage guidelines
- **`/contact`** - Contact support page with multiple channels

## Authentication & Security

### Clerk Authentication Setup

#### 1. Create Clerk Account
- Visit [https://dashboard.clerk.com](https://dashboard.clerk.com)
- Sign up or log in to your account
- Create a new application

#### 2. Configure Redirect URLs
In your Clerk dashboard, configure the following redirect URLs:
- **Sign-in URL**: `/sign-in`
- **Sign-up URL**: `/sign-up`
- **After sign-in URL**: `/templates`
- **After sign-up URL**: `/templates`

#### 3. Get API Keys
- Navigate to "API Keys" in your Clerk dashboard
- Copy your **Publishable Key** and **Secret Key**
- Add them to your `.env.local` file

#### 4. Environment Variables
Ensure all required environment variables are set in `.env.local`:

```env
# Clerk API Keys
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_your_key
CLERK_SECRET_KEY=sk_test_your_key

# Clerk URLs
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/templates
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/templates

# OpenRouter API Configuration
OPENROUTER_API_KEY=your_openrouter_api_key_here

# Optional attribution headers
NEXT_PUBLIC_APP_URL=http://localhost:3000
NEXT_PUBLIC_APP_NAME=AI Templates
```

### Route Protection

The application uses middleware to protect sensitive routes:

#### Public Routes
- `/` (Homepage)
- `/chat` (AI chat interface)
- `/docs` (Documentation)
- `/sell` (Seller platform overview)
- `/privacy`, `/terms`, `/contact` (Legal pages)

#### Protected Routes
- `/templates` (Template marketplace)
- `/templates/[id]` (Template detail pages)
- `/sell/start` (Seller onboarding)
- `/api/templates/download/[id]` (Download endpoint)

#### Authentication Flow
1. **Public Access**: Most pages are accessible without authentication
2. **Template Downloads**: Users must sign in to download templates
3. **Seller Onboarding**: Only authenticated users can submit templates
4. **Chat Interface**: Available to everyone for testing and support

## Development

### Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build for production with Turbopack
- `npm start` - Start production server

### Adding New Templates

To add new AI templates to the marketplace:

1. Edit `lib/templates-data.ts`
2. Add new template objects to the `templates` array
3. Include all required fields: `id`, `name`, `description`, `category`, `features`, `techStack`, `previewImage`, `downloadUrl`, `isPremium`
4. Use the helper functions to filter and retrieve templates

### Customization

#### Theme & Design
- **Theme Colors**: Modify `app/globals.css` for custom color schemes
- **Typography**: Update font configurations in `app/layout.tsx`
- **Animations**: Customize Framer Motion animations in components
- **Dark Mode**: Theme is automatically handled by the theme provider

#### Content & Data
- **Template Data**: Update `lib/templates-data.ts` to add/remove templates
- **AI Prompts**: Modify chat system prompt in `app/api/chat/route.ts`
- **Documentation**: Update content in documentation pages
- **Legal Pages**: Customize privacy policy and terms of service

#### Development
- **Pages**: Create new pages in the `app/` directory following the existing patterns
- **Components**: Add reusable components in `components/ui/` or `components/shared/`
- **API Routes**: Add new endpoints in `app/api/` directory
- **Utilities**: Extend helper functions in `lib/utils.ts`

### AI Chat Customization

The AI chat interface can be customized by:

1. **System Prompt**: Modify the system prompt in `app/api/chat/route.ts`
2. **Model Configuration**: Change the OpenRouter model if needed
3. **UI Components**: Customize chat message styling in `components/ui/chat-message.tsx`
4. **Prompt Suggestions**: Update suggestions in `components/ui/prompt-suggestions.tsx`

### Performance Optimization

- **Image Optimization**: External images are configured in `next.config.ts`
- **Code Splitting**: Next.js automatically handles code splitting
- **Caching**: Static templates are pre-built for performance
- **Bundle Analysis**: Use `npm run build` to check bundle size

## Authentication Flow

### Public Routes
- `/` (Homepage)
- `/chat` (Chat interface)
- `/docs` (Documentation)
- `/sell` (Seller platform)

### Protected Routes
- `/templates` (Template downloads require authentication)
- `/api/templates/download/[id]` (Download endpoint)

### Authentication States
- **Signed Out**: Shows "Sign In" and "Sign Up" buttons in navbar
- **Signed In**: Shows user profile picture and "Sign Out" option
- **Template Downloads**: Authenticated users can download templates, non-authenticated users are prompted to sign in

## Deployment

### Build for Production
```bash
npm run build
```

### Start Production Server
```bash
npm start
```

### Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

#### Vercel Deployment Steps
1. **Connect Repository**: Link your GitHub repository to Vercel
2. **Configure Environment Variables**: Add all required environment variables in Vercel dashboard
3. **Build Command**: Use `npm run build`
4. **Output Directory**: `.next`
5. **Install Command**: `npm install`

#### Environment Variables for Production
Ensure these are set in your Vercel environment:
```env
# Clerk Authentication
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_production_key
CLERK_SECRET_KEY=your_production_secret

# Clerk URLs
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/templates
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/templates

# OpenRouter AI
OPENROUTER_API_KEY=your_production_openrouter_key

# App Configuration
NEXT_PUBLIC_APP_URL=https://your-domain.com
NEXT_PUBLIC_APP_NAME=AI Templates
```

### Other Deployment Platforms

#### Netlify
1. **Framework**: Next.js
2. **Build Command**: `npm run build`
3. **Publish Directory**: `.next`
4. **Environment Variables**: Configure in Netlify dashboard

#### Railway
1. **Build Command**: `npm run build`
2. **Start Command**: `npm start`
3. **Environment Variables**: Set in Railway variables

#### Docker
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

## Environment Variables

Never commit sensitive environment variables to version control. The `.env.local` file should be added to your `.gitignore` file.

### Required Variables
- **Clerk API Keys**: Essential for authentication
- **OpenRouter API Key**: Required for AI chat functionality
- **App Configuration**: URL and name for attribution

### Optional Variables
- **Debug Flags**: Enable/disable debug modes
- **Analytics IDs**: For tracking and monitoring
- **Feature Flags**: Enable/disable specific features

## Contributing

We welcome contributions! Please follow these guidelines:

### Development Workflow
1. **Fork the Repository**: Create your own fork
2. **Create Feature Branch**: `git checkout -b feature/amazing-feature`
3. **Make Changes**: Follow the existing code style and patterns
4. **Test Thoroughly**: Ensure all functionality works as expected
5. **Submit Pull Request**: Provide clear description of changes

### Code Standards
- **TypeScript**: Use strict TypeScript typing
- **Component Structure**: Follow existing component patterns
- **Styling**: Use Tailwind CSS classes consistently
- **Accessibility**: Ensure components are accessible
- **Performance**: Optimize for speed and efficiency

### Testing
- **Manual Testing**: Test across different browsers and devices
- **Responsive Design**: Verify mobile and desktop layouts
- **Authentication Flow**: Test sign-in/sign-up processes
- **AI Chat**: Test chat functionality with various prompts

## License

This project is private and proprietary. All rights reserved.

## Support

For support and questions:

### Documentation
- **Main Docs**: `/docs` - Comprehensive guides and API references
- **Template Data**: `lib/templates-data.ts` - Available templates and metadata
- **Authentication**: `middleware.ts` - Route protection and auth flow

### Community
- **Discord/Slack**: Community forums for discussions
- **GitHub Issues**: Bug reports and feature requests
- **Email Support**: For private matters and enterprise inquiries

### Technical Resources
- **Clerk Docs**: [https://clerk.com/docs](https://clerk.com/docs)
- **OpenRouter Docs**: [https://openrouter.ai/docs](https://openrouter.ai/docs)
- **Next.js Docs**: [https://nextjs.org/docs](https://nextjs.org/docs)
- **Tailwind CSS**: [https://tailwindcss.com/docs](https://tailwindcss.com/docs)

### Performance Monitoring
- **Build Analysis**: Check bundle sizes with `npm run build`
- **Lighthouse Scores**: Run audits for performance, accessibility, SEO
- **Error Tracking**: Monitor for runtime errors and exceptions
