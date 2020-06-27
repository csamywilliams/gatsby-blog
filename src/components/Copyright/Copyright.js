import React from 'react'
import { useSiteMetadata } from '../../hooks'

const Copyright = () => {
  const { copyright } = useSiteMetadata()
  const year = new Date().getFullYear()
  return (
    <div className="text-center">
      © {year} | {copyright}
    </div>
  )
}

export default Copyright
