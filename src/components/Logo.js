import { useViewportScroll } from 'framer-motion'
import React, { useEffect, useState } from 'react'
import Svg from './Svg'

export default () => {
  const { scrollY } = useViewportScroll()
  const [logoStyles, setLogoStyles] = useState({ scale: 1 })

  useEffect(() => {
    const unsubscribe = scrollY.onChange(n => {
      const min = window.innerWidth > 500 ? 0.8 : 0.5

      setLogoStyles({
        scale: 1 - Math.min(min, (n / window.innerHeight) * 1.4),
      })
    })

    return unsubscribe
  }, [scrollY])

  return <Svg styles={logoStyles} />
}
