import { useTransform, useViewportScroll } from 'framer-motion'
import React from 'react'
import useWindowSize from '../utils/useWindowSize'
import Svg from './Svg'

export default () => {
  const { scrollY } = useViewportScroll()
  const { height } = useWindowSize()
  const scale = useTransform(scrollY, [0, height / 2], [1, 0.2])

  return <Svg styles={{ scale }} />
}
