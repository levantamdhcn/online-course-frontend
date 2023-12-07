import React, { useState } from 'react';
import useAuth from 'hooks/useAuth';
import { useHistory, useLocation } from 'react-router-dom';

const navItems = [
  {
    link: '',
    logo: 'dashboard',
    label: 'Bảng điều khiển'
  },
  {
    link: 'user',
    logo: 'user-filled',
    label: 'Người dùng'
  },
  {
    link: 'course',
    logo: 'course',
    label: 'Khóa học'
  },
  {
    link: 'lecture',
    logo: 'lecture',
    label: 'Bài giảng'
  },
  {
    link: 'exercise',
    logo: 'exercise',
    label: 'Bài tập'
  }
];

const AdminNav = ({ tab, setTab }) => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const history = useHistory();
  const location = useLocation();
  console.log('location', location);
  const { user, logout } = useAuth();

  const handleNavigate = (path) => history.push(path);

  return (
    <nav className="admin-nav">
      <div className="admin-nav-top">
        <div className="setting-modal-wrapper">
          <img
            src={user?.avatar}
            alt="avatar"
            className="avatar"
            onClick={() => setIsOpenModal((prev) => !prev)}
          />
          {isOpenModal && (
            <div className="setting-modal" style={{ left: 0, zIndex: 1000 }}>
              <div className="profile-preview">
                <img src={user?.avatar} alt="avatar" />
                <div>
                  <div className="profile-name">{user?.fullname}</div>
                  <div className="profile-link">{user?.username}</div>
                </div>
              </div>
              <div className="modal-options">
                <div
                  className="option"
                  onClick={() => history.push(`/profile/${user && user?._id}`)}
                >
                  Cài đặt
                </div>
                <div
                  className="option"
                  onClick={() => {
                    logout();
                    history.push('/');
                  }}
                >
                  Đăng xuất
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="admin-nav-middle">
        {navItems.map((el) => {
          const isActive = el.link === '' ? location.pathname === '/admin/' : location.pathname.includes(el.link);
          return (
            <div
              key={el.label}
              className={`admin-nav-item ${isActive ? 'active' : ''}`}
              onClick={() => handleNavigate(`/admin/${el.link}`)}
            >
              <span className={`icon icon-${el.logo} hover-effect`}></span>
            </div>
          );
        })}
      </div>
      <div className="admin-nav-bottom">
        <span className="icon icon-log-out hover-effect"></span>
      </div>
    </nav>
  );
};

export default AdminNav;
