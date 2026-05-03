import React from 'react';

const DevOps = () => (
  <div className='skills__content'>
    <div className='skills__header'>
      <i className='uil uil-cloud-computing skills__icon-main'></i>
      <h3 className='skills__title'>DevOps</h3>
    </div>
    <div className='skills__box'>
      <div className='skills__group'>
        <div className='skills__data'>
          <i className='bx bx-badge-check skills__check'></i>
          <div><h3 className='skills__name'>Docker</h3><span className='skills__level'>Advanced</span></div>
        </div>
        <div className='skills__data'>
          <i className='bx bx-badge-check skills__check'></i>
          <div><h3 className='skills__name'>Kubernetes</h3><span className='skills__level'>Intermediate</span></div>
        </div>
        <div className='skills__data'>
          <i className='bx bx-badge-check skills__check'></i>
          <div><h3 className='skills__name'>AWS</h3><span className='skills__level'>Intermediate</span></div>
        </div>
      </div>
      <div className='skills__group'>
        <div className='skills__data'>
          <i className='bx bx-badge-check skills__check'></i>
          <div><h3 className='skills__name'>CI / CD</h3><span className='skills__level'>Advanced</span></div>
        </div>
        <div className='skills__data'>
          <i className='bx bx-badge-check skills__check'></i>
          <div><h3 className='skills__name'>Linux</h3><span className='skills__level'>Advanced</span></div>
        </div>
        <div className='skills__data'>
          <i className='bx bx-badge-check skills__check'></i>
          <div><h3 className='skills__name'>Git</h3><span className='skills__level'>Pro</span></div>
        </div>
      </div>
    </div>
  </div>
);

export default DevOps;