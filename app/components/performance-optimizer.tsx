'use client'

import { useEffect } from 'react'

export function PerformanceOptimizer() {
  useEffect(() => {
    // Preload critical resources
    const preloadCriticalResources = () => {
      const criticalImages = [
        '/DSC_3472.JPG'
      ]
      
      criticalImages.forEach(src => {
        const link = document.createElement('link')
        link.rel = 'preload'
        link.as = 'image'
        link.href = src
        document.head.appendChild(link)
      })
    }

    // Optimize images with lazy loading
    const optimizeImages = () => {
      const images = document.querySelectorAll('img[data-src]')
      const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const img = entry.target as HTMLImageElement
            img.src = img.dataset.src || ''
            img.removeAttribute('data-src')
            imageObserver.unobserve(img)
          }
        })
      })

      images.forEach(img => imageObserver.observe(img))
    }

    // Add performance monitoring
    const monitorPerformance = () => {
      if ('performance' in window) {
        window.addEventListener('load', () => {
          setTimeout(() => {
            const perfData = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming
            console.log('Performance Metrics:', {
              FCP: performance.getEntriesByName('first-contentful-paint')[0]?.startTime,
              LCP: performance.getEntriesByType('largest-contentful-paint')[0]?.startTime,
              FID: (performance.getEntriesByType('first-input')[0] as any)?.processingStart,
              CLS: performance.getEntriesByType('layout-shift').reduce((sum, entry) => sum + (entry as any).value, 0)
            })
          }, 0)
        })
      }
    }

    preloadCriticalResources()
    optimizeImages()
    monitorPerformance()
  }, [])

  return null
}

// Image optimization component
interface OptimizedImageProps {
  src: string
  alt: string
  className?: string
  priority?: boolean
}

export function OptimizedImage({ src, alt, className = '', priority = false }: OptimizedImageProps) {
  return (
    <img
      src={priority ? src : undefined}
      data-src={!priority ? src : undefined}
      alt={alt}
      className={`${className} ${!priority ? 'lazy' : ''}`}
      loading={priority ? 'eager' : 'lazy'}
      decoding="async"
    />
  )
}
