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
    title: 'AI Solutions',
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
    title: 'Embedded & Systems',
    shortTitle: ['Embedded &', 'Systems'],
    description: 'Systems-level and embedded development focused on performance, reliability, and hardware-aware software design.',
    items: [
      'Embedded Systems: Building efficient firmware for resource-constrained environments',
      'Network Programming: Designing socket-based systems for real-time communication',
      'Performance Optimization: Writing efficient, concurrency-aware code',
      'Protocols & Systems: Working with TCP/IP fundamentals and scalable backend systems',
    ],
  },
  {
    id: 5,
    icon: 'uil-link',
    title: 'Blockchain',
    shortTitle: ['Blockchain', 'Dev'],
    description: 'Decentralized application development and smart contract engineering on modern blockchain platforms.',
    items: [
      'Smart Contracts: Writing and auditing Solidity contracts for EVM-compatible chains',
      'DApp Development: Building decentralized applications with Web3.js and Ethers.js',
      'Token Engineering: Designing and deploying ERC-20, ERC-721, and custom token standards',
      'Web3 Integration: Connecting traditional backends to blockchain networks and wallets',
    ],
  },
];

// Pentagon points: angles in degrees starting from top, clockwise
// 270, 342, 54, 126, 198 — standard pentagon
const PENTAGON_ANGLES_DEG = [270, 342, 54, 126, 198];
const RADIUS = 240; // px from center to card center

function getStarPoint(angleDeg, radius) {
  const rad = (angleDeg * Math.PI) / 180;
  const x = radius * Math.cos(rad);
  const y = radius * Math.sin(rad);
  return { x, y };
}

const Services = () => {
  const [rotation, setRotation] = useState(0);
  const [isRotating, setIsRotating] = useState(false);
  const [selectedService, setSelectedService] = useState(null);
  const timerRef = useRef(null);
  const rotationRef = useRef(0);

  useEffect(() => {
    const tick = () => {
      timerRef.current = setTimeout(() => {
        setIsRotating(true);
        const stepDeg = 360 / servicesData.length; // 72 degrees per step
        rotationRef.current += stepDeg;
        setRotation(rotationRef.current);
        setTimeout(() => {
          setIsRotating(false);
          tick();
        }, 1000);
      }, 3000);
    };
    tick();
    return () => clearTimeout(timerRef.current);
  }, []);

  return (
    <section className='services section' id='services'>
      <h2 className='section__title'>Services</h2>
      <span className='section__subtitle'>What I offer</span>

      <div className='services__carousel-wrapper'>
        <div className='services__orbit'>

          {/* Connecting lines from center to each point */}
          <svg className='services__star-svg' viewBox='-300 -300 600 600'>
            {PENTAGON_ANGLES_DEG.map((angle, i) => {
              const { x, y } = getStarPoint(angle, RADIUS);
              const nextAngle = PENTAGON_ANGLES_DEG[(i + 2) % 5]; // star skip
              const { x: nx, y: ny } = getStarPoint(nextAngle, RADIUS);
              return (
                <line
                  key={i}
                  x1={x} y1={y}
                  x2={nx} y2={ny}
                  stroke='rgba(0,0,0,0.07)'
                  strokeWidth='1'
                />
              );
            })}
            {/* Center dot */}
            <circle cx='0' cy='0' r='6' fill='var(--title-color)' opacity='0.15' />
          </svg>

          {/* Cards */}
          <div
            className='services__star-ring'
            style={{ transform: `rotate(${rotation}deg)` }}
          >
            {servicesData.map((service, index) => {
              const angle = PENTAGON_ANGLES_DEG[index];
              const { x, y } = getStarPoint(angle, RADIUS);
              return (
                <div
                  key={service.id}
                  className={`services__card ${isRotating ? 'services__card--rotating' : ''}`}
                  style={{
                    transform: `translate(calc(${x}px - 50%), calc(${y}px - 50%))
                                rotate(${-rotation}deg)`, // counter-rotate card so text stays upright
                  }}
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
              );
            })}
          </div>

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