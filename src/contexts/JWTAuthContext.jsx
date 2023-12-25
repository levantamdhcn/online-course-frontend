import React, { createContext, useEffect, useReducer } from 'react';
import jwtDecode from 'jwt-decode';
import axios from 'axios';
import config from '../config';
import LoadingScreen from '../components/LoadingScreen';
import { toast } from 'react-toastify';

const initialAuthState = {
  isAuthenticated: false,
  user: null,
  users: [],
  authError: null,
  isInitialised: false,
};

const isValidToken = (accessToken) => {
  if (!accessToken) {
    return false;
  }

  const decoded = jwtDecode(accessToken);
  const currentTime = Date.now() / 1000;

  return !decoded.exp || decoded.exp > currentTime;
};

const setSession = (accessToken) => {
  if (accessToken) {
    localStorage.setItem('accessToken', accessToken);
    axios.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
  } else {
    localStorage.removeItem('accessToken');
    delete axios.defaults.headers.common.Authorization;
  }
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'INITIALISE': {
      const { isAuthenticated, user, users } = action.payload;
      return {
        ...state,
        isAuthenticated,
        isInitialised: true,
        user,
        users
      };
    }
    case 'LOGIN': {
      const { isAuthenticated, user } = action.payload;
      return {
        ...state,
        isAuthenticated,
        user
      };
    }
    case 'LOGOUT': {
      return {
        ...state,
        isAuthenticated: false,
        user: null
      };
    }
    case 'REGISTER': {
      const { user } = action.payload;

      return {
        ...state,
        isAuthenticated: true,
        user
      };
    }
    default:
      return state;
  }
};

const AuthContext = createContext({
  ...initialAuthState,
  method: 'JWT',
  login: () => Promise.resolve(),
  logout: () => {},
  register: () => Promise.resolve()
});

export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialAuthState);

  const loginWithGoogle = async (data) => {
    const { accessToken, user } = data;
    setSession(accessToken);

    dispatch({
      type: 'LOGIN',
      payload: {
        user,
        isAuthenticated: true
      }
    });
  };

  const login = async (email, password) => {
    try {
      const response = await axios.post(`${config.url}/auth/login`, {
        email,
        password
      });
      const { access_token } = response.data;
      setSession(access_token);
      const user = await axios.get(`${config.url}/auth/currentUser`);
      dispatch({
        type: 'LOGIN',
        payload: {
          user: user.data,
          isAuthenticated: true
        }
      });
    } catch (error) {
      return Promise.reject(error);
    }
  };

  const logout = () => {
    setSession(null);
    dispatch({
      type: 'LOGOUT'
    });
  };

  const register = async (fullname, email, username, password) => {
    try {
      const formData = new FormData();
      formData.append('fullname', fullname);
      formData.append('email', email);
      formData.append('username', username);
      formData.append('password', password);
      const response = await axios.post(`${config.url}/auth/register`, formData);
      const { accessToken, user } = response.data;

      window.localStorage.setItem('accessToken', accessToken);

      dispatch({
        type: 'REGISTER',
        payload: {
          user
        }
      });
    } catch (error) {
      toast.error(JSON.stringify(error))
      return Promise.reject(error);
    }
  };

  const initialise = async () => {
    try {
      const accessToken = window.localStorage.getItem('accessToken');

      if (accessToken && isValidToken(accessToken)) {
        setSession(accessToken);

        const res = await axios.get(`${config.url}/auth/currentUser`);
        const users = await axios.get(`${config.url}/user`);

        dispatch({
          type: 'INITIALISE',
          payload: {
            isAuthenticated: true,
            user: res?.data,
            users: users.data,
          }
        });
      } else {
        dispatch({
          type: 'INITIALISE',
          payload: {
            isAuthenticated: false,
            user: null,
            users: [],
          },
        });
      }
    } catch (error) {
      dispatch({
        type: 'INITIALISE',
        payload: {
          isAuthenticated: false,
          user: null,
          users: [],
        }
      });
    }
  };

  useEffect(() => {
    initialise();
  }, []);

  if (!state.isInitialised) {
    return <LoadingScreen />;
  }

  return (
    <AuthContext.Provider
      value={{
        ...state,
        method: 'JWT',
        login,
        loginWithGoogle,
        logout,
        register,
        initialise
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
