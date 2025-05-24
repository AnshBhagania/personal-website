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
    const t2 = setTimeout(() => setStep('exit'), 2500)
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
              initial={{ x: '-100vw', opacity: 0 }}
              animate={
                step !== 'init'
                  ? { x: 0, opacity: 1, transition: { duration: 0.8, ease: 'easeOut' } }
                  : {}
              }
              exit={{ x: '-100vw', opacity: 0, transition: { duration: 0.6 } }}
              className="absolute left-0 text-lg font-grotSB"
            >
              [designer&developer]
            </motion.div>

            {/* Avatar */}
            <motion.img
              src="/assets/hero.png"
              layoutId="avatar"
              initial={{ scale: 0 }}
              animate={{ scale: 1, transition: { duration: 1, ease: 'easeOut' } }}
              className="w-24 h-24 rounded-full object-cover"
            />

            {/* Right text */}
            <motion.span
              layoutId="name"
              initial={{ x: '100vw', opacity: 0 }}
              animate={
                step !== 'init'
                  ? { x: 0, opacity: 1, transition: { duration: 0.8, ease: 'easeOut', delay: 0.2 } }
                  : {}
              }
              className="absolute right-0 text-xl font-grotXB"
            >
              anshbhagania
            </motion.span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
