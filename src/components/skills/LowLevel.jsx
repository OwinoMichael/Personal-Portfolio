
import React from 'react';

const LowLevel = () => (
  <div className='skills__content'>
    <div className='skills__header'>
      <i className='uil uil-processor skills__icon-main'></i>
      <h3 className='skills__title'>Low Level</h3>
    </div>
    <div className='skills__box'>
      <div className='skills__group'>
        <div className='skills__data'>
          <i className='bx bx-badge-check skills__check'></i>
          <div><h3 className='skills__name'>C / C++</h3><span className='skills__level'>Advanced</span></div>
        </div>
        <div className='skills__data'>
          <i className='bx bx-badge-check skills__check'></i>
          <div><h3 className='skills__name'>Rust</h3><span className='skills__level'>Intermediate</span></div>
        </div>
        <div className='skills__data'>
          <i className='bx bx-badge-check skills__check'></i>
          <div><h3 className='skills__name'>Assembly</h3><span className='skills__level'>Basic</span></div>
        </div>
      </div>
      <div className='skills__group'>
        <div className='skills__data'>
          <i className='bx bx-badge-check skills__check'></i>
          <div><h3 className='skills__name'>Memory Mgmt</h3><span className='skills__level'>Advanced</span></div>
        </div>
        <div className='skills__data'>
          <i className='bx bx-badge-check skills__check'></i>
          <div><h3 className='skills__name'>OS Concepts</h3><span className='skills__level'>Advanced</span></div>
        </div>
        <div className='skills__data'>
          <i className='bx bx-badge-check skills__check'></i>
          <div><h3 className='skills__name'>Networking</h3><span className='skills__level'>Intermediate</span></div>
        </div>
      </div>
    </div>
  </div>
);

export default LowLevel;