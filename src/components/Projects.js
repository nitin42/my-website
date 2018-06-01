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
      Some of my projects
    </h1>
    <ul id="projects">
      <li>
        <a href="https://github.com/nitin42/redocx" target="_blank">
          Redocx
        </a>{' '}
        - A custom renderer to render React components to word documents
      </li>
      <li>
        <a href="https://github.com/nitin42/react-perf-devtool" target="_blank">
          React Performance Devtool
        </a>{' '}
        - A chrome extension devtool to inspect the performance of a React
        application
      </li>
      <li>
        <a href="https://github.com/nitin42/react-imgpro" target="_blank">
          React Image Processing
        </a>{' '}
        - An image processing component for React which uses worker thread for
        processing and manipulating an image with different filters.
      </li>
      <li>
        <a href="https://github.com/nitin42/Animated-Timeline" target="_blank">
          Animated Timeline
        </a>{' '}
        - Set of APIs and tools to create timeline and playback based animations
      </li>
      <li>
        <a href="https://github.com/nitin42/terminal-in-react" target="_blank">
          Terminal in React
        </a>{' '}
        - A React component that renders a terminal on a web page with different
        options and plugins
      </li>
    </ul>
  </React.Fragment>
)
