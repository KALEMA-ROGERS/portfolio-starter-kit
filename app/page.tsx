import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl tracking-tighter">
        Hello Everyone! I'm
      </h1>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Kalema Rogers
      </h1>
      <p className="mb-4">
        {`I specialize in creating AI-powered solutions, developing chatbots,
         RAG systems, custom AI agents, and deploying machine learning models,
          and Web technologies.`}
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}
