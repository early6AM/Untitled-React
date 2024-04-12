import React from 'react'

import { Helmet } from 'react-helmet'

import Navbar from '../components/navbar'
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
        <div className="cart-depth4-frame2">
          <div className="cart-depth5-frame0">
            <div className="cart-depth6-frame0"></div>
            <div className="cart-depth6-frame2">
              <span className="cart-text07">
                <span>Шелковое халат</span>
              </span>
              <span className="cart-text09">
                <span>Размер: S, Цвет: Белый</span>
              </span>
            </div>
          </div>
          <span className="cart-text11">
            <span>$100</span>
          </span>
        </div>
        <div className="cart-depth4-frame21">
          <div className="cart-depth5-frame01">
            <div className="cart-depth6-frame01"></div>
            <div className="cart-depth6-frame21">
              <span className="cart-text13">Шелковый топ</span>
              <span className="cart-text14">Размер: S, Цвет: Белый</span>
            </div>
          </div>
          <span className="cart-text15">
            <span>$100</span>
          </span>
        </div>
        <div className="cart-depth4-frame4">
          <div className="cart-depth5-frame02">
            <div className="cart-depth6-frame02"></div>
            <div className="cart-depth6-frame22">
              <span className="cart-text17">
                <span>Шелковые штаны</span>
              </span>
              <span className="cart-text19">
                <span>Размер: S, Цвет: Белый</span>
              </span>
            </div>
          </div>
          <span className="cart-text21">
            <span>$50</span>
          </span>
        </div>
        <div className="cart-depth4-frame5">
          <div className="cart-depth5-frame03">
            <div className="cart-depth6-frame03"></div>
            <div className="cart-depth6-frame23">
              <span className="cart-text23">
                <span>Шелковые штаны</span>
              </span>
              <span className="cart-text25">
                <span>Размер: S, Цвет: Белый</span>
              </span>
            </div>
          </div>
          <span className="cart-text27">
            <span>$50</span>
          </span>
        </div>
        <div className="cart-depth4-frame6">
          <div className="cart-depth5-frame04">
            <div className="cart-depth6-frame04"></div>
            <div className="cart-depth6-frame24">
              <span className="cart-text29">
                <span>Шелковые штаны</span>
              </span>
              <span className="cart-text31">
                <span>Размер: S, Цвет: Белый</span>
              </span>
            </div>
          </div>
          <span className="cart-text33">
            <span>$50</span>
          </span>
        </div>
        <div className="cart-depth4-frame7">
          <div className="cart-depth6-frame05">
            <img
              alt="Depth8Frame01329"
              src="/external/depth8frame01329-utd.svg"
              className="cart-depth8-frame0"
            />
          </div>
          <span className="cart-text35">
            <span>Добавить заметку</span>
          </span>
        </div>
        <div className="cart-depth4-frame8">
          <img
            alt="Depth8Frame01329"
            src="/external/depth8frame01329-63y2.svg"
            className="cart-depth8-frame01"
          />
          <span className="cart-text37">
            <span>Это подарок</span>
          </span>
        </div>
        <div className="cart-depth5-frame05">
          <span className="cart-text39">
            <span>Итого</span>
          </span>
          <span className="cart-text41">
            <span>$300</span>
          </span>
        </div>
        <div className="cart-depth5-frame06">
          <span className="cart-text43">Доставка</span>
          <span className="cart-text44">$10</span>
        </div>
        <div className="cart-depth5-frame07">
          <span className="cart-text45">Налоги</span>
          <span className="cart-text46">$40</span>
        </div>
        <div className="cart-depth4-frame10">
          <div className="cart-depth5-frame08">
            <span className="cart-text47">
              <span>Перейти к оформлению заказа</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart
