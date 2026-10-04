'use client'
import { useState } from 'react'
import { usePathname } from 'next/navigation'
import { FileText, FolderOpen, House, Mail, MessageCircle } from 'lucide-react'
import { COMPACT_NAV_LINKS } from '@/lib/data/navigation'
import { useActiveSection } from '@/lib/hooks/useActiveSection'
import { playTap } from '@/lib/utils/playTap'
import { ScrollLink } from '@/components/ui/ScrollLink'
import ChatDialog from '@/components/chat/ChatDialog'
import ShellLink from './ShellLink'

const ICONS: Record<string, typeof House> = {
  home: House,
  projects: FolderOpen,
  blog: FileText,
  contact: Mail,
}
const itemClass =
  'flex h-full w-full items-center justify-center gap-1.5 px-1 text-xs font-medium transition-colors hover:text-foreground '

export default function MobileTabNav() {
  const pathname = usePathname()
  const [chatOpen, setChatOpen] = useState(false)
  const section = useActiveSection({ sectionIds: ['home', 'contact'], headerOffset: 56 })

  const activeId =
    pathname === '/' ? (section === 'contact' ? 'contact' : 'home') : pathname.split('/')[1]
  const [home, projects, blog, contact] = COMPACT_NAV_LINKS
  const tabs = [home, projects, blog, null, contact]
  const index = chatOpen ? 3 : tabs.findIndex((tab) => tab?.id === activeId)

  return (
    <nav
      aria-label="Primary"
      className="sticky top-0 z-40 -mt-px h-14 border-y border-border bg-[rgba(245,242,237,0.95)] backdrop-blur-md"
    >
      <ul className="relative grid h-full grid-cols-5" onClickCapture={playTap}>
        {tabs.map((tab) => {
          if (!tab)
            return (
              <li key="chat" className="h-full">
                <button
                  type="button"
                  aria-haspopup="dialog"
                  onClick={() => setChatOpen(true)}
                  className={itemClass + (chatOpen ? 'text-foreground' : 'text-muted')}
                >
                  <MessageCircle aria-hidden="true" className="h-[18px] w-[18px] shrink-0" />
                  <span className="sr-only sm:not-sr-only">Chat</span>
                </button>
              </li>
            )
          const Icon = ICONS[tab.id]
          const active = tab.id === activeId
          const content = (
            <>
              <Icon aria-hidden="true" className="h-[18px] w-[18px] shrink-0" />
              <span className="sr-only sm:not-sr-only">{tab.label}</span>
            </>
          )
          const className = itemClass + (active ? 'text-foreground' : 'text-muted')
          return (
            <li key={tab.id} className="h-full">
              {tab.id === 'contact' ? (
                <ScrollLink href={tab.href} aria-current={active ? 'page' : undefined} className={className}>
                  {content}
                </ScrollLink>
              ) : (
                <ShellLink href={tab.href} aria-current={active ? 'page' : undefined} className={className}>
                  {content}
                </ShellLink>
              )}
            </li>
          )
        })}
        {index >= 0 && (
          <li
            aria-hidden="true"
            className="pointer-events-none absolute bottom-0 left-0 h-0.5 w-1/5 bg-primary transition-transform duration-300 ease-out motion-reduce:transition-none"
            style={{ transform: `translateX(${index * 100}%)` }}
          />
        )}
      </ul>
      <ChatDialog open={chatOpen} onClose={() => setChatOpen(false)} />
    </nav>
  )
}
