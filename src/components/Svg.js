import { motion } from 'framer-motion'
import React, { useEffect } from 'react'

export default ({ styles = { scale: 0.2 } }) => {
  useEffect(() => {
    document.querySelector('.dd-left-poligon').style.fill = '#04ACD6'
  }, [])

  return (
    <div className="dd-logo-container">
      <motion.div className="dd-logo" style={{ ...styles }}>
        <svg
          viewBox="0 0 190.22 121.48"
          style={{
            width: '100%',
            height: '100%',
          }}
        >
          <polygon
            className="dd-left-poligon"
            style={{ fill: '##242539', transition: 'fill .6s .4s' }}
            points="93.45 37.38 74.76 0 37.38 0 74.76 74.76 93.45 37.38"
          />
          <polygon
            style={{ fill: '##242539' }}
            points="74.76 0 37.38 0 0 74.76 23.36 121.48 60.74 121.48 37.38 74.76 74.76 0"
          />
          <motion.polygon
            style={{ fill: '##242539' }}
            initial={{ x: -17 }}
            animate={{ x: 0 }}
            transition={{ delay: 0.4, damping: 15, mass: 2, type: 'spring' }}
            points="163.61  0 126.15 0 65.41 121.48 102.79 121.48 149.51 28.03"
          />
          <motion.polygon
            style={{ fill: '##242539' }}
            initial={{ x: -36 }}
            animate={{ x: 0 }}
            transition={{ delay: 0.5, damping: 15, mass: 2, type: 'spring' }}
            points="156.61 0 142.51 28.03 168.21 28.03 182.22 0"
          />
        </svg>
      </motion.div>
    </div>
  )
}
