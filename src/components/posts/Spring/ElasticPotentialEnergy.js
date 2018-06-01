import React from 'react'
import PropTypes from 'prop-types'

import { Title } from '../Title'
import { Center } from '../Center'
import { Slider } from './Slider'

export const ElasticPotentialEnergy = (props, context) => {
  const { s8, s9 } = props

  return (
    <React.Fragment>
      <div style={{ marginTop: '2em' }}>
        <Title>Elastic potential energy</Title>
      </div>
      <p style={{ textAlign: 'justify' }}>
        When a spring is compressed or stretched, it gains{' '}
        <span>elastic potential energy.&nbsp;</span>
        The elastic potential energy in a spring depends on the distance the
        spring is stretched and the spring constant.
      </p>
      <blockquote style={{ marginTop: '20px' }} id="note">
        Press and release the square to see the elasticity of spring.
      </blockquote>
      <Center>
        <s8.div
          className="square"
          onMouseUp={() => s8.setValue(0)}
          onMouseDown={() => s8.setValue(1)}
          onTouchStart={() => s8.setValue(0)}
          onTouchEnd={() => s8.setValue(1)}
        />
      </Center>
      <blockquote style={{ marginTop: '20px' }} id="note">
        Move the range slider to stretch the spring and see the elasticity.
      </blockquote>
      <Center>
        <s9.div className="square" />
        <Slider
          style={{ marginLeft: '2em' }}
          value={context.range}
          handler={context.handleSlider}
          min={1}
          max={8}
        />
      </Center>
    </React.Fragment>
  )
}

ElasticPotentialEnergy.contextTypes = {
  range: PropTypes.number,
  handleSlider: PropTypes.func,
}
