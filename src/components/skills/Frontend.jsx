import React from 'react';

const Frontend = () => (
  <div className='skills__content'>
    <div className='skills__header'>
      <i className='uil uil-brackets-curly skills__icon-main'></i>
      <h3 className='skills__title'>Frontend</h3>
    </div>
    <div className='skills__box'>
      <div className='skills__group'>
        <div className='skills__data'>
          <i className='bx bx-badge-check skills__check'></i>
          <div><h3 className='skills__name'>React</h3><span className='skills__level'>Advanced</span></div>
        </div>
        <div className='skills__data'>
          <i className='bx bx-badge-check skills__check'></i>
          <div><h3 className='skills__name'>TypeScript</h3><span className='skills__level'>Intermediate</span></div>
        </div>
        <div className='skills__data'>
          <i className='bx bx-badge-check skills__check'></i>
          <div><h3 className='skills__name'>Tailwind CSS</h3><span className='skills__level'>Advanced</span></div>
        </div>
      </div>
      <div className='skills__group'>
        <div className='skills__data'>
          <i className='bx bx-badge-check skills__check'></i>
          <div><h3 className='skills__name'>HTML / CSS</h3><span className='skills__level'>Pro</span></div>
        </div>
        <div className='skills__data'>
          <i className='bx bx-badge-check skills__check'></i>
          <div><h3 className='skills__name'>Next.js</h3><span className='skills__level'>Intermediate</span></div>
        </div>
        <div className='skills__data'>
          <i className='bx bx-badge-check skills__check'></i>
          <div><h3 className='skills__name'>Figma</h3><span className='skills__level'>Intermediate</span></div>
        </div>
      </div>
    </div>
  </div>
);

export default Frontend;