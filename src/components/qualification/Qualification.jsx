import React, {useState} from 'react';
import "./qualification.css";

const Qualification = () => {

    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    };

  return (
    <section className='qualification section'>
      <h2 className='section__title'>Qualification</h2>
      <span className='section__subtitle'>My Personal Journey</span>

      <div className='qualification__container container'>
        <div className='qualification__tabs'>
            <div 
             className= {
                toggleState === 1 
                ? 'qualification__button qualification__active button--flex' 
                : 'qualification__button  button--flex'}
                onClick={ () => toggleTab(1)}
                >

                <i className='uil uil-graduation-cap qualification__icon'></i> Education
            </div>

            <div className= {
                toggleState === 2 
                ? 'qualification__button qualification__active button--flex' 
                : 'qualification__button  button--flex'}
                onClick={ () => toggleTab(2)}
                >
                <i className='uil uil-briefcase-alt qualification__icon'></i> Experience
            </div>
        </div>

        <div className='qualification__sections'>
            <div 
             className={
                toggleState === 1 
                ? 'qualification__content qualification__content-active' 
                : 'qualification__content'}>
                <div className='qualification__data'>
                    <div>
                        <h3 className='qualification__title'>Masters in Applied Computing</h3>
                        <span className='qualification__subtitle'>Wilfrid Laurier University</span>
                        <div className='qualification__calender'>
                            <i className='uil uil-calender-alt'></i> 2024 - 2026
                        </div>
                    </div>

                    <div>
                        <span className='qualification__rounder'></span>
                        <span className='qualification__line'></span>
                    </div>
                </div>

                <div className='qualification__data'>
                    <div></div>

                    <div>
                        <span className='qualification__rounder'></span>
                        <span className='qualification__line'></span>
                    </div>

                    <div>
                        <h3 className='qualification__title'>Computer Scinece</h3>
                        <span className='qualification__subtitle'>Strathmore University</span>
                        <div className='qualification__calender'>
                            <i className='uil uil-calender-alt'></i> 2019 - 2023
                        </div>
                    </div>

                    
                </div>


                
                

            </div>

            <div className={
                toggleState === 2 
                ? 'qualification__content qualification__content-active' 
                : 'qualification__content'}>

                <div className='qualification__data'>
                    <div>
                        <h3 className='qualification__title'>Software Engineer Intern</h3>
                        <span className='qualification__subtitle'>ABNO Softwares International</span>
                        <div className='qualification__calender'>
                            <i className='uil uil-calender-alt'></i> 2023
                        </div>
                    </div>

                    <div>
                        <span className='qualification__rounder'></span>
                        <span className='qualification__line'></span>
                    </div>
                </div>

                <div className='qualification__data'>
                    <div></div>

                    <div>
                        <span className='qualification__rounder'></span>
                        <span className='qualification__line'></span>
                    </div>

                    <div>
                        <h3 className='qualification__title'>Software Developer Intern</h3>
                        <span className='qualification__subtitle'>Abno Softwares</span>
                        <div className='qualification__calender'>
                            <i className='uil uil-calender-alt'></i> 2023 - 2024
                        </div>
                    </div>

                    
                </div>
                
                <div className='qualification__data'>
                    <div>
                        <h3 className='qualification__title'>Software Developer Intern</h3>
                        <span className='qualification__subtitle'>Accorn Holdings Africa</span>
                        <div className='qualification__calender'>
                            <i className='uil uil-calender-alt'></i> 2023
                        </div>
                    </div>

                    <div>
                        <span className='qualification__rounder'></span>
                        <span className='qualification__line'></span>
                    </div>
                </div>

                <div className='qualification__data'>
                    <div></div>

                    <div>
                        <span className='qualification__rounder'></span>
                        <span className='qualification__line'></span>
                    </div>

                    <div>
                        <h3 className='qualification__title'>Volunteer ICT Technician</h3>
                        <span className='qualification__subtitle'>Nairobi City County</span>
                        <div className='qualification__calender'>
                            <i className='uil uil-calender-alt'></i> 2023
                        </div>
                    </div>

                    
                </div>


                <div className='qualification__data'>
                    <div>
                        <h3 className='qualification__title'>Intern ICT Personell</h3>
                        <span className='qualification__subtitle'>KENTTEC</span>
                        <div className='qualification__calender'>
                            <i className='uil uil-calender-alt'></i> 2022
                        </div>
                    </div>

                    <div>
                        <span className='qualification__rounder'></span>
                        <span className='qualification__line'></span>
                    </div>
                </div>

               

                

            </div>

        </div>
      </div>
    </section>
  )
}

export default Qualification
