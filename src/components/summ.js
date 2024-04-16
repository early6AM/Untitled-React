import React from 'react'

import PropTypes from 'prop-types'

import './summ.css'

const Summ = (props) => {
  return (
    <div className="summ-depth5-frame0">
      <p className="summ-text">{props.text1}</p>
      <span className="summ-price">{props.price}</span>
    </div>
  )
}

Summ.defaultProps = {
  text1: 'Итого',
  price: '3 000 руб.',
}

Summ.propTypes = {
  text1: PropTypes.string,
  price: PropTypes.string,
}

export default Summ
