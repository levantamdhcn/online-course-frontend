
import React, { useCallback, useState } from 'react';
import Course from './Course';
import AdminNav from '../../layouts/AdminLayout/Navbar';
import User from './User';
import Lecture from './Lecture';
import { TABS } from './constant';
import List from './Exercise/List';

const AdminDashboard = () => {
  const [tab, setTab] = useState(TABS.user);

  const getTab = useCallback(() => {
    switch(tab) {
      case TABS.course:
        return <Course />;
      case TABS.lecture:
        return <Lecture />;
      case TABS.user:
        return <User />;
      case TABS.exercise:
        return <List />;
      default: 
        return <User />;
    }
  }, [tab]);

  return (
    <div className="admin-page">
      <div className="admin-page-children">
        {getTab()}  
      </div>
    </div>
  );
};

export default AdminDashboard;
