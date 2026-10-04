'use client'

import { ReactNode, useCallback } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { smoothScrollToHash } from '@/lib/utils/smoothScrollToHash'
import { useLenis } from '@/components/providers/LenisProvider'

interface ScrollLinkProps {
  href: string
  className?: string
  children: ReactNode
  'aria-current'?: 'page' | 'location'
}

/**
 * In-page hash links scroll through Lenis (with the header offset).
 * "/#id" behaves like "#id" on the home page; any other href is a normal route link.
 */
export function ScrollLink({ href, className, children, ...rest }: ScrollLinkProps) {
  const lenis = useLenis()
  const pathname = usePathname()
  const hash = href.startsWith('/#') && pathname === '/' ? href.slice(1) : href

  const handleClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>) => {
      e.preventDefault()
      smoothScrollToHash(hash, lenis)
    },
    [hash, lenis]
  )

  if (!hash.startsWith('#'))
    return (
      <Link href={hash} className={className} {...rest}>
        {children}
      </Link>
    )

  return (
    <a href={hash} onClick={handleClick} className={className} {...rest}>
      {children}
    </a>
  )
}
