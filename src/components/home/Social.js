import React from 'react'

const Social = () => {
  return (
    <div className='home__social'>
      <a href='https://www.linkedin.com/in/michael-owino-8910521b6/' className='home__social-icon' target="_blank" rel="noreferrer">
        <i className='uil uil-linkedin'></i>
      </a>

      <a href='https://github.com/OwinoMichael' className='home__social-icon' target="_blank" rel="noreferrer">
        <i className='uil uil-github-alt'></i>
      </a>

      <a href='#contact' className='home__social-icon' target="_blank" rel="noreferrer">
        <i className='uil uil-envelope'></i>
      </a>
    </div>
  )
}

export default Social
