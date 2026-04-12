import React from 'react';

const WorkItems = ({ item, onClick }) => {
  if (!item) return null;

  return (
    <div className="work__card" onClick={() => onClick(item)}>
      <div className="work__img-wrapper">
        <img src={item.image} alt={item.title} className="work__img" />
        <div className="work__hover-overlay">
          <span className="work__hover-text">View Details →</span>
        </div>
      </div>
      <div className="work__card-body">
        <h3 className="work__title">{item.title}</h3>
        <div className="work__tags">
          {item.tags?.map((tag, i) => (
            <span key={i} className="work__tag">{tag}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WorkItems;