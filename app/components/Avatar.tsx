'use client'
import { motion } from 'framer-motion'

export const Avatar = () => {
  return (
    <div className="flex items-center gap-4">
      <motion.img
        src="/assets/hero.png"
        alt="Avatar"
        layoutId='avatar'
        className="w-20 h-20 object-cover rounded-full"
        />

    <motion.span layoutId="name" className="font-grotXB text-[var(--color-text)]">
    anshbhagania
    </motion.span>

    </div>
  )
}
