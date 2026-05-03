import React, { useState, useEffect } from 'react';
import "./header.css";

const sections = [
  { id: 'home',     hash: '#home' },
  { id: 'about',    hash: '#about' },
  { id: 'skills',   hash: '#skills' },
  { id: 'services', hash: '#services' },
  { id: 'portfolio',hash: '#portfolio' },
  { id: 'contact',  hash: '#contact' },
];

const Header = () => {
  const [Toggle, showMenu] = useState(false);
  const [activeNav, setActiveNav] = useState('#home');

  /*=============== Scroll header background ===============*/
  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector('.header');
      if (window.scrollY >= 80) header.classList.add('scroll-header');
      else header.classList.remove('scroll-header');
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  /*=============== Active section on scroll ===============*/
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const matched = sections.find(s => s.id === entry.target.id);
            if (matched) setActiveNav(matched.hash);
          }
        });
      },
      {
        threshold: 0.35, // section must be 35% visible to activate
        rootMargin: '-60px 0px -35% 0px', // account for fixed header height
      }
    );

    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <header className='header'>
      <nav className='nav container'>
        <a href='index.html' className='nav__logo'>
          <span className='nav__logo-text'>Mike Owino</span>
          <span className='nav__logo-shimmer'></span>
        </a>

        <div className={Toggle ? 'nav__menu show-menu' : 'nav__menu'}>
          <ul className='nav__list grid'>
            {sections.map(({ id, hash }) => (
              <li className='nav__item' key={id}>
                <a
                  href={hash}
                  onClick={() => { setActiveNav(hash); showMenu(false); }}
                  className={activeNav === hash ? 'nav__link active-link' : 'nav__link'}
                >
                  <i className={`uil ${iconMap[id]} nav__icon`}></i>
                  {labelMap[id]}
                </a>
              </li>
            ))}
          </ul>
          <i className='uil uil-times nav__close' onClick={() => showMenu(!Toggle)}></i>
        </div>

        <div className='nav__toggle' onClick={() => showMenu(!Toggle)}>
          <i className='uil uil-bars nav__bar'></i>
        </div>
      </nav>
    </header>
  );
};

const iconMap = {
  home:      'uil-estate',
  about:     'uil-user',
  skills:    'uil-file',
  services:  'uil-briefcase',
  portfolio: 'uil-scenery',
  contact:   'uil-message',
};

const labelMap = {
  home:      'Home',
  about:     'About',
  skills:    'Skills',
  services:  'Services',
  portfolio: 'Portfolio',
  contact:   'Message',
};

export default Header;