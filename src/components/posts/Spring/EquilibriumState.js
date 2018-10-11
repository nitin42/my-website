import React from 'react'
import PropTypes from 'prop-types'

import { Title } from '../Title'
import { Center } from '../Center'
import { Box } from './Box'

export class EquilibriumState extends React.Component {
  static contextTypes = {
    unit1: PropTypes.number,
    unit2: PropTypes.number,
    springValue: PropTypes.string,
    innerWidth: PropTypes.number,
  }

  render() {
    const props = this.props
    const context = this.context

    const { s7 } = props

    return (
      <React.Fragment>
        <div style={{ marginTop: '2em' }}>
          <Title>Equilibrium state</Title>
        </div>
        <p>
          When a spring is displaced from its rest position or the end value, so
          that its length changes by an amount <strong>D</strong> from its
          equilibrium length, it applies a force <strong>F=-KD</strong> in the
          direction towards its equilibrium position. This position value can be
          mapped to an animaton range to drive physical animations on a screen
          until the restoring force (force which is applied by a spring)
          restores the spring to its equilibrium length.
        </p>
        <blockquote id="note">
          In some animation libraries (native and web), this behaviour is hidden
          inside a physics solver loop where all the springs are contained in a
          spring system. A spring system is responsible for starting the
          animation when a spring is stretched. This loop then uses observer
          pattern to notify about the spring position updates to all springs
          present in spring system and animate the elements on a screen.
        </blockquote>
        <p>
          The mapped values can be configured depending upon the animation
          property. Let's say we want to scale up and down an element. We'll
          then map the spring position value to two values, one for scaling up
          and other for scaling down the element. For example - Setting the
          value{' '}
          <strong
            style={{
              cursor: 'pointer',
              userSelect: 'none',
              borderBottom: '1px dotted black',
            }}
            onContextMenu={e => {
              e.preventDefault()
              props.context.setState(state => ({ unit1: state.unit1 - 1 }))
              s7.setOutputRange = () => [context.unit2, context.unit1]
            }}
            onClick={e => {
              props.context.setState(state => ({ unit1: state.unit1 + 1 }))
              s7.setOutputRange = () => [context.unit2, context.unit1]
            }}
          >
            {context.unit1} unit
          </strong>{' '}
          when scaling up and{' '}
          <strong
            style={{
              cursor: 'pointer',
              userSelect: 'none',
              borderBottom: '1px dotted black',
            }}
            onContextMenu={e => {
              e.preventDefault()
              props.context.setState(state => ({ unit2: state.unit2 - 1 }))
              s7.setOutputRange = () => [context.unit2, context.unit1]
            }}
            onClick={e => {
              props.context.setState(state => ({ unit2: state.unit2 + 1 }))
              s7.setOutputRange = () => [context.unit2, context.unit1]
            }}
          >
            {context.unit2} unit
          </strong>{' '}
          when scaling down.
        </p>
        <blockquote id="note">
          {context.innerWidth <= 450
            ? 'Tap to increase the scale up and down units. To enable more controls, switch to a desktop or laptop.'
            : 'Right click to decrease and left click to increase the scale up and down units.'}
          &nbsp;Note that, increasing scale units may cause the square to take
          up more space and create a clutter on a small screen.
        </blockquote>
        <p>Try pressing and releasing the square.</p>
        <Center>
          <Box
            el={s7.div}
            mouseUp={() => s7.setValue(0)}
            mouseDown={() => s7.setValue(1)}
            touchStart={() => s7.setValue(0)}
            touchEnd={() => s7.setValue(1)}
          />
          <div style={{ marginTop: '10px' }}>
            <strong style={{ fontSize: '1.2em', color: '#bebebe' }}>
              Spring position value: {context.springValue}
            </strong>
          </div>
        </Center>
        <p style={{ marginTop: '30px' }}>
          In the above example, when the square is pressed, the spring is
          displaced from its rest position and exerts a restoring force. Until
          this restoring force is resolved to the equilibrium state, we map the
          spring position value to an animation range{' '}
          <strong style={{ fontWeight: 600 }}>
            [{context.unit2}, {context.unit1}]
          </strong>{' '}
          for scaling up and down the square. When the equilibrium is achieved,
          the spring position value becomes{' '}
          <strong style={{ fontWeight: 600 }}>{context.springValue}</strong>
        </p>
      </React.Fragment>
    )
  }
}
