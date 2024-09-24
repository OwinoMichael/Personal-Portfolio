import React from 'react'

const Info = () => {
  return (
    <div className='about__info grid'>
        <div className='about__box'>
            <i class='bx bx-award'></i>
            <h3 className='about__title'>Experience</h3>
            <span className='about__subtitle about__icon'>1 Year Working</span>
        </div>

        <div className='about__box'>
            <i class='bx bx-briefcase-alt'></i>
            <h3 className='about__title'>Completed</h3>
            <span className='about__subtitle about__icon'>10 + Projects</span>
        </div>

        <div className='about__box'>
            <i class='bx bx-support'></i>
            <h3 className='about__title'>Support</h3>
            <span className='about__subtitle about__icon'>Online 12hr per day</span>
        </div>
      
    </div>

    
  )
}

export default Info
