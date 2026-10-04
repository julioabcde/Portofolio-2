import Image from 'next/image'
import { AtSign, BriefcaseBusiness, MapPin } from 'lucide-react'
import { PROFILE } from '@/lib/data/profile'
import SocialLinks from '@/components/ui/SocialLinks'

export default function MobileHero({
  nameAsHeading = true,
}: {
  nameAsHeading?: boolean
}) {
  const Name = nameAsHeading ? 'h1' : 'p'
  return (
    <section
      id="home"
      aria-label="Introduction"
      className="border-b border-border"
    >
      <div className="flex h-[72px] items-end justify-end border-b border-border px-5 pb-2.5 sm:h-20 sm:px-6">
        <span className="text-lg font-black leading-none tracking-tighter">
          PORTFOLIO.
        </span>
      </div>
      <div className="px-5 pb-5 sm:px-6 sm:pb-6">
        <div className="relative -mt-[52px] h-[104px] w-[104px] overflow-hidden rounded-full border-4 border-background bg-[#DCEBFA] sm:-mt-16 sm:h-32 sm:w-32">
          <Image
            src={PROFILE.portrait}
            alt="Julio, Frontend Engineer"
            fill
            priority
            sizes="(min-width: 640px) 128px, 104px"
            className="origin-top scale-[1.13] select-none object-cover"
          />
        </div>

        <Name className="mt-3 font-display text-[1.75rem] font-bold leading-8 tracking-tight">
          {PROFILE.name}
          <span aria-hidden="true" className="text-primary">
            .
          </span>
          <span className="sr-only"> — {PROFILE.role}</span>
        </Name>

        <p className="mt-3.5 text-[15px] leading-relaxed">
          {PROFILE.introduction}
        </p>

        <ul className="mt-4 flex flex-wrap gap-x-4 gap-y-2 text-sm text-muted">
          <li className="inline-flex items-center gap-1.5">
            <BriefcaseBusiness aria-hidden="true" className="h-4 w-4" />
            {PROFILE.role}
          </li>
          <li className="inline-flex items-center gap-1.5">
            <MapPin aria-hidden="true" className="h-4 w-4" />
            Indonesia
          </li>
          <li>
            <a
              href={'mailto:' + PROFILE.email}
              className="inline-flex items-center gap-1.5 hover:text-primary"
            >
              <AtSign aria-hidden="true" className="h-4 w-4" />
              {PROFILE.email}
            </a>
          </li>
        </ul>

        <div className="mt-5 border-t border-border pt-4">
          <SocialLinks className="flex flex-wrap gap-2 [&_a:hover]:border-primary [&_a]:h-10 [&_a]:w-10 [&_a]:rounded-lg [&_a]:border [&_a]:border-border [&_svg]:h-[18px] [&_svg]:w-[18px]" />
        </div>
      </div>
    </section>
  )
}
