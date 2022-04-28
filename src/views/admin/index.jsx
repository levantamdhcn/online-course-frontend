import ModalWrapper from 'components/ModalWrapper/ModalWrapper';
import React, { useEffect, useState } from 'react';
import Course from './Course';
import CreateCourseModal from './CreateCourseModal';
import AdminNav from './Navbar';
import User from './User';
import { useLocation, useHistory } from 'react-router-dom';
import Lecture from './Lecture';

function useQuery() {
  const { search } = useLocation();

  return React.useMemo(() => new URLSearchParams(search), [search]);
}

const AdminDashboard = () => {
  const query = useQuery();
  return (
    <div className="admin-page">
      <AdminNav />
      <div className="admin-page-children">
        {query.get('tab') === 'user' && <User />}
        {query.get('tab') === 'course' && <Course />}
        {query.get('tab') === 'lecture' && <Lecture />}
      </div>
    </div>
  );
};

export default AdminDashboard;
