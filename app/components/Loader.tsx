"use client"
import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useLoading } from './LoadingContext'
import { ANIMATION_TIMINGS, FONT_CLASSES } from '../constants'

export default function Loader() {
  const { isLoading } = useLoading()
  const [step, setStep] = useState<'init' | 'text-in' | 'exit'>('init')

  useEffect(() => {
    if (!isLoading) return
    const t1 = setTimeout(() => setStep('text-in'), ANIMATION_TIMINGS.LOADER.TEXT_IN_DELAY)
    const t2 = setTimeout(() => setStep('exit'), ANIMATION_TIMINGS.LOADER.EXIT_DELAY)
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
          exit={{ 
            opacity: 0, 
            transition: { 
              duration: ANIMATION_TIMINGS.LOADER.EXIT_DURATION / 1000,
              ease: "easeInOut"
            } 
          }}
        >
          <div className="relative h-screen w-full max-w-full flex flex-col lg:flex-row items-center justify-center gap-6 px-8">

            {/* Avatar */}
            <motion.img
              src="/assets/hero.png"
              layoutId="avatar"
              initial={{ scale: 0, opacity: 0, y: 40 }}
              animate={{ 
                scale: 1.1, 
                opacity: 1, 
                y: 0, 
                transition: { 
                  duration: 1.1, 
                  ease: "easeOut",
                  type: "spring",
                  stiffness: 100
                } 
              }}
              exit={{ 
                scale: 0.7, 
                opacity: 0, 
                y: -70, 
                transition: { 
                  duration: 0.3, 
                  ease: "easeIn" 
                } 
              }}
              className="w-32 h-32 md:w-64 md:h-64 rounded-full object-cover max-w-full"
            />

            {/* Text block */}
            <div className="flex flex-col items-center text-left lg:text-center space-x-2 lg:ml-4">

              {/* Right text */}
              <motion.span
                layoutId="name"
                initial={{ opacity: 0, y: -40 }}
                animate={step !== 'init'
                  ? { 
                      opacity: 1, 
                      y: 0, 
                      scale: 1.1, 
                      transition: { 
                        duration: 0.7, 
                        ease: "easeOut",
                        type: "spring",
                        stiffness: 120
                      } 
                    }
                  : {}
                }
                exit={{ 
                  opacity: 0, 
                  y: -70, 
                  scale: 0.9, 
                  transition: { 
                    duration: 0.3, 
                    ease: "easeIn" 
                  } 
                }}
                className={`text-xl ${FONT_CLASSES.GROT_BOLD} font-bold`}
              >
                anshbhagania
              </motion.span>

              {/* Left text */}
              <motion.div
                initial={{ opacity: 0, y: 60 }}
                animate={step !== 'init'
                  ? { 
                      opacity: 1, 
                      y: 0, 
                      transition: { 
                        duration: 0.7, 
                        ease: "easeOut",
                        type: "spring",
                        stiffness: 100
                      } 
                    }
                  : {}
                }
                exit={{ 
                  opacity: 0, 
                  y: -70, 
                  transition: { 
                    duration: 0.4, 
                    ease: "easeIn" 
                  } 
                }}
                className={`text-lg ${FONT_CLASSES.GROT_BOLD} font-bold text-left ps-9`}
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