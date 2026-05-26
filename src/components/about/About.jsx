import React from 'react';
import "./about.css";
import AboutImg from "../../assets/IMG_9485.JPG";
//import CV from "../../assets/John-Cv.pdf";
import Info from "./info";

import useScrollReveal from '../../hooks/useScrollReveal';

const About = () => {
  const imgRef = useScrollReveal();
  const dataRef = useScrollReveal();

  return (
    <section className='about section' id='about'>
      <h2 className='section__title'>About Me</h2>
      <span className='section__subtitle'>Let me introduce myself</span>

      <div className='about__container container grid'>
        <img
          ref={imgRef}
          src={AboutImg}
          alt=""
          className='about__img sr-left'
          style={{ width: '270px', height: '380px', objectFit: 'cover' }}
        />

        <div ref={dataRef} className='about__data sr-right'>
          <Info />
          <p className='about__description'>
            I specialize in systems engineering, building scalable systems, APIs, and low level systems with a strong focus on performance, reliability, and user experience.
            <br /><br />
            My goal is to create impactful technology solutions that solve real-world problems and deliver meaningful value to people and businesses.
          </p>
          <a href="https://drive.google.com/file/d/1ZjSUamgQQDNxrMyLyi7D-Cx_7RWqzmU0/view?usp=drive_link"
            target='_blank' className='button button--flex' rel="noreferrer noopener">
            View CV {/* ...your SVG */}
          </a>
        </div>
      </div>
    </section>
  );
};

export default About
