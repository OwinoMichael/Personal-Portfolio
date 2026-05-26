import React, { useState, useEffect, useRef } from 'react';
import './services.css';

const servicesData = [
  {
    id: 1,
    icon: 'uil-web-grid',
    title: 'Web Development',
    shortTitle: 'Web\nDevelopment',
    description: 'Professional web solutions with 1+ years of expertise delivering impactful results for businesses worldwide.',
    items: [
      'Full-Stack Development Building responsive websites and applications optimized for all devices',
      'Front-End Excellence Creating intuitive interfaces with clean code for seamless user experiences',
      'Brand Enhancement Strengthening your digital presence through strategic web solutions',
      'UI/UX Design Transforming ideas into visually striking, user-friendly designs',
    ],
  },
  {
    id: 2,
    icon: 'uil-android',
    title: 'Mobile Development',
    shortTitle: 'Mobile\nDevelopment',
    description: 'Innovative mobile solutions with 2+ years of experience crafting high-performance applications.',
    items: [
      'Native Development Building robust iOS and Android apps with platform-specific features',
      'Cross-Platform Solutions Developing efficient apps that work seamlessly across multiple devices',
      'App Optimization Enhancing performance and user experience through efficient coding',
      'UI/UX Implementation Creating engaging mobile interfaces with intuitive navigation',
    ],
  },
  {
    id: 3,
    icon: 'uil-robot',
    title: 'Artificial Intelligence Solutions',
    shortTitle: 'AI\nSolutions',
    description: 'Custom artificial intelligence solutions leveraging cutting-edge technology to transform your business.',
    items: [
      'Smart Features Building AI capabilities for enhanced user experiences',
      'Automation Solutions Developing AI-powered automation for improved efficiency',
      'AI Integration Implementing machine learning models and AI tools into existing systems',
      'Data Analytics Creating intelligent systems for data processing and insights',
    ],
  },
  {
    id: 4,
    icon: 'uil-circuit',
    title: 'Embedded & Low-Level Systems',
    shortTitle: 'Embedded &\nSystems',
    description: 'Systems-level and embedded development focused on performance, reliability, and hardware-aware software design.',
    items: [
      'Embedded Systems Development Building efficient firmware and device-level logic for resource-constrained environments',
      'Network Programming Designing socket-based and event-driven systems for real-time communication',
      'Low-Level Performance Optimization Writing efficient, concurrency-aware code with focus on CPU, memory, and latency',
      'Protocols & Systems Design Working with TCP/IP fundamentals, polling, IPC, and scalable backend systems',
    ],
  },
];

// Positions in the circle: top, right, bottom, left
const POSITIONS = ['top', 'right', 'bottom', 'left'];

const Services = () => {
  const [offset, setOffset] = useState(0);       // which card is at which position
  const [rotating, setRotating] = useState(false);
  const [selectedService, setSelectedService] = useState(null);
  const intervalRef = useRef(null);

  // Auto-rotate: wait 3s, rotate, wait 3s, rotate...
  useEffect(() => {
    const schedule = () => {
      intervalRef.current = setTimeout(() => {
        setRotating(true);
        setTimeout(() => {
          setOffset(prev => (prev + 1) % 4);
          setRotating(false);
          schedule();
        }, 800); // rotation animation duration
      }, 3000); // pause between rotations
    };
    schedule();
    return () => clearTimeout(intervalRef.current);
  }, []);

  const getPosition = (cardIndex) => {
    return POSITIONS[(cardIndex - offset + 4) % 4];
  };

  return (
    <section className='services section' id='services'>
      <h2 className='section__title'>Services</h2>
      <span className='section__subtitle'>What I offer</span>

      <div className='services__carousel-wrapper'>
        <div className={`services__orbit ${rotating ? 'rotating' : ''}`}>
          {servicesData.map((service, index) => {
            const pos = getPosition(index);
            return (
              <div
                key={service.id}
                className={`services__card services__card--${pos}`}
                onClick={() => setSelectedService(service)}
              >
                <i className={`uil ${service.icon} services__card-icon`}></i>
                <h3 className='services__card-title'>
                  {service.shortTitle.split('\n').map((line, i) => (
                    <span key={i}>{line}<br/></span>
                  ))}
                </h3>
                <span className='services__card-btn'>
                  View More <i className='uil uil-arrow-right'></i>
                </span>
              </div>
            );
          })}

          {/* Centre dot */}
          <div className='services__orbit-center'>
            <span></span>
          </div>

          {/* Orbit ring lines */}
          <div className='services__orbit-line services__orbit-line--h'></div>
          <div className='services__orbit-line services__orbit-line--v'></div>
        </div>
      </div>

      {/* Modal */}
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