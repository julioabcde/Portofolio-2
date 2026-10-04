import type { Metadata } from 'next'
import Image from 'next/image'
import Footer from '@/components/layout/Footer'
import MobileShell from '@/components/layout/MobileShell'
import { BLOG_POSTS, type BlogPost } from '@/lib/data/blog'
import { PROFILE } from '@/lib/data/profile'

export const metadata: Metadata = {
  title: 'Blog · Julio',
  description: 'Notes and articles by Julio.',
}

function PostBody({ post }: { post: BlogPost }) {
  return (
    <>
      <span className="min-w-0 flex-1">
        <span className="mb-2.5 flex items-center gap-2 text-[13px]">
          <span className="relative h-5 w-5 shrink-0 overflow-hidden rounded-full border border-border bg-[#F1E4D3]">
            <Image src={PROFILE.portrait} alt="" fill sizes="20px" className="object-cover" />
          </span>
          <span>{PROFILE.name}</span>
          <span aria-hidden="true" className="text-muted">·</span>
          <span className="font-mono text-xs text-muted">{post.date}</span>
        </span>
        <span className="mb-1.5 line-clamp-2 font-display text-lg font-semibold leading-snug group-hover:text-primary">
          {post.title}
        </span>
        <span className="line-clamp-3 text-sm leading-relaxed text-muted">{post.excerpt}</span>
      </span>
      <span className="relative mt-7 h-[68px] w-[104px] shrink-0 overflow-hidden rounded-lg border border-border bg-[var(--color-background-secondary)] sm:h-[84px] sm:w-32">
        {post.cover ? (
          <Image src={post.cover} alt="" fill sizes="128px" className="object-cover" />
        ) : (
          <span aria-hidden="true" className="hatch absolute inset-0 opacity-60" />
        )}
      </span>
    </>
  )
}

export default function BlogPage() {
  const row = 'group flex items-start gap-4 px-4 py-5 sm:px-6'
  return (
    <>
      <main>
        <MobileShell>
          <section aria-labelledby="blog-heading" className="border-b border-border">
            <h2 id="blog-heading" className="sr-only">
              Blog
            </h2>
            {BLOG_POSTS.length === 0 ? (
              <p className="px-4 py-10 text-center text-sm text-muted">No posts yet.</p>
            ) : (
              <ul>
                {BLOG_POSTS.map((post) => (
                  <li key={post.title} className="border-b border-border last:border-b-0">
                    {post.href ? (
                      <a
                        href={post.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={row + ' transition-colors hover:bg-[rgba(10,9,8,0.03)]'}
                      >
                        <PostBody post={post} />
                      </a>
                    ) : (
                      <article className={row}>
                        <PostBody post={post} />
                      </article>
                    )}
                  </li>
                ))}
              </ul>
            )}
          </section>
        </MobileShell>
      </main>
      <Footer />
    </>
  )
}
