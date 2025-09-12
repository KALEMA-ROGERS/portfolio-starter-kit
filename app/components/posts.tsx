import Link from 'next/link'
import { formatDate, getBlogPosts } from '../blog/utils'

export function BlogPosts({ cardMode = false }: { cardMode?: boolean }) {
  let allBlogs = getBlogPosts()

  const sortedBlogs = allBlogs.sort((a, b) => {
    if (new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)) {
      return -1
    }
    return 1
  })

  if (!cardMode) {
    return (
      <div>
        {sortedBlogs.map((post) => (
          <Link
            key={post.slug}
            className="flex flex-col space-y-1 mb-4"
            href={`/blog/${post.slug}`}
          >
            <div className="w-full flex flex-col md:flex-row space-x-0 md:space-x-2">
              <p className="text-neutral-600 dark:text-neutral-400 w-[100px] tabular-nums">
                {formatDate(post.metadata.publishedAt, false)}
              </p>
              <p className="text-neutral-900 dark:text-neutral-100 tracking-tight">
                {post.metadata.title}
              </p>
            </div>
          </Link>
        ))}
      </div>
    )
  }

  // Card mode for attractive blog post cards
   return (
    <>
      {sortedBlogs.map((post) => (
        <Link
          key={post.slug}
          href={`/blog/${post.slug}`}
          className="group bg-white dark:bg-neutral-900 rounded-2xl border border-neutral-200 dark:border-neutral-800 shadow hover:shadow-lg hover:scale-[1.03] transition-all duration-300 flex flex-col overflow-hidden"
        >
          {post.metadata.image && (
            <img src={post.metadata.image} alt={post.metadata.title} className="w-full h-40 object-cover rounded-t-2xl" />
          )}
          <div className="p-6 flex flex-col flex-1">
            <span className="text-xs text-blue-600 dark:text-blue-400 font-semibold mb-2">{formatDate(post.metadata.publishedAt, false)}</span>
            <h3 className="text-xl font-bold text-neutral-900 dark:text-neutral-100 mb-2 group-hover:text-blue-700 dark:group-hover:text-blue-400 transition-colors">{post.metadata.title}</h3>
            <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-4 line-clamp-3">{post.metadata.summary}</p>
            <span className="mt-auto text-blue-600 dark:text-blue-400 font-semibold group-hover:underline">Read More</span>
          </div>
        </Link>
      ))}
    </>
  ) 
}