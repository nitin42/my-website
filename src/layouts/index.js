import React, { Children } from 'react'
import Helmet from 'react-helmet'

import Header from '../components/Header'

import './index.css'

const link = 'https://use.fontawesome.com/releases/v5.0.13/css/all.css'
const hash =
  'sha384-DNOHZ68U8hZfKXOrtjWvjxusGo9WQnrNx2sqG0tfsghAvtVlRW3tvkXWZh58N9jp'

export default ({ children }) => (
  <React.Fragment>
    <Helmet>
      <title>Nitin Tulswani</title>
      <link
        rel="stylesheet"
        href={link}
        integrity={hash}
        crossorigin="anonymous"
      />
      <link
        href="https://fonts.googleapis.com/css?family=Roboto:300"
        rel="stylesheet"
      />
      <script async src="https://static.codepen.io/assets/embed/ei.js" />
    </Helmet>
    <div className="header">
      <Header />
    </div>
    <div>{children()}</div>
  </React.Fragment>
)
