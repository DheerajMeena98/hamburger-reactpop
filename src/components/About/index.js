import {Component} from 'react'

import Header from '../Header'
import './index.css'

class About extends Component {
  render() {
    return (
      <div className="home-container">
        <Header />
        <div className="home-section">
          <img
            src="https://assets.ccbp.in/frontend/react-js/about-sm-img.png"
            alt="about"
            className="about-sm-image"
          />
          <img
            src="https://assets.ccbp.in/frontend/react-js/about-lg-img.png"
            alt="about"
            className="about-lg-image"
          />
        </div>
      </div>
    )
  }
}

export default About
