const projects = [
  {
    title: 'PrimeCare General Hospital App',
    description:
      'A hospital appointment booking system where patients can book appointments, doctors can manage schedules, and admins oversee everything.',
    tech: ['React', 'Node.js', 'Express', 'MongoDB'],
    link: 'https://github.com/Njosephine/BOOKING-APP',
    category: 'Healthcare',
    status: 'Live',
    gradient: 'from-emerald-500 to-teal-600'
  },
  {
    title: 'Student Feedback Tracking System',
    description:
      'Real-time feedback tracking system for Makerere University to address academic and administrative concerns.',
    tech: ['Django', 'Next.js', 'PostgreSQL'],
    link: '#',
    category: 'Education',
    status: 'In Development',
    gradient: 'from-blue-500 to-cyan-600'
  },
  {
    title: 'Farm Produce Automation System',
    description:
      'Automates buying, drying, sales, and stock tracking of produce like coffee, maize, and beans.',
    tech: ['Django', 'PostgreSQL', 'Vercel'],
    link: '#',
    category: 'Agriculture',
    status: 'Completed',
    gradient: 'from-amber-500 to-orange-600'
  },
];

export default function ProjectsPage() {
  return (
    <section className="max-w-6xl mx-auto space-y-12">
      {/* Header Section */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight bg-gradient-to-r from-neutral-900 via-neutral-700 to-neutral-900 dark:from-neutral-100 dark:via-neutral-300 dark:to-neutral-100 bg-clip-text text-transparent">
          My Projects
        </h1>
        <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto"></div>
        <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto leading-relaxed">
          Here are some of the projects I've worked on, ranging from healthcare solutions to agricultural automation systems.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid gap-8 md:gap-10">
        {projects.map((project, idx) => (
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
                    <span className="text-sm font-medium text-neutral-600 dark:text-neutral-400 uppercase tracking-wide">
                      {project.category}
                    </span>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 dark:text-neutral-100 group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                    {project.title}
                  </h2>
                </div>
                
                {/* Status Badge */}
                <div className="flex-shrink-0">
                  <span className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-medium ${
                    project.status === 'Live' 
                      ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400'
                      : project.status === 'In Development'
                      ? 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400'
                      : 'bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-400'
                  }`}>
                    <div className={`w-2 h-2 rounded-full mr-2 ${
                      project.status === 'Live' 
                        ? 'bg-green-500'
                        : project.status === 'In Development'
                        ? 'bg-blue-500'
                        : 'bg-gray-500'
                    }`}></div>
                    {project.status}
                  </span>
                </div>
              </div>

              {/* Description */}
              <p className="text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed mb-8">
                {project.description}
              </p>

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
                {project.link && project.link !== '#' ? (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/btn inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-xl transition-all duration-200 hover:scale-105 hover:shadow-lg"
                  >
                    <span>View Project</span>
                    <svg className="w-4 h-4 transition-transform duration-200 group-hover/btn:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                ) : (
                  <div className="inline-flex items-center gap-2 px-6 py-3 bg-neutral-100 dark:bg-neutral-800 text-neutral-500 dark:text-neutral-400 font-semibold rounded-xl cursor-not-allowed">
                    <span>Coming Soon</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  </div>
                )}

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

      {/* Call to Action */}
      <div className="text-center bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950/30 dark:to-purple-950/30 rounded-2xl p-8 border border-blue-100 dark:border-blue-900/30">
        <h2 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100 mb-4">
          Interested in Working Together?
        </h2>
        <p className="text-neutral-600 dark:text-neutral-400 mb-6 max-w-2xl mx-auto">
          I'm always excited to take on new challenges and create innovative solutions. 
          Let's discuss how we can bring your ideas to life!
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