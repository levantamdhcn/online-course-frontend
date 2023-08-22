import React, { createContext, useReducer } from 'react';
import axios from 'axios';
import config from '../config';
const initialAuthState = {
  courses: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'GET_COURSES': {
      const { courses } = action.payload;
      return {
        ...state,
        courses
      };
    }
    case 'ADD_COURSE': {
      const { data } = action.payload;
      return {
        ...state,
        courses: state.courses.concat([data])
      }
    }
    case 'UPDATE_COURSE': {
      const { data } = action.payload;
      return {
        ...state,
        courses: state.courses.map((el) => {
          if (el._id === data._id) {
            return data;
          }
          return el;
        })
      };
    }
    case 'DELETE_COURSE': {
      const { _id } = action.payload;
      return {
        ...state,
        courses: state.courses.filter((el) => el._id !== _id)
      };
    }
    default:
      return state;
  }
};

const CourseContext = createContext({
  ...initialAuthState,
  method: 'JWT',
  get: () => Promise.resolve(),
  add: () => Promise.resolve(),
  delete: () => Promise.resolve(),
  update: () => Promise.resolve(),
});

export const CourseProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialAuthState);

  const getCourse = async () => {
    try {
      const res = await axios.get(`${config.url}/course`);

      dispatch({
        type: 'GET_COURSES',
        payload: {
          courses: res.data,
        }
      });
    } catch (error) {
      console.log('error', error);
    }
  };

  const updateCourse = async (courseId, data) => {
    try {
      if(!courseId) throw new Error('Subject is not defined');
      const res = await axios.patch(`${config.url}/course/${courseId}`, data);

      dispatch({
        type: 'UPDATE_COURSE',
        payload: {
          data: res.data,
        }
      });
    } catch (error) {
      console.log('error', error);
    }
  };

  const deleteCourse = async (courseId) => {
    try {
      if(!courseId) throw new Error('Course is not defined');
      await axios.delete(`${config.url}/course/${courseId}`);

      dispatch({
        type: 'DELETE_COURSE',
        payload: {
          _id: courseId,
        }
      });
    } catch (error) {
      console.log('error', error);
    }
  };

  return (
    <CourseContext.Provider
      value={{
        ...state,
        getCourse,
        updateCourse,
        deleteCourse
      }}
    >
      {children}
    </CourseContext.Provider>
  );
};

export default CourseContext;
