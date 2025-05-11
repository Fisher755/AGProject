import React from 'react';
import logo from '../logo.svg';

function Header() {
  return (
    <header className="site-header">
      <div className="header-container">
        <div className="branding">
          <img src="img/AE logo.png" alt="Логотип" className="logo" />
          <span className="tagline">Услуги по созданию Ваших сайтов</span>
        </div>

        <nav className="main-nav">
          <ul className="nav-list">
            <li><a href="#home" className="nav-link">Главная</a></li>
            <li className="dropdown">
              <a href="#services" className="nav-link">Услуги ▾</a>
              <ul className="dropdown-menu">
                <li><a href="#webdev">Создание сайтов</a></li>
                <li><a href="#seo">SEO-продвижение</a></li>
                <li><a href="#support">Техподдержка</a></li>
                <li className="dropdown-submenu">
                  <a href="#design">Дизайн ▸</a>
                  <ul className="submenu">
                    <li><a href="#ux">UX/UI Дизайн</a></li>
                    <li><a href="#logo">Логотипы</a></li>
                    <li><a href="#branding">Брендинг</a></li>
                  </ul>
                </li>
              </ul>
            </li>
            <li><a href="#portfolio" className="nav-link">Наши работы</a></li>
            <li><a href="#about" className="nav-link">О нас</a></li>
            <li><a href="#contacts" className="nav-link">Контакты</a></li>
          </ul>
          <button className="cta-button header-cta">Заказать сайт</button>
        </nav>

        <div className="theme-switcher">
          <button className="theme-btn active" data-theme="light" title="Светлая тема">
            <i className="fas fa-sun"></i>
          </button>
          <button className="theme-btn" data-theme="dark" title="Тёмная тема">
            <i className="fas fa-moon"></i>
          </button>
        </div>

        <button className="mobile-menu-toggle" aria-label="Меню">
          <span className="hamburger"></span>
        </button>
      </div>
      <div className="scroll-progress"></div>
    </header>
  );
}

export default Header;