'use client'

import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useScroller } from '../components/ScrollContext'
import { FONT_CLASSES } from '../constants'

export default function Intro() {
  const ref = useRef(null)
  const scrollerRef = useScroller();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })

  // Animate lineHeight from 0.33 to 1.07 as scrollYProgress changes
  const lineHeight = useTransform(scrollYProgress, [-0.05, 0.05], [0.33, 1.07])

  return (
    <section ref={ref} id="intro" className="min-h-screen snap-section">
      <motion.div
        style={{
          lineHeight: lineHeight,
        }}
        className="flex flex-col items-start justify-center h-screen w-full max-w-full text-left px-8 -ml-2"
      >
        <motion.p
          className={`text-[clamp(3rem,5vw,7rem)] ${FONT_CLASSES.GROT_BOLD} font-semibold cursor-pointer`}
        >
          Hello there, I'm a<br />
          <span className="font-extrabold">designer & developer</span>
          <br />
          <span className="inline-block transition-transform hover:translate-x-16">
            ----- dragging <span className="font-extrabold">pixels</span> &
          </span>
          <br />
          <span className={`font-bold ${FONT_CLASSES.SPACE} group`}>
            building code<span>
                            <span className="cli-dot">.</span>
                            <span className="cli-dot">.</span>
                            <span className="cli-dot">.</span>
                        </span>
          </span>
          <br />
          <span>
            <span className={FONT_CLASSES.GROT}>to create </span>
            <span className="font-extrabold">intuitive</span>
          </span>
          <br />
          <span className="font-extrabold">human experience</span>
        </motion.p>
      </motion.div>
    </section>
  )
}