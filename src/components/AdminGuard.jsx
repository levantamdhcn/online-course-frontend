import React from 'react'
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import useAuth from 'hooks/useAuth';

const AdminGuard = ({ children }) => {
  const { user } = useAuth();
  if (!user?.admin) {
    return <Redirect to="/" />;
  }

  return <>{children}</>;
}

AdminGuard.propTypes = {
  children: PropTypes.node
};


export default AdminGuard