'use client'

import { useState, useEffect } from 'react'

interface Testimonial {
  id: number
  name: string
  role: string
  company: string
  content: string
  avatar?: string
  rating: number
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Product Manager",
    company: "TechCorp",
    content: "Kalema delivered an exceptional AI chatbot that transformed our customer service. The implementation was seamless and the results exceeded our expectations. Highly recommend!",
    rating: 5
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "CTO",
    company: "StartupXYZ",
    content: "Working with Kalema on our ML model deployment was a game-changer. His expertise in AI/ML and attention to detail made the project a huge success.",
    rating: 5
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Data Scientist",
    company: "DataFlow Inc",
    content: "Kalema's RAG system implementation was outstanding. He understood our requirements perfectly and delivered a solution that significantly improved our data retrieval capabilities.",
    rating: 5
  }
]

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 }
    )

    const element = document.getElementById('testimonials-section')
    if (element) {
      observer.observe(element)
    }

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (isVisible) {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length)
      }, 5000)

      return () => clearInterval(interval)
    }
  }, [isVisible])

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <svg
        key={i}
        className={`w-4 h-4 ${i < rating ? 'text-yellow-400' : 'text-neutral-300'}`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ))
  }

  return (
    <section id="testimonials-section" className="py-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What Clients Say
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto"></div>
        </div>

        <div className="relative">
          <div className="overflow-hidden rounded-2xl">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="w-full flex-shrink-0">
                  <div className="bg-white dark:bg-neutral-900 rounded-2xl border border-neutral-200 dark:border-neutral-800 p-8 md:p-12 shadow-lg">
                    <div className="text-center">
                      <div className="flex justify-center mb-4">
                        {renderStars(testimonial.rating)}
                      </div>
                      
                      <blockquote className="text-lg md:text-xl text-neutral-700 dark:text-neutral-300 mb-6 leading-relaxed">
                        "{testimonial.content}"
                      </blockquote>
                      
                      <div className="flex items-center justify-center gap-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                          {testimonial.name.charAt(0)}
                        </div>
                        <div className="text-left">
                          <div className="font-semibold text-neutral-900 dark:text-neutral-100">
                            {testimonial.name}
                          </div>
                          <div className="text-sm text-neutral-600 dark:text-neutral-400">
                            {testimonial.role} at {testimonial.company}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation dots */}
          <div className="flex justify-center mt-8 gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-gradient-to-r from-blue-500 to-purple-500'
                    : 'bg-neutral-300 dark:bg-neutral-600'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
