'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

export default function Intro() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })

  // Animate lineHeight from 0.45 to 1.05 as scrollYProgress goes from 0 to 1
  const lineHeight = useTransform(scrollYProgress, [-0.02, 0.02], [0, 1.05])
  const offsetY = useTransform(scrollYProgress, [-0.05, 0.05], [0, 0]) // optional drift

  return (
    <section ref={ref} id="intro" className="min-h-screen sticky top-0 z-10">
      <motion.div
        style={{
          y: offsetY,
        }}
        className="flex flex-col items-start justify-center h-screen text-left px-8 -ml-2"
      >
        <motion.p
          className="text-7xl font-grotB font-semibold"
          style={{ lineHeight }}
        >
          Hello there, I’m a<br />
          <span className="font-extrabold">designer & developer</span>
          <br />
          <span className="inline-block transition-transform hover:translate-x-16">
            ----- dragging <span className="font-extrabold">pixels</span> &
          </span>
          <br />
          <span className="font-bold font-space group">
            building code<span>
                            <span className="cli-dot">.</span>
                            <span className="cli-dot">.</span>
                            <span className="cli-dot">.</span>
                        </span>
          </span>
          <br />
          <span>
            <span className="font-grot">to create </span>
            <span className="font-extrabold">intuitive</span>
          </span>
          <br />
          <span className="font-extrabold">human experience</span>
        </motion.p>
      </motion.div>
    <div style={{ height: '200vh' }} />
    </section>
  )
}