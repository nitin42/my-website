import React from 'react'

export const Box = props => {
  const {
    el,
    noClass,
    mouseUp,
    mouseDown,
    touchEnd,
    touchStart,
    ...rest
  } = props

  return React.createElement(props.el, {
    className: props.default ? '' : 'square',
    onMouseUp: props.mouseUp,
    onMouseDown: props.mouseDown,
    onTouchStart: props.touchStart,
    onTouchEnd: props.touchEnd,
    ...rest,
  })
}
