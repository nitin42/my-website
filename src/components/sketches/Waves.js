import { random, createP5Sketch } from 'react-generative-tools'

let img

// Noise Algorithm
const modPerNoise = (p5, x, y, width) =>
  Math.pow(
    Math.sin(
      0.8 * x + p5.noise(x, y) * p5.map(p5.mouseX, 0, width, 0, 1.2) * y
    ),
    3
  )

function sketch(p5, props) {
  p5.preload = function() {
    img = p5.loadImage(require('../../assets/Leaves.png'))
  }

  // Fragment position x
  // Fragment position y
  let x
  let y
  // Color buffer which stores the greyscale values for each image pixels
  let col

  // normalizing constant
  let normalize_constant = 0.001
  // Depth is used to control the flow of noise
  let depth = 0.5

  p5.setup = function() {
    p5.createCanvas(props.height, props.width)
    p5.background('white')
    // No of fragments
    const n = 1000

    // Load all the fragment
    x = new Array(n)
    y = new Array(n)

    // Load the color buffer
    col = new Array(n)

    img.resize(p5.width, p5.height)
    img.loadPixels()

    for (let i = 0; i < x.length; i++) {
      // Store the fragment values randomly
      x[i] = random(0, p5.width)
      y[i] = random(0, p5.height)

      // Calculate the pixel location index (we normalise it's value too so that we don't get out of bound errors)
      let loc = parseInt(x[i]) + parseInt(y[i]) * p5.width
      // Retrieve and store the greyscale value
      col[i] = img.pixels[loc]
    }
  }

  p5.draw = function() {
    // This ensures that shapes are renders as if they were drawn by a pencil (produces sketch effect)
    p5.noStroke()

    // Update the depth accordingly
    depth = p5.map(p5.mouseY, 0, p5.height, 0.5, 1.5)
    for (let i = 0; i < x.length; i++) {
      // Use the noise algorithm
      let alpha =
        modPerNoise(
          p5,
          x[i] * normalize_constant,
          y[i] * normalize_constant,
          p5.width
        ) *
        2 *
        Math.PI
      // Update the fragments using noise values (this adds randomness)
      x[i] += depth * Math.cos(alpha)
      y[i] += depth * Math.sin(alpha)

      if (y[i] > p5.height) {
        y[i] = 0
        x[i] = random(0, p5.width)
      }

      x[i] = x[i] % p5.width
      y[i] = y[i] % p5.height

      // Finally, fill the stored greyscale values
      p5.fill(col[i], 4)
      p5.ellipse(x[i], y[i], random(1, 2), random(1, 2))
    }
  }
}

const Waves = createP5Sketch(sketch)

export default Waves
