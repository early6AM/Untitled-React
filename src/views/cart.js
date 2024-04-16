import React from 'react'

import { Helmet } from 'react-helmet'

import Navbar from '../components/navbar'
import ProductInCart from '../components/product-in-cart'
import Summ from '../components/summ'
import './cart.css'

const Cart = (props) => {
  return (
    <div className="cart-container">
      <Helmet>
        <title>exported project</title>
      </Helmet>
      <Navbar rootClassName="navbar-root-class-name2"></Navbar>
      <div className="cart-content">
        <div className="cart-address">
          <span className="cart-text">
            <span>Главная</span>
          </span>
          <span className="cart-text02">/</span>
          <span className="cart-text03">
            <span>Женщины</span>
          </span>
        </div>
        <span className="cart-text05">
          <span>Корзина</span>
        </span>
        <ProductInCart
          productTitle="Шелковый топ"
          imageSrc="https://untitled-react-orcin.vercel.app/external/tq_lkzgkzhhdc-5btu-200h.png"
        ></ProductInCart>
        <ProductInCart
          productTitle="Шелковые штаны"
          imageSrc="https://untitled-react-orcin.vercel.app/external/tq_xb6xxkxbka-cpzp-200h.png"
        ></ProductInCart>
        <ProductInCart
          productTitle="Шелковые штаны"
          price="5000 руб."
          imageSrc="https://untitled-react-orcin.vercel.app/external/tq_rrytabj38l-ilhl-200h.png"
        ></ProductInCart>
        <ProductInCart
          productTitle="Шелковый топ"
          price="4200 руб."
          imageSrc="https://untitled-react-orcin.vercel.app/external/tq_gkfntxsose-pd3g-200h.png"
        ></ProductInCart>
        <div className="cart-add-note">
          <img
            alt="Depth8Frame01329"
            src="/external/depth8frame01329-utd.svg"
            className="cart-icon"
          />
          <span className="cart-text07">
            <span>Добавить заметку</span>
          </span>
        </div>
        <div className="cart-surprise">
          <img
            alt="Depth8Frame01329"
            src="/external/depth8frame01329-63y2.svg"
            className="cart-checkbox"
          />
          <span className="cart-text09">
            <span>Это подарок</span>
          </span>
        </div>
        <Summ price="15 200 руб."></Summ>
        <Summ text1="Доставка" price="0 руб."></Summ>
        <Summ price="15 200 руб."></Summ>
        <div className="cart-button">
          <span className="cart-text11">
            <span>Перейти к оформлению заказа</span>
          </span>
        </div>
      </div>
    </div>
  )
}

export default Cart
