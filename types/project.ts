export interface Project {
  id: string
  title: string
  description: string
  image: string | null
  tags: string[]
  liveUrl?: string
  repoUrl?: string
  featured?: boolean
}
