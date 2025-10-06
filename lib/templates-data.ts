export interface Template {
  id: string
  name: string
  description: string
  category: string
  features: string[]
  techStack: string[]
  previewImage: string
  previewUrl: string
  downloadUrl: string
  isPremium: boolean
}

export const templates: Template[] = [
  {
    id: 'easy-ai',
    name: 'Easy AI',
    description: 'A versatile AI toolkit offering a suite of intelligent utilities and productivity features for everyday users and developers.',
    category: 'AI',
    features: [
      'Intelligent utilities suite',
      'Productivity enhancement tools',
      'Developer-friendly APIs',
      'Everyday user applications',
      'Customizable AI solutions'
    ],
    techStack: ['Next.js', 'TypeScript', 'OpenAI API', 'Tailwind CSS'],
    previewImage: '/open.png',
    previewUrl: 'https://ez-ai.netlify.app',
    downloadUrl: '/api/templates/download/easy-ai',
    isPremium: false
  },
  {
    id: 'hyper-ai',
    name: 'Hyper AI',
    description: 'A streamlined platform delivering rapid, AI-powered solutions with an intuitive, user-friendly interface for diverse tasks.',
    category: 'AI',
    features: [
      'Rapid AI solutions',
      'Intuitive user interface',
      'Diverse task automation',
      'Streamlined workflows',
      'Quick deployment'
    ],
    techStack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'OpenAI API'],
    previewImage: '/hyper.png',
    previewUrl: 'https://hyper-ai.netlify.app',
    downloadUrl: '/api/templates/download/hyper-ai',
    isPremium: false
  },
  {
    id: 'easy-ui',
    name: 'Easy UI',
    description: 'A modern UI component library and playground, leveraging AI to accelerate interface design and prototyping for web projects.',
    category: 'UI/UX',
    features: [
      'Modern UI component library',
      'AI-powered design assistance',
      'Interactive prototyping',
      'Web project acceleration',
      'Design system tools'
    ],
    techStack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    previewImage: '/easyui.png',
    previewUrl: 'https://ez-ui.netlify.app',
    downloadUrl: '/api/templates/download/easy-ui',
    isPremium: false
  },
  {
    id: 'portfolio-v1',
    name: 'Portfolio v1',
    description: 'A personal portfolio showcasing UI experimentation and design systems, built with the latest shadcn/ui components.',
    category: 'Portfolio',
    features: [
      'UI experimentation showcase',
      'Modern design systems',
      'Shadcn/ui components',
      'Responsive design',
      'Developer portfolio'
    ],
    techStack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Shadcn/ui'],
    previewImage: '/dark.png',
    previewUrl: 'https://drew-shadcn.netlify.app',
    downloadUrl: '/api/templates/download/portfolio-v1',
    isPremium: false
  },
  {
    id: 'ufc-predictor',
    name: 'UFC Predictor',
    description: 'An advanced analytics tool that uses AI models to predict UFC fight outcomes, offering fight breakdowns and data-driven insights.',
    category: 'Analytics',
    features: [
      'AI-powered fight predictions',
      'Advanced analytics dashboard',
      'Fight breakdown analysis',
      'Data-driven insights',
      'Performance tracking'
    ],
    techStack: ['Next.js', 'TypeScript', 'Python ML', 'Chart.js'],
    previewImage: '/ufc.png',
    previewUrl: 'https://ufc-predict.netlify.app',
    downloadUrl: '/api/templates/download/ufc-predictor',
    isPremium: true
  },
  {
    id: 'dev-bot',
    name: 'Dev Bot',
    description: 'A developer-focused toolkit providing customizable UI elements and automation features to simplify and speed up the dev workflow.',
    category: 'Development',
    features: [
      'Customizable UI elements',
      'Development automation',
      'Workflow optimization',
      'Developer productivity',
      'Code generation tools'
    ],
    techStack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Node.js'],
    previewImage: '/botkit.png',
    previewUrl: 'https://dev-botkit.netlify.app',
    downloadUrl: '/api/templates/download/dev-bot',
    isPremium: false
  },
  {
    id: 'physician-ai',
    name: 'Physician AI',
    description: 'A data analytics platform for healthcare professionals, using AI to generate actionable insights and optimize physician performance.',
    category: 'Healthcare',
    features: [
      'Healthcare data analytics',
      'AI-powered insights',
      'Performance optimization',
      'Actionable recommendations',
      'Medical workflow tools'
    ],
    techStack: ['Next.js', 'TypeScript', 'OpenAI API', 'Chart.js'],
    previewImage: '/physician.png',
    previewUrl: 'https://physicianai.netlify.app',
    downloadUrl: '/api/templates/download/physician-ai',
    isPremium: true
  },
  {
    id: 'acme-template',
    name: 'Acme Template',
    description: 'A sleek, high-converting marketing website template designed for agencies and startups, featuring modern layouts and engaging content blocks.',
    category: 'Marketing',
    features: [
      'High-converting design',
      'Modern layouts',
      'Engaging content blocks',
      'Agency-ready',
      'Startup optimized'
    ],
    techStack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    previewImage: '/acme.png',
    previewUrl: 'https://blog-hazel-iota.vercel.app',
    downloadUrl: '/api/templates/download/acme-template',
    isPremium: false
  },
  {
    id: 'screwsfast',
    name: 'ScrewFast',
    description: 'A robust e-commerce platform tailored for construction and utility businesses, offering streamlined product listings and secure checkout.',
    category: 'E-commerce',
    features: [
      'Construction industry focus',
      'Streamlined product listings',
      'Secure checkout system',
      'Business-to-business features',
      'Inventory management'
    ],
    techStack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Stripe API'],
    previewImage: '/screwfast.png',
    previewUrl: 'https://screwfast-indol.vercel.app',
    downloadUrl: '/api/templates/download/screwsfast',
    isPremium: false
  },
  {
    id: 'storm-ai',
    name: 'Storm AI',
    description: 'An innovative code generator to create beautiful, functional web applications with modern technologies.',
    category: 'Development',
    features: [
      'Code generation',
      'Modern web applications',
      'Functional programming',
      'Rapid development',
      'Technology stack optimization'
    ],
    techStack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'AI Code Generation'],
    previewImage: '/stormai.png',
    previewUrl: 'https://shadv0.netlify.app',
    downloadUrl: '/api/templates/download/storm-ai',
    isPremium: false
  },
  {
    id: 'lynx',
    name: 'Lynx',
    description: 'An AI-driven platform that transforms user ideas into full-featured web apps, automating everything from design to deployment.',
    category: 'AI',
    features: [
      'Idea to application transformation',
      'Automated design generation',
      'Full-stack development',
      'Automated deployment',
      'Rapid prototyping'
    ],
    techStack: ['Next.js', 'TypeScript', 'AI Design Tools', 'CI/CD'],
    previewImage: '/lynx.png',
    previewUrl: 'https://lynxy.netlify.app',
    downloadUrl: '/api/templates/download/lynx',
    isPremium: true
  },
  {
    id: 'self-quest',
    name: 'Self Quest',
    description: 'A personality test using the MBTI traits to help user get a better understanding of themselves and their strengths and weaknesses',
    category: 'Education',
    features: [
      'MBTI personality assessment',
      'Self-discovery tools',
      'Personal insights',
      'Strengths analysis',
      'Weaknesses identification'
    ],
    techStack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Psychology APIs'],
    previewImage: '/selfquest.png',
    previewUrl: 'https://selfquest.netlify.app',
    downloadUrl: '/api/templates/download/self-quest',
    isPremium: false
  },
  {
    id: 'portfolio-v2',
    name: 'Portfolio v2',
    description: 'A modern and engaging portfolio for AI engineer with micro-interactions and full stack capabilities',
    category: 'Portfolio',
    features: [
      'AI engineer showcase',
      'Micro-interactions',
      'Full stack capabilities',
      'Modern design',
      'Interactive elements'
    ],
    techStack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    previewImage: '/drewsepsi.png',
    previewUrl: 'https://drewsepsi.netlify.app',
    downloadUrl: '/api/templates/download/portfolio-v2',
    isPremium: true
  },
  {
    id: 'bento-portfolio',
    name: 'BentoPortfolio',
    description: 'An ultra-modern, bento-box styled portfolio landing page for developers, designers, and other creatives.',
    category: 'Portfolio',
    features: [
      'Bento-box layout',
      'Ultra-modern design',
      'Developer showcase',
      'Designer portfolio',
      'Creative professional'
    ],
    techStack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'CSS Grid'],
    previewImage: '/cook.png',
    previewUrl: 'https://bentobox-roan.vercel.app',
    downloadUrl: '/api/templates/download/bento-portfolio',
    isPremium: false
  },
  {
    id: 'ai-image-gen',
    name: 'AI Image Gen',
    description: 'A prompt-driven image generation CRUD platform with secure auth, role-based access, and cloud storage',
    category: 'AI',
    features: [
      'Prompt-driven image generation',
      'CRUD operations',
      'Secure authentication',
      'Role-based access control',
      'Cloud storage integration'
    ],
    techStack: ['Next.js', 'TypeScript', 'OpenAI API', 'Cloud Storage'],
    previewImage: '/imageai.png',
    previewUrl: 'https://aisdk.shop',
    downloadUrl: '/api/templates/download/ai-image-gen',
    isPremium: true
  },
  {
    id: 'better-auth',
    name: 'Better Auth',
    description: 'Full stack boilerplate built with better auth, nextjs, gsap, and framer motion',
    category: 'Development',
    features: [
      'Better authentication',
      'Full stack boilerplate',
      'Next.js framework',
      'GSAP animations',
      'Framer motion'
    ],
    techStack: ['Next.js', 'TypeScript', 'Better Auth', 'GSAP', 'Framer Motion'],
    previewImage: '/betterauth.png',
    previewUrl: 'https://shadv0.netlify.app',
    downloadUrl: '/api/templates/download/better-auth',
    isPremium: false
  }
]

export function getTemplateById(id: string): Template | undefined {
  return templates.find(template => template.id === id)
}

export function getTemplatesByCategory(category: string): Template[] {
  return templates.filter(template => template.category === category)
}

export function getAllCategories(): string[] {
  const categories = templates.map(template => template.category)
  return [...new Set(categories)]
}

export function getPremiumTemplates(): Template[] {
  return templates.filter(template => template.isPremium)
}

export function getFreeTemplates(): Template[] {
  return templates.filter(template => !template.isPremium)
}