
import React from 'react';
import Course from './Course';
import AdminNav from './Navbar';
import User from './User';
import { useLocation } from 'react-router-dom';
import Lecture from './Lecture';

function useQuery() {
  const { search } = useLocation();

  return React.useMemo(() => new URLSearchParams(search), [search]);
}

const AdminDashboard = () => {
  const query = useQuery();
  console.log('tab', query.get('tab') === 'course')
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
