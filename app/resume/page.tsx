const experiences = [
  {
    title: "AI/ML Developer (BootCamp)",
    company: "African Talent Acadmey (AFTA) - Time Plage",
    period: "05/2025 - 09/2025",
    description: "Learnt & Built AI powered Systems with the current technologies that are required in development of an AI powered systems or softwares",
    achievements: [
      "AI-Powered Fintech Investment Intelligence",
      "Document RAG System",
      "Built Chat Bots",
      "Salary-Loan Calculator"
    ],
    tech: ["Python", "FastAPI", "OpenAI", "PostgreSQL", "Streamlit", "VectorDB's", "LangSmith", "LangChain & Langgraph", "etc"],
    gradient: "from-blue-500 to-cyan-600"
  },
  {
    title: "Internship Training",
    company: "Stratcom Communications and IT Solutions Ltd",
    period: "06/2024 - 08/2024",
    description: "Assisted in the implementation and upkeep of local networking hardware. Contributed in web application development, specifically for a micro finance system. Acquired hands-on IT support/system integration experience working under Stuart McCarthy Sebulime.",
    achievements: [
      "Networking & Systems Administration",
      "Cisco Practicals",
      "Pc Repair & Software Maintainance",
      "Web Apps Development"
    ],
    tech: ["Putty", "Django", "JavaScript", "MongoDB"],
    gradient: "from-purple-500 to-pink-600"
  },
  {
    title: "Ambassador",
    company: " AfriLead EduTourism Network - ALEN",
    period: "08/2024 - Present",
    description: "AfriLead EduTourism Network is not just an International Organisation; It's a dynamic Global Network transforming young leaders into empowered and connected change-makers. It connects individuals, institutions, and communities within Africa and the globe’s rich heritages, challenges, and limitless potential, creating immersive, action-oriented learning experiences that ignite lasting impact. By fostering collaboration, innovation, and sustainable development, It equips future leaders with the tools to address the world’s most urgent challenges like climate change, social inequality, unemployment, and educational gaps.",
    achievements: [
      "Actively promoting educational tourism and leadership development",
      "Advocating for innovative learning experiences across Africa",
      "Promoting ALEN's Mission, Vision in my Society, Country, and across the social media",
      "Engaging with young professionals to foster networking and skill-building opportunities"
    ],
    tech: ["Advertising it's activities", "Engagements with the community & changemakers", "Involvements in ALEN programes"],
    gradient: "from-emerald-500 to-teal-600"
  }
];

const education = [
  {
    degree: "BSc in Information Systems and Technology",
    institution: "Makerere University",
    period: "2022 - 2025",
    description: "Focused on software development, database management, and emerging technologies including AI and machine learning.",
    gradient: "from-amber-500 to-orange-600"
  }
];

const certifications = [
  {
    name: "AWS Machine Learning Specialty",
    issuer: "Amazon Web Services",
    date: "2024",
    gradient: "from-indigo-500 to-blue-600"
  },
  {
    name: "Google Cloud AI/ML Engineer",
    issuer: "Google Cloud",
    date: "2023",
    gradient: "from-green-500 to-emerald-600"
  },
  {
    name: "Deep Learning Specialization",
    issuer: "DeepLearning.AI",
    date: "2023",
    gradient: "from-purple-500 to-pink-600"
  }
];

export default function ResumePage() {
  return (
    <section className="max-w-6xl mx-auto space-y-16">
      {/* Header Section */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight bg-gradient-to-r from-neutral-900 via-neutral-700 to-neutral-900 dark:from-neutral-100 dark:via-neutral-300 dark:to-neutral-100 bg-clip-text text-transparent">
          My Experience
        </h1>
        <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto"></div>
        <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto leading-relaxed">
          Full Stack Developer & AI/ML Engineer with 2 years of experience building AI‑powered systems: chatbots, agentic AI, RAG, and production ML.
        </p>
      </div>

      {/* Download Resume */}
      <div className="text-center">
        <a
          href="/Kalema_Rogers_Resume.pdf"
          target="_blank"
          className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300"
          download
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
          Download Resume PDF
        </a>
      </div>

      {/* Experience Timeline */}
      <div className="space-y-12">
        <h2 className="text-3xl font-bold text-center mb-12">Professional Experience</h2>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500"></div>
          
          {experiences.map((exp, idx) => (
            <div key={idx} className="relative flex items-start space-x-8 mb-16">
              {/* Timeline dot */}
              <div className={`relative z-10 w-16 h-16 rounded-full bg-gradient-to-r ${exp.gradient} flex items-center justify-center text-white font-bold text-lg shadow-lg`}>
                {idx + 1}
              </div>
              
              {/* Content */}
              <div className="flex-1 bg-white dark:bg-neutral-900 rounded-2xl border border-neutral-200 dark:border-neutral-800 p-8 hover:shadow-lg transition-all duration-300">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100 mb-2">{exp.title}</h3>
                    <p className="text-lg text-blue-600 dark:text-blue-400 font-semibold">{exp.company}</p>
                  </div>
                  <span className="text-sm font-medium text-neutral-500 dark:text-neutral-400 bg-neutral-100 dark:bg-neutral-800 px-3 py-1 rounded-full">
                    {exp.period}
                  </span>
                </div>
                
                <p className="text-neutral-600 dark:text-neutral-400 mb-6 leading-relaxed">
                  {exp.description}
                </p>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-neutral-800 dark:text-neutral-200 mb-3">Key Achievements:</h4>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, achIdx) => (
                      <li key={achIdx} className="flex items-start gap-2">
                        <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${exp.gradient} mt-2 flex-shrink-0`}></div>
                        <span className="text-sm text-neutral-600 dark:text-neutral-400">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {exp.tech.map((tech, techIdx) => (
                    <span 
                      key={tech} 
                      className="px-3 py-1 bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Education Section */}
      <div className="space-y-8">
        <h2 className="text-3xl font-bold text-center mb-12">Education</h2>
        
        <div className="grid gap-8">
          {education.map((edu, idx) => (
            <div key={idx} className="bg-white dark:bg-neutral-900 rounded-2xl border border-neutral-200 dark:border-neutral-800 p-8 hover:shadow-lg transition-all duration-300">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100 mb-2">{edu.degree}</h3>
                  <p className="text-lg text-blue-600 dark:text-blue-400 font-semibold">{edu.institution}</p>
                </div>
                <span className="text-sm font-medium text-neutral-500 dark:text-neutral-400 bg-neutral-100 dark:bg-neutral-800 px-3 py-1 rounded-full">
                  {edu.period}
                </span>
              </div>
              <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">{edu.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Certifications Section */}
      <div className="space-y-8">
        <h2 className="text-3xl font-bold text-center mb-12">Certifications</h2>
        
        <div className="grid md:grid-cols-3 gap-6">
          {certifications.map((cert, idx) => (
            <div key={idx} className="bg-white dark:bg-neutral-900 rounded-2xl border border-neutral-200 dark:border-neutral-800 p-6 hover:shadow-lg transition-all duration-300 text-center">
              <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${cert.gradient} mx-auto mb-4 flex items-center justify-center text-white font-bold text-xl`}>
                {cert.name.charAt(0)}
              </div>
              <h3 className="text-lg font-bold text-neutral-900 dark:text-neutral-100 mb-2">{cert.name}</h3>
              <p className="text-blue-600 dark:text-blue-400 font-semibold mb-2">{cert.issuer}</p>
              <p className="text-sm text-neutral-500 dark:text-neutral-400">{cert.date}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950/30 dark:to-purple-950/30 rounded-2xl p-8 border border-blue-100 dark:border-blue-900/30">
        <h2 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100 mb-4">
          Let's Work Together
        </h2>
        <p className="text-neutral-600 dark:text-neutral-400 mb-6 max-w-2xl mx-auto">
          Ready to bring your AI vision to life? Let's discuss how my experience can help 
          transform your business with cutting-edge AI solutions.
        </p>
        <a 
          href="/contact"
          className="inline-flex items-center justify-center px-8 py-3 rounded-xl font-semibold
                     bg-gradient-to-r from-blue-600 to-purple-600 text-white
                     hover:from-blue-700 hover:to-purple-700 
                     transform hover:scale-105 transition-all duration-200
                     shadow-lg hover:shadow-xl"
        >
          Get In Touch
          <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </a>
      </div>
    </section>
  );
}
  