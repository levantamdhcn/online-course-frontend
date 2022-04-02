import React from 'react';

const Track = ({
  id,
  index,
  title,
  children,
  isOpen,
  setIsOpen,
  totalLecture,
  completedLecture,
  totalTime
}) => {
  const handleToggle = (id) => {
    setIsOpen((state) => {
      return state === id ? null : id;
    });
  };

  return (
    <div className="accordion-wrapper  shadow-md">
      <div
        className={`accordion-title shadow-md ${isOpen ? 'open' : ''}`}
        onClick={() => handleToggle(id)}
      >
        <div className="accordion-label">
          <p>
            {index}. {title}
          </p>
          <div className="track-info">
            <div className="completed-lectures-count">
              {completedLecture}/{totalLecture}
            </div>
            <div className="divider"></div>
            <div className="track-total-time">{totalTime}</div>
          </div>
        </div>
        <span className="icon-arrow-right"></span>
      </div>
      <div className={`accordion-item ${!isOpen ? 'collapsed' : ''}`}>
        <div className="accordion-content">{children}</div>
      </div>
    </div>
  );
};

export default Track;
