import { useForm, ValidationError } from '@formspree/react';
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
      
    
        {/* Contact Form */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-4 text-center">Send a Direct Message</h2>
          <form
            className="max-w-xl mx-auto p-6 bg-white dark:bg-neutral-900 rounded-2xl border border-neutral-200 dark:border-neutral-800 shadow"
            method="POST"
            //  https://formspree.io - It's where you create the form from.
            action="https://formspree.io/f/mzzayojn" // Replace with your Formspree endpoint or backend
          >
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300">Name</label>
              <input type="text" id="name" name="name" required className="mt-1 block w-full rounded-md border border-neutral-300 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 p-2 text-neutral-900 dark:text-neutral-100" />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300">Email</label>
              <input type="email" id="email" name="email" required className="mt-1 block w-full rounded-md border border-neutral-300 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 p-2 text-neutral-900 dark:text-neutral-100" />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300">Message</label>
              <textarea id="message" name="message" rows={5} required className="mt-1 block w-full rounded-md border border-neutral-300 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 p-2 text-neutral-900 dark:text-neutral-100" />
            </div>
            {/* Simple spam protection: honeypot field */}    
            <div style={{ display: 'none' }}>
              <label htmlFor="_gotcha">Leave this field blank</label>
              <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" />
            </div>
            <button type="submit" className="w-full py-3 px-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300">Send Message</button>
            <p className="mt-4 text-center text-sm text-neutral-600 dark:text-neutral-400">Messages will be sent to <span className="font-semibold">rogerskalema0@gmail.com</span> via Formspree.</p>
          </form>
        </div>

      <div className="flex flex-col md:flex-row gap-6 justify-center mt-8">
        {/* LinkedIn Card */}
        <a 
          href="https://www.linkedin.com/in/kalema-rogers-a1b9302ba"
          target="_blank"
          rel="noopener noreferrer"
          className="group p-6 flex-1 min-w-[250px] rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 hover:border-neutral-300 dark:hover:border-neutral-700 transition-all duration-300 hover:shadow-lg dark:hover:shadow-2xl hover:-translate-y-1"
        >
          <div className="flex items-center space-x-4">
            <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center text-white text-xl group-hover:scale-110 transition-transform duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                <path d="M20.447 20.452H17.21v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.94v5.666H9.083V9h3.104v1.561h.044c.433-.82 1.493-1.685 3.071-1.685 3.287 0 3.893 2.164 3.893 4.977v6.6zM5.337 7.433a1.804 1.804 0 110-3.609 1.804 1.804 0 010 3.609zM6.96 20.452H3.713V9H6.96v11.452z"/>
              </svg>
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="font-semibold text-neutral-900 dark:text-neutral-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                LinkedIn
              </h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-400 truncate group-hover:text-neutral-800 dark:group-hover:text-neutral-200 transition-colors">
                Kalema Rogers
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
          className="group p-6 flex-1 min-w-[250px] rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 hover:border-neutral-300 dark:hover:border-neutral-700 transition-all duration-300 hover:shadow-lg dark:hover:shadow-2xl hover:-translate-y-1"
        >
          <div className="flex items-center space-x-4">
            <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-gray-700 to-gray-900 dark:from-gray-600 dark:to-gray-800 rounded-xl flex items-center justify-center text-white text-xl group-hover:scale-110 transition-transform duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                <path fillRule="evenodd" d="M12 0C5.373 0 0 5.373 0 12a12 12 0 008.207 11.387c.6.11.82-.26.82-.58 0-.287-.01-1.046-.016-2.053-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.334-1.758-1.334-1.758-1.09-.744.083-.73.083-.73 1.204.085 1.838 1.237 1.838 1.237 1.07 1.834 2.807 1.304 3.492.997.108-.775.419-1.305.762-1.605-2.665-.304-5.467-1.332-5.467-5.93 0-1.31.469-2.381 1.236-3.221-.124-.303-.536-1.524.117-3.176 0 0 1.008-.323 3.3 1.23a11.5 11.5 0 016.004 0c2.29-1.553 3.297-1.23 3.297-1.23.655 1.652.243 2.873.119 3.176.77.84 1.235 1.911 1.235 3.22 0 4.61-2.807 5.624-5.48 5.92.43.37.815 1.102.815 2.222 0 1.604-.015 2.896-.015 3.292 0 .32.218.694.825.576A12.003 12.003 0 0024 12c0-6.627-5.373-12-12-12z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="font-semibold text-neutral-900 dark:text-neutral-100 group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors">
                GitHub
              </h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-400 truncate group-hover:text-neutral-800 dark:group-hover:text-neutral-200 transition-colors">
                @KALEMA-ROGERS
              </p>
            </div>
            <div className="flex-shrink-0">
              <svg className="w-5 h-5 text-neutral-400 group-hover:text-gray-500 group-hover:translate-x-1 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </div>
          </div>
        </a>

        {/* LabLab.ai Profile Card */}
        <a 
          href="https://lablab.ai/u/@Kalema_Rogers256"
          target="_blank"
          rel="noopener noreferrer"
          className="group p-6 flex-1 min-w-[250px] rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 hover:border-neutral-300 dark:hover:border-neutral-700 transition-all duration-300 hover:shadow-lg dark:hover:shadow-2xl hover:-translate-y-1"
        >
          <div className="flex items-center space-x-4">
            <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center text-white text-xl group-hover:scale-110 transition-transform duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                <path d="M8.5 3a1 1 0 100 2h.5v3.586l-4.95 4.95A3.5 3.5 0 006.5 20h11a3.5 3.5 0 002.45-5.964l-4.95-4.95V5h.5a1 1 0 100-2H8.5zm3 7.414L15.586 14H8.414L11.5 10.414z"/>
              </svg>
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="font-semibold text-neutral-900 dark:text-neutral-100 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                LabLab.ai Profile
              </h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-400 truncate group-hover:text-neutral-800 dark:group-hover:text-neutral-200 transition-colors">
                @Kalema_Rogers256
              </p>
            </div>
            <div className="flex-shrink-0">
              <svg className="w-5 h-5 text-neutral-400 group-hover:text-purple-500 group-hover:translate-x-1 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
            Ready to Start a Project ?
          </h2>
          <p className="text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
            I'm always interested in new opportunities and exciting projects. 
            Whether you need AI solutions, web development, or just want to discuss ideas, 
            I'd be happy to hear from you !
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
        <p>📍 Based in Kampala, Central-Region, Uganda (UTC+3)</p>
        <p className="mt-1">I typically respond within 24 hours</p>
      </div>
    </section>
  )
}