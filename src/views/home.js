import React from 'react'

import { Helmet } from 'react-helmet'

import Navbar from '../components/navbar'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>exported project</title>
      </Helmet>
      <Navbar rootClassName="navbar-root-class-name"></Navbar>
      <div className="home-content">
        <div className="home-depth6-frame0">
          <span className="home-text">
            <span>Откройте для себя</span>
            <br></br>
            <span>последние модные тренды</span>
          </span>
          <div className="home-depth9-frame0">
            <span className="home-text04">
              <span>Исследовать</span>
            </span>
          </div>
        </div>
        <span className="home-text06">Новые поступления</span>
        <div className="home-container1">
          <div className="home-depth6-frame001">
            <img
              alt="image"
              src="/external/tq_dvftlfkpr5-2qbw-200h.png"
              className="home-image"
            />
            <div className="home-depth7-frame0">
              <div className="home-depth8-frame0">
                <span className="home-text07">
                  <span>Шелковый блуз</span>
                </span>
                <span className="home-text09">
                  <span>$120</span>
                </span>
              </div>
              <div className="home-depth8-frame1">
                <div className="home-depth9-frame01">
                  <div className="home-depth10-frame0">
                    <span className="home-text11">
                      <span>Добавить в корзину</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="home-depth6-frame002">
            <img
              alt="image"
              src="/external/tq_vc1nwur1yc-3pr8-200h.png"
              className="home-image1"
            />
            <div className="home-depth7-frame001">
              <div className="home-depth8-frame01">
                <span className="home-text13">
                  <span>Джинсовая куртка</span>
                </span>
                <span className="home-text15">
                  <span>$120</span>
                </span>
              </div>
              <div className="home-depth8-frame11">
                <div className="home-depth9-frame02">
                  <div className="home-depth10-frame01">
                    <span className="home-text17">
                      <span>Добавить в корзину</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="home-depth6-frame003">
            <img
              alt="image"
              src="/external/tq_fbn8p1ts0b-j87m-200h.png"
              className="home-image2"
            />
            <div className="home-depth7-frame002">
              <div className="home-depth8-frame02">
                <span className="home-text19">
                  <span>Кашемировый свитер</span>
                </span>
                <span className="home-text21">
                  <span>$120</span>
                </span>
              </div>
              <div className="home-depth8-frame12">
                <div className="home-depth9-frame03">
                  <div className="home-depth10-frame02">
                    <span className="home-text23">
                      <span>Добавить в корзину</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <span className="home-text25">
          <span>Покупайте по категориям</span>
        </span>
        <div className="home-depth4-frame7">
          <div className="home-depth5-frame0">
            <div className="home-depth6-frame004">
              <div className="home-depth7-frame003">
                <span className="home-text27">
                  <span>Топы</span>
                </span>
              </div>
            </div>
          </div>
          <div className="home-depth5-frame1">
            <div className="home-depth6-frame005">
              <div className="home-depth7-frame004">
                <span className="home-text29">
                  <span>Брюки</span>
                </span>
              </div>
            </div>
          </div>
          <div className="home-depth5-frame2">
            <div className="home-depth6-frame006">
              <div className="home-depth7-frame005">
                <span className="home-text31">
                  <span>Платья</span>
                </span>
              </div>
            </div>
          </div>
          <div className="home-depth5-frame3">
            <div className="home-depth6-frame007">
              <div className="home-depth7-frame006">
                <span className="home-text33">
                  <span>Аксессуары</span>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="home-container2">
          <div className="home-depth4-frame8">
            <div className="home-depth5-frame01">
              <div className="home-depth6-frame008">
                <div className="home-depth7-frame007">
                  <span className="home-text35">
                    <span>Популярные товары</span>
                  </span>
                  <div className="home-depth9-frame04">
                    <div className="home-depth10-frame03">
                      <div className="home-depth11-frame0">
                        <span className="home-text37">
                          <span>Купить сейчас</span>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="home-depth5-frame02">
            <div className="home-depth6-frame009">
              <div className="home-depth7-frame008">
                <span className="home-text39">Последние новости о моде</span>
                <div className="home-depth9-frame05">
                  <div className="home-depth10-frame04">
                    <div className="home-depth11-frame01">
                      <span className="home-text40">Читать далее</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="home-depth4-frame81">
            <div className="home-depth5-frame03">
              <div className="home-depth6-frame010">
                <div className="home-depth7-frame009">
                  <span className="home-text41">
                    <span>Промо-события</span>
                    <br></br>
                  </span>
                  <div className="home-depth9-frame06">
                    <div className="home-depth10-frame05">
                      <div className="home-depth11-frame02">
                        <span className="home-text44">Присоединиться</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
