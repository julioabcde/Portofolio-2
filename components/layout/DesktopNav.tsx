import NavLinks, { type NavLink } from './NavLinks'
export default function DesktopNav({
  links,
  activeId,
}: {
  links: NavLink[]
  activeId: string
}) {
  return (
    <NavLinks links={links} activeId={activeId} className="hidden lg:flex" />
  )
}
