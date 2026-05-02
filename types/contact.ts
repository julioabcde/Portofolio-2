export interface ContactFormData {
  firstName: string
  lastName: string
  email: string
  message: string
  company?: string // honeypot field
}

export interface RateLimitEntry {
  count: number
  timestamp: number
}
