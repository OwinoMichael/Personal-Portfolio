import './App.css';
import { useEffect, useRef } from 'react';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Home from './components/home/Home';
import Qualification from './components/qualification/Qualification';
import Scrollup from './components/scrollup/Scrollup';
import Services from './components/services/Services';
import Skills from './components/skills/Skills';
import Work from './components/work/Work';

const PARTICLE_COUNT = 18;

function useParticles() {
  useEffect(() => {
    const container = document.getElementById('particles-bg');
    if (!container) return;

    const particles = Array.from({ length: PARTICLE_COUNT }, () => {
      const el = document.createElement('div');
      el.className = 'particle';

      const size = Math.random() < 0.7
        ? Math.random() * 3 + 2
        : Math.random() * 5 + 5;

      const duration = Math.random() * 10 + 8;
      const delay    = Math.random() * -20;
      const left     = Math.random() * 100;

      el.style.cssText = `
        width: ${size}px;
        height: ${size}px;
        left: ${left}%;
        animation-duration: ${duration}s;
        animation-delay: ${delay}s;
        opacity: 0;
      `;

      container.appendChild(el);
      return el;
    });

    return () => particles.forEach(p => p.remove());
  }, []);
}

function useFadeInOnScroll(mainRef) {
  useEffect(() => {
    const sections = mainRef.current?.querySelectorAll('.fade-in-section');
    if (!sections) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08 }
    );

    sections.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [mainRef]);
}

function App() {
  const mainRef = useRef(null);
  useParticles();
  useFadeInOnScroll(mainRef);

  return (
    <>
      <div id="particles-bg" />
      <Header />

      <main className='main' ref={mainRef}>
        <Home />
        <div className='fade-in-section'><About /></div>
        <div className='fade-in-section'><Skills /></div>
        <div className='fade-in-section'><Services /></div>
        <div className='fade-in-section'><Qualification /></div>
        <div className='fade-in-section'><Work /></div>
        <div className='fade-in-section'><Contact /></div>
      </main>

      <Footer />
      <Scrollup />
    </>
  );
}

export default App;