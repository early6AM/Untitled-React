import React from 'react'

import PropTypes from 'prop-types'

import './horizontal-category-card.css'

const HorizontalCategoryCard = (props) => {
  return (
    <div className="horizontal-category-card-depth4-frame3">
      <img
        src={props.imageSrc}
        alt="image"
        className="horizontal-category-card-image"
      />
      <div className="horizontal-category-card-container">
        <span className="horizontal-category-card-title">
          {props.categoryTitle}
        </span>
        <span className="horizontal-category-card-count">{props.count}</span>
      </div>
    </div>
  )
}

HorizontalCategoryCard.defaultProps = {
  imageSrc: 'https://play.teleporthq.io/static/svg/default-img.svg',
  categoryTitle: 'Title',
  count: '400 товаров',
}

HorizontalCategoryCard.propTypes = {
  imageSrc: PropTypes.string,
  categoryTitle: PropTypes.string,
  count: PropTypes.string,
}

export default HorizontalCategoryCard
