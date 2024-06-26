import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import config from '../../config';
import LoadingScreen from 'components/LoadingScreen';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import useAuth from 'hooks/useAuth';

const Profile = () => {
  const { user: currenUser } = useAuth();
  const [editting, setEditting] = useState('');
  const [user, setUser] = useState(null);
  const [data, setData] = useState(user);
  const [isLoading, setIsLoading] = useState(true);
  const [file, setFile] = useState(null);

  const history = useHistory();

  const { id } = useParams();

  useEffect(() => {
    const getUser = async () => {
      try {
        const res = await axios.get(`${config.url}/user/${id}`);

        if (
          !currenUser &&
          !currenUser?.admin &&
          currenUser?._id !== res.data?._id
        ) {
          history.push('/');
          return <> </>;
        }
  
        setUser(res.data);
        setData(res.data);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };

    getUser();
  }, [id]);

  const handleUpdateField = async () => {
    try {
      const res = await axios.put(`${config.url}/user/${user._id}`, data);
      if(res.data){
        setUser(res.data);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setEditting('');
    }
  }

  const handleChangeField = (field, newData) => {
    setData({
      ...data,
      [field]: newData,
    })
  }
  
  const handleUpdateAvatar = async () => {
    const formData = new FormData();

    if(!file) setEditting('');
    data.avatar = file;

    for (const key in data) {
      if (!!data[key]) {
        formData.append(key, data[key]);
      }
      else {
        if(key === 'email') {
          alert(`Email không được để trống.`);
          return;
        }
        if(key === 'username') {
          alert(`Tên người dùng không được để trống.`);
          return;
        }
      }
    }
    try {
      const res = await axios.put(`${config.url}/user/${user?._id}`, formData);
      if(res.data){
        setUser(res.data);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setEditting('');
    }
  }

  return (
    <>
      {isLoading ? (
        <LoadingScreen />
      ) : (
        <div className="profile">
          <div className="px-44 pt-24">
            <div className="grid grid-cols-12 gap-4">
              <div className="col-span-6 col-start-3">
                <div className='goback-btn' onClick={history.goBack}>
                  <span className='icon icon-arrow-left'></span>
                </div>
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
                          disabled={editting !== 'name'}
                          type="text"
                          className="custom-input-field"
                          value={data && data?.fullname}
                          onChange={(e) => handleChangeField('fullname', e.target.value)}
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
                          <button className="btn btn-primary mr-4" onClick={handleUpdateField}>
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
                        <label className="custom-input-label">Tiểu sử</label>
                        <input
                          disabled={editting !== 'bio'}
                          type="text"
                          className="custom-input-field"
                          value={data?.bio}
                          onChange={(e) => handleChangeField('bio', e.target.value)}
                        />
                        <div className="desc">
                          Tiểu sử hiển thị trên trang cá nhân và trong các bài viết (blog) của bạn.
                        </div>
                      </div>
                    </div>
                    <div className="col-span-4 text-right">
                      {editting === 'bio' ? (
                        <div>
                          <button className="btn btn-primary mr-4" onClick={handleUpdateField}>
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
                        <label className="custom-input-label">Ảnh đại diện</label>
                        <div className="desc">
                          Nên là ảnh vuông, chấp nhận các tệp: JPG, PNG hoặc GIF.
                        </div>
                        <div className={`image-input ${editting && 'editting'}`}>
                          <img src={file ? URL.createObjectURL(file) : user?.avatar} alt="" className="profile-avatar" />
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
                              handleUpdateAvatar();
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
                        <label className="custom-input-label">Tên người dùng</label>
                        <input
                          type="text"
                          disabled
                          className="custom-input-field"
                          value={data && data?.username}
                        />
                        <div className="desc">{`URL: ${window.location.origin}/profile/${
                          user && user?._id
                        }`}</div>
                      </div>
                    </div>
                    {/* <div className="col-span-4 text-right">
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
                    </div> */}
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
