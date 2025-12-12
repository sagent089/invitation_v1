import { serve } from '@hono/node-server'
import app from './index.js'

// Vercel environment variable otomatis ada
const isVercel = !!process.env.VERCEL;

if (!isVercel) {
  // =================================
  // LOCAL DEVELOPMENT
  // =================================
  const port = process.env.PORT || 3000
  console.log(`🚀 Local server is running on http://localhost:${port}`)
  
  serve({
    fetch: app.fetch,
    port
  })
} else {
  // =================================
  // VERCEL DEPLOYMENT
  // =================================
  console.log('✅ Running on Vercel serverless, no need to listen port')
}

export default app
