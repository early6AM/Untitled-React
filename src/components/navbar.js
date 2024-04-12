import React from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import './navbar.css'

const Navbar = (props) => {
  return (
    <div className={`navbar-container ${props.rootClassName} `}>
      <div className="navbar-navbar">
        <Link to="/" className="navbar-logo">
          <span className="">{props.text}</span>
        </Link>
        <input
          type="text"
          placeholder={props.textinputPlaceholder1}
          className="navbar-textinput input"
        />
        <div className="navbar-depth3-frame1">
          <Link to="/search" className="navbar-navlink">
            <div className="navbar-search">
              <img
                alt={props.depth6Frame0Alt1}
                src={props.depth6Frame0Src1}
                className="navbar-icon"
              />
              <span className="navbar-text1">
                <span className="">{props.text1}</span>
              </span>
            </div>
          </Link>
          <div className="navbar-icons">
            <div className="navbar-like">
              <img
                alt={props.depth7Frame0Alt}
                src={props.depth7Frame0Src}
                className="navbar-icon1"
              />
            </div>
            <Link to="/cart" className="navbar-navlink1">
              <div className="navbar-cart">
                <img
                  alt={props.depth7Frame0Alt1}
                  src={props.depth7Frame0Src1}
                  className="navbar-icon2"
                />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

Navbar.defaultProps = {
  textinputPlaceholder1: 'placeholder',
  depth6Frame0Alt1: 'Depth6Frame04197',
  text: 'Bryansk',
  text1: 'Поиск',
  depth7Frame0Src2:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/14688dee-f48e-4cc6-a814-3c3070221abb/e6be6c0c-6ec8-4c1b-a6eb-edf9f7cd46f4?org_if_sml=1893&force_format=original',
  depth7Frame0Src1: '/external/depth7frame04198-il49.svg',
  depth7Frame0Alt2: 'Depth7Frame04199',
  rootClassName: '',
  depth7Frame0Src: '/external/depth7frame04198-beom.svg',
  depth6Frame0Src1: '/external/depth6frame04197-wfs.svg',
  depth7Frame0Alt: 'Depth7Frame04198',
  depth7Frame0Alt1: 'Depth7Frame04198',
}

Navbar.propTypes = {
  textinputPlaceholder1: PropTypes.string,
  depth6Frame0Alt1: PropTypes.string,
  text: PropTypes.string,
  text1: PropTypes.string,
  depth7Frame0Src2: PropTypes.string,
  depth7Frame0Src1: PropTypes.string,
  depth7Frame0Alt2: PropTypes.string,
  rootClassName: PropTypes.string,
  depth7Frame0Src: PropTypes.string,
  depth6Frame0Src1: PropTypes.string,
  depth7Frame0Alt: PropTypes.string,
  depth7Frame0Alt1: PropTypes.string,
}

export default Navbar
