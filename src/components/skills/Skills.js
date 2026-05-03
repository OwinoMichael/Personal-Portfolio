import React from 'react';
import Frontend from './Frontend';
import Backend from './Backend';
import './skills.css';
import DevOps from './DevOps';
import LowLevel from './LowLevel';

import useScrollReveal from '../../hooks/useScrollReveal';

const Skills = () => {
  const ref1 = useScrollReveal();
  const ref2 = useScrollReveal();
  const ref3 = useScrollReveal();
  const ref4 = useScrollReveal();

  return (
    <section className='skills section' id='skills'>
      <h2 className='section__title'>Skills</h2>
      <span className='section__subtitle'>My Technical Level</span>

      <div className='skills__container container grid'>
        <div ref={ref1} className='sr-hidden'><Frontend /></div>
        <div ref={ref2} className='sr-hidden sr-delay-2'><Backend /></div>
        <div ref={ref3} className='sr-hidden sr-delay-3'><DevOps /></div>
        <div ref={ref4} className='sr-hidden sr-delay-4'><LowLevel /></div>
      </div>
    </section>
  );
};

export default Skills
