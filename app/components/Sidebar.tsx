'use client'

import Link from 'next/link'
import { Avatar } from './Avatar'
import { useEffect, useState } from 'react'
import { useLoading } from './LoadingContext'


const sections = ['Intro', 'Work', 'Values', 'Background', 'About', 'Contact']

export const Sidebar = () => {
  const [active, setActive] = useState('Intro')

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActive(entry.target.id)
          }
        })
      },
      { threshold: 0.5 }
    )

    sections.forEach(id => {
      const section = document.getElementById(id.toLowerCase())
      if (section) observer.observe(section)
    })

    return () => observer.disconnect()
  }, [])

  const { isLoading } = useLoading()

  return (
    <aside className={`py-7 ps-8 flex flex-col items-start gap-12 ml-2 left-1 fixed z-50 transition-opacity duration-500 font-grotB font-bold ${
        isLoading ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}>
      <Avatar />
      <nav className="mt-[11rem] flex flex-col space-y-4 text-[var(--color-muted)] font-medium w-full">
        {sections.map(section => (
          <Link
            key={section}
            href={`#${section.toLowerCase()}`}
            className={`transition-colors ${
              active === section ? 'font-bold text-[var(--color-text)]' : 'text-[var(--color-accent)]'
            }`}
          >
            {section}
          </Link>
        ))}
      </nav>
    </aside>
  )
}
