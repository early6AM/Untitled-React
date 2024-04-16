import React from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import './navbar.css'

const Navbar = (props) => {
  return (
    <div className={`navbar-container ${props.rootClassName} `}>
      <Link to="/" className="navbar-logo">
        RED Roses
      </Link>
      <div className="navbar-menu">
        <Link to="/search" className="navbar-navlink">
          <div className="navbar-search">
            <img
              src="/external/depth6frame04197-wfs.svg"
              alt="Depth6Frame04197"
              className="navbar-icon"
            />
            <span className="navbar-text">
              <span className="">Поиск</span>
            </span>
          </div>
        </Link>
        <div className="navbar-like">
          <img
            alt="Depth7Frame04198"
            src="/external/depth7frame04198-beom.svg"
            className="navbar-icon1"
          />
        </div>
        <Link to="/cart" className="navbar-navlink1">
          <div className="navbar-cart">
            <img
              alt="Depth7Frame04198"
              src="/external/depth7frame04198-il49.svg"
              className="navbar-icon2"
            />
          </div>
        </Link>
      </div>
    </div>
  )
}

Navbar.defaultProps = {
  rootClassName: '',
}

Navbar.propTypes = {
  rootClassName: PropTypes.string,
}

export default Navbar
