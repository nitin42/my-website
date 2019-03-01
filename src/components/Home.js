import React from 'react'

import Introduction from './Introduction'
import Projects from './Projects'
import Other from './Other'
import Header from './Header'

import { WindowSubscriptionsProvider } from './WindowSubscription'

export default () => (
    <div className="home">
      <div className="introduction">
        <Introduction />
        <Projects />
        <Other />
      </div>
    </div>
)
