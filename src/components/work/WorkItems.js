import React from 'react';

const WorkItems = ({ item }) => {
  return (
    <div className="work__card" key={item.id}>
      <img src={item.image} alt="" className="work__img" />
      <h3 className="work__title">{item.title}</h3>
      
      <div className="work__links">
        <a href={item.link.github} className="work__button">
          Github <i className="bx bx-right-arrow-alt work__button-icon"></i>
        </a>

        {/* Change item.link.demo to item.link.link */}
        {item.link.link && (
          <a href={item.link.link} className="work__button">
            Demo <i className="bx bx-right-arrow-alt work__button-icon"></i>
          </a>
        )}

        {item.link.kaggle && (
          <a href={item.link.kaggle} className="work__button">
            Kaggle <i className="bx bx-right-arrow-alt work__button-icon"></i>
          </a>
        )}

        {item.link.site && (
          <a href={item.link.site} className="work__button">
            Site <i className="bx bx-right-arrow-alt work__button-icon"></i>
          </a>
        )}
      </div>
    </div>
  );
}

export default WorkItems;
