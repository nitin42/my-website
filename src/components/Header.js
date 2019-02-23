import React from 'react'
import Link from 'gatsby-link'

import { Center } from './posts/Center'

export default class Header extends React.Component {
  componentDidMount() {
    if (window.innerWidth > 450) {
      window.addEventListener('scroll', function() {
        myFunction()
        profileFun()
      })

      var header = document.getElementById('horizontal-list-links')
      var sticky = header.offsetTop

      function myFunction() {
        if (window.pageYOffset >= sticky) {
          header.classList.add('sticky')
        } else {
          header.classList.remove('sticky')
        }
      }

      var profile = document.getElementById('profile')
      var sticky = profile.offsetTop

      function profileFun() {
        if (window.pageYOffset >= sticky) {
          profile.classList.add('profile-sticky')
        } else {
          profile.classList.remove('profile-sticky')
        }
      }
    }
  }

  render() {
    return (
      <React.Fragment>
        <div style={{ textAlign: 'center' }}>
          <img
            id="profile"
            src={require('../assets/picture.jpeg')}
            style={{ borderRadius: '60px' }}
            width="120px"
            height="120px"
          />
        </div>
        <Center direction="column">
          <ul id="horizontal-list">
            <li>
              <a href="https://twitter.com/NTulswani" target="_blank">
                <i className="fab fa-twitter fa-2x" />
              </a>
            </li>
            <li>
              <a href="https://www.github.com/nitin42" target="_blank">
                <i className="fab fa-github-alt fa-2x" />
              </a>
            </li>
            <li>
              <a href="mailto:tulswani19@gmail.com?Subject=Hello" target="_top">
                <i className="fas fa-envelope fa-2x" />
              </a>
            </li>
          </ul>
          <ul id="horizontal-list-links">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/blog/">Blog</Link>
            </li>
            <li>
              <Link to="/work/">Work</Link>
            </li>
          </ul>
        </Center>
      </React.Fragment>
    )
  }
}
