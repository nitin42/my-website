import React from 'react'

export const Slider = props => {
  const { value, handler, min, max, ...rest } = props

  return (
    <input
      type="range"
      className="slider"
      value={value}
      min={min || '1'}
      max={max || '20'}
      onChange={handler}
      {...rest}
    />
  )
}
