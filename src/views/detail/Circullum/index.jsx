import React, { useState } from 'react';

import Accordion from 'components/Accordion/Accordion';
import LectureList from './LectureList/LectureList';

const lectures = [
  {
    index: 1,
    title: 'Web Designing Beginner',
    status: 'available'
  },
  {
    index: 2,
    title: 'Startup Designing with HTML5 & SCC3',
    status: 'available'
  },
  {
    index: 3,
    title: 'How to call google map iFrame',
    status: 'available'
  },
  {
    index: 4,
    title: 'Create Drop Down Navigation Using CSS3',
    status: 'block'
  },
  {
    index: 5,
    title: 'How to create sticky navigation using JS',
    status: 'block'
  }
];

const CourseCircullum = () => {
  const [openAccordion, setOpenAccordion] = useState(null);

  return (
    <div className="course-detail-element">
      <div className="course-overview-title">Course Circullum</div>
      <ul>
        <Accordion
          id={1}
          index={1}
          title="How to lean Web Designing Step By Step"
          children={<LectureList lectures={lectures} />}
          isOpen={openAccordion === 1}
          setIsOpen={setOpenAccordion}
        />
        <Accordion
          id={2}
          index={2}
          title="How to lean Web Designing Step By Step"
          children={<LectureList lectures={lectures} />}
          isOpen={openAccordion === 2}
          setIsOpen={setOpenAccordion}
        />
        <Accordion
          id={3}
          index={3}
          title="How to lean Web Designing Step By Step"
          children={<LectureList lectures={lectures} />}
          isOpen={openAccordion === 3}
          setIsOpen={setOpenAccordion}
        />
      </ul>
    </div>
  );
};

export default CourseCircullum;
