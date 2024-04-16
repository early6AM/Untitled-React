import React from 'react'

import PropTypes from 'prop-types'

import './banner.css'

const Banner = (props) => {
  return (
    <div className={`banner-container ${props.rootClassName} `}>
      <img src={props.imageSrc} alt="image" className="banner-image" />
      <div className="banner-container1">
        <span className="banner-title">{props.titleText}</span>
        <button type="button" className="banner-button button">
          {props.buttonText}
        </button>
      </div>
    </div>
  )
}

Banner.defaultProps = {
  imageSrc:
    'https://untitled-react-orcin.vercel.app/external/tq_01pufu4rii-xdoq-1100w.png',
  titleText: 'Откройте для себя последние модные тренды',
  buttonText: 'Исследовать',
  rootClassName: '',
}

Banner.propTypes = {
  imageSrc: PropTypes.string,
  titleText: PropTypes.string,
  buttonText: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default Banner
