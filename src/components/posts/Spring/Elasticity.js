import React from 'react'
import PropTypes from 'prop-types'

import { Title } from '../Title'
import { Center } from '../Center'
import { Box } from './Box'
import { Slider } from './Slider'

export const Elasticity = (props, context) => {
  const { s3, s4, s5 } = props

  return (
    <React.Fragment>
      <Title>Elasticity</Title>
      <p>
        Springs are configured to absorb and persist the energy, and also to
        create a resistance to a pulling force i.e deforming force which causes
        it to change its original state. This pulling force is the spring
        tension and it determines the extensibility of a spring. Mathematically,
        this is represented as -
      </p>
      <div className="spring-one-formulae">F = -K x D</div>
      <p>
        where <strong>K</strong> is the spring constant (also called force
        multiplier) and <strong>D</strong> is the displacement value of the
        spring from its rest point or the end position. This is{' '}
        <a
          href="https://www.khanacademy.org/science/physics/work-and-energy/hookes-law/a/what-is-hookes-law"
          target="_blank"
        >
          Hook's Law.
        </a>
      </p>
      <p>
        Let's try changing the elasticity of a spring by configuring the
        stiffness (tension). Move the slider to change the stiffness and press
        the square to see how it effects the elasticity.
      </p>
      <Center>
        <Box
          id="square-small"
          el={s3.div}
          mouseUp={() => s3.setValue(0)}
          mouseDown={() => s3.setValue(1)}
          touchStart={() => s3.setValue(0)}
          touchEnd={() => s3.setValue(1)}
        />
        <div style={{ color: '#bebebe' }}>
          <span id="sub">
            <strong style={{ color: '#bebebe' }}>Stiffness: &nbsp;</strong>
          </span>
          <Slider value={context.value} handler={context.handleTension} />&nbsp;{
            context.value
          }{' '}
          Newtons
        </div>
      </Center>
      <br />
      <p>Now let's try changing the damping (friction).</p>
      <Center>
        <Box
          id="square-small"
          el={s4.div}
          mouseUp={() => s4.setValue(0)}
          mouseDown={() => s4.setValue(1)}
          touchStart={() => s4.setValue(0)}
          touchEnd={() => s4.setValue(1)}
        />
        <div style={{ color: '#bebebe' }}>
          <span id="sub">
            <strong style={{ color: '#bebebe' }}>Damping: &nbsp;</strong>
          </span>
          <Slider value={context.friction} handler={context.handleFriction} />&nbsp;{
            context.friction
          }{' '}
          Newtons
        </div>
      </Center>
      <br />
      <p>Finally, let's try changing both the damping and stiffness.</p>
      <Center>
        <Box
          id="square-small-both"
          el={s5.div}
          mouseUp={() => s5.setValue(0)}
          mouseDown={() => s5.setValue(1)}
          touchStart={() => s5.setValue(0)}
          touchEnd={() => s5.setValue(1)}
        />
        <div style={{ color: '#bebebe' }}>
          <span id="sub">
            <strong style={{ color: '#bebebe' }}>Stiffness: &nbsp;</strong>
          </span>
          <Slider
            value={context.tension}
            handler={context.handleTensionChange}
          />&nbsp;{context.tension} Newtons<br />
          <span id="sub" style={{ marginTop: '20px' }}>
            <strong style={{ marginLeft: '2px', color: '#bebebe' }}>
              Damping: &nbsp;
            </strong>
          </span>
          <Slider
            value={context.frictionTwo}
            handler={context.handleFrictionChange}
          />&nbsp;{context.frictionTwo} Newtons
        </div>
      </Center>
      <br />
    </React.Fragment>
  )
}

Elasticity.contextTypes = {
  value: PropTypes.number,
  friction: PropTypes.number,
  tension: PropTypes.number,
  frictionTwo: PropTypes.number,
  handleFriction: PropTypes.func,
  handleTension: PropTypes.func,
  handleTensionChange: PropTypes.func,
  handleFrictionChange: PropTypes.func,
}
