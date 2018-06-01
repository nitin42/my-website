import React from 'react'

export const Heading = props => (
  <strong
    style={{
      fontSize: '1.1em',
      color: '#555555',
      paddingBottom: '2px',
      borderBottom: '1.7px solid #4f4f4f',
    }}
  >
    {props.children}
  </strong>
)
