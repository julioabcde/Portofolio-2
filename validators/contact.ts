import { z } from 'zod'

export const contactFormSchema = z.object({
  firstName: z
    .string()
    .min(1, 'First name is required')
    .max(50, 'First name is too long')
    .trim(),
  lastName: z
    .string()
    .min(1, 'Last name is required')
    .max(50, 'Last name is too long')
    .trim(),
  email: z
    .string()
    .min(1, 'Email is required')
    .email('Please enter a valid email address')
    .trim(),
  message: z
    .string()
    .min(1, 'Message is required')
    .max(5000, 'Message is too long (max 5000 characters)')
    .trim(),
  company: z.string().optional(), // honeypot field
})

export type ContactFormData = z.infer<typeof contactFormSchema>

/**
 * Validate contact form data using Zod schema
 * Returns { success: true, data } or { success: false, error }
 */
export function validateContactForm(data: unknown) {
  return contactFormSchema.safeParse(data)
}
