# Production Deployment Guide

This guide covers deploying the portfolio website across popular cloud platforms including Vercel, Netlify, Cloudflare Pages, and Docker.

---

## 1. Deploying on Vercel (Recommended)

Vercel is the creator of Next.js and provides zero-configuration deployment with optimal performance.

### Option A: Via Vercel Web Dashboard
1. Push your repository to GitHub / GitLab / Bitbucket.
2. Go to [Vercel Dashboard](https://vercel.com/new) and select **Import Repository**.
3. Framework Preset: **Next.js**.
4. Environment Variables: Add any keys specified in your `.env.local` (see `.env.example`).
5. Click **Deploy**.

### Option B: Via Vercel CLI
```bash
# Install Vercel CLI globally
npm i -g vercel

# Deploy preview build
vercel

# Deploy to production
vercel --prod
```

---

## 2. Deploying on Netlify

1. Connect your repository in [Netlify Dashboard](https://app.netlify.com/).
2. Build Settings:
   - **Build Command**: `pnpm run build`
   - **Publish Directory**: `.next`
3. Netlify will auto-detect Next.js runtime via `@netlify/plugin-nextjs`.

---

## 3. Deploying via Docker Container

For custom server infrastructure, Kubernetes, or self-hosted deployments:

### Create `Dockerfile` in root:

```dockerfile
FROM node:20-alpine AS base

# Install dependencies only when needed
FROM base AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app

COPY package.json pnpm-lock.yaml ./
RUN corepack enable pnpm && pnpm i --frozen-lockfile

# Rebuild the source code only when needed
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

RUN corepack enable pnpm && pnpm run build

# Production image, copy all the files and run next
FROM base AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

CMD ["node", "server.js"]
```

### Build & Run Docker Image:

```bash
# Build docker image
docker build -t portfolio-app .

# Run container on port 3000
docker run -p 3000:3000 portfolio-app
```

> **Note**: To use `standalone` output mode in Docker, add `output: "standalone"` to `next.config.ts`.

---

## 4. Static Export (`next export`)

If hosting on static storage like AWS S3 / Cloudflare Pages / GitHub Pages:

1. Update `next.config.ts`:
   ```ts
   import type { NextConfig } from "next";

   const nextConfig: NextConfig = {
     output: "export",
     images: { unoptimized: true },
   };

   export default nextConfig;
   ```
2. Run build: `pnpm run build`
3. Static files will be emitted to the `out/` folder ready to serve on any web server.
