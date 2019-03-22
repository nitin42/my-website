import React from 'react'

const Codepen = ({ children, title }) => (
  <div>
    <h1>{title}</h1>
    {children}
  </div>
)

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
      <Codepen title="Leaves">
        <iframe
          height="600px"
          width="600px"
          scrolling="no"
          title="Leaves"
          src="//codepen.io/Nitin_42/embed/preview/ywjvzJ/?height=653&theme-id=light&default-tab=result"
          frameborder="no"
          allowtransparency="true"
          allowfullscreen="true"
        >
          <a href="https://codepen.io/Nitin_42/pen/ywjvzJ/">Leaves</a>{' '}
        </iframe>
      </Codepen>
      <Codepen title="Simplex Noise">
        <iframe
          height="600px"
          width="600px"
          scrolling="no"
          title="Simplex-Noise-Variant-Two"
          src="//codepen.io/Nitin_42/embed/EMLQOo/?height=265&theme-id=light&default-tab=result"
          frameborder="no"
          allowtransparency="true"
          allowfullscreen="true"
        >
          <a href="https://codepen.io/Nitin_42/pen/EMLQOo/">
            Simplex-Noise-Variant-Two
          </a>
        </iframe>
      </Codepen>
      <Codepen title="Molecules">
        <iframe
          height="600px"
          width="600px"
          scrolling="no"
          title="Simplex-Noise"
          src="//codepen.io/Nitin_42/embed/vPjdzb/?height=265&theme-id=light&default-tab=result"
          frameborder="no"
          allowtransparency="true"
          allowfullscreen="true"
        >
          <a href="https://codepen.io/Nitin_42/pen/vPjdzb/">Simplex-Noise</a>
        </iframe>
      </Codepen>
      <Codepen title="Noise Gain">
        <iframe
          height="600px"
          width="600px"
          scrolling="no"
          title="Noise-Gain"
          src="//codepen.io/Nitin_42/embed/bZMLMG/?height=265&theme-id=light&default-tab=result"
          frameborder="no"
          allowtransparency="true"
          allowfullscreen="true"
        >
          <a href="https://codepen.io/Nitin_42/pen/bZMLMG/">Noise-Gain</a>
        </iframe>
      </Codepen>
      <Codepen title="Waves">
        <iframe
          height="600px"
          width="600px"
          scrolling="no"
          title="Waves"
          src="//codepen.io/Nitin_42/embed/KERQZV/?height=265&theme-id=light&default-tab=result"
          frameborder="no"
          allowtransparency="true"
          allowfullscreen="true"
        >
          <a href="https://codepen.io/Nitin_42/pen/KERQZV/">Waves</a>
        </iframe>
      </Codepen>
      <Codepen title="Squares">
        <iframe
          height="600px"
          width="600px"
          scrolling="no"
          title="Squares"
          src="//codepen.io/Nitin_42/embed/xBjYrX/?height=265&theme-id=light&default-tab=result"
          frameborder="no"
          allowtransparency="true"
          allowfullscreen="true"
        >
          <a href="https://codepen.io/Nitin_42/pen/xBjYrX/">Squares</a>
        </iframe>
      </Codepen>
      <Codepen title="Circles">
        <iframe
          height="600px"
          width="600px"
          scrolling="no"
          title="Circles"
          src="//codepen.io/Nitin_42/embed/oVdoRX/?height=265&theme-id=light&default-tab=result"
          frameborder="no"
          allowtransparency="true"
          allowfullscreen="true"
        >
          <a href="https://codepen.io/Nitin_42/pen/oVdoRX/">Circles</a>
        </iframe>
      </Codepen>
      <Codepen title="Shapes">
        <iframe
          height="600px"
          width="600px"
          scrolling="no"
          title="Shapes"
          src="//codepen.io/Nitin_42/embed/ywjvva/?height=265&theme-id=light&default-tab=result"
          frameborder="no"
          allowtransparency="true"
          allowfullscreen="true"
        >
          <a href="https://codepen.io/Nitin_42/pen/ywjvva/">Shapes</a>
        </iframe>
      </Codepen>
    </div>
  </React.Fragment>
)

export default Artworks
