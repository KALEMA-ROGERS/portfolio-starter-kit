'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'

const navItems = {
  '/': {
    name: 'Home',
  },
  '/blog': {
    name: 'Blog',
  },
  '/projects': {
    name: 'Projects',
  },
  '/resume': {
    name: 'Resume',
  },
  '/contact': {
    name: 'Contact',
  },
}

export function Navbar() {
  const pathname = usePathname()
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <aside className="-ml-[8px] mb-16 tracking-tight">
      <div className="lg:sticky lg:top-20">
        <nav
          className={`flex flex-row items-start relative px-0 pb-0 fade md:overflow-auto scroll-pr-6 md:relative transition-all duration-500 ${
            isScrolled ? 'backdrop-blur-md bg-white/80 dark:bg-black/80 rounded-2xl px-4 py-2 shadow-lg border border-neutral-200/50 dark:border-neutral-800/50' : ''
          }`}
          id="nav"
        >
          <div className="flex flex-row space-x-0 pr-10 relative">
            {/* Active indicator background */}
            <div className="absolute inset-0 flex">
              {Object.entries(navItems).map(([path, { name }], index) => {
                const isActive = pathname === path
                return (
                  <div
                    key={path}
                    className={`transition-all duration-300 ease-out ${
                      isActive 
                        ? 'bg-gradient-to-r from-blue-500/10 to-purple-500/10 dark:from-blue-400/20 dark:to-purple-400/20 rounded-xl border border-blue-200/30 dark:border-blue-700/30 shadow-sm' 
                        : ''
                    }`}
                    style={{
                      width: isActive ? `${name.length * 0.6 + 2}rem` : '0',
                      marginLeft: index > 0 ? '0.25rem' : '0.5rem',
                      marginRight: '0.25rem',
                      marginTop: '0.25rem',
                      marginBottom: '0.25rem',
                    }}
                  />
                )
              })}
            </div>

            {Object.entries(navItems).map(([path, { name }]) => {
              const isActive = pathname === path
              return (
                <Link
                  key={path}
                  href={path}
                  className={`
                    relative z-10 transition-all duration-300 ease-out
                    flex align-middle py-2 px-3 m-1 rounded-xl
                    font-medium text-sm
                    ${isActive 
                      ? 'text-blue-600 dark:text-blue-400 shadow-sm' 
                      : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100'
                    }
                    hover:bg-neutral-100/50 dark:hover:bg-neutral-800/30
                    active:scale-95
                    group
                  `}
                >
                  <span className="relative">
                    {name}
                    {/* Subtle underline animation */}
                    <span 
                      className={`
                        absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 
                        transition-all duration-300 ease-out
                        ${isActive ? 'w-full opacity-100' : 'w-0 opacity-0 group-hover:w-full group-hover:opacity-60'}
                      `}
                    />
                  </span>
                </Link>
              )
            })}
          </div>

          {/* Optional: Add a subtle glow effect */}
          <div className={`
            absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-500
            bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-pink-500/5
            ${isScrolled ? 'opacity-100' : ''}
          `} />
        </nav>
      </div>
    </aside>
  )
}