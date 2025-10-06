import { streamText } from 'ai'
import { createOpenRouter } from '@openrouter/ai-sdk-provider'

export async function POST(req: Request) {
  try {
    const { messages } = await req.json()

    const openrouter = createOpenRouter({
      apiKey: process.env.OPENROUTER_API_KEY,
      headers: {
        'HTTP-Referer': process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000',
        'X-Title': process.env.NEXT_PUBLIC_APP_NAME || 'AI Templates',
      },
    })

    const result = await streamText({
      model: openrouter.chat('z-ai/glm-4.5-air:free'),
      messages,
      system: `You are a helpful AI assistant for an AI templates marketplace. Help users understand templates, provide guidance on implementation, and answer questions about AI development.`,
    })

    return result.toUIMessageStreamResponse()
  } catch (error) {
    console.error('Chat API error:', error)
    return new Response(
      JSON.stringify({ error: 'Failed to generate response' }),
      { status: 500 }
    )
  }
}