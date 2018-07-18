import React from 'react'
import Link from 'gatsby-link'

export default () => (
  <React.Fragment>
    <h1
      style={{
        fontSize: '1.8em',
        borderLeft: '8px solid black',
        paddingLeft: '10px',
      }}
    >
      Highlights
    </h1>
    <ul>
      <li>
        <Link to="/posts/spring">
          <span>
            An interactive, explorable explanation about spring physics
            animation{' '}
          </span>
          <span id="date"> - 31 May, 2018</span>
        </Link>
      </li>
      <li>
        <a href="https://elements-of-physics.surge.sh">
          <span>
            Elements of Physics - An interactive physics simulation to learn
            different elements of physics
          </span>
          <span id="date"> - 27 June, 2018</span>
        </a>
      </li>
      <li>
        <Link to="/posts/microworlds">
          <span>Creating microworlds</span>
          <span id="date"> - 17 July, 2018</span>
        </Link>
      </li>
    </ul>
  </React.Fragment>
)
