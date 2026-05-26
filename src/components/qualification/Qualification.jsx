import React, { useState, useEffect, useRef } from 'react';
import "./qualification.css";

const QualItem = ({ children, delay = 0 }) => {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    // Reset then re-trigger for tab switches
    el.classList.remove('sr-visible');
    const timeout = setTimeout(() => {
      el.classList.add('sr-visible');
    }, delay);
    return () => clearTimeout(timeout);
  }, [delay]);

  return (
    <div ref={ref} className='qualification__data sr-hidden'>
      {children}
    </div>
  );
};

const Qualification = () => {
  const [toggleState, setToggleState] = useState(1);
  const [key, setKey] = useState(0); // forces re-mount on tab switch

  const toggleTab = (index) => {
    setToggleState(index);
    setKey(k => k + 1);
  };

  // Experience items
  const expItems = [
    { title: 'Founder - Software Engineer', sub: 'Pointify - Toronto', year: '2025 - Present', right: false },
    { title: 'Part-Time - Tech Support & Automotvie', sub: 'Canadian Tire Corporation - Waterloo', year: '2025 - Present', right: true },
    { title: 'Software Engineer Intern', sub: 'Crossover Software Company - Toronto', year: '2023', right: false },
    { title: 'Software Engineer - ERP Finance', sub: 'Abno Softwares', year: '2023 - 2024', right: true },
    { title: 'Software Developer Intern', sub: 'Accorn Holdings Africa', year: '2023', right: false },
    { title: 'Volunteer ICT Technician', sub: 'Nairobi City County', year: '2023', right: true },
    { title: 'Intern ICT Personnel', sub: 'KENTTEC', year: '2022', right: false },
  ];

  // Education items
  const eduItems = [
    { title: 'Masters in Applied Computing', sub: 'Wilfrid Laurier University', year: '2024 - 2026', right: false },
    { title: 'Computer Science', sub: 'Strathmore University', year: '2019 - 2023', right: true },
  ];

  const renderItem = (item, index) => {
    const content = (
      <div>
        <h3 className='qualification__title'>{item.title}</h3>
        <span className='qualification__subtitle'>{item.sub}</span>
        <div className='qualification__calender'>
          <i className='uil uil-calender-alt'></i> {item.year}
        </div>
      </div>
    );

    const dot = (
      <div>
        <span className='qualification__rounder'></span>
        <span className='qualification__line'></span>
      </div>
    );

    return (
      <QualItem key={`${key}-${index}`} delay={index * 100}>
        {item.right ? <div></div> : content}
        {dot}
        {item.right ? content : <></>}
      </QualItem>
    );
  };

  return (
    <section className='qualification section'>
      <h2 className='section__title'>Qualification</h2>
      <span className='section__subtitle'>My Personal Journey</span>

      <div className='qualification__container container'>
        <div className='qualification__tabs'>
          <div
            className={toggleState === 1 ? 'qualification__button qualification__active button--flex' : 'qualification__button button--flex'}
            onClick={() => toggleTab(1)}>
            <i className='uil uil-briefcase-alt qualification__icon'></i> Experience
          </div>
          <div
            className={toggleState === 2 ? 'qualification__button qualification__active button--flex' : 'qualification__button button--flex'}
            onClick={() => toggleTab(2)}>
            <i className='uil uil-graduation-cap qualification__icon'></i> Education
          </div>
        </div>

        <div className='qualification__sections'>
          <div className={toggleState === 1 ? 'qualification__content qualification__content-active' : 'qualification__content'}>
            {expItems.map(renderItem)}
          </div>
          <div className={toggleState === 2 ? 'qualification__content qualification__content-active' : 'qualification__content'}>
            {eduItems.map(renderItem)}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification
