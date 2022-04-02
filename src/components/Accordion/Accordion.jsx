import React from 'react';

const Accordion = ({ id, index, title, children, isOpen, setIsOpen, action }) => {
  const handleToggle = (id) => {
    setIsOpen((state) => {
      return state === id ? null : id;
    });
  };
  return (
    <div className="accordion-wrapper  shadow-md">
      <div className={`accordion-title ${isOpen ? 'open' : ''}`} onClick={() => handleToggle(id)}>
        <div className="accordion-label">
          <p>Part {index}:</p>
          {title}
        </div>
        <span className="icon-arrow-right"></span>
      </div>
      <div className={`accordion-item ${!isOpen ? 'collapsed' : ''}`}>
        <div className="accordion-content">
          {action && <div className="accordion-action">{action}</div>}
          {children}
        </div>
      </div>
    </div>
  );
};

export default Accordion;
