import React, { useState } from 'react';
import LoadingScreen from '../../components/LoadingScreen';

const required = {
  name: 'Tên khóa học',
  title: 'Tiêu đề',
  description: 'Mô tả',
  file: 'Ảnh thumbnail',
  image: 'Ảnh thumbnail',
};

const CreateCourseModal = ({ onSubmit, onClose }) => {
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
    demand: ''
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
        if(key === 'name') {
          setError(`Tiêu đề không được để trống.`);
          return;
        }
        if(key === 'title') {
          setError(`Tiêu đề không được để trống.`);
          return;
        }
        if(key === 'description') {
          setError(`Mô tả không được để trống.`);
          return;
        }
        if(key === 'image') {
          setError(`Ảnh thumbnail không được để trống.`);
          return;
        }
      }
    }

    try {
      setLoading(true);
      await onSubmit(formData);
      setForm({
        name: '',
        title: '',
        description: '',
        image: null,
        demand: ''
      });
      onClose();
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className="create-course-modal">
        <span id='error-text'>{error}</span>
        <div className="custom-input">
          <label htmlFor='name' className="custom-input-label">Tên khóa học</label>
          <input
            id='name'
            name='name'
            type={'text'}
            className="custom-input-field"
            placeholder="Tên khóa học"
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />
        </div>
        <div className="custom-input">
          <label htmlFor='title' className="custom-input-label">Tiêu đề</label>
          <input
            id='title'
            name='title'
            type={'text'}
            className="custom-input-field"
            placeholder="Tiêu đề"
            onChange={(e) => setForm({ ...form, title: e.target.value })}
          />
        </div>
        <div className="custom-input">
          <label htmlFor='description' className="custom-input-label">Mô tả</label>
          <input
            name='description'
            id='description'
            type={'text'}
            placeholder="Mô tả"
            className="custom-input-field"
            onChange={(e) => setForm({ ...form, description: e.target.value })}
          />
        </div>
        <div className="custom-input">
          <label htmlFor='image' className="custom-input-label">Hình ảnh</label>
          <input
            id='image'
            name='image'
            className="custom-input-file"
            type={'file'}
            onChange={(e) => setForm({ ...form, image: e.target.files[0] })}
          />
        </div>
        <div className="custom-input">
          <label htmlFor='demands' className="custom-input-label">Yêu cầu</label>
          <input
            id='demands'
            name='demands'
            placeholder="Yêu cầu, mỗi yêu cầu cách nhau bởi dấu ,"
            type={'text'}
            className="custom-input-field"
            onChange={(e) => setForm({ ...form, demand: e.target.value })}
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
