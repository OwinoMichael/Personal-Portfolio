import React, { useEffect, useState, useRef } from 'react';
import { projectsData, projectNav } from './Data';
import WorkItems from './WorkItems';
import WorkModal from './WorkModal';

const Works = () => {
  const [item, setItem] = useState({ name: 'All' });
  const [projects, setProjects] = useState(projectsData);
  const [active, setActive] = useState(0);
  const [selectedProject, setSelectedProject] = useState(null);
  const [animKey, setAnimKey] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    const filtered = item.name === 'All' || item.name === 'all'
      ? projectsData
      : projectsData.filter(p => p.category.toLowerCase() === item.name.toLowerCase());
    setProjects(filtered);
    setAnimKey(k => k + 1);
  }, [item]);

  useEffect(() => {
    const cards = containerRef.current?.querySelectorAll('.work-card-anim');
    if (!cards) return;
    cards.forEach((card, i) => {
      card.style.opacity = '0';
      card.style.transform = 'translateY(24px)';
      card.style.transition = `opacity 0.5s ease ${i * 0.08}s, transform 0.5s ease ${i * 0.08}s`;
      requestAnimationFrame(() => requestAnimationFrame(() => {
        card.style.opacity = '1';
        card.style.transform = 'translateY(0)';
      }));
    });
  }, [animKey]);

  const handleClick = (e, index) => {
    setItem({ name: e.target.textContent.trim() });
    setActive(index);
  };

  return (
    <div>
      <div className="work__filters">
        {projectNav.map((navItem, index) => (
          <span key={index} onClick={(e) => handleClick(e, index)}
            className={`work__item${active === index ? ' active-work' : ''}`}>
            {navItem.name}
          </span>
        ))}
      </div>

      <div className="work__container container grid" ref={containerRef}>
        {projects.map((project, index) => (
          <div key={`${animKey}-${index}`} className="work-card-anim">
            <WorkItems item={project} onClick={setSelectedProject} />
          </div>
        ))}
      </div>

      {selectedProject && (
        <WorkModal project={selectedProject} onClose={() => setSelectedProject(null)} />
      )}
    </div>
  );
};

export default Works;