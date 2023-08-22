import axios from 'axios';
import config from '../../../../config';
import React, { useState, useEffect } from 'react';
import { DotLoader } from 'react-spinners';
import useSubject from 'hooks/useSubject';

const required = {
  name: 'Tiêu đề',
  content: 'Mô tả'
};

const initialData = {
  name: '',
  content: '',
  video: ''
};

const UpdateLectureModal = ({ onClose, courseId, lecture }) => {
  const { updateSubject } = useSubject();
  const [data, setData] = useState(initialData);
  const [uploading, setUploading] = useState(false);
  
  useEffect(() => {
    if (!lecture) return;
    setData({
      name: lecture.name,
      content: lecture.content,
      video: lecture.video
    });
  }, [lecture]);

  const [error, setError] = useState('');

  const handleSubmit = async () => {
    const { name, content, video } = data;

    for (const key in data) {
      if ((!data[key] || data[key] === '') && required[key]) {
        setError(`${required[key]} là trường bắt buộc !`);
        return;
      }
    }
    try {
      setUploading(true);
      const newSubject = {
        name,
        content,
        video
      };

      updateSubject(lecture._id, newSubject);
      onClose();
    } catch (error) {
      console.log(error);
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="create-course-modal">
      {error}
      <div className="custom-input">
        <div className="custom-input-label">Tiêu đề</div>
        <input
          type={'text'}
          className="custom-input-field"
          value={data.name}
          onChange={(e) => setData({ ...data, name: e.target.value })}
        />
      </div>
      <div className="custom-input">
        <div className="custom-input-label">Mô tả</div>
        <input
          type={'text'}
          className="custom-input-field"
          value={data.content}
          onChange={(e) => setData({ ...data, content: e.target.value })}
        />
      </div>
      <div className="custom-input">
        <div className="custom-input-label">Video</div>
        <input
          className="custom-input-field"
          type={'text'}
          value={data.video}
          onChange={(e) => setData({ ...data, video: e.target.value })}
        />
      </div>
      <div className="button-group flex justify-end">
        <button
          className="btn btn-primary mr-4 flex items-center justify-center"
          onClick={handleSubmit}
        >
          <span className="mr-2">Cập nhật</span>
          {uploading && <DotLoader size={15} color="#fff" />}
        </button>
        <button
          className="btn btn-dark"
          onClick={() => {
            setData({
              name: '',
              content: '',
              video: ''
            });
            onClose();
          }}
        >
          Hủy
        </button>
      </div>
    </div>
  );
};

export default UpdateLectureModal;
