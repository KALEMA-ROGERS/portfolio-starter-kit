import Link from 'next/link'
import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <div className="space-y-20">
      {/* Hero Section */}
      <section className="text-center space-y-6">
        <div className="space-y-4">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight gradient-text">
            Hello Everyone! I'm
          </h1>
          <h2 className="text-5xl md:text-7xl font-bold tracking-tight">
            Kalema Rogers
          </h2>
        </div>
        <p className="text-xl md:text-2xl text-neutral-600 dark:text-neutral-400 max-w-4xl mx-auto leading-relaxed">
          Full Stack Developer & AI/ML Engineer focused on building AI-powered software and systems —
          from intelligent chatbots and RAG pipelines to custom AI agents and production ML deployments.
        </p>
        <div className="flex justify-center space-x-4 pt-6">
          <Link href="/contact" className="btn-primary" aria-label="Get In Touch">
            Get In Touch
          </Link>
          <Link href="/projects" className="btn-outline" aria-label="View Projects">
            View Projects
          </Link>
        </div>
      </section>

      {/* Services Section */}
      <section className="space-y-12">
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-2 accent-title">My Services</h2>
          <div className="accent-underline"></div>
          <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
            Don't miss out on the latest insights about AI development, Machine Learning solutions, and cutting-edge technology trends...
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { title: "AI & ML Solutions", description: "Build intelligent systems using MCP, agentic AI, fine-tuned models, and computer vision to solve real-world problems across multiple industries.", icon: "ai", gradient: "from-blue-500 to-cyan-600" },
            { title: "GenAI & Prompts", description: "Design LLM-based applications with advanced prompt engineering and fine-tuning for content generation, chat systems, and enterprise AI workflows.", icon: "brain", gradient: "from-purple-500 to-pink-600" },
            { title: "Domain Applications", description: "Deliver AI solutions in healthcare, e-commerce, entertainment, and finance, tailored to each industry's unique challenges and use cases.", icon: "target", gradient: "from-emerald-500 to-teal-600" },
            { title: "Data & Analytics", description: "Extract actionable insights and forecast trends from large datasets using machine learning, statistical modeling, and predictive algorithms.", icon: "chart", gradient: "from-rose-500 to-red-600" },
            { title: "AI Automation", description: "Develop autonomous AI agents that plan, reason, and interact across complex workflows to streamline operations and boost productivity.", icon: "bolt", gradient: "from-amber-500 to-orange-600" },
            { title: "AI Infrastructure", description: "Deploy scalable, cloud-integrated AI systems using Docker, FastAPI, and cloud platforms like AWS and GCP for real-time, production-grade performance.", icon: "cloud", gradient: "from-indigo-500 to-blue-600" }
          ].map((service, index) => (
            <div key={index} className="p-6 bg-white dark:bg-neutral-900 rounded-2xl border border-neutral-200 dark:border-neutral-800 hover:shadow-lg hover:scale-105 transition-all duration-300">
              <div className={`flex items-center justify-center w-12 h-12 rounded-xl mb-4 bg-gradient-to-r ${service.gradient}`}>
                <HomeIcon name={service.icon} />
              </div>
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="space-y-12">
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-2 accent-title">Featured Projects</h2>
          <div className="accent-underline"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {[
            {
              title: "AI Chat Assistant",
              description: "Built a sophisticated AI chatbot with RAG capabilities, supporting multiple LLM providers and real-time streaming responses.",
              features: [
                "Multi-LLM Integration (GPT-4, Claude, Gemini)",
                "Real-time WebSocket streaming",
                "Advanced RAG with vector search",
                "Custom prompt engineering"
              ],
              tech: ["Next.js", "FastAPI", "Pinecone", "OpenAI"]
            },
            {
              title: "ML Model Deployment",
              description: "Deployed a computer vision model for image classification with automated scaling and monitoring.",
              features: [
                "Docker containerization",
                "Auto-scaling infrastructure",
                "Real-time monitoring",
                "RESTful API endpoints"
              ],
              tech: ["Python", "Docker", "AWS", "TensorFlow"]
            },
            {
              title: "Data Analytics Dashboard",
              description: "Created an interactive dashboard for business intelligence with predictive analytics and automated reporting.",
              features: [
                "Interactive visualizations",
                "Predictive modeling",
                "Automated reports",
                "Real-time data processing"
              ],
              tech: ["React", "Python", "PostgreSQL", "D3.js"]
            },
            {
              title: "AI Workflow Automation",
              description: "Developed an AI-powered workflow automation system that processes documents and triggers actions based on content analysis.",
              features: [
                "Document processing",
                "NLP-based classification",
                "Workflow orchestration",
                "Integration APIs"
              ],
              tech: ["Node.js", "LangChain", "MongoDB", "Zapier"]
            }
          ].map((project, index) => (
            <div key={index} className="p-6 bg-white dark:bg-neutral-900 rounded-2xl border border-neutral-200 dark:border-neutral-800 hover:shadow-lg transition-all duration-300">
              <h3 className="text-2xl font-semibold mb-3">{project.title}</h3>
              <p className="text-neutral-600 dark:text-neutral-400 mb-4 leading-relaxed">{project.description}</p>
              
              <div className="mb-4">
                <h4 className="font-semibold mb-2">Key Features:</h4>
                <ul className="list-disc list-inside space-y-1 text-sm text-neutral-600 dark:text-neutral-400">
                  {project.features.map((feature, idx) => (
                    <li key={idx}>{feature}</li>
                  ))}
                </ul>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, idx) => (
                  <span key={idx} className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full text-sm font-medium">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Skills Section */}
      <section className="space-y-12">
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-2 accent-title">My Skills</h2>
          <div className="accent-underline"></div>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3">
          {[
            "Python", "JavaScript", "TypeScript", "React", "Next.js", "Node.js",
            "FastAPI", "Django", "Docker", "AWS", "Azure",
            "OpenAI", "LangChain", "Pinecone", "MongoDB", "PostgreSQL",
            "TensorFlow", "PyTorch", "Scikit-learn", "Pandas", "NumPy"
          ].map((skill, index) => (
            <span key={index} className="inline-flex items-center justify-center px-4 py-2 rounded-full bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-neutral-800 dark:text-neutral-200 text-sm font-medium hover:bg-white dark:hover:bg-neutral-800 hover:shadow-sm">
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section className="space-y-12">
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-2 accent-title">About Me</h2>
          <div className="accent-underline"></div>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="p-8 bg-white dark:bg-neutral-900 rounded-2xl border border-neutral-200 dark:border-neutral-800">
            <h3 className="text-2xl font-semibold mb-4">Kalema Rogers | Full Stack Developer & AI/ML Engineer</h3>
            <p className="text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed mb-6">
              I have 2 years of experience building AI‑powered software — chatbots, agentic systems (MCP/voice),
              RAG pipelines, and fine‑tuned LLM solutions — and delivering them end‑to‑end with modern web stacks.
              Based in Kampala, Uganda. I love shipping practical, scalable AI products that solve real problems.
            </p>
            <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
              Contact: <a className="underline decoration-dotted" href="mailto:rogerskalema0@gmail.com">rogerskalema0@gmail.com</a> ·
              <a className="underline decoration-dotted ml-2" href="https://www.linkedin.com/in/kalema-rogers-a1b9302ba" target="_blank" rel="noopener noreferrer">LinkedIn</a> ·
              <a className="underline decoration-dotted ml-2" href="https://github.com/KALEMA-ROGERS" target="_blank" rel="noopener noreferrer">GitHub</a> ·
              <a className="underline decoration-dotted ml-2" href="https://lablab.ai/u/@Kalema_Rogers256" target="_blank" rel="noopener noreferrer">LabLab</a>
            </p>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="space-y-12">
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-4">Latest Blog Posts</h2>
        </div>
        <div className="my-8">
          <BlogPosts />
        </div>
      </section>
    </div>
  )
}

function HomeIcon({ name }: { name: string }) {
  const common = 'w-7 h-7 text-white';
  switch (name) {
    case 'ai':
      return (
        <svg className={common} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
          <path d="M12 2a3 3 0 013 3v1h1a3 3 0 010 6h-1v1h1a3 3 0 010 6h-1v1a3 3 0 11-6 0v-1H9a3 3 0 010-6h1v-1H9a3 3 0 010-6h1V5a3 3 0 013-3zm-1 9v2h2v-2h-2z"/>
        </svg>
      )
    case 'brain':
      return (
        <svg className={common} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
          <path d="M7.5 3A3.5 3.5 0 004 6.5c0 .39.07.76.2 1.1A3.49 3.49 0 003 10a3.5 3.5 0 003.5 3.5H7v.5A3.5 3.5 0 0010.5 17H11v1a3 3 0 106 0v-1h.5A3.5 3.5 0 0021 13.5c0-1.26-.67-2.36-1.67-2.96.1-.33.17-.7.17-1.04A3.5 3.5 0 0016 6.5c0-.28-.03-.55-.1-.8A3.5 3.5 0 0012.5 2 3.5 3.5 0 009 4.9 3.49 3.49 0 007.5 3z"/>
        </svg>
      )
    case 'target':
      return (
        <svg className={common} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
          <path d="M12 2a10 10 0 1010 10h-2A8 8 0 1112 4V2zm1 9.268l3.536-3.536 1.414 1.414L14.414 12l3.536 3.536-1.414 1.414L13 13.414 9.464 16.95 8.05 15.536 11.586 12 8.05 8.464 9.464 7.05 13 10.586z"/>
        </svg>
      )
    case 'chart':
      return (
        <svg className={common} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
          <path d="M3 3h2v18H3V3zm16 18h2V9h-2v12zM11 21h2V5h-2v16z"/>
        </svg>
      )
    case 'bolt':
      return (
        <svg className={common} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
          <path d="M13 2L3 14h7l-1 8 10-12h-7l1-8z"/>
        </svg>
      )
    case 'cloud':
      return (
        <svg className={common} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
          <path d="M6 19a5 5 0 01.62-9.97A7 7 0 1118 18H7a1 1 0 01-1-1z"/>
        </svg>
      )
    default:
      return (
        <svg className={common} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
          <circle cx="12" cy="12" r="8"/>
        </svg>
      )
  }
}
