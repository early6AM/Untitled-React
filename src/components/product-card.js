import React from 'react'

import PropTypes from 'prop-types'

import './product-card.css'

const ProductCard = (props) => {
  return (
    <div className={`product-card-depth6-frame0 ${props.rootClassName} `}>
      <img src={props.imageSrc} alt="image" className="product-card-image" />
      <div className="product-card-container">
        <div className="product-card-info">
          <span className="product-card-text">{props.productTitle}</span>
          <span className="product-card-text1">{props.price}</span>
        </div>
        <button
          type="button"
          className="product-card-add-to-cart-button button"
        >
          Добавить в корзину
        </button>
      </div>
    </div>
  )
}

ProductCard.defaultProps = {
  imageSrc:
    'https://untitled-react-orcin.vercel.app/external/tq_dvftlfkpr5-2qbw-200h.png',
  productTitle: 'Название товара',
  price: '2999 руб.',
  rootClassName: '',
}

ProductCard.propTypes = {
  imageSrc: PropTypes.string,
  productTitle: PropTypes.string,
  price: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default ProductCard
