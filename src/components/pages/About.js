import React from "react";
import {
  FaPhoneAlt,
  FaRegEnvelope,
  FaGithub,
  FaLinkedinIn,
  FaTelegramPlane,
  FaVk
} from 'react-icons/fa'

export default class About extends React.Component {
  render() {
    return (
      <>
        <section className='about'>
          <div className='info-me'>
            <div className='general-info'>
              <h1 className='intro-title'>Ольга Сумкина, React разработчик</h1>
            </div>
            <div className='about-section skills'>
              <h3 className='section-title'>skills</h3>
              <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>React/Redux/thunk</li>
                <li>Javascript</li>
                <li>git</li>
              </ul>
            </div>
            <div className='about-section experience'>
              <h3 className='section-title'>experience</h3>
              <ul>
                <li>OpenStart - январь-март 2018 (3 месяца)</li>
                <li>StyleUpp - август 2019 - март 2020 (8 месяцев)</li>
              </ul>

            </div>
            <div className='about-section education'>
              <h3 className='section-title'>education</h3>
              <ul>
                <li>
                  <span>РАНХиГС </span>
                  <span>Факультет: Юридический факультет им. М. М. Сперанского, 2016</span>
                </li>
                <li>
                  <span>СПбГУТ им. проф. Бонч-Бруевича </span>
                  <span>09.02.03 Программирование к компьютерных системах, 2020</span>
                </li>
              </ul>
            </div>
            <div className='about-section social'>
              <span className='contact-item'>
                <span>
                  <FaPhoneAlt/> Телефон
                </span>
                <span>+7 921 438 58 02</span>
              </span>
              <span className='contact-item'>
                <span>
                  <FaRegEnvelope/> email
                </span>
                <span>sumkina.ol@gmail.com</span>
              </span>
              <span className='contact-item'>
                <span><FaTelegramPlane/> Telegram</span>
                <span>@bambooka</span>
              </span>
              <span className='social-wrapper'>
                <a href='https://github.com/bambooka'>
                  <FaGithub/>
                </a>
                <a href='https://linkedin.com/bambooka'>
                  <FaLinkedinIn/>
                </a>
                 <a href='https://vk.com/olga.timina'>
                  <FaVk/>
                </a>
              </span>
            </div>
          </div>
          <div className='about-me-desc'>
            <img className='photo-me'
                 src='https://hsto.org/getpro/moikrug/uploads/user/100/025/700/5/avatar/medium_272313bacaca9b781695cab6a452ed2d.jpeg'
                 alt='me photo'
            />
            <p>
              Я - junior веб-разработчик. Я люблю решать задачи,
              думать об удобстве приложения, создавать полезное и красивое.
              Фанат производительности и преданный
              поклонник material design. Экс-юрист, владелец черепахи, добрый человек :)
            </p>
          </div>
        </section>
      </>
    )
  }
}