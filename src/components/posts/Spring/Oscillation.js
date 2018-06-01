import React from 'react'
import PropTypes from 'prop-types'

import { Title } from '../Title'
import { Center } from '../Center'
import { Box } from './Box'

export const Oscillation = (props, context) => {
  const { s6 } = props

  return (
    <React.Fragment>
      <Title>Oscillation</Title>
      <p>
        Oscillation is defined as{' '}
        <span>consistent change in the position or magnitude</span>. To ensure
        that a spring don’t oscillate infinitely, they can also be configured to
        have a friction.
      </p>
      <Center>
        <Box
          el={s6.div}
          mouseUp={() => s6.setValue(0)}
          mouseDown={() => s6.setValue(1)}
          touchStart={() => s6.setValue(0)}
          touchEnd={() => s6.setValue(1)}
        />
        <span id="sub" style={{ fontSize: '1.2em' }}>
          Oscillations
        </span>
        <div style={{ marginTop: '10px', marginLeft: 10 }}>
          <label className="switch">
            <input
              type="checkbox"
              className="slider"
              checked={context.oscillate}
              onChange={context.onOscillate}
            />
            <span className="toggle round" />
          </label>
        </div>
      </Center>
      <Center>
        <blockquote id="note">
          Toggle to disable or enable the oscillations and then press & release
          the square.
        </blockquote>
      </Center>
    </React.Fragment>
  )
}

Oscillation.contextTypes = {
  oscillate: PropTypes.bool,
  onOscillate: PropTypes.func,
}
