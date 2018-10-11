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
      Other things
    </h1>
    <ul id="projects">
      <li>
        I was on{' '}
        <a href="https://reactpodcast.simplecast.fm/" target="_blank">
          The React Podcast
        </a>{' '}
        where I talked about my open source journey, different projects and my
        workflow. Check out{' '}
        <a href="https://reactpodcast.simplecast.fm/8" target="_blank">
          this
        </a>{' '}
        link for the podcast episode.
      </li>
      <li>
        I wrote a{' '}
        <a
          href="https://github.com/nitin42/Making-a-custom-React-renderer"
          target="_blank"
        >
          comprehensive guide
        </a>{' '}
        to author your own custom React renderer to the host environment you
        need.
      </li>
    </ul>
  </React.Fragment>
)
