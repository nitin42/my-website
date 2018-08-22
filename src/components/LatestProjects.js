import React from 'react'

export default () => (
  <React.Fragment>
    <h1
      style={{
        marginTop: '1.5em',
        borderLeft: '8px solid black',
        paddingLeft: '10px',
      }}
    >
      Recent Project
    </h1>
    <ul id="projects">
      <li>
        <a href="https://generative-design.surge.sh" target="_blank">
          Generative Design
        </a>{' '}
        - A collection of interactive generative art.
      </li>
    </ul>
  </React.Fragment>
)
