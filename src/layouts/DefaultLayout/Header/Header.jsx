import React, { useState } from 'react';
import Search from 'components/Search';
import { useHistory } from 'react-router-dom';
import useAuth from 'hooks/useAuth';
import { useLocation } from 'react-router-dom/cjs/react-router-dom.min';

const Header = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [currentTab, setCurrentTab] = useState('home');
  const { pathname } = useLocation();
  const history = useHistory();
  const { isAuthenticated, logout, user } = useAuth();

  console.log('currentTab', currentTab);

  return (
    <>
      <div className="header mx-auto px-44">
        <div className="header-left">
          <div className="logo" onClick={() => history.push('/')}>
            <span className="icon icon-logo size-icon-7 mr-4 color-main cursor-pointer"></span>
          </div>
          <div className="header-nav flex">
            <div
              className={`cursor-pointer header-nav-item ${pathname === '/' ? 'active' : ''}`}
              onClick={() => {
                setCurrentTab('home');
                history.push('/');
              }}
            >
              Trang chủ
            </div>
            <div
              className={`header-nav-item cursor-pointer ${
                pathname.includes('courses') ? 'active' : ''
              }`}
              onClick={() => {
                setCurrentTab('courses');
                setTimeout(() => {
                  history.push('/courses');
                }, 500);
              }}
            >
              Khóa học
            </div>
          </div>
        </div>
        <div className="header-search">
          <Search />
        </div>
        <div className="header-right">
          {isAuthenticated ? (
            <>
              <div className="my-course">Khóa học của tôi</div>
              <div className="setting-modal-wrapper">
                <img
                  src={user?.avatar}
                  alt="avatar"
                  className="avatar"
                  onClick={() => setIsOpenModal((prev) => !prev)}
                />
                {isOpenModal && (
                  <div className="setting-modal">
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
                      {user?.admin && (
                        <div className="option" onClick={() => history.push(`/admin`)}>
                          Quản trị hệ thống
                        </div>
                      )}
                      <div className="option" onClick={() => {
                        logout();
                        history.push('/');
                      }}>
                        Đăng xuất
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </>
          ) : (
            <div className="button-group">
              <button
                onClick={() => {
                  history.push('/login');
                }}
                className="btn btn-light"
              >
                Đăng nhập
              </button>
              <button
                onClick={() => {
                  history.push('register');
                }}
                className="btn btn-dark"
              >
                Đăng ký
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Header;
