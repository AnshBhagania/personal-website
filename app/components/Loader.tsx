'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useLoading } from './LoadingContext'
import { useEffect, useState } from 'react'

export default function Loader() {
  const { isLoading } = useLoading()
  const [step, setStep] = useState<'init' | 'text-in' | 'exit'>('init')

  useEffect(() => {
    if (!isLoading) return
    const t1 = setTimeout(() => setStep('text-in'), 1000)
    const t2 = setTimeout(() => setStep('exit'), 2100)
    return () => {
      clearTimeout(t1)
      clearTimeout(t2)
    }
  }, [isLoading])

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 z-50 bg-[var(--color-bg)] flex items-center justify-center"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.5 } }}
        >
          <div className="relative w-full max-w-screen-xl flex items-center justify-center h-screen">
            {/* Left text */}
            <motion.div
              initial={{ x: '-100vw', opacity: 0, y: '2vw' }}
              animate={
              step !== 'init'
                ? { x: '34vw', opacity: 1, transition: { duration: 0.9, ease: 'easeOut' } }
                : {}
              }
              exit={{ y: '-69vw', opacity: 0, transition: { duration: 0.7, ease: 'easeOut' } }}
              className="absolute left-0 text-lg font-grotB font-bold z-0"
            >
              [designer& <br />
              developer]
            </motion.div>

            {/* Avatar */}
            <motion.img
              src="/assets/hero.png"
              layoutId="avatar"
              initial={{ scale: 0 }}
              animate={{ scale: 1.3, transition: { duration: 1.2, ease: 'easeInOut' } }}
              className="w-48 h-48 rounded-full object-cover"
              exit={{ scale: 0.7, y: '-69vw', opacity: 0, transition: { duration: 0.9, ease: 'easeOut' } }}
            />

            {/* Right text */}
            <motion.span
              layoutId="name"
              initial={{ x: '100vw', opacity: 0 }}
              animate={
                step !== 'init'
                  ? { scale: 1.2, x: '-13vw', opacity: 1, transition: { duration: 0.8, ease: 'easeOut', delay: 0.2 } }
                  : {}
              }
              exit={{ scale: 0.9, y: '-69vw', opacity: 0, transition: { duration: 0.8, ease: 'easeOut' } }}
              className="absolute right-0 text-xl font-grotB font-bold"
            >
              anshbhagania
            </motion.span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
