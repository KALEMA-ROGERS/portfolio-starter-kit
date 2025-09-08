import { BlogPosts } from 'app/components/posts'

export const metadata = {
  title: 'Featured Projects',
  description: 'Explore my featured AI/ML projects and case studies.',
}

const featuredProjects = [
  {
    title: "Screenshot-to-Code",
    description: "I enabled the AI to accurately recognize and understand UI components from screenshots. I made sure the generated code is clean and supports multiple stacks like HTML, Tailwind, and React. I integrated both GPT-4o and Claude Sonnet 3.7, so users can switch and compare results easily. I implemented WebSocket streaming so users see results in real-time as code is generated.",
    features: [
      "AI-powered UI component recognition",
      "Multi-stack code generation (HTML, Tailwind, React)",
      "Dual LLM integration (GPT-4o & Claude Sonnet 3.7)",
      "Real-time WebSocket streaming"
    ],
    tech: ["Next.js", "OpenAI API", "Anthropic API", "WebSocket", "Tailwind CSS"],
    gradient: "from-blue-500 to-cyan-600",
    status: "Live"
  },
  {
    title: "Mochii AI",
    description: "Multimodal AI Models: Access to advanced models including GPT-4o, Claude 3.7 Sonnet, Gemini 2.0 Flash, DeepSeek R1, and O3 Mini, enabling a wide range of capabilities from text generation to image and video understanding. Smart AI Conversations: Engage in intelligent dialogues with AI assistants tailored for various tasks such as writing, coding, and data analysis.",
    features: [
      "Multimodal AI model access",
      "Intelligent conversation system",
      "PDF and image analysis",
      "Deep research capabilities"
    ],
    tech: ["React", "Node.js", "OpenAI", "Anthropic", "Google AI"],
    gradient: "from-purple-500 to-pink-600",
    status: "Live"
  },
  {
    title: "SenseTask",
    description: "SenseTask is an AI-powered platform designed to automate document processing and workflow management, streamlining tasks such as invoice handling, contract management, and receipt processing. By leveraging advanced Optical Character Recognition (OCR) and machine learning, SenseTask enables businesses to extract, validate, and organize data from various document types with high accuracy.",
    features: [
      "Document processing automation",
      "Advanced OCR capabilities",
      "Workflow management",
      "Data validation and organization"
    ],
    tech: ["Python", "FastAPI", "OpenCV", "Tesseract", "MongoDB"],
    gradient: "from-emerald-500 to-teal-600",
    status: "In Development"
  },
  {
    title: "Miniflow AI",
    description: "Next.js: For building dynamic and responsive user interfaces, particularly the visual workflow editor. Styled Components: For styling components and ensuring a modern, clean design. NestJS: For building scalable and efficient server-side applications. RabbitMQ: For managing background tasks and ensuring smooth execution of workflows.",
    features: [
      "Visual workflow editor",
      "Background task management",
      "Scalable server architecture",
      "Modern UI/UX design"
    ],
    tech: ["Next.js", "NestJS", "RabbitMQ", "Styled Components", "PostgreSQL"],
    gradient: "from-amber-500 to-orange-600",
    status: "Live"
  },
  {
    title: "Lunacal",
    description: "Google Calendar API, Outlook Calendar API, Apple Calendar API: For syncing user availability and appointments with external calendar platforms. Zapier: For automating workflows and connecting LunaCal.ai with other third-party applications like payment systems and email clients. Natural Language Processing (NLP): For processing user inputs when they book or inquire about appointments.",
    features: [
      "Multi-platform calendar sync",
      "Workflow automation",
      "Natural language processing",
      "Automated scheduling algorithms"
    ],
    tech: ["React", "Node.js", "Google Calendar API", "Zapier", "NLP"],
    gradient: "from-indigo-500 to-blue-600",
    status: "Live"
  }
];

export default function Page() {
  return (
    <section className="max-w-6xl mx-auto space-y-16">
      {/* Header Section */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight bg-gradient-to-r from-neutral-900 via-neutral-700 to-neutral-900 dark:from-neutral-100 dark:via-neutral-300 dark:to-neutral-100 bg-clip-text text-transparent">
          Featured Projects
        </h1>
        <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto"></div>
        <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto leading-relaxed">
          Explore my featured AI/ML projects that showcase innovative solutions and cutting-edge technology implementations.
        </p>
      </div>

      {/* Featured Projects Grid */}
      <div className="grid gap-8 md:gap-10">
        {featuredProjects.map((project, idx) => (
          <div 
            key={idx} 
            className="group relative bg-white dark:bg-neutral-900 rounded-2xl border border-neutral-200 dark:border-neutral-800 hover:border-neutral-300 dark:hover:border-neutral-700 transition-all duration-500 hover:shadow-2xl dark:hover:shadow-2xl/20 hover:-translate-y-2"
          >
            {/* Project Card */}
            <div className="p-8 md:p-10">
              {/* Header */}
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${project.gradient}`}></div>
                    <span className={`text-sm font-medium uppercase tracking-wide px-3 py-1 rounded-full ${
                      project.status === 'Live' 
                        ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400'
                        : 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400'
                    }`}>
                      {project.status}
                    </span>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 dark:text-neutral-100 group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                    {project.title}
                  </h2>
                </div>
              </div>

              {/* Description */}
              <p className="text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed mb-6">
                {project.description}
              </p>

              {/* Features */}
              <div className="mb-6">
                <h3 className="text-sm font-semibold text-neutral-800 dark:text-neutral-200 mb-4 uppercase tracking-wide">
                  Key Features
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {project.features.map((feature, featureIdx) => (
                    <div key={feature} className="flex items-center gap-2">
                      <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${project.gradient}`}></div>
                      <span className="text-sm text-neutral-600 dark:text-neutral-400">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tech Stack */}
              <div className="mb-8">
                <h3 className="text-sm font-semibold text-neutral-800 dark:text-neutral-200 mb-4 uppercase tracking-wide">
                  Technologies Used
                </h3>
                <div className="flex flex-wrap gap-3">
                  {project.tech.map((tech, techIdx) => (
                    <span 
                      key={tech} 
                      className="inline-flex items-center px-4 py-2 rounded-xl text-sm font-medium bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors duration-200 border border-neutral-200 dark:border-neutral-700"
                      style={{ animationDelay: `${techIdx * 100}ms` }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div className="flex items-center justify-between">
                <a
                  href="/contact"
                  className="group/btn inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-xl transition-all duration-200 hover:scale-105 hover:shadow-lg"
                >
                  <span>Learn More</span>
                  <svg className="w-4 h-4 transition-transform duration-200 group-hover/btn:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </a>

                {/* Project Number */}
                <div className="text-6xl font-bold text-neutral-100 dark:text-neutral-800 select-none">
                  {String(idx + 1).padStart(2, '0')}
                </div>
              </div>
            </div>

            {/* Hover Gradient Overlay */}
            <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-500`}></div>
          </div>
        ))}
      </div>

      {/* Blog Posts Section */}
      <div className="space-y-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">Latest Blog Posts</h2>
          <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
            Stay updated with my latest thoughts on AI development, machine learning insights, and technology trends.
          </p>
        </div>
        <BlogPosts />
      </div>

      {/* Call to Action */}
      <div className="text-center bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950/30 dark:to-purple-950/30 rounded-2xl p-8 border border-blue-100 dark:border-blue-900/30">
        <h2 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100 mb-4">
          Interested in Similar Solutions?
        </h2>
        <p className="text-neutral-600 dark:text-neutral-400 mb-6 max-w-2xl mx-auto">
          Let's discuss how I can help you build similar AI-powered solutions for your business. 
          From concept to deployment, I'm here to bring your ideas to life.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a 
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-3 rounded-xl font-semibold
                       bg-gradient-to-r from-blue-600 to-purple-600 text-white
                       hover:from-blue-700 hover:to-purple-700 
                       transform hover:scale-105 transition-all duration-200
                       shadow-lg hover:shadow-xl"
          >
            Start a Project
            <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
          <a 
            href="https://github.com/KALEMA-ROGERS"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-3 rounded-xl font-semibold
                       border-2 border-neutral-300 dark:border-neutral-700 text-neutral-700 dark:text-neutral-300
                       hover:border-neutral-400 dark:hover:border-neutral-600 hover:bg-white dark:hover:bg-neutral-800
                       transition-all duration-200"
          >
            View All on GitHub
          </a>
        </div>
      </div>
    </section>
  )
}
