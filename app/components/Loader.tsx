"use client"
import { useLoading } from './LoadingContext'
import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Loader() {
  const { isLoading } = useLoading()
  const [step, setStep] = useState<'init' | 'text-in' | 'exit'>('init')

  useEffect(() => {
    if (!isLoading) return
    const t1 = setTimeout(() => setStep('text-in'), 1000)
    const t2 = setTimeout(() => setStep('exit'), 2400)
    return () => {
      clearTimeout(t1)
      clearTimeout(t2)
    }
  }, [isLoading])

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 z-50 bg-[var(--color-bg)] flex items-center justify-center md:flex-row"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.5 } }}
        >
          <div className="relative h-screen px-8 flex md:max-h-svh flex-row items-center justify-start gap-6">

            {/* Avatar */}
            <motion.img
              src="/assets/hero.png"
              layoutId="avatar"
              initial={{ scale: 0, opacity: 0, y: 40 }}
              animate={{ scale: 1.1, opacity: 1, y: 0, transition: { duration: 1.1, ease: 'easeInOut' } }}
              exit={{ scale: 0.7, opacity: 0, y: -40, transition: { duration: 0.7, ease: 'easeIn' } }}
              className="w-32 h-32 md:w-48 md:h-48 rounded-full object-cover"
            />

            {/* Text block */}
            <div className="flex flex-col items-center md:items-start text-center md:text-left space-x-2">

              {/* Right text */}
              <motion.span
                layoutId="name"
                initial={{ opacity: 0, y: -40 }}
                animate={step !== 'init'
                  ? { opacity: 1, y: 0, scale: 1.1, transition: { duration: 0.7, ease: 'easeOut'} }
                  : {}
                }
                exit={{ opacity: 0, y: -70, scale: 0.9, transition: { duration: 0.4, ease: 'easeIn' } }}
                className="text-xl font-grotB font-bold"
              >
                anshbhagania
              </motion.span>

              {/* Left text */}
              <motion.div
                initial={{ opacity: 0, y: 60 }}
                animate={step !== 'init'
                  ? { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } }
                  : {}
                }
                exit={{ opacity: 0, y: -70, transition: { duration: 0.4, ease: 'easeIn' } }}
                className="text-lg font-grotB font-bold text-left ps-9"
              >
                [designer&<br />
                developer]
              </motion.div>

            </div>
          </div>

        </motion.div>
      )}
    </AnimatePresence>
  )
}