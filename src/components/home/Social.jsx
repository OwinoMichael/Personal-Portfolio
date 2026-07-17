import React from 'react'

const Social = () => {
  return (
    <div className='home__social'>
      <a href='https://www.linkedin.com/in/michael-o-8910521b6/' className='home__social-icon' target="_blank" rel="noreferrer">
        <i className='uil uil-linkedin'></i>
      </a>

      <a href='https://github.com/OwinoMichael' className='home__social-icon' target="_blank" rel="noreferrer">
        <i className='uil uil-github-alt'></i>
      </a>

      <a href='https://x.com/MichaelO1226' className='home__social-icon' target="_blank" rel="noreferrer" style={{ display: 'inline-flex', alignItems: 'center' }}>
        <svg viewBox="0 0 24 24" aria-hidden="true" style={{ width: '1.15rem', height: '1.15rem', fill: 'currentColor' }}>
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
        </svg>
      </a>

      <a href='#contact' className='home__social-icon' target="_blank" rel="noreferrer">
        <i className='uil uil-envelope'></i>
      </a>
    </div>
  )
}

export default Social
