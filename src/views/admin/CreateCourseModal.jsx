import axios from 'axios';
import config from '../../config';
import React, { useState } from 'react';
import LoadingScreen from 'components/LoadingScreen';

const required = {
  title: 'Tiêu đề',
  description: 'Mô tả',
  file: 'Video'
};

const CreateCourseModal = ({ onClose }) => {
  // const [url, setUrl] = useState(null);
  // const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  // useEffect(() => {
  //   const auth = async () => {
  //     const response = await axios.get(`${config.url}/youtube/auth`);

  //     if (response.data.name && response.data.pic) {
  //       console.log(!response.data.name);
  //       setUser(response.data);
  //     } else {
  //       setUrl(response.data);
  //     }
  //   };
  //   auth();
  // }, []);
  const [form, setForm] = useState({
    name: '',
    title: '',
    description: '',
    image: null,
    demands: ''
  });
  const [error, setError] = useState('');

  const handleSubmit = async () => {
    const formData = new FormData();

    for (const key in form) {
      if ((!form[key] || form[key] === '') && required[key]) {
        setError(`${required[key]} là trường bắt buộc !`);
        return;
      }
    }

    for (const key in form) {
      if (!!form[key]) {
        formData.append(key, form[key]);
      }
      else {
        if(key === 'title') {
          setError(`Tiêu đề không được để trống.`);
          return;
        }
        if(key === 'description') {
          setError(`Mô tả không được để trống.`);
          return;
        }
      }
    }

    try {
      setLoading(true);
      const res = await axios.post(`${config.url}/course`, formData);
      console.log('res', res);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className="create-course-modal">
        {error}
        <div className="custom-input">
          <div className="custom-input-label">Tên khóa học</div>
          <input
            type={'text'}
            className="custom-input-field"
            placeholder="Tên khóa học"
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />
        </div>
        <div className="custom-input">
          <div className="custom-input-label">Tiêu đề</div>
          <input
            type={'text'}
            className="custom-input-field"
            placeholder="Tiêu đề"
            onChange={(e) => setForm({ ...form, title: e.target.value })}
          />
        </div>
        <div className="custom-input">
          <div className="custom-input-label">Mô tả</div>
          <input
            type={'text'}
            placeholder="Mô tả"
            className="custom-input-field"
            onChange={(e) => setForm({ ...form, description: e.target.value })}
          />
        </div>
        <div className="custom-input">
          <div className="custom-input-label">Hình ảnh</div>
          <input
            className="custom-input-file"
            type={'file'}
            onChange={(e) => setForm({ ...form, image: e.target.files[0] })}
          />
        </div>
        <div className="custom-input">
          <div className="custom-input-label">Yêu cầu</div>
          <input
            placeholder="Yêu cầu, mỗi yêu cầu cách nhau bởi dấu ,"
            type={'text'}
            className="custom-input-field"
            onChange={(e) => setForm({ ...form, demands: e.target.value })}
          />
        </div>
        <div className="button-group float-right">
          <button className="btn btn-primary  mr-4" onClick={handleSubmit}>
            Thêm
          </button>
          <button
            className="btn btn-dark"
            onClick={() => {
              setForm({
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

export default CreateCourseModal;
