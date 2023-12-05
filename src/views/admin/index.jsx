
import React, { useCallback, useState } from 'react';
import Course from './Course';
import AdminNav from './Navbar';
import User from './User';
import Lecture from './Lecture';
import { TABS } from './constant';
import { List as ExerciseList } from './Exercise';

const AdminDashboard = () => {
  const [tab, setTab] = useState(TABS.user);

  const handleSetTab = useCallback((tab) => {
    setTab(tab);
  }, [])

  const getTab = useCallback(() => {
    switch(tab) {
      case TABS.course:
        return <Course />;
      case TABS.lecture:
        return <Lecture />;
      case TABS.user:
        return <User />;
      case TABS.exercise:
        return <ExerciseList />;
      default: 
        return <User />;
    }
  }, [tab]);

  return (
    <div className="admin-page">
      <AdminNav tab={tab} setTab={handleSetTab} />
      <div className="admin-page-children">
        {getTab()}  
      </div>
    </div>
  );
};

export default AdminDashboard;
