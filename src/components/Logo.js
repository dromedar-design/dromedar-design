import { motion, useViewportScroll } from 'framer-motion'
import React, { useEffect, useState } from 'react'

export default () => {
  const { scrollY } = useViewportScroll()
  const [logoStyles, setLogoStyles] = useState({ scale: 1 })

  useEffect(() => {
    scrollY.onChange(n => {
      const min = window.innerWidth > 500 ? 0.8 : 0.35

      setLogoStyles({
        scale: 1 - Math.min(min, n / window.innerHeight),
      })
    })
  }, [scrollY])

  useEffect(() => {
    document.querySelector('.dd-left-poligon').style.fill = '#9800ff'
  }, [])

  return (
    <div>
      <motion.div
        style={{
          boxSizing: 'border-box',
          position: 'fixed',
          width: '100%',
          height: '80vh',
          paddingTop: '2vw',
          paddingLeft: '20vw',
          paddingRight: '10vw',
          transformOrigin: 'top center',
          ...logoStyles,
        }}
      >
        <svg
          viewBox="0 0 190.22 121.48"
          style={{
            width: '100%',
            height: '100%',
          }}
        >
          <polygon
            className="dd-left-poligon"
            style={{ fill: '#04ABD5', transition: 'fill .6s .4s' }}
            points="93.45 37.38 74.76 0 37.38 0 74.76 74.76 93.45 37.38"
          />
          <polygon
            style={{ fill: '#04ABD5' }}
            points="74.76 0 37.38 0 0 74.76 23.36 121.48 60.74 121.48 37.38 74.76 74.76 0"
          />
          <motion.polygon
            style={{ fill: '#04ABD5' }}
            initial={{ x: -17 }}
            animate={{ x: 0 }}
            transition={{ delay: 0.4, damping: 15, mass: 2, type: 'spring' }}
            points="163.61  0 126.15 0 65.41 121.48 102.79 121.48 149.51 28.03"
          />
          <motion.polygon
            style={{ fill: '#04ABD5' }}
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
