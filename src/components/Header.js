import React from 'react'
import Link from 'gatsby-link'

import { Center } from './posts/Center'

export default function Header(props) {
  return (
    <React.Fragment>
      <div style={{ textAlign: 'center' }}>
        <img
          id="profile"
          src={require('../assets/picture.jpeg')}
          style={{ borderRadius: '60px' }}
          width="120px"
          height="120px"
        />
      </div>
      <Center direction="column">
        <ul id="horizontal-list">
          <li>
            <a href="https://twitter.com/NTulswani" target="_blank">
              <i className="fab fa-twitter fa-2x" />
            </a>
          </li>
          <li>
            <a href="https://www.github.com/nitin42" target="_blank">
              <i className="fab fa-github-alt fa-2x" />
            </a>
          </li>
          <li>
            <a href="mailto:tulswani19@gmail.com?Subject=Hello" target="_top">
              <i className="fas fa-envelope fa-2x" />
            </a>
          </li>
        </ul>
        <ul id="horizontal-list-links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/blog/">Blog</Link>
          </li>
          <li>
            <Link to="/work/">Work</Link>
          </li>
          <li>
            <Link to="/sketches">Sketches</Link>
          </li>
        </ul>
      </Center>
    </React.Fragment>
  )
}
