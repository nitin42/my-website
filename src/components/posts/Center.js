import React from 'react'

export const Center = props => (
  <div
    className="center-content"
    style={{ flexDirection: props.direction || 'row' }}
  >
    {props.children}
  </div>
)
