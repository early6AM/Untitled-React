import React from 'react'

import { Helmet } from 'react-helmet'

import Navbar from '../components/navbar'
import Banner from '../components/banner'
import CategoryHeader from '../components/category-header'
import ProductCard from '../components/product-card'
import Chip from '../components/chip'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>exported project</title>
      </Helmet>
      <Navbar rootClassName="navbar-root-class-name"></Navbar>
      <div className="home-content">
        <Banner rootClassName="banner-root-class-name"></Banner>
        <CategoryHeader
          rootClassName="category-header-root-class-name"
          text="Новые поступления"
        ></CategoryHeader>
        <div className="home-product-carousel">
          <ProductCard productTitle="Шелковый блуз"></ProductCard>
          <ProductCard
            productTitle="Джинсовая куртка"
            imageSrc="https://untitled-react-orcin.vercel.app/external/tq_vc1nwur1yc-3pr8-200h.png"
            price="8000 руб."
          ></ProductCard>
          <ProductCard
            productTitle="Кашемировый свитер"
            imageSrc="https://untitled-react-orcin.vercel.app/external/tq_fbn8p1ts0b-j87m-200h.png"
            price="3000 руб."
          ></ProductCard>
        </div>
        <CategoryHeader
          rootClassName="category-header-root-class-name1"
          text="Покупайте по категориям"
        ></CategoryHeader>
        <div className="home-chips">
          <Chip text="Топы"></Chip>
          <Chip text="Брюки"></Chip>
          <Chip text="Платья"></Chip>
          <Chip text="Аксессуары"></Chip>
        </div>
        <div className="home-container1">
          <Banner
            rootClassName="banner-root-class-name1"
            imageSrc="https://untitled-react-orcin.vercel.app/external/tq_flz-ntrmr6-0mg-1100w.png"
            titleText="Популярные товары"
            buttonText="Купить сейчас"
          ></Banner>
          <Banner
            rootClassName="banner-root-class-name3"
            imageSrc="https://untitled-react-orcin.vercel.app/external/tq_rlnp7k2n-c-eq7l-1100w.png"
            titleText="Последние новости о моде"
            buttonText="Читать далее"
          ></Banner>
          <Banner
            rootClassName="banner-root-class-name2"
            imageSrc="https://untitled-react-orcin.vercel.app/external/tq_3pgzx-zsxa-k47-1100w.png"
            titleText="Промо-события"
            buttonText="Присоединиться"
          ></Banner>
        </div>
      </div>
    </div>
  )
}

export default Home
