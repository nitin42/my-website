import React from 'react'

import Introduction from './Introduction'
import Projects from './Projects'
import Other from './Other'
import Header from './Header'
import Latest from './LatestProjects'

export default () => (
  <div className="home">
    <div className="introduction">
      <Introduction />
      <Projects />
      <Other />
      <Latest />
    </div>
  </div>
)
