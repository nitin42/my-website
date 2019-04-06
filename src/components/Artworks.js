import React from 'react'

const Codepen = ({ title, src, href, description }) => (
  <div>
    <h1
      style={{
        fontSize: '1.9em',
        borderLeft: '8px solid #4f4f4f',
        paddingLeft: '10px',
      }}
    >
      {title}
    </h1>
    {description && description()}
    <div>
      <iframe scrolling="no" title={title} src={src} frameBorder="no">
        <a href={href}>{title}</a>
      </iframe>
    </div>
  </div>
)

const Artworks = props => (
  <div>
    <div className="artworks">
      <Codepen
        title="Leaves"
        src="//codepen.io/Nitin_42/embed/preview/ywjvzJ/?height=653&theme-id=light&default-tab=result"
        href="https://codepen.io/Nitin_42/pen/ywjvzJ/"
      />
      <Codepen
        title="Simplex Noise"
        src="//codepen.io/Nitin_42/embed/preview/EMLQOo/?height=265&theme-id=light&default-tab=result"
        href="https://codepen.io/Nitin_42/pen/EMLQOo/"
        description={() => (
          <p>
            Inspired by{' '}
            <a
              href="https://thebookofshaders.com/11/"
              aria-label="Link to book of shaders"
            >
              The Book of Shaders
            </a>
          </p>
        )}
      />
      <Codepen
        title="Waves"
        href="https://codepen.io/Nitin_42/pen/KERQZV/"
        src="//codepen.io/Nitin_42/embed/preview/KERQZV/?height=265&theme-id=light&default-tab=result"
        description={() => <p>Generate wave like pattern with images</p>}
      />
      <Codepen
        title="Squares"
        href="https://codepen.io/Nitin_42/pen/xBjYrX/"
        src="//codepen.io/Nitin_42/embed/preview/xBjYrX/?height=265&theme-id=light&default-tab=result"
      />
      <Codepen
        title="Circles"
        href="https://codepen.io/Nitin_42/pen/oVdoRX/"
        src="//codepen.io/Nitin_42/embed/preview/oVdoRX/?height=265&theme-id=light&default-tab=result"
      />
      <Codepen
        title="Shapes"
        href="https://codepen.io/Nitin_42/pen/ywjvva/"
        src="//codepen.io/Nitin_42/embed/preview/ywjvva/?height=265&theme-id=light&default-tab=result"
      />
    </div>
  </div>
)

export default Artworks
