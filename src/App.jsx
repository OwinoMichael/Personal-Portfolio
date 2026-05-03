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

function useFadeInOnScroll() {
  const ref = useRef(null);

  useEffect(() => {
    const sections = ref.current?.querySelectorAll('.fade-in-section');
    if (!sections) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target); // animate once
          }
        });
      },
      { threshold: 0.12 } // trigger when 12% of section is visible
    );

    sections.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return ref;
}

function App() {
  const mainRef = useFadeInOnScroll();

  return (
    <>
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
