import React, { useEffect } from 'react';

const WorkModal = ({ project, onClose }) => {
  useEffect(() => {
    const handleKey = (e) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', handleKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) onClose();
  };

  return (
    <div className="work__modal-overlay" onClick={handleOverlayClick}>
      <div className="work__modal">
        <button className="work__modal-close" onClick={onClose}>✕</button>

        <div className="work__modal-header">
          <h3 className="work__modal-title">{project.title}</h3>
          <div className="work__modal-tags">
            {project.tags?.map((tag, i) => (
              <span key={i} className="work__tag">{tag}</span>
            ))}
          </div>
        </div>

        <p className="work__modal-desc">{project.desc}</p>

        <div className="work__modal-highlights">
          <p className="work__modal-section-title">What I built & achieved</p>
          {project.highlights?.map((h, i) => (
            <div key={i} className="work__highlight-item">→ {h}</div>
          ))}
        </div>

        <div className="work__modal-links">
          {project.link?.github && (
            <a href={project.link.github} target="_blank" rel="noopener noreferrer" className="work__button">
              GitHub <i className="bx bx-right-arrow-alt work__button-icon"></i>
            </a>
          )}
          {project.link?.link && (
            <a href={project.link.link} target="_blank" rel="noopener noreferrer" className="work__button">
              Demo <i className="bx bx-right-arrow-alt work__button-icon"></i>
            </a>
          )}
          {project.link?.site && (
            <a href={project.link.site} target="_blank" rel="noopener noreferrer" className="work__button">
              Site <i className="bx bx-right-arrow-alt work__button-icon"></i>
            </a>
          )}
          {project.link?.kaggle && (
            <a href={project.link.kaggle} target="_blank" rel="noopener noreferrer" className="work__button">
              Kaggle <i className="bx bx-right-arrow-alt work__button-icon"></i>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default WorkModal;