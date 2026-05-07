'use client'

import { Menu, X } from 'lucide-react'
import { clsx } from 'clsx'

interface MobileMenuTriggerProps {
  isOpen: boolean
  onToggle: () => void
  className?: string
}

export default function MobileMenuTrigger({
  isOpen,
  onToggle,
  className,
}: MobileMenuTriggerProps) {
  return (
    <button
      type="button"
      onClick={onToggle}
      aria-expanded={isOpen}
      aria-controls="mobile-menu-panel"
      aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
      className={clsx(
        'md:hidden',
        'inline-flex items-center justify-center',
        'h-10 w-10',
        'text-foreground hover:text-secondary',
        'transition-colors duration-200',
        'focus-visible:outline focus-visible:outline-2',
        'focus-visible:outline-offset-2 focus-visible:outline-secondary',
        className
      )}
    >
      {isOpen ? (
        <X size={24} aria-hidden="true" />
      ) : (
        <Menu size={24} aria-hidden="true" />
      )}
    </button>
  )
}