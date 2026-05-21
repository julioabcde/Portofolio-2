export interface Project {
  id: string
  title: string
  description: string
  images?: string[]
  summary?: string
  type?: string
  impact?: string
  learnings?: string
  learningPoints?: string[]
  year?: string
  role?: string
  engagement?: string
  status?: string
  tags: string[]
  liveUrl?: string
  repoUrl?: string
}
