import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server'

const isPublicRoute = createRouteMatcher([
  '/',
  '/chat',
  '/docs',
  '/sell',
  '/sign-in(.*)',
  '/sign-up(.*)',
])

const isProtectedRoute = createRouteMatcher([
  '/templates(.*)',
  '/api/templates/download(.*)',
  '/sell/start',
])

export default clerkMiddleware((auth, req) => {
  if (isProtectedRoute(req)) {
    auth().then((authResult) => {
      if (!authResult.userId) {
        authResult.redirectToSignIn()
      }
    })
  }
})

export const config = {
  matcher: [
    // Exclude Next.js internals and static files
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // API routes
    '/(api|trpc)(.*)',
  ],
}