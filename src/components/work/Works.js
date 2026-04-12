import React, { useEffect, useState } from 'react';
import { projectsData, projectNav } from './Data';
import WorkItems from './WorkItems';
import WorkModal from './WorkModal';

const Works = () => {
  const [item, setItem] = useState({ name: 'all' });
  const [projects, setProjects] = useState(projectsData);
  const [active, setActive] = useState(0);
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    if (item.name === 'All' || item.name === 'all') {
      setProjects(projectsData);
    } else {
      setProjects(
        projectsData.filter(
          (p) => p.category.toLowerCase() === item.name.toLowerCase()
        )
      );
    }
  }, [item]);

  const handleClick = (e, index) => {
    setItem({ name: e.target.textContent.trim() }); 
    setActive(index);
  };

  return (
    <div>
      <div className="work__filters">
        {projectNav.map((navItem, index) => (
          <span
            key={index}
            onClick={(e) => handleClick(e, index)}
            className={`work__item${active === index ? ' active-work' : ''}`}
          >
            {navItem.name}
          </span>
        ))}
      </div>

      <div className="work__container container grid">
        {projects.map((project) => (
          <WorkItems
            key={project.id}
            item={project}
            onClick={setSelectedProject}
          />
        ))}
      </div>

      {selectedProject && (
        <WorkModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </div>
  );
};

export default Works;