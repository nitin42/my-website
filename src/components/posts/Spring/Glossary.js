import React from 'react'

import { Center } from '../Center'
import { Title } from '../Title'
import { Heading } from '../Heading'

export const Glossary = () => (
  <React.Fragment>
    <div>
      <Title>Glossary</Title>
      <ul id="projects">
        <li>
          <p>
            <Heading>Damping</Heading>
            &nbsp;- Restraining of oscillations in spring by intemperance of
            energy.
          </p>
        </li>
        <li>
          <p>
            <Heading>Stiffness</Heading>
            &nbsp;- Pulling force or deforming force that changes the original
            state of spring.
          </p>
        </li>
        <li>
          <p>
            <Heading>Newtons</Heading>
            &nbsp;- A unit of measurement of force. One newton is equal to 1
            kilogram meter per second squared.
          </p>
        </li>
      </ul>
    </div>
  </React.Fragment>
)
