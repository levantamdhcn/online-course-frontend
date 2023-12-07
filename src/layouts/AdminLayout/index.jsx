import React from 'react';
import PropTypes from 'prop-types';
import AdminNav from './Navbar';

const AdminLayout = ({ children }) => {
  return (
    <div className="admin-page">
      <AdminNav />
      <div className="admin-page-children">
        {children}
      </div>
    </div>
  );
};

AdminLayout.propTypes = {
  children: PropTypes.node
};

export default AdminLayout;
