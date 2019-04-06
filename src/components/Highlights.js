import React from 'react'
import Link from 'gatsby-link'

const highlights = [
  {
    title:
      'An interactive, explorable explanation about spring physics animation',
    date: ' - 31 May, 2018',
    link: '/posts/spring',
  },
  {
    title:
      'Elements of Physics - An interactive physics simulation to learn different elements of physics',
    date: ' - 27 June, 2018',
    link: 'https://elements-of-physics.surge.sh',
    useLink: true,
  },
  {
    title: 'Creating microworlds',
    date: ' - 17 July, 2018',
    link: '/posts/microworlds',
  },
]

export default () => (
  <React.Fragment>
    <h1
      style={{
        borderLeft: '8px solid #4f4f4f',
        paddingLeft: '10px',
      }}
    >
      Highlights
    </h1>
    <ul id="highlights">
      {highlights.map((highlight, index) => {
        if (highlight.useLink) {
          return (
            <li key={index}>
              <a href={highlight.link} target="_blank">
                <span id="highlight-title">{highlight.title}</span>
                <span id="date">{highlight.date}</span>
              </a>
            </li>
          )
        } else {
          return (
            <li key={index}>
              <Link to={highlight.link}>
                <span id="highlight-title">{highlight.title}</span>
                <span id="date">{highlight.date}</span>
              </Link>
            </li>
          )
        }
      })}
    </ul>
  </React.Fragment>
)
