import React from 'react'

import Image from './Image'

const projects = [
  {
    title: 'Generative Design',
    link: 'https://generative-design.surge.sh',
    description: 'A collection of interactive generative designs.'
  },
  {
    title: 'Elements of Physics',
    link: 'https://elements-of-physics.surge.sh',
    description: 'An interactive simulation which describes different elements of physics like Gravity, Acceleration and Force.'
  },
  {
    title: 'Color Tools',
    link: 'https://react-color-tools.surge.sh',
    description: 'A set of tools as React components for working with colors.'
  },
  {
    title: 'Image Color Extractor',
    link: 'https://react-color-extractor.surge.sh',
    description: 'A tiny React component to extract an array of swatches from an image.'
  },
]

const getImage = () => ({
  'Generative Design': require('../assets/design.png'),
  'Elements of Physics': require('../assets/physics.png'),
  'Color Tools': require('../assets/colors.png'),
  'Image Color Extractor': require('../assets/extractor.png')
}) 

const renderProjects = () => projects.map(project => {
  return (
    <div key={project.title}>
      <h2>{project.title}</h2>
      <a href={project.link}>
        <Image src={getImage()[project.title]} alt={project.title} />
      </a>
      <p>{project.description}</p>
    </div>
  )
})

export default () => (
  <React.Fragment>
    <h1
      style={{
        fontSize: '1.9em',
        borderLeft: '8px solid black',
        paddingLeft: '10px',
      }}
    >
      Work
    </h1>
    <div style={{ marginTop: 30 }}>
      {renderProjects()}
    </div>
  </React.Fragment>
)