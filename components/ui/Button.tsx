import type { ReactNode } from 'react'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { ScrollLink } from './ScrollLink'
export default function Button({
  href,
  children,
  secondary = false,
  external = false,
}: {
  href: string
  children: ReactNode
  secondary?: boolean
  external?: boolean
}) {
  const className =
    'inline-flex min-h-11 items-center justify-center gap-2 rounded-md border px-4 py-3 text-center font-mono text-[10px] uppercase tracking-[0.12em] transition-colors motion-reduce:transition-none ' +
    (secondary
      ? 'border-border text-foreground hover:border-primary'
      : 'border-primary bg-primary text-white hover:bg-foreground')
  const content = (
    <>
      {children}
      <ArrowUpRight aria-hidden="true" className="h-4 w-4 shrink-0" />
    </>
  )
  if (href.startsWith('#'))
    return (
      <ScrollLink href={href} className={className}>
        {content}
      </ScrollLink>
    )
  return (
    <Link
      href={href}
      className={className}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
    >
      {content}
    </Link>
  )
}
