// TODO: dummy entries — replace with real posts. href = where the post lives (e.g. Medium),
// cover = optional thumbnail path in /public.
export type BlogPost = {
  title: string
  excerpt: string
  date: string
  href?: string
  cover?: string
}

export const BLOG_POSTS: BlogPost[] = [
  {
    title: 'Blog post title placeholder',
    excerpt:
      'A short excerpt of the post goes here. Two or three lines are enough to tell readers what the post covers.',
    date: 'Sep 2026',
  },
  {
    title: 'Another blog post placeholder',
    excerpt:
      'Replace these entries in lib/data/blog.ts with the posts you have written.',
    date: 'Aug 2026',
  },
]
