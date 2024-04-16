import React from 'react'

import PropTypes from 'prop-types'

import './filter-category-header.css'

const FilterCategoryHeader = (props) => {
  return (
    <div className={`filter-category-header-container ${props.rootClassName} `}>
      <span className="filter-category-header-text">{props.text}</span>
    </div>
  )
}

FilterCategoryHeader.defaultProps = {
  rootClassName: '',
  text: 'Название категории',
}

FilterCategoryHeader.propTypes = {
  rootClassName: PropTypes.string,
  text: PropTypes.string,
}

export default FilterCategoryHeader
