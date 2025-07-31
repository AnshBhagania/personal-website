'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { Avatar } from './Avatar'
import { useLoading } from './LoadingContext'
import { NAVIGATION_SECTIONS, ANIMATION_TIMINGS } from '../constants'

export const Sidebar = () => {
  const [active, setActive] = useState('intro')

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActive(entry.target.id)
          }
        })
      },
      { threshold: ANIMATION_TIMINGS.SCROLL.INTERSECTION_THRESHOLD }
    )

    NAVIGATION_SECTIONS.forEach((section: string) => {
      const element = document.getElementById(section.toLowerCase())
      if (element) observer.observe(element)
    })

    return () => observer.disconnect()
  }, [])

  const { isLoading } = useLoading()

  return (
    <aside className={`py-9 ps-10 flex flex-col justify-start gap-8 ml-8 fixed z-50 transition-opacity duration-500 font-grotB font-bold ${
        isLoading ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}>
      <Avatar />
      <nav className="mt-[clamp(11rem,11vw,17rem)] flex flex-col space-y-2 text-[var(--color-muted)] font-medium w-full">
        {NAVIGATION_SECTIONS.map((section: string) => (
          <Link
            key={section}
            href={`#${section.toLowerCase()}`} 
            className={ active === section.toLowerCase() 
              ? 'font-bold text-current' 
              : 'text-muted' }
          >
            {section}
          </Link>
        ))}
      </nav>
    </aside>
  )
}
