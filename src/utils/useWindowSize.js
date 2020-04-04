import { useEffect, useState } from 'react'

export default () => {
  if (typeof window === 'undefined') {
    return {
      width: 0,
      height: 0,
    }
  }

  const getSize = () => ({
    width: window.innerWidth,
    height: window.innerHeight,
  })

  const [windowSize, setWindowSize] = useState(getSize())

  const handleResize = () => {
    setWindowSize(getSize())
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return windowSize
}
