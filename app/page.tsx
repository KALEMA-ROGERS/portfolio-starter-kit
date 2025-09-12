import Link from 'next/link';
import { BlogPosts } from './components/posts'
//import { Testimonials } from './components/testimonials'


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
          Full Stack Developer & AI/ML Engineer focused on building AI-powered software and systems,
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
        <div className="grid md:grid-cols-2 gap-8">
          {[{
              title: "AI Chat Assistant",
              description: "Built a sophisticated AI chatbot with RAG capabilities, supporting multiple LLM providers and real-time streaming responses.",
              image: "https://img.freepik.com/premium-vector/chat-bot-vector-logo-design-concept_418020-241.jpg",
              features: [
                "Multi-LLM Integration (GPT-4, Claude, Gemini)",
                "Real-time WebSocket streaming",
                "Advanced RAG with vector search",
                "Custom prompt engineering"
              ],
              tech: ["Streamlit", "FastAPI", "ChromaDB", "OpenAI"],
              link: "#"
            },
            {
              title: "Booking Appointment App",
              description: "Developed a web based booking appointment application that allows patients to make and schedule appointments with the hospital, & for the hospital to manage appointment schedules with ease.",
              image: "https://medic-frontend.onrender.com/assets/logo-CEnDz-a2.png",
              features: [
                "Streanlined appointment booking",
                "Improved patient engagement",
                "Clear information dissemination",
                "User-friendly interface"
              ],
              tech: ["React", "Express", "MongoDB", "Node js", "JaveScript"],
              link: "https://medic-frontend.onrender.com/"
            },
            {
              title: "Data Analytics Dashboard",
              description: "Created an interactive dashboard for business intelligence with predictive analytics and automated reporting.",
              image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/d3js/d3js-original.svg",
              features: [
                "Interactive visualizations",
                "Predictive modeling",
                "Automated reports",
                "Real-time data processing"
              ],
              tech: ["React", "Python", "PostgreSQL", "D3.js"],
              link: "#"
            },
            {
              title: "AI Workflow Automation",
              description: "Developed an AI-powered workflow automation system that processes documents and triggers actions based on content analysis.",
              image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
              features: [
                "Document processing",
                "NLP-based classification",
                "Workflow orchestration",
                "Integration APIs"
              ],
              tech: ["Streamlit", "LangChain", "ChromaDB", "Zapier", "Python", "OpenAI"],
              link: "#"
            }
          ].map((project, index) => (
            <div key={index} className="relative p-6 rounded-3xl border border-neutral-200 dark:border-neutral-800 bg-gradient-to-br from-blue-50 to-purple-100 dark:from-blue-950/30 dark:to-purple-950/30 shadow-lg hover:shadow-2xl hover:scale-[1.03] transition-all duration-300 flex flex-col">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 rounded-2xl flex items-center justify-center bg-white dark:bg-neutral-900 shadow-lg">
                  <img src={project.image} alt={project.title + ' logo'} className="w-12 h-12 object-contain" />
                </div>
                <h3 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100">{project.title}</h3>
              </div>
              <p className="text-neutral-700 dark:text-neutral-300 mb-4 leading-relaxed">{project.description}</p>
              <div className="mb-4">
                <h4 className="font-semibold mb-2 text-blue-700 dark:text-blue-300">Key Features:</h4>
                <ul className="flex flex-wrap gap-2">
                  {project.features.map((feature, idx) => (
                    <li key={idx} className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full text-xs font-medium shadow">{feature}</li>
                  ))}
                </ul>
              </div>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, idx) => (
                  <span key={idx} className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300 rounded-full text-xs font-semibold shadow">{tech}</span>
                ))}
              </div>
              <a href={project.link} className="mt-auto inline-block px-6 py-2 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold shadow hover:scale-105 transition-all duration-300">View Project</a>
              <span className="absolute inset-0 rounded-3xl pointer-events-none" style={{boxShadow: '0 0 32px 0 rgba(59,130,246,0.10)'}}></span>
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
        
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-5">
          {[
            { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
            { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
            { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
            { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
            { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
            { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
            { name: "FastAPI", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg" },
            { name: "Django", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg" },
            { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
            { name: "AWS", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" },
            { name: "Azure", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg" },
            { name: "OpenAI", icon: "https://www.bing.com/images/search?view=detailV2&ccid=os%2bmIevd&id=C68C642C463E4A8206C19F730502E20429C8AD4D&thid=OIP.os-mIevdcbSaegyhFvNfxwHaHa&mediaurl=https%3a%2f%2fvectorseek.com%2fwp-content%2fuploads%2f2023%2f02%2fOpenAI-Logo-Vector.jpg&cdnurl=https%3a%2f%2fth.bing.com%2fth%2fid%2fR.a2cfa621ebdd71b49a7a0ca116f35fc7%3frik%3dTa3IKQTiAgVznw%26pid%3dImgRaw%26r%3d0&exph=1000&expw=1000&q=openai+logo&FORM=IRPRST&ck=B9C118FF3D1E4A20044DBFFAD3E86811&selectedIndex=1&itb=0"},
            { name: "LangChain", icon: "https://avatars.githubusercontent.com/u/139019536?s=200&v=4" },
            { name: "Pinecone", icon: "https://avatars.githubusercontent.com/u/78167460?s=200&v=4" },
            { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
            { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
            { name: "TensorFlow", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg" },
            { name: "PyTorch", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg" },
            { name: "Scikit-learn", icon: "https://www.bing.com/ck/a?!&&p=e206abc66015c7c873e8e47dede4c3ce595c1ec3fa936c8363bf60976b4af607JmltdHM9MTc1NzQ2MjQwMA&ptn=3&ver=2&hsh=4&fclid=1e5be66e-5390-6b72-326b-f02c52126ab7&u=a1L2ltYWdlcy9zZWFyY2g_cT1TY2lraXQtbGVhcm4lMjBsb2dvJkZPUk09SVFGUkJBJmlkPTAwRjlDRjcyRDUzMDMxQUZFRTIyMkNBQjBEOTI0ODUzMzBDRTcwNDk" },
            { name: "Pandas", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg" },
            { name: "NumPy", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg" },
            { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
            { name: "Vercel", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg" },
            { name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
            { name: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
            { name: "Redis", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg" },
            { name: "Solidity", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/solidity/solidity-original.svg" },
            { name: "DeepLearning.AI", icon: "https://avatars.githubusercontent.com/u/40403612?s=200&v=4" },
          ].map((skill, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center p-4 rounded-3xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 group relative"
              style={{ boxShadow: '0 4px 24px 0 rgba(59,130,246,0.08), 0 1.5px 8px 0 rgba(168,139,250,0.08)' }}
            >
              <div className="w-14 h-14 flex items-center justify-center rounded-full mb-2 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900 group-hover:from-blue-200 group-hover:to-purple-200 transition-all duration-300 shadow-lg">
                <img src={skill.icon} alt={skill.name + ' icon'} className="w-10 h-10 object-contain group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300" />
              </div>
              <span className="text-sm font-semibold text-neutral-800 dark:text-neutral-200 text-center group-hover:text-blue-700 dark:group-hover:text-blue-300 transition-colors">{skill.name}</span>
              <span className="absolute inset-0 rounded-3xl pointer-events-none" style={{boxShadow: '0 0 32px 0 rgba(59,130,246,0.10)'}}></span>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials Section (commented out) */}
      {/**
      <section className="space-y-12">
        <Testimonials />
      </section>
      */}

      {/* About Section */}
      <section className="space-y-12">
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-2 accent-title">About Me</h2>
          <div className="accent-underline"></div>
        </div>
        <div className="max-w-3xl mx-auto">
          <div className="relative p-8 rounded-3xl border border-neutral-200 dark:border-neutral-800 bg-gradient-to-br from-blue-50 to-purple-100 dark:from-blue-950/30 dark:to-purple-950/30 shadow-lg flex flex-col items-center">
              <img src="/DSC_3472.JPG" alt="Kalema Rogers Avatar" className="w-28 h-28 rounded-full border-4 border-blue-500 shadow-lg mb-4 object-cover bg-white" />
            <h3 className="text-2xl font-bold mb-2 text-neutral-900 dark:text-neutral-100">Kalema Rogers</h3>
            <p className="text-lg font-medium text-blue-700 dark:text-blue-300 mb-2">Full Stack Developer & AI/ML Engineer</p>
            <p className="text-base text-neutral-700 dark:text-neutral-300 leading-relaxed mb-4 text-center">
              I have 2 years of experience building AI‑powered software — chatbots, agentic systems (MCP/voice), RAG pipelines, and fine‑tuned LLM solutions and delivering them end‑to‑end with modern web stacks. Based in Kampala, Central-Region, Uganda. I love shipping practical, scalable AI products that solve real problems.
            </p>
            <div className="flex gap-4 justify-center mt-2">
              <a href="mailto:rogerskalema0@gmail.com" className="inline-flex items-center px-4 py-2 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold shadow hover:scale-105 transition">Email</a>
              <a href="https://www.linkedin.com/in/kalema-rogers-a1b9302ba" target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-4 py-2 rounded-xl border border-blue-500 text-blue-700 dark:text-blue-300 font-semibold shadow hover:bg-blue-50 dark:hover:bg-blue-900 transition">LinkedIn</a>
              <a href="https://github.com/KALEMA-ROGERS" target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-4 py-2 rounded-xl border border-neutral-300 text-neutral-700 dark:text-neutral-300 font-semibold shadow hover:bg-neutral-100 dark:hover:bg-neutral-800 transition">GitHub</a>
              <a href="https://lablab.ai/u/@Kalema_Rogers256" target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-4 py-2 rounded-xl border border-pink-400 text-pink-600 dark:text-pink-300 font-semibold shadow hover:bg-pink-50 dark:hover:bg-pink-900 transition">LabLab.ai</a>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="space-y-12 center max-w-5xl mx-auto">
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-2 accent-title">Latest Blog Posts</h2>
          <div className="accent-underline"></div>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <BlogPosts cardMode />
        </div>
      </section>
    </div>
  );
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