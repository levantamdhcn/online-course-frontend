import axios from 'axios';
import config from '../../../../config';
import React, { useEffect, useState } from 'react';
import LoadingScreen from 'components/LoadingScreen';
import useCourse from 'hooks/useCourse';

const required = {
  title: 'Tiêu đề',
  description: 'Mô tả',
  file: 'Video'
};

const initialData = {
  name: '',
  title: '',
  description: '',
  image: null,
  demands: ''
}

const UpdateCourseModal = ({ onClose, course }) => {
  const { updateCourse } = useCourse();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState(initialData);
  const [error, setError] = useState('');

  useEffect(() => {
    if (!course) return;
    setForm({
      name: course.name,
      description: course.description,
      image: null,
      demand: course?.demand?.join(', ')
    });
  }, [course])

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
      } else {
        if (key === 'title') {
          setError(`Tiêu đề không được để trống.`);
          return;
        }
        if (key === 'description') {
          setError(`Mô tả không được để trống.`);
          return;
        }
      }
    }

    try {
      setLoading(true);

      updateCourse(course?._id, formData);
      setLoading(false);
    } catch (error) {
      console.log(error);
    } finally {
      onClose();
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
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />
        </div>
        <div className="custom-input">
          <div className="custom-input-label">Mô tả</div>
          <input
            type={'text'}
            placeholder="Mô tả"
            className="custom-input-field"
            value={form.description}
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
            value={form.demand}
            onChange={(e) => setForm({ ...form, demands: e.target.value })}
          />
        </div>
        <div className="button-group float-right">
          <button className="btn btn-primary  mr-4" onClick={handleSubmit}>
            Cập nhật
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

export default UpdateCourseModal;
