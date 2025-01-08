import React, {useState} from 'react';
import './services.css';
//import { useState } from 'react';

const Services = () => {
    const [toggleState, setToggleState] = useState(0);

    const toggleTab = (index) => {
        setToggleState(index);
    };
  return (
    <section className='services section' id='services'>
      
      <h2 className='section__title'>Services</h2>
      <span className='section__subtitle'>What I offer</span>

      <div className='services__container container grid'>

        <div className='services__content'>
            <div>
                <i className='uil uil-web-grid services__icon'></i>
                <h3 className='services__title'>Web <br/> Development</h3>

                <span className='services__button' onClick={() => toggleTab(1)}>
                    View More
                    <i className='uil uil-arrow-right services__button-icon'></i>
                </span>

                <div className={toggleState === 1 ? "services__modal active-modal" : "services__modal"}>
                    <div className='services__modal-content'>
                        <i onClick={() => toggleTab(0)} className='uil uil-times services__modal-close'>

                        </i>

                        <h3 className='services__modal-title'>Web Development</h3>
                        <p className='services__modal-description'>
                        Professional web solutions with 1+ years of expertise delivering impactful results for businesses worldwide.
                        </p>

                        <ul className='services__modal-services grid'>
                            <li className='services__modal-service'>
                                <i className='uil uil-check-circle services__modal-icon'></i>
                                <p className='services__modal-info'>
                                Full-Stack Development Building responsive websites and applications optimized for all devices
                                </p>
                            </li>

                            <li className='services__modal-service'>
                                <i className='uil uil-check-circle services__modal-icon'></i>
                                <p className='services__modal-info'>
                                Front-End Excellence Creating intuitive interfaces with clean code for seamless user experiences
                                </p>
                            </li>

                            <li className='services__modal-service'>
                                <i className='uil uil-check-circle services__modal-icon'></i>
                                <p className='services__modal-info'>
                                Brand Enhancement Strengthening your digital presence through strategic web solutions
                                </p>
                            </li>

                            <li className='services__modal-service'>
                                <i className='uil uil-check-circle services__modal-icon'></i>
                                <p className='services__modal-info'>
                                UI/UX Design Transforming ideas into visually striking, user-friendly designs
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

        <div className='services__content'>
            <div>
                <i className='uil uil-android services__icon'></i>
                <h3 className='services__title'>Mobile <br/> Development</h3>

                <span className='services__button' onClick={() => toggleTab(2)}>
                    View More
                    <i className='uil uil-arrow-right services__button-icon'></i>
                </span>

                <div className={toggleState === 2 ? "services__modal active-modal" : "services__modal"}>
                    <div className='services__modal-content'>
                        <i onClick={() => toggleTab(0)} className='uil uil-times services__modal-close'>

                        </i>

                        <h3 className='services__modal-title'>Mobile Development</h3>
                        <p className='services__modal-description'>
                        Innovative mobile solutions with 2+ years of experience crafting high-performance applications.
                        </p>

                        <ul className='services__modal-services grid'>
                            <li className='services__modal-service'>
                                <i className='uil uil-check-circle services__modal-icon'></i>
                                <p className='services__modal-info'>
                                Native Development Building robust iOS and Android apps with platform-specific features
                                </p>
                            </li>

                            <li className='services__modal-service'>
                                <i className='uil uil-check-circle services__modal-icon'></i>
                                <p className='services__modal-info'>
                                Cross-Platform Solutions Developing efficient apps that work seamlessly across multiple devices
                                </p>
                            </li>

                            <li className='services__modal-service'>
                                <i className='uil uil-check-circle services__modal-icon'></i>
                                <p className='services__modal-info'>
                                App Optimization Enhancing performance and user experience through efficient coding
                                </p>
                            </li>

                            <li className='services__modal-service'>
                                <i className='uil uil-check-circle services__modal-icon'></i>
                                <p className='services__modal-info'>
                                UI/UX Implementation Creating engaging mobile interfaces with intuitive navigation
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

        <div className='services__content'>
            <div>
                <i className='uil uil-circuit services__icon'></i>
                <h3 className='services__title'>AI <br/> Solutions</h3>

                <span className='services__button' onClick={() => toggleTab(3)}>
                    View More
                    <i className='uil uil-arrow-right services__button-icon'></i>
                </span>

                <div className={toggleState === 3 ? "services__modal active-modal" : "services__modal"}>
                    <div className='services__modal-content'>
                        <i onClick={() => toggleTab(0)} className='uil uil-times services__modal-close'>

                        </i>

                        <h3 className='services__modal-title'>Artificial Intelligence Solutions</h3>
                        <p className='services__modal-description'>
                        Custom artificial intelligence solutions leveraging cutting-edge technology to transform your business.
                        </p>

                        <ul className='services__modal-services grid'>
                            <li className='services__modal-service'>
                                <i className='uil uil-check-circle services__modal-icon'></i>
                                <p className='services__modal-info'>
                                Smart Features Building AI capabilities for enhanced user experiences
                                </p>
                            </li>

                            <li className='services__modal-service'>
                                <i className='uil uil-check-circle services__modal-icon'></i>
                                <p className='services__modal-info'>
                                Automation Solutions Developing AI-powered automation for improved efficiency
                                </p>
                            </li>

                            <li className='services__modal-service'>
                                <i className='uil uil-check-circle services__modal-icon'></i>
                                <p className='services__modal-info'>
                                AI Integration Implementing machine learning models and AI tools into existing systems
                                </p>
                            </li>

                            <li className='services__modal-service'>
                                <i className='uil uil-check-circle services__modal-icon'></i>
                                <p className='services__modal-info'>
                                Data Analytics Creating intelligent systems for data processing and insights
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

      </div>

    </section>
  )
}

export default Services
