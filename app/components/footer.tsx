function ArrowIcon() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
    >
      <path
        d="M2.07102 11.3494L0.963068 10.2415L9.2017 1.98864H2.83807L2.85227 0.454545H11.8438V9.46023H10.2955L10.3097 3.09659L2.07102 11.3494Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="mt-32 mb-16">
      {/* CTA Section */}
      <div className="text-center mb-16 p-12 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20 rounded-3xl border border-blue-100 dark:border-blue-900/30">
        <h2 className="text-3xl font-bold mb-4">Ready to turn your AI vision into reality?</h2>
        <p className="text-lg text-neutral-600 dark:text-neutral-400 mb-8 max-w-2xl mx-auto">
          Whether you're building intelligent chatbots, training custom LLMs, or deploying cutting-edge models — 
          let's create something extraordinary together. Reach out anytime — I'm here to help.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="mailto:rogerskalema0@gmail.com"
            className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300"
          >
            Get In Touch
          </a>
          <a
            href="https://www.linkedin.com/in/kalema-rogers-a1b9302ba"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 border border-neutral-300 dark:border-neutral-700 rounded-full font-semibold hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-all duration-300"
          >
            Connect on LinkedIn
          </a>
        </div>
      </div>

      {/* Contact Info */}
      <div className="mb-12 text-center">
        <h3 className="text-lg font-semibold mb-2">Contact Me</h3>
        <p className="text-neutral-600 dark:text-neutral-400">
          rogerskalema0@gmail.com
        </p>
      </div>

      {/* Social links - horizontal, uniform style */}
      <div className="mb-8">
        <h3 className="text-sm font-medium text-neutral-800 dark:text-neutral-200 mb-6 tracking-wide text-center">
          CONNECT WITH ME
        </h3>
        <ul className="flex flex-col md:flex-row gap-4 justify-center">
          <li>
            <a
              className="group flex items-center justify-center transition-all duration-200 hover:text-blue-700 dark:hover:text-blue-400 text-neutral-600 dark:text-neutral-400 py-3 px-6 rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 hover:shadow-lg hover:scale-105"
              rel="noopener noreferrer"
              target="_blank"
              href="https://www.linkedin.com/in/kalema-rogers-a1b9302ba"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                <path d="M20.447 20.452H17.21v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.94v5.666H9.083V9h3.104v1.561h.044c.433-.82 1.493-1.685 3.071-1.685 3.287 0 3.893 2.164 3.893 4.977v6.6zM5.337 7.433a1.804 1.804 0 110-3.609 1.804 1.804 0 010 3.609zM6.96 20.452H3.713V9H6.96v11.452z"/>
              </svg>
              <span className="ml-2 font-medium">LinkedIn</span>
            </a>
          </li>
          <li>
            <a
              className="group flex items-center justify-center transition-all duration-200 hover:text-gray-700 dark:hover:text-gray-300 text-neutral-600 dark:text-neutral-400 py-3 px-6 rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 hover:shadow-lg hover:scale-105"
              rel="noopener noreferrer"
              target="_blank"
              href="https://github.com/KALEMA-ROGERS"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                <path fillRule="evenodd" d="M12 0C5.373 0 0 5.373 0 12a12 12 0 008.207 11.387c.6.11.82-.26.82-.58 0-.287-.01-1.046-.016-2.053-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.334-1.758-1.334-1.758-1.09-.744.083-.73.083-.73 1.204.085 1.838 1.237 1.838 1.237 1.07 1.834 2.807 1.304 3.492.997.108-.775.419-1.305.762-1.605-2.665-.304-5.467-1.332-5.467-5.93 0-1.31.469-2.381 1.236-3.221-.124-.303-.536-1.524.117-3.176 0 0 1.008-.323 3.3 1.23a11.5 11.5 0 016.004 0c2.29-1.553 3.297-1.23 3.297-1.23.655 1.652.243 2.873.119 3.176.77.84 1.235 1.911 1.235 3.22 0 4.61-2.807 5.624-5.48 5.92.43.37.815 1.102.815 2.222 0 1.604-.015 2.896-.015 3.292 0 .32.218.694.825.576A12.003 12.003 0 0024 12c0-6.627-5.373-12-12-12z" clipRule="evenodd" />
              </svg>
              <span className="ml-2 font-medium">GitHub</span>
            </a>
          </li>
          <li>
            <a
              className="group flex items-center justify-center transition-all duration-200 hover:text-pink-700 dark:hover:text-pink-400 text-neutral-600 dark:text-neutral-400 py-3 px-6 rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 hover:shadow-lg hover:scale-105"
              rel="noopener noreferrer"
              target="_blank"
              href="mailto:rogerskalema0@gmail.com"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                <path d="M1.5 6.75A2.25 2.25 0 013.75 4.5h16.5A2.25 2.25 0 0122.5 6.75v10.5a2.25 2.25 0 01-2.25 2.25H3.75A2.25 2.25 0 011.5 17.25V6.75zM3 7.06v.177l8.433 5.62a.75.75 0 00.834 0L20.7 7.237V7.06A.75.75 0 0020.25 6.5H3.75A.75.75 0 003 7.06z" />
              </svg>
              <span className="ml-2 font-medium">Email</span>
            </a>
          </li>
          <li>
            <a
              className="group flex items-center justify-center transition-all duration-200 hover:text-green-700 dark:hover:text-green-400 text-neutral-600 dark:text-neutral-400 py-3 px-6 rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 hover:shadow-lg hover:scale-105"
              rel="noopener noreferrer"
              target="_blank"
              href="https://wa.me/+256751612501" // Replace with your WhatsApp number
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" className="w-5 h-5">
                <path d="M16 3C9.373 3 4 8.373 4 15c0 2.385.693 4.607 2.01 6.563L4 29l7.646-2.505A11.96 11.96 0 0016 27c6.627 0 12-5.373 12-12S22.627 3 16 3zm0 22c-1.813 0-3.584-.488-5.117-1.412l-.365-.217-4.537 1.487 1.5-4.418-.238-.376C6.488 19.584 6 17.813 6 16c0-5.514 4.486-10 10-10s10 4.486 10 10-4.486 10-10 10zm5.255-7.255c-.287-.144-1.697-.838-1.96-.934-.263-.096-.454-.144-.646.144-.192.287-.741.934-.909 1.127-.168.192-.336.216-.623.072-.287-.144-1.213-.447-2.312-1.425-.855-.761-1.432-1.701-1.601-1.988-.168-.287-.018-.443.126-.587.13-.13.287-.336.431-.504.144-.168.192-.287.288-.479.096-.192.048-.36-.024-.504-.072-.144-.646-1.561-.885-2.137-.233-.561-.47-.484-.646-.492-.168-.007-.36-.009-.552-.009s-.504.072-.768.36c-.263.287-1.003.98-1.003 2.389 0 1.409 1.029 2.769 1.172 2.961.144.192 2.027 3.094 4.914 4.203.687.296 1.223.472 1.641.604.689.22 1.316.189 1.812.115.553-.082 1.697-.693 1.938-1.363.24-.67.24-1.244.168-1.363-.072-.119-.263-.192-.55-.336z" />
              </svg>
              <span className="ml-2 font-medium">WhatsApp</span>
            </a>
          </li>
        </ul>
      </div>

      {/* Copyright section */}
      <div className="pt-6 border-t border-neutral-200/50 dark:border-neutral-800/50 text-center">
        <p className="text-sm text-neutral-500 dark:text-neutral-400">
          Copyright {new Date().getFullYear()} © <span className="font-medium text-neutral-700 dark:text-neutral-300">Kalema Rogers</span> - Personal Portfolio. Developed by Kalema Rogers
        </p>
      </div>
    </footer>
  );
}