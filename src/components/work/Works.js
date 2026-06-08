import React, { useEffect, useState, useRef, useCallback } from 'react';
import { projectsData, projectNav } from './Data';
import WorkItems from './WorkItems';
import WorkModal from './WorkModal';

const PAGE_SIZE = 6;

const Works = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [activeNavIndex, setActiveNavIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);
  const [selectedProject, setSelectedProject] = useState(null);
  const [carouselIndex, setCarouselIndex] = useState(0);
  const [carouselAnim, setCarouselAnim] = useState(true);
  const [animKey, setAnimKey] = useState(0);
  const containerRef = useRef(null);
  const autoRef = useRef(null);

  // Filtered data
  const filtered = activeFilter === 'All'
    ? projectsData
    : projectsData.filter(p => p.category.toLowerCase() === activeFilter.toLowerCase());

  const featuredProjects = projectsData.filter(p => p.featured);
  const gridProjects = filtered;
  const visibleProjects = gridProjects.slice(0, visibleCount);
  const hasMore = visibleCount < gridProjects.length;

  // Carousel auto-advance
  const advanceCarousel = useCallback(() => {
    setCarouselAnim(false);
    setTimeout(() => {
      setCarouselIndex(i => (i + 1) % featuredProjects.length);
      setCarouselAnim(true);
    }, 50);
  }, [featuredProjects.length]);

  useEffect(() => {
    autoRef.current = setInterval(advanceCarousel, 4500);
    return () => clearInterval(autoRef.current);
  }, [advanceCarousel]);

  const goTo = (i) => {
    clearInterval(autoRef.current);
    setCarouselAnim(false);
    setTimeout(() => { setCarouselIndex(i); setCarouselAnim(true); }, 50);
    autoRef.current = setInterval(advanceCarousel, 4500);
  };

  // Filter change
  const handleFilter = (name, index) => {
    setActiveFilter(name);
    setActiveNavIndex(index);
    setVisibleCount(PAGE_SIZE);
    setAnimKey(k => k + 1);
  };

  // Stagger grid cards
  useEffect(() => {
    const cards = containerRef.current?.querySelectorAll('.work-card-anim');
    if (!cards) return;
    cards.forEach((card, i) => {
      card.style.opacity = '0';
      card.style.transform = 'translateY(20px)';
      card.style.transition = `opacity 0.45s ease ${i * 0.07}s, transform 0.45s ease ${i * 0.07}s`;
      requestAnimationFrame(() => requestAnimationFrame(() => {
        card.style.opacity = '1';
        card.style.transform = 'translateY(0)';
      }));
    });
  }, [animKey, visibleCount]);

  const featured = featuredProjects[carouselIndex];

  return (
    <div className="works__wrapper">

      {/* ── FEATURED CAROUSEL ── */}
      <div className="works__featured">
        <p className="works__featured-label">Featured</p>

        <div className={`works__featured-card ${carouselAnim ? 'works__featured-enter' : ''}`}>
          <div className="works__featured-img-wrap">
            <img src={featured.image} alt={featured.title} className="works__featured-img" />
            <div className="works__featured-overlay" />
            <div className="works__featured-content">
              <div className="works__featured-tags">
                {featured.tags.slice(0, 4).map((t, i) => (
                  <span key={i} className="work__tag work__tag--light">{t}</span>
                ))}
              </div>
              <h3 className="works__featured-title">{featured.title}</h3>
              <p className="works__featured-desc">{featured.desc}</p>
              <div className="works__featured-actions">
                <button className="works__featured-btn" onClick={() => setSelectedProject(featured)}>
                  View Details →
                </button>
                {featured.link?.site && (
                  <a href={featured.link.site} target="_blank" rel="noopener noreferrer" className="works__featured-btn works__featured-btn--outline">
                    Live Site ↗
                  </a>
                )}
                {featured.link?.github && (
                  <a href={featured.link.github} target="_blank" rel="noopener noreferrer" className="works__featured-btn works__featured-btn--outline">
                    GitHub ↗
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Dots */}
        <div className="works__featured-dots">
          {featuredProjects.map((_, i) => (
            <button
              key={i}
              className={`works__dot ${i === carouselIndex ? 'works__dot--active' : ''}`}
              onClick={() => goTo(i)}
            />
          ))}
        </div>
      </div>

      {/* ── FILTERS ── */}
      <div className="work__filters">
        {projectNav.map((navItem, index) => (
          <span
            key={index}
            onClick={() => handleFilter(navItem.name, index)}
            className={`work__item${activeNavIndex === index ? ' active-work' : ''}`}
          >
            {navItem.name}
          </span>
        ))}
      </div>

      {/* ── GRID ── */}
      <div className="work__container container grid" ref={containerRef}>
        {visibleProjects.map((project, index) => (
          <div key={`${animKey}-${index}`} className="work-card-anim">
            <WorkItems item={project} onClick={setSelectedProject} />
          </div>
        ))}
      </div>

      {/* ── LOAD MORE ── */}
      {hasMore && (
        <div className="works__load-wrap">
          <button
            className="works__load-btn"
            onClick={() => setVisibleCount(c => c + PAGE_SIZE)}
          >
            Load More
            <i className="uil uil-arrow-down works__load-icon"></i>
          </button>
        </div>
      )}

      {selectedProject && (
        <WorkModal project={selectedProject} onClose={() => setSelectedProject(null)} />
      )}
    </div>
  );
};

export default Works;