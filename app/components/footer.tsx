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
    <footer className="mb-16 mt-20">
      {/* Subtle separator line */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-neutral-300 to-transparent dark:via-neutral-700 mb-12"></div>
      
      {/* Social links */}
      <div className="mb-8">
        <h3 className="text-sm font-medium text-neutral-800 dark:text-neutral-200 mb-4 tracking-wide">
          CONNECT WITH ME
        </h3>
        <ul className="flex flex-col space-y-3 md:flex-row md:space-y-0 md:space-x-6">
          <li>
            <a
              className="group flex items-center transition-all duration-200 hover:text-neutral-800 dark:hover:text-neutral-100 text-neutral-600 dark:text-neutral-400 py-2 px-3 -mx-3 rounded-lg hover:bg-neutral-100/50 dark:hover:bg-neutral-800/50"
              rel="noopener noreferrer"
              target="_blank"
              href="https://www.linkedin.com/in/kalema-rogers-a1b9302ba"
            >
              <ArrowIcon />
              <span className="ml-2 font-medium">LinkedIn</span>
              <span className="ml-2 text-xs text-neutral-500 dark:text-neutral-500 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                Connect professionally
              </span>
            </a>
          </li>
          <li>
            <a
              className="group flex items-center transition-all duration-200 hover:text-neutral-800 dark:hover:text-neutral-100 text-neutral-600 dark:text-neutral-400 py-2 px-3 -mx-3 rounded-lg hover:bg-neutral-100/50 dark:hover:bg-neutral-800/50"
              rel="noopener noreferrer"
              target="_blank"
              href="https://github.com/KALEMA-ROGERS"
            >
              <ArrowIcon />
              <span className="ml-2 font-medium">GitHub</span>
              <span className="ml-2 text-xs text-neutral-500 dark:text-neutral-500 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                View my code
              </span>
            </a>
          </li>
          <li>
            <a
              className="group flex items-center transition-all duration-200 hover:text-neutral-800 dark:hover:text-neutral-100 text-neutral-600 dark:text-neutral-400 py-2 px-3 -mx-3 rounded-lg hover:bg-neutral-100/50 dark:hover:bg-neutral-800/50"
              rel="noopener noreferrer"
              target="_blank"
              href="mailto:rogerskalema0@gmail.com"
            >
              <ArrowIcon />
              <span className="ml-2 font-medium">Email</span>
              <span className="ml-2 text-xs text-neutral-500 dark:text-neutral-500 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                Let's talk
              </span>
            </a>
          </li>
        </ul>
      </div>

      {/* Copyright section */}
      <div className="pt-6 border-t border-neutral-200/50 dark:border-neutral-800/50">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <p className="text-sm text-neutral-500 dark:text-neutral-400">
            © {new Date().getFullYear()} <span className="font-medium text-neutral-700 dark:text-neutral-300">Kalema Rogers</span>. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}