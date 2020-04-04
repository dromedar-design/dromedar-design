import React from 'react'
import { motion } from 'framer-motion'

export default ({ styles = { scale: 0.2 } }) => {
  return (
    <div className="dd-logo-container">
      <motion.div className="dd-logo" style={{ ...styles }}>
        <motion.svg
          viewBox="0 0 190.22 121.48"
          style={{
            width: '100%',
            height: '100%',
          }}
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{ delay: 0.2, duration: 0.5, ease: 'easeOut' }}
        >
          <motion.polygon
            points="93.45 37.38 74.76 0 37.38 0 74.76 74.76 93.45 37.38"
            initial={{
              fill: '#242539',
            }}
            animate={{
              fill: '#04ACD6',
            }}
            transition={{ delay: 1, damping: 14, mass: 1, type: 'spring' }}
          />

          <polygon
            style={{ fill: '#242539' }}
            points="74.76 0 37.38 0 0 74.76 23.36 121.48 60.74 121.48 37.38 74.76 74.76 0"
          />

          <motion.polygon
            style={{ fill: '#242539' }}
            initial={{
              x: -17,
              points: ['129 74.76 110.45 37.38 65.41 121.48 102.79 121.48'],
            }}
            animate={{
              x: [-17, -17, 0],
              points: [
                '129 74.76 110.45 37.38 65.41 121.48 102.79 121.48',
                '163.61  0 126.15 0 65.41 121.48 102.79 121.48',
                '163.61  0 126.15 0 65.41 121.48 102.79 121.48',
              ],
            }}
            transition={{
              delay: 1,
              times: [0, 0.3, 1],
              duration: 1.2,
              ease: 'easeOut',
            }}
          />

          <motion.polygon
            style={{ fill: '#242539' }}
            points="156.61 0 142.51 28.03 168.21 28.03 182.22 0"
            initial={{ x: -40, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 1.8, damping: 14, mass: 1, type: 'spring' }}
          />
        </motion.svg>
      </motion.div>
    </div>
  )
}
