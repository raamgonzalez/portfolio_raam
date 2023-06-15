import React from 'react'
import {
  motion,
  useMotionValue,
  useTransform
} from 'framer-motion'

export default function Test () {
  const x = useMotionValue(0)
  const background = useTransform(
    x,
    [-100, 0, 100],
    ['#ff008c', '#7700ff', 'rgb(230, 255, 0)']
  )

  return (
    <motion.div style={{ background }}>
      <motion.div
        drag='x'
        dragConstraints={{ left: 0, right: 0 }}
        style={{ x }}
      >
        <div x={x} />
      </motion.div>
    </motion.div>
  )
}
