const randomColor = require('randomcolor') // import the script
import { random, createTwoJSDesign } from 'react-generative-tools'

const createSubLeaves = (instance, x, y, radius, sides, props) => {
  const star = instance.makeStar(x, y, radius, radius - 30, sides)

  let i = 1
  i++

  star.fill = props.fill
  star.stroke = props.stroke
  // This ensure that each leave is positioned differently
  star.rotation = Math.random() * Math.PI * i * random(10, 80)

  // This condition here determines how all the recursive calls compose leaves
  if (radius > random(1, 20)) {
    createSubLeaves(
      instance,
      x + radius / props.innerRadiusOffset,
      y,
      radius / props.innerRadiusOffset,
      sides,
      props
    )
    createSubLeaves(
      instance,
      x - radius / props.innerRadiusOffset,
      y,
      radius / props.innerRadiusOffset,
      sides,
      props
    )
    createSubLeaves(
      instance,
      x,
      y + radius / props.innerRadiusOffset,
      radius / props.innerRadiusOffset,
      sides,
      props
    )
    createSubLeaves(
      instance,
      x,
      y - radius / props.innerRadiusOffset,
      radius / props.innerRadiusOffset,
      sides,
      props
    )
  }
}

const props = {
  stroke: randomColor(),
  fill: randomColor(),
  // Since we internally use star construct to make something closer to a leave, these defaults should not be changed
  length: 140,
  sides: 1.8,
  innerRadiusOffset: 1.9,
}

// Top level function that starts the process of creating leaves
const createLeaves = instance => {
  const { length: radius, sides } = props
  const x = instance.width / 2
  const y = instance.height / 2

  // Recursively calls itself to create multiple leaves with different position and composes them using radius offset
  createSubLeaves(instance, x, y, radius, sides, props)
}

// Render the leaves
const renderLeaves = two => {
  createLeaves(two)
}

const Leaves = createTwoJSDesign(renderLeaves)

export default Leaves
