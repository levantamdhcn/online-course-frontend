import axios from 'axios';
import config from '../../config';
import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';

const required = {
  title: 'Tiêu đề',
  description: 'Mô tả',
  file: 'Video'
};

const CreateCourseModal = () => {
  const [url, setUrl] = useState(null);
  const [user, setUser] = useState(null);
  useEffect(() => {
    const auth = async () => {
      const response = await axios.get(`${config.url}/youtube/auth`);

      if (response.data.name && response.data.pic) {
        console.log(!response.data.name);
        setUser(response.data);
      } else {
        setUrl(response.data);
      }
    };
    auth();
  }, []);
  const [form, setForm] = useState({
    title: '',
    description: '',
    file: null,
    tags: ''
  });
  const [error, setError] = useState('');

  const history = useHistory();

  const handleSubmit = async () => {
    const { title, description, file, tags } = form;

    for (const key in form) {
      if ((!form[key] || form[key] === '') && required[key]) {
        setError(`${required[key]} là trường bắt buộc !`);
        return;
      }
    }
    try {
      let formData = new FormData();
      formData.append('title', title);
      formData.append('description', description);
      formData.append('videoFile', file);
      formData.append('tags', tags);
      const res = axios.post(`${config.url}/youtube/upload`, formData);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="create-course-modal">
      <div className="custom-input">
        <div className="custom-input-label">Tiêu đề</div>
        <input
          type={'text'}
          className="custom-input-field"
          onChange={(e) => setForm({ ...form, title: e.target.value })}
        />
      </div>
      <div className="custom-input">
        <div className="custom-input-label">Mô tả</div>
        <input
          type={'text'}
          className="custom-input-field"
          onChange={(e) => setForm({ ...form, description: e.target.value })}
        />
      </div>
      <div className="custom-input">
        <div className="custom-input-label">Video</div>
        <input
          className="custom-input-file"
          type={'file'}
          onChange={(e) => setForm({ ...form, file: e.target.files[0] })}
        />
        <img
          style={{ width: '35px', borderRadius: '50%', float: 'right' }}
          src={user ? user.pic : ''}
          alt=""
        />
      </div>
      <div className="custom-input">
        <div
          className="custom-input-label"
          onChange={(e) => setForm({ ...form, tags: e.target.value })}
        >
          Tags
        </div>
        <input type={'text'} className="custom-input-field" />
      </div>
      <div className="button-group float-right">
        {!user ? (
          <button className="btn btn-primary  mr-4">
            <a href={url ? url : ''} target="_blank">
              Đăng nhập
            </a>
          </button>
        ) : (
          <>
            <button className="btn btn-primary  mr-4" onClick={handleSubmit}>
              Thêm
            </button>
            <button
              className="btn btn-dark"
              onClick={() =>
                setForm({
                  title: '',
                  description: '',
                  file: null,
                  tags: ''
                })
              }
            >
              Hủy
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default CreateCourseModal;
