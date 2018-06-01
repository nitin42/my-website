import React from 'react'
import PropTypes from 'prop-types'

import { Title } from '../Title'
import { Center } from '../Center'
import { Heading } from '../Heading'

import { Box } from './Box'

export const Applications = (props, context) => {
  const { s10, s11, s12, s13 } = props

  return (
    <div style={{ marginTop: '60px' }}>
      <Title>Applications</Title>
      <ul id="projects" style={{ marginTop: '10px' }}>
        <li>
          <Heading>Blending colors</Heading>
          <p>
            Similar to output ranges for transform properties, spring position
            value can be mapped to an input range to produce an output range,
            which further can be used to mix one or more hex color codes.
          </p>
          <blockquote id="note">
            Press the square to see the blending of colors.
          </blockquote>
          <Center direction="column">
            <Box
              el={s10.div}
              className="square-color"
              mouseUp={() => s10.setValue(40)}
              mouseDown={() => s10.setValue(162)}
              touchStart={() => s10.setValue(40)}
              touchEnd={() => s10.setValue(162)}
            />
            <div>
              <p style={{ margin: '0 auto', color: context.bg }}>
                {context.bg}
              </p>
            </div>
          </Center>
          <p>
            {' '}
            Notice the hex color codes below the square. They continue to mix
            until the equilibrium is achieved.
          </p>
        </li>
        <li>
          <Heading>Interpolations</Heading>
          <p>
            Interpolating one or more animation property of an element. Try
            pressing and releasing the squares.
          </p>
          <Center>
            <Box
              el={s11.div}
              className="square-color-interpolation"
              style={{
                transform: `translateX(-${context.itrans})`,
              }}
              mouseUp={() => s11.setValue(0)}
              mouseDown={() => s11.setValue(1)}
              touchStart={() => s11.setValue(0)}
              touchEnd={() => s11.setValue(1)}
            />
            <Box
              el={s12.div}
              className="square-color"
              style={{
                height: context.iheight,
              }}
              mouseUp={() => s12.setValue(0)}
              mouseDown={() => s12.setValue(1)}
              touchStart={() => s12.setValue(0)}
              touchEnd={() => s12.setValue(1)}
            />
            <Box
              el={s13.div}
              className="square-color"
              style={{
                marginLeft: '30px',
                borderRadius: context.radius,
              }}
              mouseUp={() => s13.setValue(0)}
              mouseDown={() => s13.setValue(1)}
              touchStart={() => s13.setValue(0)}
              touchEnd={() => s13.setValue(1)}
            />
          </Center>
        </li>
      </ul>
    </div>
  )
}

Applications.contextTypes = {
  bg: PropTypes.string,
  itrans: PropTypes.string,
  iheight: PropTypes.string,
  radius: PropTypes.number,
}
