import type { RateLimitEntry } from '@/types/contact'

const MAX_REQUESTS = 5
const RATE_WINDOW_MS = 60_000 // 1 minute

const rateLimitStore = new Map<string, RateLimitEntry>()

/**
 * Check if an IP address has exceeded the rate limit.
 * Returns true if rate limited, false otherwise.
 */
export function checkRateLimit(ip: string): boolean {
  const now = Date.now()
  const entry = rateLimitStore.get(ip)

  // First request or window expired
  if (!entry || now - entry.timestamp > RATE_WINDOW_MS) {
    rateLimitStore.set(ip, { count: 1, timestamp: now })
    return false
  }

  // Exceeded limit
  if (entry.count >= MAX_REQUESTS) {
    return true
  }

  // Increment count
  entry.count++
  return false
}
