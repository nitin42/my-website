import React from 'react'

const Codepen = ({ title, src, href }) => (
  <div>
    <h1>{title}</h1>
    <iframe
      scrolling="no"
      title={title}
      src={src}
      frameborder="no"
      allowtransparency="true"
      allowfullscreen="true"
    >
      <a href={href}>{title}</a>
    </iframe>
  </div>
)

const Artworks = props => (
  <div>
    <h1
      style={{
        borderLeft: '8px solid #4f4f4f',
        paddingLeft: '10px',
      }}
    >
      Artworks
    </h1>
    <div className="artworks">
      <Codepen
        title="Leaves"
        src="//codepen.io/Nitin_42/embed/ywjvzJ/?height=653&theme-id=light&default-tab=result"
        href="https://codepen.io/Nitin_42/pen/ywjvzJ/"
      />
      <Codepen
        title="Simplex Noise"
        src="//codepen.io/Nitin_42/embed/EMLQOo/?height=265&theme-id=light&default-tab=result"
        href="https://codepen.io/Nitin_42/pen/EMLQOo/"
      />
      <Codepen
        title="Molecules"
        src="//codepen.io/Nitin_42/embed/vPjdzb/?height=265&theme-id=light&default-tab=result"
        href="https://codepen.io/Nitin_42/pen/vPjdzb/"
      />
      <Codepen
        title="Noise Gain"
        href="https://codepen.io/Nitin_42/pen/bZMLMG/"
        title="Noise-Gain"
        src="//codepen.io/Nitin_42/embed/bZMLMG/?height=265&theme-id=light&default-tab=result"
      />
      <Codepen
        title="Waves"
        href="https://codepen.io/Nitin_42/pen/KERQZV/"
        src="//codepen.io/Nitin_42/embed/KERQZV/?height=265&theme-id=light&default-tab=result"
      />
      <Codepen
        title="Squares"
        href="https://codepen.io/Nitin_42/pen/xBjYrX/"
        src="//codepen.io/Nitin_42/embed/xBjYrX/?height=265&theme-id=light&default-tab=result"
      />
      <Codepen
        title="Circles"
        href="https://codepen.io/Nitin_42/pen/oVdoRX/"
        src="//codepen.io/Nitin_42/embed/oVdoRX/?height=265&theme-id=light&default-tab=result"
      />
      <Codepen
        title="Shapes"
        href="https://codepen.io/Nitin_42/pen/ywjvva/"
        src="//codepen.io/Nitin_42/embed/ywjvva/?height=265&theme-id=light&default-tab=result"
      />
    </div>
  </div>
)

export default Artworks
