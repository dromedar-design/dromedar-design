import { motion } from 'framer-motion'
import React, { useState } from 'react'
import { MenuToggle } from './MenuToggle'
import { Navigation } from './Navigation'
import useWindowSize from '../../utils/useWindowSize'

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
    clipPath: 'circle(25px at 260px 43px)',
    transition: {
      delay: 0.2,
      type: 'spring',
      stiffness: 400,
      damping: 40,
    },
  },
}

export default () => {
  const [state, setState] = useState('closed')
  const [visible, setVisible] = useState(false)
  const { height } = useWindowSize()

  const toggleState = () => {
    switch (state) {
      case 'closed':
        setVisible(true)
        setTimeout(() => setState('open'), 1)
        setTimeout(() => setVisible(true), 501)
        break

      case 'open':
        setState('closed')
        setTimeout(() => setVisible(false), 500)
        break

      default:
        throw new Error('invalid state')
    }
  }

  return (
    <motion.nav initial={false} animate={state} custom={height}>
      {visible && (
        <motion.div
          className="dd-menu-shadow"
          onClick={() => toggleState()}
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
      {visible && <Navigation />}
      <MenuToggle toggle={() => toggleState()} />
    </motion.nav>
  )
}
