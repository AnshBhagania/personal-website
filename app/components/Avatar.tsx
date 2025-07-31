'use client'
import { motion } from 'framer-motion'
import { FONT_CLASSES } from '../constants'

export const Avatar = () => {
  return (
    <div className="flex items-center gap-4">
      <motion.img
        src={`/assets/hero.png`}
        alt="Avatar"
        layoutId='avatar'
        className="w-20 h-20 object-cover rounded-full"
        />

    <motion.span layoutId="name" className={`${FONT_CLASSES.GROT_EXTRA_BOLD} text-[var(--color-text)]`}>
    anshbhagania
    </motion.span>

    </div>
  )
}
