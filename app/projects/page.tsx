const services = [
  {
    title: 'AI & ML Solutions',
    description: 'Build intelligent systems using MCP, agentic AI, fine-tuned models, and computer vision to solve real-world problems across multiple industries.',
    icon: 'ai',
    features: ['Custom AI Model Development', 'Computer Vision Solutions', 'Predictive Analytics', 'Intelligent Automation'],
    tech: ['Python', 'TensorFlow', 'PyTorch', 'OpenCV', 'Scikit-learn'],
    gradient: 'from-blue-500 to-cyan-600'
  },
  {
    title: 'GenAI & Prompt Engineering',
    description: 'Design LLM-based applications with advanced prompt engineering and fine-tuning for content generation, chat systems, and enterprise AI workflows.',
    icon: 'brain',
    features: ['Advanced Prompt Engineering', 'LLM Fine-tuning', 'Content Generation', 'Chat System Development'],
    tech: ['OpenAI API', 'Anthropic Claude', 'LangChain', 'Hugging Face', 'Transformers'],
    gradient: 'from-purple-500 to-pink-600'
  },
  {
    title: 'RAG Systems & Vector Databases',
    description: 'Implement Retrieval-Augmented Generation systems with vector databases for enhanced AI applications and knowledge management.',
    icon: 'search',
    features: ['Vector Database Setup', 'Document Processing', 'Semantic Search', 'Knowledge Management'],
    tech: ['Pinecone', 'FAISS', 'Chroma', 'Weaviate', 'Elasticsearch'],
    gradient: 'from-emerald-500 to-teal-600'
  },
  {
    title: 'AI Chatbots & Voice Agents',
    description: 'Develop sophisticated chatbots and voice agents with natural language processing capabilities for customer service and automation.',
    icon: 'chat',
    features: ['Multi-modal Chatbots', 'Voice Integration', 'Natural Language Processing', 'Conversation Management'],
    tech: ['Botpress', 'Voiceflow', 'Retell AI', 'WebRTC', 'Speech Recognition'],
    gradient: 'from-amber-500 to-orange-600'
  },
  {
    title: 'AI Infrastructure & Deployment',
    description: 'Deploy scalable, cloud-integrated AI systems using Docker, FastAPI, and cloud platforms for real-time, production-grade performance.',
    icon: 'cloud',
    features: ['Cloud Deployment', 'Container Orchestration', 'API Development', 'Monitoring & Scaling'],
    tech: ['Docker', 'Kubernetes', 'FastAPI', 'AWS', 'GCP', 'Azure'],
    gradient: 'from-indigo-500 to-blue-600'
  },
  {
    title: 'Data Analytics & Visualization',
    description: 'Extract actionable insights and forecast trends from large datasets using machine learning, statistical modeling, and predictive algorithms.',
    icon: 'chart',
    features: ['Data Pipeline Development', 'Statistical Analysis', 'Predictive Modeling', 'Interactive Dashboards'],
    tech: ['Pandas', 'NumPy', 'Matplotlib', 'Plotly', 'D3.js', 'Tableau'],
    gradient: 'from-rose-500 to-red-600'
  }
];

function ServiceIcon({ name }: { name: string }) {
  const common = 'w-10 h-10 text-white';
  switch (name) {
    case 'ai':
      return (
        <svg className={common} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
          <path d="M12 2a3 3 0 013 3v1h1a3 3 0 010 6h-1v1h1a3 3 0 010 6h-1v1a3 3 0 11-6 0v-1H9a3 3 0 010-6h1v-1H9a3 3 0 010-6h1V5a3 3 0 013-3zm-1 9v2h2v-2h-2z"/>
        </svg>
      );
    case 'brain':
      return (
        <svg className={common} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
          <path d="M7.5 3A3.5 3.5 0 004 6.5c0 .39.07.76.2 1.1A3.49 3.49 0 003 10a3.5 3.5 0 003.5 3.5H7v.5A3.5 3.5 0 0010.5 17H11v1a3 3 0 106 0v-1h.5A3.5 3.5 0 0021 13.5c0-1.26-.67-2.36-1.67-2.96.1-.33.17-.7.17-1.04A3.5 3.5 0 0016 6.5c0-.28-.03-.55-.1-.8A3.5 3.5 0 0012.5 2 3.5 3.5 0 009 4.9 3.49 3.49 0 007.5 3z"/>
        </svg>
      );
    case 'search':
      return (
        <svg className={common} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
          <path d="M10 2a8 8 0 105.293 14.293l4.707 4.707 1.414-1.414-4.707-4.707A8 8 0 0010 2zm0 2a6 6 0 110 12A6 6 0 0110 4z"/>
        </svg>
      );
    case 'chat':
      return (
        <svg className={common} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
          <path d="M4 3h16a2 2 0 012 2v9a2 2 0 01-2 2H9l-5 5v-5H4a2 2 0 01-2-2V5a2 2 0 012-2zm3 5h10v2H7V8zm0 4h7v2H7v-2z"/>
        </svg>
      );
    case 'cloud':
      return (
        <svg className={common} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
          <path d="M6 19a5 5 0 01.62-9.97A7 7 0 1118 18H7a1 1 0 01-1-1z"/>
        </svg>
      );
    case 'chart':
      return (
        <svg className={common} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
          <path d="M3 3h2v18H3V3zm16 18h2V9h-2v12zM11 21h2V5h-2v16z"/>
        </svg>
      );
    default:
      return (
        <svg className={common} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
          <circle cx="12" cy="12" r="8"/>
        </svg>
      );
  }
}

export default function ProjectsPage() {
  return (
    <section className="max-w-6xl mx-auto space-y-12">
      {/* Header Section */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight bg-gradient-to-r from-neutral-900 via-neutral-700 to-neutral-900 dark:from-neutral-100 dark:via-neutral-300 dark:to-neutral-100 bg-clip-text text-transparent">
          My Services
        </h1>
        <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto"></div>
        <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto leading-relaxed">
          Don't miss out on the latest insights about AI development, Machine Learning solutions, and cutting-edge technology trends...
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid gap-8 md:gap-10">
        {services.map((service, idx) => (
          <div 
            key={idx} 
            className="group relative bg-white dark:bg-neutral-900 rounded-2xl border border-neutral-200 dark:border-neutral-800 hover:border-neutral-300 dark:hover:border-neutral-700 transition-all duration-500 hover:shadow-2xl dark:hover:shadow-2xl/20 hover:-translate-y-2"
          >
            {/* Service Card */}
            <div className="p-8 md:p-10">
              {/* Header */}
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className={`flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-r ${service.gradient}`}>
                      <ServiceIcon name={service.icon} />
                    </div>
                    <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${service.gradient}`}></div>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 dark:text-neutral-100 group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                    {service.title}
                  </h2>
                </div>
              </div>

              {/* Description */}
              <p className="text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed mb-6">
                {service.description}
              </p>

              {/* Features */}
              <div className="mb-6">
                <h3 className="text-sm font-semibold text-neutral-800 dark:text-neutral-200 mb-4 uppercase tracking-wide">
                  Key Features
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {service.features.map((feature, featureIdx) => (
                    <div key={feature} className="flex items-center gap-2">
                      <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${service.gradient}`}></div>
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
                  {service.tech.map((tech, techIdx) => (
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
                  <span>Get Started</span>
                  <svg className="w-4 h-4 transition-transform duration-200 group-hover/btn:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </a>

                {/* Service Number */}
                <div className="text-6xl font-bold text-neutral-100 dark:text-neutral-800 select-none">
                  {String(idx + 1).padStart(2, '0')}
                </div>
              </div>
            </div>

            {/* Hover Gradient Overlay */}
            <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-500`}></div>
          </div>
        ))}
      </div>

      {/* Call to Action */}
      <div className="text-center bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950/30 dark:to-purple-950/30 rounded-2xl p-8 border border-blue-100 dark:border-blue-900/30">
        <h2 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100 mb-4">
          Ready to Transform Your Business with AI?
        </h2>
        <p className="text-neutral-600 dark:text-neutral-400 mb-6 max-w-2xl mx-auto">
          Let's discuss how AI can revolutionize your operations, enhance customer experiences, 
          and drive innovation in your industry. I'm here to help you navigate the AI landscape.
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
            Start Your AI Journey
            <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
          <a 
            href="https://www.linkedin.com/in/kalema-rogers-a1b9302ba"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-3 rounded-xl font-semibold
                       border-2 border-neutral-300 dark:border-neutral-700 text-neutral-700 dark:text-neutral-300
                       hover:border-neutral-400 dark:hover:border-neutral-600 hover:bg-white dark:hover:bg-neutral-800
                       transition-all duration-200"
          >
            Connect on LinkedIn
          </a>
        </div>
      </div>
    </section>
  )
}