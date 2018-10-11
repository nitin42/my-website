import React from 'react'
import PropTypes from 'prop-types'

import { Title } from '../Title'
import { Box } from './Box'

export const SpringMotion = (props, context) => {
  const { s1 } = props

  return (
    <React.Fragment>
      <Title>Spring motion</Title>
      <p>
        Spring dynamics involves a physics solver loop which continues to
        <span>
          &nbsp;update the position of a spring until the equilibrium is
          achieved.{' '}
        </span>
        As the spring continues to change its position, we observe its motion
        until the equilibrium,{' '}
        <span>
          and then using the actual position value and mapping it to an
          animation range{' '}
        </span>
        , we can perform animations on a screen.
        <br />
        <br />
        Try pressing, and then releasing the square. Pressing and releasing
        events causes the square to scale up and scale down.
      </p>
      <Box
        el={s1.div}
        mouseUp={() => s1.setValue(0)}
        mouseDown={() => s1.setValue(1)}
        touchStart={() => s1.setValue(0)}
        touchEnd={() => s1.setValue(1)}
        style={{
          backgroundColor: context.backgroundColor,
          width: 60,
          height: 60,
          margin: '80px auto',
        }}
        noClass={true}
      />
    </React.Fragment>
  )
}

SpringMotion.contextTypes = {
  backgroundColor: PropTypes.string,
}
