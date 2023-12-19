import { useState } from 'react';
import LoadingScreen from 'components/LoadingScreen';
import Select from 'react-select';
import axios from 'axios';
import config from '../../../../config';
import useAuth from 'hooks/useAuth';

const options = [
  { value: false, label: 'Người dùng' },
  { value: true, label: "Quản trị viên" },
];
const ModalCreateUser = ({ onClose }) => {
  const { initialise } = useAuth();
  const [loading, setLoading] = useState(false);
  const [selectedOption, setSelectedOption] = useState(options[0])
  const [error, setError] = useState('');
  const [data, setData] = useState({
    username: '',
    email: '',
    fullname: '',
    avatar: null,
    admin: false,
    password: '',
    confirmPassword: '',
  });

  const handleSubmit = async () => {
    // if (!/^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i.test(data.email)) {
    //   setError('Email không hợp lệ: test@example.com');
    //   return;
    // }
    const formData = new FormData();
    data.admin = selectedOption.value;
    for (const key in data) {
      if (!!data[key]) {
        formData.append(key, JSON.stringify(data[key]));
      }
      else {
        if(key === 'username') {
          setError(`Tên người dùng không được để trống.`);
          return;
        }
        if(key === 'fullname') {
          setError(`Họ và tên không được để trống.`);
          return;
        }
        if(key === 'email') {
          setError(`Email không được để trống.`);
          return;
        }
      }
    }

    try {
      setLoading(true);
      const res = await axios.post(`${config.url}/auth/register`, formData);
      await initialise();
      // setData(prev => ({
      //   ...prev,
      //   password: undefined,
      //   newPassword: undefined,
      //   confirmPassword: undefined,
      // }));
      setLoading(false);
    } catch (error) {
      console.log(error.message)
      setLoading(false);
    } finally {
      onClose();
    }
  };

  const handleChange = (selectedOption) => {
    setSelectedOption(selectedOption);
  }

  return (
    <>
      <div className="create-course-modal">
        {error}
        <div className="custom-input">
          <div className="custom-input-label">Tên người dùng</div>
          <input
            type={'text'}
            className="custom-input-field"
            placeholder="Tên người dùng"
            onChange={(e) => setData({ ...data, username: e.target.value })}
          />
        </div>
        <div className="custom-input">
          <div className="custom-input-label">Email</div>
          <input
            type={'text'}
            placeholder="Email"
            className="custom-input-field"
            onChange={(e) => setData({ ...data, email: e.target.value })}
          />
        </div>
        <div className="custom-input">
          <div className="custom-input-label">Mật khẩu</div>
          <input
            type={'password'}
            placeholder="Mật khẩu"
            className="custom-input-field"
            onChange={(e) => setData({ ...data, password: e.target.value })}
          />
        </div>
        <div className="custom-input">
          <div className="custom-input-label">Họ và tên</div>
          <input
            type={'text'}
            placeholder="Họ và tên"
            className="custom-input-field"
            onChange={(e) => setData({ ...data, fullname: e.target.value })}
          />
        </div>
        <div className="custom-input">
          <div className="custom-input-label">Ảnh đại diện</div>
          <input
            className="custom-input-file"
            type={'file'}
            onChange={(e) => setData({ ...data, avatar: e.target.files[0] })}
          />
        </div>
        <div className="custom-input">
          <div className="custom-input-label">Loại tài khoản</div>
          <Select
            value={selectedOption}
            onChange={handleChange}
            options={options}
          />
        </div>
        <div className="button-group float-right">
          <button className="btn btn-primary  mr-4" onClick={handleSubmit}>
            Thêm
          </button>
          <button
            className="btn btn-dark"
            onClick={() => {
              setData({
                title: '',
                description: '',
                file: null,
                demands: ''
              });
              onClose();
            }}
          >
            Hủy
          </button>
        </div>
      </div>
      {loading && <LoadingScreen />}
    </>
  );
};

export default ModalCreateUser;
