import React from 'react';

const Backend = () => (
  <div className='skills__content'>
    <div className='skills__header'>
      <i className='uil uil-server-network skills__icon-main'></i>
      <h3 className='skills__title'>App Development</h3>
    </div>
    <div className='skills__box'>
      <div className='skills__group'>
        <div className='skills__data'>
          <i className='bx bx-badge-check skills__check'></i>
          <div><h3 className='skills__name'>Spring Boot</h3><span className='skills__level'>Pro</span></div>
        </div>
        <div className='skills__data'>
          <i className='bx bx-badge-check skills__check'></i>
          <div><h3 className='skills__name'>Java</h3><span className='skills__level'>Pro</span></div>
        </div>
        <div className='skills__data'>
          <i className='bx bx-badge-check skills__check'></i>
          <div><h3 className='skills__name'>PostgreSQL</h3><span className='skills__level'>Advanced</span></div>
        </div>
      </div>
      <div className='skills__group'>
        <div className='skills__data'>
          <i className='bx bx-badge-check skills__check'></i>
          <div><h3 className='skills__name'>Laravel</h3><span className='skills__level'>Advanced</span></div>
        </div>
        <div className='skills__data'>
          <i className='bx bx-badge-check skills__check'></i>
          <div><h3 className='skills__name'>Firebase</h3><span className='skills__level'>Advanced</span></div>
        </div>
        <div className='skills__data'>
          <i className='bx bx-badge-check skills__check'></i>
          <div><h3 className='skills__name'>MongoDB</h3><span className='skills__level'>Advanced</span></div>
        </div>
      </div>
    </div>
  </div>
);

export default Backend;