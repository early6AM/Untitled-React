import React from 'react'

import PropTypes from 'prop-types'

import './chip.css'

const Chip = (props) => {
  return (
    <div className={`chip-chip ${props.rootClassName} `}>
      <span className="chip-text">{props.text}</span>
    </div>
  )
}

Chip.defaultProps = {
  text: 'Чип',
  rootClassName: '',
}

Chip.propTypes = {
  text: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default Chip
