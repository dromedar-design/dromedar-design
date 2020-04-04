import { useViewportScroll, useTransform } from 'framer-motion'
import React from 'react'
import Svg from './Svg'

export default () => {
  const { scrollY } = useViewportScroll()

  // TODO: make it work with resize event
  const scale =
    window.innerWidth > 767
      ? useTransform(scrollY, [0, window.innerHeight / 2], [1, 0.2])
      : 0.2

  return <Svg styles={{ scale }} />
}
