import React from 'react'

export default Comp => () => (
  <div className="home">
    <div className="introduction">
      <Comp />
    </div>
  </div>
)
