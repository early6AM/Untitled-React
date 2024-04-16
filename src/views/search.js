import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import Navbar from '../components/navbar'
import FilterCategoryHeader from '../components/filter-category-header'
import Chip from '../components/chip'
import CategoryHeader from '../components/category-header'
import ProductCard from '../components/product-card'
import HorizontalCategoryCard from '../components/horizontal-category-card'
import './search.css'

const Search = (props) => {
  return (
    <div className="search-container">
      <Helmet>
        <title>exported project</title>
      </Helmet>
      <Navbar rootClassName="navbar-root-class-name3"></Navbar>
      <div className="search-container1">
        <div className="search-filters">
          <FilterCategoryHeader
            rootClassName="filter-category-header-root-class-name"
            text="Уточнить"
          ></FilterCategoryHeader>
          <div className="search-age-chips">
            <Chip rootClassName="chip-root-class-name" text="Все"></Chip>
            <Chip rootClassName="chip-root-class-name3" text="Женщины"></Chip>
            <Chip rootClassName="chip-root-class-name2" text="Мужчины"></Chip>
            <Chip rootClassName="chip-root-class-name1" text="Дети"></Chip>
          </div>
          <FilterCategoryHeader
            rootClassName="filter-category-header-root-class-name1"
            text="Цена"
          ></FilterCategoryHeader>
          <div className="search-container2">
            <Link to="/search" className="search-navlink">
              <div className="search-price">
                <span className="search-text">
                  <span>Введите цену</span>
                  <br></br>
                </span>
              </div>
            </Link>
          </div>
        </div>
        <div className="search-result">
          <CategoryHeader
            rootClassName="category-header-root-class-name2"
            text="Женская одежда и аксессуары"
          ></CategoryHeader>
          <Link to="/search" className="search-navlink1">
            <div className="search-search">
              <img
                src="/external/depth6frame04197-wfs.svg"
                alt="Depth6Frame04197"
                className="search-icon"
              />
              <span className="search-text3">
                <span>Поиск товаров или магазинов</span>
                <br></br>
              </span>
            </div>
          </Link>
          <FilterCategoryHeader
            rootClassName="filter-category-header-root-class-name3"
            text="Найденные товары"
          ></FilterCategoryHeader>
          <div className="search-founded-products">
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
          <FilterCategoryHeader
            rootClassName="filter-category-header-root-class-name2"
            text="Найденные категории"
          ></FilterCategoryHeader>
          <div className="search-founded-categories">
            <HorizontalCategoryCard
              categoryTitle="Платья"
              count="2 000 товаров"
              imageSrc="https://untitled-react-orcin.vercel.app/external/tq_vc1nwur1yc-3pr8-200h.png"
            ></HorizontalCategoryCard>
            <HorizontalCategoryCard
              categoryTitle="Топы"
              count="3 000 товаров"
              imageSrc="https://untitled-react-orcin.vercel.app/external/tq_vc1nwur1yc-3pr8-200h.png"
            ></HorizontalCategoryCard>
            <HorizontalCategoryCard
              categoryTitle="Свитера"
              count="1 000 товаров"
              imageSrc="https://untitled-react-orcin.vercel.app/external/tq_vc1nwur1yc-3pr8-200h.png"
            ></HorizontalCategoryCard>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Search
