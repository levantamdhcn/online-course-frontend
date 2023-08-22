import React, { createContext, useReducer } from 'react';
import axios from 'axios';
import config from '../config';
const initialAuthState = {
  subjects: [],
  course: null
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'GET_SUBJECT': {
      const { subjects, course } = action.payload;
      return {
        ...state,
        subjects,
        course
      };
    }
    case 'ADD_SUBJECT': {
      const { data } = action.payload;
      return {
        ...state,
        subjects: state.subjects.concat([data])
      }
    }
    case 'UPDATE_SUBJECT': {
      const { data } = action.payload;
      return {
        ...state,
        subjects: state.subjects.map((el) => {
          if (el._id === data._id) {
            return data;
          }
          return el;
        })
      };
    }
    case 'DELETE_SUBJECT': {
      const { _id } = action.payload;
      return {
        ...state,
        subjects: state.subjects.filter((el) => el._id !== _id)
      };
    }
    default:
      return state;
  }
};

const SubjectContext = createContext({
  ...initialAuthState,
  method: 'JWT',
  get: () => Promise.resolve(),
  add: () => Promise.resolve(),
  delete: () => Promise.resolve(),
  update: () => Promise.resolve(),
});

export const SubjectProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialAuthState);

  const getSubject = async (course) => {
    try {
      if(!course) throw new Error('Course is not defined');
      const res = await axios.get(`${config.url}/subject/course/${course}`);

      dispatch({
        type: 'GET_SUBJECT',
        payload: {
          subjects: res.data,
          course
        }
      });
    } catch (error) {
      console.log('error', error);
    }
  };

  const updateSubject = async (subjectId, data) => {
    try {
      if(!subjectId) throw new Error('Subject is not defined');
      const res = await axios.patch(`${config.url}/subject/${subjectId}`, data);

      dispatch({
        type: 'UPDATE_SUBJECT',
        payload: {
          data: res.data,
        }
      });
    } catch (error) {
      console.log('error', error);
    }
  };

  const deleteSubject = async (subjectId) => {
    try {
      if(!subjectId) throw new Error('Subject is not defined');
      await axios.delete(`${config.url}/subject/${subjectId}`);

      dispatch({
        type: 'DELETE_SUBJECT',
        payload: {
          _id: subjectId,
        }
      });
    } catch (error) {
      console.log('error', error);
    }
  };

  return (
    <SubjectContext.Provider
      value={{
        ...state,
        getSubject,
        updateSubject,
        deleteSubject
      }}
    >
      {children}
    </SubjectContext.Provider>
  );
};

export default SubjectContext;
