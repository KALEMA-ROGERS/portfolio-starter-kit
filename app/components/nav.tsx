'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'

const navItems = {
  '/': {
    name: 'Home',
  },
  '/projects': {
    name: 'Services',
  },
  '/blog': {
    name: 'Featured Projects',
  },
  '/resume': {
    name: 'Experience',
  },
  '/contact': {
    name: 'Contact',
  },
}

export function Navbar() {
  const pathname = usePathname()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    // Initialize theme from localStorage or prefers-color-scheme, default to light
    try {
      const stored = localStorage.getItem('theme')
      if (stored === 'light' || stored === 'dark') {
        const shouldDark = stored === 'dark'
        setIsDark(shouldDark)
        document.documentElement.classList.toggle('dark', shouldDark)
      } else {
        const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
        const shouldDark = prefersDark ?? false
        setIsDark(shouldDark)
        document.documentElement.classList.toggle('dark', shouldDark)
      }
    } catch {}
  }, [])

  // Theme toggle logic retained for possible future use, but no UI button
  const toggleTheme = () => {
    const next = !isDark
    setIsDark(next)
    document.documentElement.classList.toggle('dark', next)
    try {
      localStorage.setItem('theme', next ? 'dark' : 'light')
    } catch {}
  }

  return (
    <header className="sticky top-0 z-50 mb-16">
      <div className="w-full">
        <nav
          className={`flex flex-row items-center justify-center relative px-6 py-4 transition-all duration-500 ${
            isScrolled ? 'backdrop-blur-md bg-white/90 dark:bg-black/90 rounded-2xl shadow-lg border border-neutral-200/50 dark:border-neutral-800/50' : 'bg-transparent'
          }`}
          id="nav"
        >
          <div className="flex flex-row space-x-1 relative">
            {Object.entries(navItems).map(([path, { name }]) => {
              const isActive = pathname === path
              return (
                <Link
                  key={path}
                  href={path}
                  className={`
                    relative transition-all duration-300 ease-out
                    flex align-middle py-3 px-6 rounded-full
                    font-medium text-sm
                    ${isActive 
                      ? 'text-white bg-gradient-to-r from-blue-600 to-purple-600 shadow-lg' 
                      : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 hover:bg-neutral-100/50 dark:hover:bg-neutral-800/30'
                    }
                    active:scale-95
                    group
                  `}
                >
                  <span className="relative">
                    {name}
                  </span>
                </Link>
              )
            })}
          </div>

        </nav>
      </div>
    </header>
  )
}