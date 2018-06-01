import React from 'react'

import { Title } from '../Title'

export const Introduction = () => (
  <React.Fragment>
    <Title>Hello!</Title>
    <p>
      This is my first blog post on interactive, explorable explanation. This
      blog post explains the <span>spring physics animation model</span>,
      <span> observing spring motion</span>, <span>equilibrium state</span>,{' '}
      <span>oscillations</span>, <span>elasticity</span> and{' '}
      <span>elastic potential energy</span>.
    </p>
    <Title>Introduction</Title>
    <p>
      Spring is an object that has a property called
      <span> elasticity</span>. Elasticity can be defined as,{' '}
      <span>
        an object returns to its original state after the deforming force has
        been released on it
      </span>.&nbsp; By observing the motion of the spring once the deforming
      force has been applied on it, we can use the elasticity property to drive
      physical animations on a screen.
    </p>
  </React.Fragment>
)
