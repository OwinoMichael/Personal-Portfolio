import React, { useState, useEffect, useRef } from 'react';
import './services.css';

const servicesData = [
  {
    id: 1,
    icon: 'uil-web-grid',
    title: 'Web Development',
    shortTitle: ['Web', 'Development'],
    description: 'Professional web solutions with 1+ years of expertise delivering impactful results for businesses worldwide.',
    items: [
      'Full-Stack Development: Building responsive websites and applications optimized for all devices',
      'Front-End Excellence: Creating intuitive interfaces with clean code for seamless user experiences',
      'Brand Enhancement: Strengthening your digital presence through strategic web solutions',
      'UI/UX Design: Transforming ideas into visually striking, user-friendly designs',
    ],
  },
  {
    id: 2,
    icon: 'uil-android',
    title: 'Mobile Development',
    shortTitle: ['Mobile', 'Development'],
    description: 'Innovative mobile solutions with 2+ years of experience crafting high-performance applications.',
    items: [
      'Native Development: Building robust iOS and Android apps with platform-specific features',
      'Cross-Platform Solutions: Developing efficient apps that work seamlessly across multiple devices',
      'App Optimization: Enhancing performance and user experience through efficient coding',
      'UI/UX Implementation: Creating engaging mobile interfaces with intuitive navigation',
    ],
  },
  {
    id: 3,
    icon: 'uil-robot',
    title: 'Artificial Intelligence Solutions',
    shortTitle: ['AI', 'Solutions'],
    description: 'Custom AI solutions leveraging cutting-edge technology to transform your business.',
    items: [
      'Smart Features: Building AI capabilities for enhanced user experiences',
      'Automation Solutions: Developing AI-powered automation for improved efficiency',
      'AI Integration: Implementing machine learning models and AI tools into existing systems',
      'Data Analytics: Creating intelligent systems for data processing and insights',
    ],
  },
  {
    id: 4,
    icon: 'uil-circuit',
    title: 'Embedded & Low-Level Systems',
    shortTitle: ['Embedded &', 'Systems'],
    description: 'Systems-level and embedded development focused on performance, reliability, and hardware-aware software design.',
    items: [
      'Embedded Systems: Building efficient firmware for resource-constrained environments',
      'Network Programming: Designing socket-based systems for real-time communication',
      'Performance Optimization: Writing efficient, concurrency-aware code',
      'Protocols & Systems: Working with TCP/IP fundamentals and scalable backend systems',
    ],
  },
];

// Each index maps to a position name anti-clockwise: top → left → bottom → right → top
// offset controls which slot each card is in
const SLOT_TRANSFORMS = {
  0: 'translate(-50%, calc(-140px - 100%))', // was 180px
  1: 'translate(calc(-140px - 100%), -50%)', // was 180px
  2: 'translate(-50%, 140px)',               // was 180px
  3: 'translate(140px, -50%)',               // was 180px
};

const Services = () => {
  const [offset, setOffset] = useState(0);
  const [isRotating, setIsRotating] = useState(false);
  const [selectedService, setSelectedService] = useState(null);
  const timerRef = useRef(null);

  useEffect(() => {
    const tick = () => {
      timerRef.current = setTimeout(() => {
        setIsRotating(true);
        setTimeout(() => {
          setOffset(prev => (prev + 1) % 4);
          setIsRotating(false);
          tick(); // schedule next
        }, 900);
      }, 3000);
    };
    tick();
    return () => clearTimeout(timerRef.current);
  }, []);

  const getTransform = (cardIndex) => {
    const slot = (cardIndex + offset) % 4;
    return SLOT_TRANSFORMS[slot];
  };

  return (
    <section className='services section' id='services'>
      <h2 className='section__title'>Services</h2>
      <span className='section__subtitle'>What I offer</span>

      <div className='services__carousel-wrapper'>
        <div className={`services__orbit${isRotating ? ' rotating' : ''}`}>

          <div className='services__orbit-line services__orbit-line--h'></div>
          <div className='services__orbit-line services__orbit-line--v'></div>
          <div className='services__orbit-center'><span></span></div>

          {servicesData.map((service, index) => (
            <div
              key={service.id}
              className='services__card'
              style={{ transform: getTransform(index) }}
              onClick={() => setSelectedService(service)}
            >
              <i className={`uil ${service.icon} services__card-icon`}></i>
              <h3 className='services__card-title'>
                {service.shortTitle.map((line, i) => (
                  <span key={i} style={{ display: 'block' }}>{line}</span>
                ))}
              </h3>
              <span className='services__card-btn'>
                View More <i className='uil uil-arrow-right'></i>
              </span>
            </div>
          ))}
        </div>
      </div>

      {selectedService && (
        <div className='services__modal active-modal' onClick={() => setSelectedService(null)}>
          <div className='services__modal-content' onClick={e => e.stopPropagation()}>
            <i className='uil uil-times services__modal-close' onClick={() => setSelectedService(null)}></i>
            <h3 className='services__modal-title'>{selectedService.title}</h3>
            <p className='services__modal-description'>{selectedService.description}</p>
            <ul className='services__modal-services grid'>
              {selectedService.items.map((item, i) => (
                <li key={i} className='services__modal-service'>
                  <i className='uil uil-check-circle services__modal-icon'></i>
                  <p className='services__modal-info'>{item}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </section>
  );
};

export default Services;