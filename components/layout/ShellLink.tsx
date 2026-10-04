'use client'
import Link from 'next/link'
import type { ComponentProps } from 'react'

/**
 * Route link inside the compact shell. Like the reference, it doesn't jump back to the page top:
 * if the tab bar is already pinned, the next page opens with it still pinned.
 */
export default function ShellLink({ onClick, ...props }: ComponentProps<typeof Link>) {
  return (
    <Link
      {...props}
      scroll={false}
      onClick={(event) => {
        const hero = document.getElementById('home')
        if (hero) {
          const navTop = hero.getBoundingClientRect().bottom + window.scrollY - 1
          window.scrollTo({ top: Math.min(window.scrollY, navTop), behavior: 'instant' })
        }
        onClick?.(event)
      }}
    />
  )
}
