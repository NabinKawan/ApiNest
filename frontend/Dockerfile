FROM node:20-slim AS base
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable
WORKDIR /app

FROM base AS deps
COPY pnpm-workspace.yaml pnpm-lock.yaml package.json ./
COPY frontend/package.json ./frontend/
COPY .npmrc ./
RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install --filter frontend --frozen-lockfile

FROM base AS builder
COPY frontend ./frontend

COPY --from=deps /app/node_modules ./frontend/node_modules

WORKDIR /app/frontend
ARG NEXT_PUBLIC_API_URL
ENV NEXT_PUBLIC_API_URL=$NEXT_PUBLIC_API_URL

RUN pnpm run build

FROM base AS runner
ENV NODE_ENV=production
WORKDIR /app

RUN addgroup --system --gid 1001 nodejs \
  && adduser --system --uid 1001 nextjs

RUN mkdir .next
RUN chown nextjs:nodejs .next

# Copy only the standalone build output
COPY --from=builder /app/frontend/public ./public
COPY --from=builder /app/frontend/.next/standalone ./
COPY --from=builder /app/frontend/.next/static ./.next/static


# # Copy workspace files for pnpm production install
COPY pnpm-workspace.yaml package.json pnpm-lock.yaml ./
COPY frontend/package.json ./frontend/
COPY .npmrc ./

# # Install only production deps for frontend
RUN --mount=type=cache,id=pnpm,target=/pnpm/store \
    pnpm install --prod --filter frontend... --frozen-lockfile --ignore-scripts

USER nextjs

EXPOSE 3000

ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

CMD ["node", "server.js"]
