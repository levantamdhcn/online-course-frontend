import { useContext } from 'react';
import CourseContext from 'contexts/CourseContext';

const useCourse = () => useContext(CourseContext);

export default useCourse;
