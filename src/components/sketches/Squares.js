import { createP5Sketch } from 'react-generative-tools'

// No of the tiles in the grid
const tileCount = 50

// Random seed value
const actRandomSeed = 0

// Value setting the alpha channel
const alpha = 180

// Store the color value for each shape in our tile
let color

function sketch(p5, props) {
  const tiles = tileCount

  p5.setup = function() {
    p5.createCanvas(props.height, props.width)
    p5.noFill()
  }

  p5.draw = function() {
    p5.background(255)

    p5.randomSeed(actRandomSeed)

    p5.translate(p5.width / tiles / 2, p5.height / tiles / 2)
    p5.strokeWeight(p5.random(0.1, 0.25))

    for (let gridY = 0; gridY < tiles; gridY++) {
      for (let gridX = 0; gridX < tiles; gridX++) {
        color = p5.color(gridX, gridY, (gridX * gridY) / 255, alpha)
        p5.stroke(color)

        // Get the individual tile position
        const posX = (p5.width / tiles) * gridX
        const posY = (p5.height / tiles) * gridY

        // Determine the tile movement
        const shiftX =
          (p5.width / p5.random(p5.frameCount)) *
          p5.random(-p5.mouseX, p5.mouseX)
        const shiftY =
          (p5.height / p5.random(p5.frameCount)) *
          p5.random(-p5.mouseX, p5.mouseX)

        // Draw the shape
        p5.rect(posX + shiftX, posY + shiftY, p5.mouseY / 15, p5.mouseY / 15)
      }
    }
  }
}

const Squares = createP5Sketch(sketch)

export default Squares
