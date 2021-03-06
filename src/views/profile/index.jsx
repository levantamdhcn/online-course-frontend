import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import config from '../../config';
import LoadingScreen from 'components/LoadingScreen';

const Profile = () => {
  const [editting, setEditting] = useState('');
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [file, setFile] = useState(null);


  const { username } = useParams();

  useEffect(() => {
    const getUser = async () => {
      try {
        const res = await axios.get(`${config.url}/user/username/${username}`);

        setUser(res.data.user);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };

    getUser();
  }, [username]);

  const handleSubmitImage = async () => {
    const formData = new FormData();
    formData.append('data', file);
    const res = await axios.post(`${config.url}/upload`, formData, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'multipart/form-data'
      }
    });
    console.log(res);
  };

  return (
    <>
      {isLoading ? (
        <LoadingScreen />
      ) : (
        <div className="profile">
          <div className="px-44 pt-24">
            <div className="grid grid-cols-12 gap-4">
              <div className="col-span-6 col-start-3">
                <div className="profile-heading">Cài đặt</div>
                <div className="profile-top">
                  <h1>Thông tin cá nhân</h1>
                </div>
                <div className="profile-middle">
                  <div className="grid grid-cols-12 gap-4">
                    <div className="col-span-8">
                      <div className="custom-input">
                        <label className="custom-input-label">Họ tên</label>
                        <input
                          type="text"
                          className="custom-input-field"
                          value={user && user.fullname}
                        />
                        <div className="desc">
                          Tên của bạn xuất hiện trên trang cá nhân và bên cạnh các bình luận của
                          bạn.
                        </div>
                      </div>
                    </div>
                    <div className="col-span-4 text-right">
                      {editting === 'name' ? (
                        <div>
                          <button className="btn btn-primary mr-4" onClick={() => setEditting('')}>
                            Lưu
                          </button>
                          <button className="btn btn-light" onClick={() => setEditting('')}>
                            Hủy
                          </button>
                        </div>
                      ) : (
                        <button className="btn btn-light" onClick={() => setEditting('name')}>
                          Chỉnh sửa
                        </button>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-12 gap-4">
                    <div className="col-span-8">
                      <div className="custom-input">
                        <label className="custom-input-label">Bio</label>
                        <input
                          type="text"
                          className="custom-input-field"
                          value={'Lập trình viên Frontend'}
                        />
                        <div className="desc">
                          Bio hiển thị trên trang cá nhân và trong các bài viết (blog) của bạn.
                        </div>
                      </div>
                    </div>
                    <div className="col-span-4 text-right">
                      {editting === 'bio' ? (
                        <div>
                          <button className="btn btn-primary mr-4" onClick={() => setEditting('')}>
                            Lưu
                          </button>
                          <button className="btn btn-light" onClick={() => setEditting('')}>
                            Hủy
                          </button>
                        </div>
                      ) : (
                        <button className="btn btn-light" onClick={() => setEditting('bio')}>
                          Chỉnh sửa
                        </button>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-12 gap-4">
                    <div className="col-span-8">
                      <div className="custom-input">
                        <label className="custom-input-label">Avatar</label>
                        <div className="desc">
                          Nên là ảnh vuông, chấp nhận các tệp: JPG, PNG hoặc GIF.
                        </div>
                        <div className={`image-input ${editting && 'editting'}`}>
                          <img src={file ? file : user.avatar} alt="" className="profile-avatar" />
                          {editting === 'avatar' && <span className="icon-camera-filled"></span>}
                          <input type="file" onChange={(e) => setFile(e.target.files[0])} />
                        </div>
                      </div>
                    </div>
                    <div className="col-span-4 text-right">
                      {editting === 'avatar' ? (
                        <div>
                          <button
                            className="btn btn-primary mr-4"
                            onClick={() => {
                              setEditting('');
                              handleSubmitImage();
                            }}
                          >
                            Lưu
                          </button>
                          <button className="btn btn-light" onClick={() => setEditting('')}>
                            Hủy
                          </button>
                        </div>
                      ) : (
                        <button className="btn btn-light" onClick={() => setEditting('avatar')}>
                          Chỉnh sửa
                        </button>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-12 gap-4">
                    <div className="col-span-8">
                      <div className="custom-input">
                        <label className="custom-input-label">Username</label>
                        <input
                          type="text"
                          className="custom-input-field"
                          value={user && user.username}
                        />
                        <div className="desc">{`URL: https://fullstack.edu.vn/${
                          user && user.username
                        }`}</div>
                      </div>
                    </div>
                    <div className="col-span-4 text-right">
                      {editting === 'username' ? (
                        <div>
                          <button className="btn btn-primary mr-4" onClick={() => setEditting('')}>
                            Lưu
                          </button>
                          <button className="btn btn-light" onClick={() => setEditting('')}>
                            Hủy
                          </button>
                        </div>
                      ) : (
                        <button className="btn btn-light" onClick={() => setEditting('username')}>
                          Chỉnh sửa
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Profile;
