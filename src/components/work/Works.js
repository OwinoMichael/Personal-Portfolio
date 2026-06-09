import React, { useEffect, useState, useRef, useCallback } from 'react';
import { projectsData, projectNav } from './Data';
import WorkModal from './WorkModal';

const FEATURED_COUNT = 5;

const Works = () => {
  const [carouselIndex, setCarouselIndex] = useState(0);
  const [carouselAnim, setCarouselAnim] = useState(true);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState('All');
  const [activeNavIndex, setActiveNavIndex] = useState(0);
  const [selectedProject, setSelectedProject] = useState(null);
  const [headerHeight, setHeaderHeight] = useState(64);
  const autoRef = useRef(null);
  const triggerRef = useRef(null);

  const featuredProjects = projectsData.filter(p => p.featured).slice(0, FEATURED_COUNT);

  const filteredProjects = activeFilter === 'All'
    ? projectsData
    : projectsData.filter(p => p.category.toLowerCase() === activeFilter.toLowerCase());

  const grouped = filteredProjects.reduce((acc, p) => {
    if (!acc[p.category]) acc[p.category] = [];
    acc[p.category].push(p);
    return acc;
  }, {});

  // Measure actual header height
  useEffect(() => {
    const measure = () => {
      const header = document.querySelector('.header');
      if (header) setHeaderHeight(header.getBoundingClientRect().height);
    };
    measure();
    window.addEventListener('resize', measure);
    return () => window.removeEventListener('resize', measure);
  }, []);

  // Carousel
  const advanceCarousel = useCallback(() => {
    setCarouselAnim(false);
    setTimeout(() => {
      setCarouselIndex(i => (i + 1) % featuredProjects.length);
      setCarouselAnim(true);
    }, 60);
  }, [featuredProjects.length]);

  useEffect(() => {
    autoRef.current = setInterval(advanceCarousel, 4500);
    return () => clearInterval(autoRef.current);
  }, [advanceCarousel]);

  const goTo = (i) => {
    clearInterval(autoRef.current);
    setCarouselAnim(false);
    setTimeout(() => { setCarouselIndex(i); setCarouselAnim(true); }, 60);
    autoRef.current = setInterval(advanceCarousel, 4500);
  };

  // Lock body scroll when drawer open
  useEffect(() => {
    document.body.style.overflow = drawerOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [drawerOpen]);

  const openDrawer = () => {
    const availableHeight = window.innerHeight - headerHeight - 8;
    const buttonRect = triggerRef.current?.getBoundingClientRect();

    if (buttonRect) {
      // Ideal scroll position: button sits just above where the drawer starts
      const idealButtonBottom = headerHeight + 8 + availableHeight * 0.92;
      const currentButtonBottom = buttonRect.bottom;
      const scrollDelta = currentButtonBottom - idealButtonBottom;

      if (Math.abs(scrollDelta) > 10) {
        window.scrollBy({ top: scrollDelta, behavior: 'smooth' });
        // Wait for scroll to finish before opening
        setTimeout(() => setDrawerOpen(true), 350);
      } else {
        setDrawerOpen(true);
      }
    } else {
      setDrawerOpen(true);
    }
  };

  const featured = featuredProjects[carouselIndex];

  // Drawer top = just below the header with a small gap
  const drawerTop = headerHeight + 8;

  return (
    <div className="works__wrapper">

      {/* ── FEATURED CAROUSEL ── */}
      <div className="works__featured">
        <div className={`works__featured-card ${carouselAnim ? 'works__featured-enter' : ''}`}>
          <div className="works__featured-img-wrap">
            <img src={featured.image} alt={featured.title} className="works__featured-img" />
            <div className="works__featured-overlay" />

            <button className="works__arrow works__arrow--left"
              onClick={() => goTo((carouselIndex - 1 + featuredProjects.length) % featuredProjects.length)}>
              ‹
            </button>
            <button className="works__arrow works__arrow--right"
              onClick={() => goTo((carouselIndex + 1) % featuredProjects.length)}>
              ›
            </button>

            <div className="works__featured-content">
              <span className="works__counter">
                {String(carouselIndex + 1).padStart(2, '0')} / {String(featuredProjects.length).padStart(2, '0')}
              </span>
              <div className="works__featured-tags">
                {featured.tags.slice(0, 4).map((t, i) => (
                  <span key={i} className="work__tag work__tag--light">{t}</span>
                ))}
              </div>
              <h3 className="works__featured-title">{featured.title}</h3>
              <p className="works__featured-desc">{featured.desc}</p>
              <div className="works__featured-actions">
                <button className="works__featured-btn"
                  onClick={() => setSelectedProject(featured)}>
                  View Details →
                </button>
                {featured.link?.site && (
                  <a href={featured.link.site} target="_blank" rel="noopener noreferrer"
                    className="works__featured-btn works__featured-btn--outline">
                    Live ↗
                  </a>
                )}
                {featured.link?.github && (
                  <a href={featured.link.github} target="_blank" rel="noopener noreferrer"
                    className="works__featured-btn works__featured-btn--outline">
                    GitHub ↗
                  </a>
                )}
              </div>
            </div>

            <div className="works__progress-bar">
              <div key={carouselIndex} className="works__progress-fill"
                style={{ animationDuration: '4.5s' }} />
            </div>
          </div>
        </div>

        <div className="works__thumbs">
          {featuredProjects.map((p, i) => (
            <button key={i}
              className={`works__thumb ${i === carouselIndex ? 'works__thumb--active' : ''}`}
              onClick={() => goTo(i)}>
              <img src={p.image} alt={p.title} />
              <span className="works__thumb-title">{p.title}</span>
            </button>
          ))}
        </div>
      </div>

      {/* ── VIEW ALL BUTTON ── */}
      <div className="works__all-trigger">
        <button ref={triggerRef} className="works__all-btn" onClick={openDrawer}>
          <span>All Projects</span>
          <span className="works__all-count">{projectsData.length}</span>
          <i className="uil uil-apps works__all-icon"></i>
        </button>
      </div>

      {/* ── DRAWER ── */}
      <div
        className={`works__drawer-overlay ${drawerOpen ? 'works__drawer-overlay--open' : ''}`}
        onClick={() => setDrawerOpen(false)}
      >
        <div
          className={`works__drawer ${drawerOpen ? 'works__drawer--open' : ''}`}
          style={{ top: `${drawerTop}px` }}
          onClick={e => e.stopPropagation()}
        >
          <div className="works__drawer-handle" onClick={() => setDrawerOpen(false)} />

          <div className="works__drawer-header">
            <h3 className="works__drawer-title">All Projects</h3>
            <button className="works__drawer-close" onClick={() => setDrawerOpen(false)}>✕</button>
          </div>

          <div className="work__filters work__filters--drawer">
            {projectNav.map((navItem, index) => (
              <span key={index}
                onClick={() => { setActiveFilter(navItem.name); setActiveNavIndex(index); }}
                className={`work__item${activeNavIndex === index ? ' active-work' : ''}`}>
                {navItem.name}
              </span>
            ))}
          </div>

          <div className="works__drawer-body">
            {Object.entries(grouped).map(([category, projects]) => (
              <div key={category} className="works__group">
                <div className="works__group-header">
                  <span className="works__group-name">{category}</span>
                  <span className="works__group-count">{projects.length}</span>
                </div>
                <div className="works__group-row">
                  {projects.map((project, i) => (
                    <div key={i} className="works__mini-card"
                      onClick={() => setSelectedProject(project)}>
                      <div className="works__mini-img-wrap">
                        <img src={project.image} alt={project.title} className="works__mini-img" />
                        <div className="works__mini-overlay"><span>View →</span></div>
                      </div>
                      <p className="works__mini-title">{project.title}</p>
                      <div className="works__mini-tags">
                        {project.tags.slice(0, 2).map((t, ti) => (
                          <span key={ti} className="work__tag">{t}</span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {selectedProject && (
        <WorkModal project={selectedProject} onClose={() => setSelectedProject(null)} />
      )}
    </div>
  );
};

export default Works;