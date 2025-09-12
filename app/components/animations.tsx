'use client'

import { useEffect, useRef, useState } from 'react'

interface FadeInProps {
  children: React.ReactNode
  delay?: number
  direction?: 'up' | 'down' | 'left' | 'right'
  className?: string
}

export function FadeIn({ children, delay = 0, direction = 'up', className = '' }: FadeInProps) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay)
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [delay])

  const directionClasses = {
    up: 'translate-y-8',
    down: '-translate-y-8',
    left: 'translate-x-8',
    right: '-translate-x-8'
  }

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${
        isVisible
          ? 'opacity-100 translate-y-0 translate-x-0'
          : `opacity-0 ${directionClasses[direction]}`
      } ${className}`}
    >
      {children}
    </div>
  )
}

interface StaggeredFadeInProps {
  children: React.ReactNode | React.ReactNode[]
  delay?: number
  staggerDelay?: number
  direction?: 'up' | 'down' | 'left' | 'right'
  className?: string
}

export function StaggeredFadeIn({ 
  children, 
  delay = 0, 
  staggerDelay = 100, 
  direction = 'up',
  className = '' 
}: StaggeredFadeInProps) {
  // Convert single child to array for consistent handling
  const childrenArray = Array.isArray(children) ? children : [children]
  
  return (
    <div className={className}>
      {childrenArray.map((child, index) => (
        <FadeIn key={index} delay={delay + index * staggerDelay} direction={direction}>
          {child}
        </FadeIn>
      ))}
    </div>
  )
}

interface TypewriterProps {
  text: string
  speed?: number
  className?: string
}

export function Typewriter({ text, speed = 50, className = '' }: TypewriterProps) {
  const [displayedText, setDisplayedText] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(prev => prev + text[currentIndex])
        setCurrentIndex(prev => prev + 1)
      }, speed)

      return () => clearTimeout(timeout)
    }
  }, [currentIndex, text, speed])

  return (
    <span className={className}>
      {displayedText}
      <span className="animate-pulse">|</span>
    </span>
  )
}

interface FloatingElementProps {
  children: React.ReactNode
  intensity?: 'low' | 'medium' | 'high'
  className?: string
}

export function FloatingElement({ children, intensity = 'medium', className = '' }: FloatingElementProps) {
  const intensityClasses = {
    low: 'animate-float-slow',
    medium: 'animate-float',
    high: 'animate-float-fast'
  }

  return (
    <div className={`${intensityClasses[intensity]} ${className}`}>
      {children}
    </div>
  )
}

interface PulseGlowProps {
  children: React.ReactNode
  className?: string
}

export function PulseGlow({ children, className = '' }: PulseGlowProps) {
  return (
    <div className={`animate-pulse-glow ${className}`}>
      {children}
    </div>
  )
}
