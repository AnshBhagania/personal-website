'use client'
import { createContext, useContext, useEffect, useState } from 'react'
import { ANIMATION_TIMINGS } from '../constants'

const LoadingContext = createContext<{ isLoading: boolean }>({ isLoading: true })

export const LoadingProvider = ({ children }: { children: React.ReactNode }) => {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), ANIMATION_TIMINGS.LOADER.EXIT_DELAY + 800) // Total loading time
    return () => clearTimeout(timer)
  }, [])

  return (
    <LoadingContext.Provider value={{ isLoading }}>
      {children}
    </LoadingContext.Provider>
  )
}

export const useLoading = () => useContext(LoadingContext)
