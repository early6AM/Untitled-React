import React from 'react'

import PropTypes from 'prop-types'

import './category-header.css'

const CategoryHeader = (props) => {
  return (
    <div className={`category-header-container ${props.rootClassName} `}>
      <span className="category-header-text">{props.text}</span>
    </div>
  )
}

CategoryHeader.defaultProps = {
  text: 'Название категории',
  rootClassName: '',
}

CategoryHeader.propTypes = {
  text: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default CategoryHeader
