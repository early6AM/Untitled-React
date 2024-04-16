import React from 'react'

import PropTypes from 'prop-types'

import './product-in-cart.css'

const ProductInCart = (props) => {
  return (
    <div className="product-in-cart-depth4-frame2">
      <div className="product-in-cart-info">
        <img
          src={props.imageSrc}
          alt="image"
          className="product-in-cart-image"
        />
        <div className="product-in-cart-container">
          <span className="product-in-cart-title">{props.productTitle}</span>
          <span className="product-in-cart-description">
            {props.description}
          </span>
        </div>
      </div>
      <span className="product-in-cart-price">{props.price}</span>
    </div>
  )
}

ProductInCart.defaultProps = {
  imageSrc: 'https://play.teleporthq.io/static/svg/default-img.svg',
  productTitle: 'Название товара',
  description: 'Размер: S, Цвет: Белый',
  price: '3000 руб.',
}

ProductInCart.propTypes = {
  imageSrc: PropTypes.string,
  productTitle: PropTypes.string,
  description: PropTypes.string,
  price: PropTypes.string,
}

export default ProductInCart
