import React from 'react'

import { Helmet } from 'react-helmet'

import Navbar from '../components/navbar'
import './help.css'

const Help = (props) => {
  return (
    <div className="help-container">
      <Helmet>
        <title>exported project</title>
      </Helmet>
      <Navbar rootClassName="navbar-root-class-name1"></Navbar>
      <div className="help-depth2-frame1">
        <div className="help-depth3-frame0">
          <span className="help-text">Нужна помощь?</span>
          <span className="help-text01">
            Свяжитесь с нашей командой для немедленной помощи
          </span>
          <div className="help-depth4-frame1">
            <div className="help-depth5-frame0">
              <div className="help-depth6-frame1">
                <span className="help-text02">
                  <span>
                    Здравствуйте, мне нужна помощь с моим
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <br></br>
                  <span>заказом.</span>
                </span>
              </div>
            </div>
            <div className="help-depth5-frame1"></div>
          </div>
          <div className="help-depth4-frame2">
            <div className="help-depth5-frame01">
              <span className="help-text06">
                <span>Elegant Threads</span>
              </span>
              <div className="help-depth6-frame11">
                <span className="help-text08">
                  <span>
                    Здравствуйте, добро пожаловать в
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <br></br>
                  <span>
                    Bryansk Threads! Как мы можем вам помочь
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <br></br>
                  <span>сегодня?</span>
                </span>
              </div>
            </div>
            <div className="help-depth5-frame11"></div>
          </div>
        </div>
        <div className="help-depth4-frame3">
          <div className="help-depth5-frame02">
            <span className="help-text14">Введите ваше сообщение здесь</span>
          </div>
          <div className="help-depth8-frame0">
            <div className="help-depth9-frame0">
              <div className="help-depth10-frame0">
                <span className="help-text15">
                  <span>Отправить</span>
                  <br></br>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Help
