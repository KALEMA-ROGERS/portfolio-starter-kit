'use client'

import { useEffect, useState } from 'react'

interface SkillProgressProps {
  name: string
  level: number // 0-100
  icon?: string
  color?: string
  delay?: number
}

export function SkillProgress({ name, level, icon, color = 'blue', delay = 0 }: SkillProgressProps) {
  const [animatedLevel, setAnimatedLevel] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          setTimeout(() => {
            setAnimatedLevel(level)
          }, delay)
        }
      },
      { threshold: 0.5 }
    )

    const element = document.getElementById(`skill-${name}`)
    if (element) {
      observer.observe(element)
    }

    return () => observer.disconnect()
  }, [name, level, delay])

  const colorClasses = {
    blue: 'from-blue-500 to-blue-600',
    purple: 'from-purple-500 to-purple-600',
    green: 'from-green-500 to-green-600',
    orange: 'from-orange-500 to-orange-600',
    red: 'from-red-500 to-red-600',
    pink: 'from-pink-500 to-pink-600',
    indigo: 'from-indigo-500 to-indigo-600',
    teal: 'from-teal-500 to-teal-600'
  }

  return (
    <div id={`skill-${name}`} className="space-y-2">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          {icon && (
            <img src={icon} alt={name} className="w-5 h-5" />
          )}
          <span className="text-sm font-medium text-neutral-700 dark:text-neutral-300">
            {name}
          </span>
        </div>
        <span className="text-sm font-semibold text-neutral-600 dark:text-neutral-400">
          {animatedLevel}%
        </span>
      </div>
      
      <div className="w-full bg-neutral-200 dark:bg-neutral-700 rounded-full h-2">
        <div
          className={`h-2 rounded-full bg-gradient-to-r ${colorClasses[color as keyof typeof colorClasses]} transition-all duration-1000 ease-out`}
          style={{ width: `${animatedLevel}%` }}
        />
      </div>
    </div>
  )
}

interface SkillsGridProps {
  skills: Array<{
    name: string
    level: number
    icon?: string
    color?: string
  }>
}

export function SkillsGrid({ skills }: SkillsGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {skills.map((skill, index) => (
        <SkillProgress
          key={skill.name}
          name={skill.name}
          level={skill.level}
          icon={skill.icon}
          color={skill.color}
          delay={index * 100}
        />
      ))}
    </div>
  )
}
