import React from 'react'
import PropTypes from 'prop-types'

import { Spring as spring } from '../spring'

import { Introduction } from './posts/Spring/Introduction'
import { ElasticPotentialEnergy } from './posts/Spring/ElasticPotentialEnergy'
import { Oscillation } from './posts/Spring/Oscillation'
import { Elasticity } from './posts/Spring/Elasticity'
import { EquilibriumState } from './posts/Spring/EquilibriumState'
import { SpringMotion } from './posts/Spring/SpringMotion'
import { Applications } from './posts/Spring/Applications'
import { Resources } from './posts/Spring/Resources'
import { Glossary } from './posts/Spring/Glossary'

import { Center } from './posts/Center'
import { Title } from './posts/Title'

const s = spring({ bounciness: 20, speed: 10 })
const s1 = spring()
const s3 = spring()
const s4 = spring()

const s5 = spring()
const s6 = spring({ bounciness: 30, speed: 20 })
const s7 = spring()
const s8 = spring({ bounciness: 40 })

const s9 = spring({ bounciness: 30 })
const s10 = spring({ bounciness: 40, spped: 10 })
const s11 = spring({ bounciness: 20 })
const s12 = spring({ bounciness: 20 })

const s13 = spring({ bounciness: 20 })

const map = {
  inputRange: [0, 1],
  outputRange: [1, 1.6],
}

const scaleProps = {
  property: 'scale',
  map,
}

const childContextTypes = () => ({
  skewX: PropTypes.string,
  radius: PropTypes.string,
  backgroundColor: PropTypes.string,
  value: PropTypes.number,
  friction: PropTypes.number,
  tension: PropTypes.number,
  frictionTwo: PropTypes.number,
  oscillate: PropTypes.bool,
  springValue: PropTypes.string,
  unit1: PropTypes.number,
  unit2: PropTypes.number,
  handleFriction: PropTypes.func,
  handleTension: PropTypes.func,
  handleTensionChange: PropTypes.func,
  handleFrictionChange: PropTypes.func,
  onOscillate: PropTypes.func,
  innerWidth: PropTypes.number,
  range: PropTypes.number,
  handleSlider: PropTypes.func,
  bg: PropTypes.string,
  ibg: PropTypes.string,
  irad: PropTypes.string,
  itrans: PropTypes.string,
  iskew: PropTypes.string,
  iheight: PropTypes.string,
  opacity: PropTypes.number,
})

const SpringNil = props => {
  const { children, ...rest } = props

  return <s.div {...rest}>{props.children}</s.div>
}

function invokeMess() {
  s
    .animate({
      property: 'rotateX',
      map: {
        inputRange: [0, 1],
        outputRange: ['0', '360deg'],
      },
      interpolation: (s, v, o) => {
        this.setState({
          skewX: o.deg(o.mapValues(v, 0, 360, 180, 360)),
        })
      },
    })
    .startAt(1)

  s1.animate({
    ...scaleProps,
    interpolation: (s, v, o) => {
      this.setState({
        radius: o.px(o.mapValues(v, 1, 2, 2, 2)),
        backgroundColor: o.interpolateColor(v, '#ffc3e1', '#ff78bb'),
      })
    },
  })

  s3.animate(scaleProps)
  s4.animate(scaleProps)
  s5.animate(scaleProps)
  s6.animate(scaleProps)

  s7.animate({
    property: 'scale',
    map: {
      inputRange: [0, 1],
      outputRange: [this.state.unit2, this.state.unit1],
    },
    interpolation: (s, v, o) =>
      this.setState({ springValue: Number(v).toFixed(2) }),
  })

  s8.animate(scaleProps)

  s9.animate(scaleProps)

  s10.animate({
    property: 'backgroundColor',
    blend: {
      colors: ['#ff69b4', '#69b4ff'],
      range: [0, 200],
    },
    interpolation: (s, v, o) => this.setState({ bg: v }),
  })

  s11.animate({
    property: 'rotate',
    map: {
      inputRange: [0, 1],
      outputRange: ['0deg', '360deg'],
    },
    interpolation: (s, v, o) =>
      this.setState({
        ibg: o.interpolateColor(v, '#ffc3e1', '#ff78bb'),
        itrans: o.px(o.mapValues(v, 0, 360, 0, 50)),
        iskew: o.deg(o.mapValues(v, 0, 360, 0, 180)),
      }),
  })

  s12.animate({
    property: 'rotate',
    map: {
      inputRange: [0, 1],
      outputRange: ['0deg', '360deg'],
    },
    interpolation: (s, v, o) =>
      this.setState({
        iheight: o.px(o.mapValues(v, 0, 360, 60, 120)),
      }),
  })

  s13.animate({
    property: 'scale',
    map: {
      inputRange: [0, 1],
      outputRange: [1, 1.8],
    },
    interpolation: (s, v, o) =>
      this.setState({
        radius: o.px(o.mapValues(v, 1, 1.8, 1, 50)),
      }),
  })
}

export default class Spring extends React.Component {
  ref = null

  state = {
    skewX: null,
    radius: null,
    backgroundColor: '#ff96ca',
    value: 5,
    friction: 5,
    tension: 5,
    frictionTwo: 5,
    oscillate: true,
    springValue: '1.00',
    unit1: 2.0,
    unit2: 1.0,
    innerWidth: 0,
    range: 0,
    bg: '#ff96ca',
    ibg: '#ff96ca',
    irad: '1px',
    itrans: '0px',
    iskew: '0deg',
    iheight: '60px',
    opacity: 1,
  }

  getChildContext() {
    return {
      skewX: this.state.skewX,
      radius: this.state.radius,
      backgroundColor: this.state.backgroundColor,
      value: this.state.value,
      friction: this.state.friction,
      tension: this.state.tension,
      frictionTwo: this.state.frictionTwo,
      oscillate: this.state.oscillate,
      springValue: this.state.springValue,
      unit1: this.state.unit1,
      unit2: this.state.unit2,
      handleTension: this.handleTension,
      handleFriction: this.handleFriction,
      handleFrictionChange: this.handleFrictionChange,
      handleTensionChange: this.handleTensionChange,
      onOscillate: this.onOscillate,
      range: this.state.range,
      innerWidth: this.state.innerWidth,
      handleSlider: this.handleSlider,
      bg: this.state.bg,
      ibg: this.state.ibg,
      irad: this.state.irad,
      itrans: this.state.itrans,
      iskew: this.state.iskew,
      iheight: this.state.iheight,
      opacity: this.state.opacity,
    }
  }

  static childContextTypes = childContextTypes()

  componentDidMount() {
    this.setState({ innerWidth: window.innerWidth })
    invokeMess.call(this)
  }

  configureSpring = (spring, friction, tension) => {
    friction ? (spring._springConfig.friction = friction) : null
    tension ? (spring._springConfig.tension = tension) : null
  }

  handleTension = e => {
    const value = Number(e.target.value)
    this.setState({ value })
    this.configureSpring(s3, 1, value)
  }

  handleFrictionChange = e => {
    const value = Number(e.target.value)
    this.setState({ frictionTwo: value })
    this.configureSpring(s5, value)
  }

  handleTensionChange = e => {
    const value = Number(e.target.value)
    this.setState({ tension: value })
    this.configureSpring(s5, undefined, value)
  }

  handleFriction = e => {
    const value = Number(e.target.value)
    this.setState({ friction: value })
    this.configureSpring(s4, value, 10)
  }

  onOscillate = e => {
    this.setState(state => ({ oscillate: !state.oscillate }))
    s6.setOvershootClampingEnabled(this.state.oscillate)
  }

  handleSlider = e => {
    const value = Number(e.target.value)
    s9.seek(value)
    this.setState({ range: value })
  }

  render() {
    return (
      <React.Fragment>
        <h1 className="post-title">
          An interactive, explorable explanation about spring physics animation
        </h1>
        <SpringNil
          className="spring-one"
          style={{
            transform: `skewX(${this.state.skewX})`,
          }}
        >
          Spring Physics Animation
        </SpringNil>
        <div className="spring-content">
          <Introduction />
          <SpringMotion s1={s1} />
          <Elasticity s3={s3} s4={s4} s5={s5} />
          <Oscillation s6={s6} />
          <EquilibriumState context={this} s7={s7} />
          <ElasticPotentialEnergy s8={s8} s9={s9} />
          <Applications s10={s10} s11={s11} s12={s12} s13={s13} />
          <div style={{ marginTop: '50px' }} />
          <hr />
          <p>
            That's it! I hope you enjoyed reading this blog post. If you liked
            reading it then{' '}
            <a
              target="_blank"
              href="https://twitter.com/intent/tweet?text=Interactive%20Explorable%20Explanation%20about%20spring%20physics%20animation%20model&via=NTulswani"
            >
              you can share it on Twitter
            </a>{' '}
            or{' '}
            <a href="https://twitter.com/NTulswani" target="_blank">
              reach me out
            </a>{' '}
            for suggestions to improve this post 😃
          </p>
          <Resources />
          <strong>Thanks for reading!</strong>
          <Glossary />
        </div>
      </React.Fragment>
    )
  }
}
