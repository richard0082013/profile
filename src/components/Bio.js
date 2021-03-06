import React from 'react'

// Import typefaces
import 'typeface-montserrat'
import 'typeface-merriweather'

import profilePic from './avanta.jpg'
import { rhythm } from '../utils/typography'

class Bio extends React.Component {
  render() {
    return (
      <div
        style={{
          display: 'flex',
          marginBottom: rhythm(2.5),
        }}
      >
        <img
          src={profilePic}
          alt={`Richard Bo Tian`}
          style={{
            marginRight: rhythm(1 / 2),
            marginBottom: 0,
            width: rhythm(2),
            height: rhythm(2),
          }}
        />
        <p>
          Written by <strong>Bo Tian(Richard)</strong> who lives and works in Sydney building useful things.{' '}
          <a href="https://linkedin.com/in/bo-tian-9012a2124">
            You can find him on Linkedin
          </a>
        </p>
      </div>
    )
  }
}

export default Bio
