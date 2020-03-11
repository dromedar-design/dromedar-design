import { motion, useCycle } from 'framer-motion'
import React, { useRef } from 'react'
import { useDimensions } from '../../utils/useDimensions'
import { MenuToggle } from './MenuToggle'
import { Navigation } from './Navigation'

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      type: 'spring',
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: 'circle(30px at 260px 40px)',
    transition: {
      delay: 0.5,
      type: 'spring',
      stiffness: 400,
      damping: 40,
    },
  },
}

export default () => {
  const [isOpen, toggleOpen] = useCycle(false, true)
  const containerRef = useRef(null)
  const { height } = useDimensions(containerRef)

  return (
    <motion.nav
      initial={false}
      animate={isOpen ? 'open' : 'closed'}
      custom={height}
      ref={containerRef}
    >
      {isOpen && (
        <motion.div
          className="dd-menu-shadow"
          onClick={() => toggleOpen()}
          variants={{
            open: {
              opacity: 0.4,
            },
            closed: {
              opacity: 0,
            },
          }}
        />
      )}
      <motion.div className="background" variants={sidebar} />
      <Navigation />
      <MenuToggle toggle={() => toggleOpen()} />
    </motion.nav>
  )
}
