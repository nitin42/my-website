import React from 'react'

export default ({ src, alt, ...rest }) => (
  <img id="project-screenshots" src={src} alt={alt} {...rest} />
)
