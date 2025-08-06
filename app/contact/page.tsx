export default function ContactPage() {
  return (
    <section className="max-w-4xl mx-auto space-y-12">
      {/* Header Section */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight bg-gradient-to-r from-neutral-900 via-neutral-700 to-neutral-900 dark:from-neutral-100 dark:via-neutral-300 dark:to-neutral-100 bg-clip-text text-transparent">
          Let's Connect
        </h1>
        <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto"></div>
        <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto leading-relaxed">
          I'd love to connect! Whether you have a project idea, want to collaborate, or just want to say hello, 
          feel free to reach out through any of the methods below.
        </p>
      </div>

      {/* Contact Cards */}
      <div className="grid md:grid-cols-3 gap-6">
        {/* Email Card */}
        <a 
          href="mailto:rogerskalema0@gmail.com"
          className="group p-6 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 hover:border-neutral-300 dark:hover:border-neutral-700 transition-all duration-300 hover:shadow-lg dark:hover:shadow-2xl hover:-translate-y-1"
        >
          <div className="flex items-center space-x-4">
            <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-red-500 to-pink-500 rounded-xl flex items-center justify-center text-white text-xl group-hover:scale-110 transition-transform duration-300">
              📧
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="font-semibold text-neutral-900 dark:text-neutral-100 group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors">
                Email
              </h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-400 truncate group-hover:text-neutral-800 dark:group-hover:text-neutral-200 transition-colors">
                rogerskalema0@gmail.com
              </p>
            </div>
            <div className="flex-shrink-0">
              <svg className="w-5 h-5 text-neutral-400 group-hover:text-red-500 group-hover:translate-x-1 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </div>
          </div>
        </a>

        {/* LinkedIn Card */}
        <a 
          href="https://www.linkedin.com/in/kalema-rogers-a1b9302ba"
          target="_blank"
          rel="noopener noreferrer"
          className="group p-6 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 hover:border-neutral-300 dark:hover:border-neutral-700 transition-all duration-300 hover:shadow-lg dark:hover:shadow-2xl hover:-translate-y-1"
        >
          <div className="flex items-center space-x-4">
            <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center text-white text-xl group-hover:scale-110 transition-transform duration-300">
              💼
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="font-semibold text-neutral-900 dark:text-neutral-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                LinkedIn
              </h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-400 truncate group-hover:text-neutral-800 dark:group-hover:text-neutral-200 transition-colors">
                kalema-rogers
              </p>
            </div>
            <div className="flex-shrink-0">
              <svg className="w-5 h-5 text-neutral-400 group-hover:text-blue-500 group-hover:translate-x-1 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </div>
          </div>
        </a>

        {/* GitHub Card */}
        <a 
          href="https://github.com/KALEMA-ROGERS"
          target="_blank"
          rel="noopener noreferrer"
          className="group p-6 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 hover:border-neutral-300 dark:hover:border-neutral-700 transition-all duration-300 hover:shadow-lg dark:hover:shadow-2xl hover:-translate-y-1"
        >
          <div className="flex items-center space-x-4">
            <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-gray-700 to-gray-900 dark:from-gray-600 dark:to-gray-800 rounded-xl flex items-center justify-center text-white text-xl group-hover:scale-110 transition-transform duration-300">
              💻
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="font-semibold text-neutral-900 dark:text-neutral-100 group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors">
                GitHub
              </h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-400 truncate group-hover:text-neutral-800 dark:group-hover:text-neutral-200 transition-colors">
                Kalema Rogers
              </p>
            </div>
            <div className="flex-shrink-0">
              <svg className="w-5 h-5 text-neutral-400 group-hover:text-gray-500 group-hover:translate-x-1 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </div>
          </div>
        </a>
      </div>

      {/* Additional Info Section */}
      <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950/30 dark:to-purple-950/30 rounded-2xl p-8 border border-blue-100 dark:border-blue-900/30">
        <div className="text-center space-y-4">
          <h2 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100">
            Ready to Start a Project?
          </h2>
          <p className="text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
            I'm always interested in new opportunities and exciting projects. 
            Whether you need AI solutions, web development, or just want to discuss ideas, 
            I'd be happy to hear from you!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <a 
              href="mailto:rogerskalema0@gmail.com?subject=Project Inquiry"
              className="inline-flex items-center justify-center px-8 py-3 rounded-xl font-semibold
                         bg-gradient-to-r from-blue-600 to-purple-600 text-white
                         hover:from-blue-700 hover:to-purple-700 
                         transform hover:scale-105 transition-all duration-200
                         shadow-lg hover:shadow-xl"
            >
              Start a Conversation
              <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </a>
            <a 
              href="/resume"
              className="inline-flex items-center justify-center px-8 py-3 rounded-xl font-semibold
                         border-2 border-neutral-300 dark:border-neutral-700 text-neutral-700 dark:text-neutral-300
                         hover:border-neutral-400 dark:hover:border-neutral-600 hover:bg-white dark:hover:bg-neutral-800
                         transition-all duration-200"
            >
              View My Resume
            </a>
          </div>
        </div>
      </div>

      {/* Response Time Info */}
      <div className="text-center text-sm text-neutral-500 dark:text-neutral-400">
        <p>📍 Based in Kampala, Uganda (UTC+3)</p>
        <p className="mt-1">I typically respond within 24 hours</p>
      </div>
    </section>
  )
}