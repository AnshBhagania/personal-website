'use client'

import React, { createContext, useContext, useRef, useCallback } from 'react'
import { NAVIGATION_SECTIONS } from '../constants'

interface ScrollContextValue {
  scrollerRef: React.RefObject<HTMLDivElement | null>
  scrollToSection: (sectionId: string) => void
  getCurrentSection: () => string | null
}

const ScrollerContext = createContext<ScrollContextValue | null>(null)

export const ScrollerProvider = ({ children }: { children: React.ReactNode }) => {
  const scrollerRef = useRef<HTMLDivElement>(null)

  const scrollToSection = useCallback((sectionId: string) => {
    const element = document.getElementById(sectionId.toLowerCase())
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      })
    }
  }, [])

  const getCurrentSection = useCallback(() => {
    const sections = NAVIGATION_SECTIONS.map(section => {
      const element = document.getElementById(section.toLowerCase())
      if (element) {
        const rect = element.getBoundingClientRect()
        return {
          id: section.toLowerCase(),
          top: rect.top,
          bottom: rect.bottom
        }
      }
      return null
    }).filter(Boolean)

    // Find the section that's currently in view
    const currentSection = sections.find(section => 
      section && section.top <= 100 && section.bottom > 100
    )
    
    return currentSection?.id || null
  }, [])

  const value: ScrollContextValue = {
    scrollerRef,
    scrollToSection,
    getCurrentSection
  }

  return (
    <ScrollerContext.Provider value={value}>
      {children}
    </ScrollerContext.Provider>
  )
}

export const useScroller = () => {
  const context = useContext(ScrollerContext)
  if (!context) {
    throw new Error('useScroller must be used within a ScrollerProvider')
  }
  return context
}