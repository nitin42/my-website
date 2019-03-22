import React from 'react'

import Leaves from './sketches/Leaves'
import Circles from './sketches/Circles'
import Squares from './sketches/Squares'
import Shapes from './sketches/Shapes'
import Waves from './sketches/Waves'
import MixedShapes from './sketches/Shader-Shapes'
import SimpleNoiseShader from './sketches/Shader-Simplex-Noise'
import NoiseGainShader from './sketches/Shader-Noise-Gain'
import SimpleNoiseShaderTwo from './sketches/Shader-Noise-Simplex-Two'
import PolarShapes from './sketches/Shader-Polar-Shapes'

const Artworks = props => (
  <React.Fragment>
    <h1
      style={{
        borderLeft: '8px solid #4f4f4f',
        paddingLeft: '10px',
      }}
    >
      Artworks
    </h1>
    <div className="artworks">
      <Leaves height={500} width={500} id="leaves" />
      <Circles height={500} width={500} id="circle" />
      <Squares height={500} width={500} id="squares" />
      <Shapes height={500} width={500} id="shapes" />
      <Waves height={500} width={500} id="waves" />
      <MixedShapes height={500} width={500} id="shader-shapes" />
      <SimpleNoiseShader height={500} width={500} id="noise-simplex" />
      <NoiseGainShader id="noise-gain" maxField height={500} width={500} />
      <NoiseGainShader
        id="noise-gain-without-maxfield"
        height={500}
        width={500}
      />
      <SimpleNoiseShaderTwo id="noise-simplex-two" height={500} width={500} />
      <PolarShapes id="polar-shapes" height={500} width={500} />
    </div>
  </React.Fragment>
)

export default Artworks
