import { auth } from '@clerk/nextjs/server'
import { NextResponse } from 'next/server'
import { getTemplateById } from '@/lib/templates-data'

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    // Check authentication
    const { userId } = await auth()
    
    if (!userId) {
      return NextResponse.json(
        {
          error: 'Authentication required',
          message: 'Please sign in to download templates'
        },
        { status: 401 }
      )
    }

    // Extract template ID from params
    const { id: templateId } = await params

    // Get template data
    const template = getTemplateById(templateId)

    if (!template) {
      return NextResponse.json(
        { error: 'Template not found' },
        { status: 404 }
      )
    }

    // Return 302 redirect to the template's downloadUrl
    return NextResponse.redirect(template.downloadUrl, 302)

  } catch (error) {
    console.error('Download error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}