import axios from 'axios';
import config from '../../../../config';
import React, { useState, useEffect } from 'react';
import { DotLoader } from 'react-spinners';
import { toast } from 'react-toastify';
import useSubject from '../../../../hooks/useSubject';

const required = {
  title: 'Tiêu đề',
  description: 'Mô tả',
  file: 'Video',
  video: 'Video'
};

const CreateLectureModal = ({ courseId, onClose }) => {
  const { getSubject } = useSubject();
  const [url, setUrl] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [videoUploadType, setVideoUploadType] = useState('upload');
  const [user, setUser] = useState(null);
  useEffect(() => {
    const auth = async () => {
      const response = await axios.get(`${config.url}/youtube/auth`);

      if (response.data.name && response.data.pic) {
        console.log(!response.data.name);
        setUser(response.data);
      } else {
        setUrl(response.data.url);
      }
    };
    auth();
  }, []);
  const [form, setForm] = useState({
    title: '',
    description: '',
    video: null,
    image: null,
    tags: ''
  });
  const [error, setError] = useState('');

  const handleSubmit = async () => {
    const { title, description, video, image, tags } = form;

    for (const key in form) {
      if ((!form[key] || form[key] === '') && required[key]) {
        setError(`${required[key]} là trường bắt buộc !`);
        return;
      }
    }
    try {
      if (videoUploadType === 'upload') {
        setUploading(true);
        let formData = new FormData();
        formData.append('title', title);
        formData.append('description', description);
        formData.append('videoFile', video);
        formData.append('imageFile', image);
        formData.append('tags', tags);
        const res = await axios.post(`${config.url}/youtube/upload`, formData);

        const newSubject = {
          name: title,
          content: description,
          video: res.data.video.id,
          thumbnail: res?.data?.thumbnail?.items?.[0]?.high?.url
        };

        await axios.post(`${config.url}/subject/${courseId}`, newSubject);
      } else {
        const newSubject = {
          name: title,
          content: description,
          video: form.video,
          tags: form.tags
        };

        await axios.post(`${config.url}/subject/${courseId}`, newSubject);
      }

      getSubject(courseId);

      return toast.success(`Tải lên video thành công`);
    } catch (error) {
      console.log(error);
    } finally {
      setUploading(false);
      setTimeout(() => {
        onClose();
      }, 400);
    }
  };

  const handleClose = async () => {
    try {
      await axios.put(`${config.url}/youtube/unauth`);
    } catch (error) {
      console.log(error);
    } finally {
      onClose();
    }
  };

  const handleChooseUploadType = (type) => {
    setVideoUploadType(type);
  };

  return (
    <div className="create-course-modal">
      <span id='error-text'>{error}</span>
      <div className="custom-input">
        <label htmlFor="title" className="custom-input-label">
          Tiêu đề
        </label>
        <input
          id="title"
          name="title"
          type={'text'}
          className="custom-input-field"
          onChange={(e) => setForm({ ...form, title: e.target.value })}
        />
      </div>
      <div className="custom-input">
        <label htmlFor="description" className="custom-input-label">
          Mô tả
        </label>
        <input
          id="description"
          name="description"
          type={'text'}
          className="custom-input-field"
          onChange={(e) => setForm({ ...form, description: e.target.value })}
        />
      </div>
      <div className="custom-input">
        <div className="mb-2">
          <input
            checked={videoUploadType === 'upload'}
            type="radio"
            id="html"
            name="upload_type"
            value="HTML"
            onChange={() => handleChooseUploadType('upload')}
            onClick={() => handleChooseUploadType('upload')}
          />
          <label htmlFor="html" className="ml-2">
            Tải video lên Youtube
          </label>
          <br />
        </div>
        <div>
          <input
            checked={videoUploadType === 'video_id'}
            type="radio"
            id="css"
            name="upload_type"
            value="CSS"
            onChange={() => handleChooseUploadType('video_id')}
            onClick={() => handleChooseUploadType('video_id')}
          />
          <label htmlFor="css" className="ml-2">
            Nhập ID của video
          </label>
          <br />
        </div>
      </div>
      {videoUploadType === 'upload' ? (
        <>
          <div className="custom-input">
            <label htmlFor="thumbnail" className="custom-input-label">
              Ảnh thu nhỏ
            </label>
            <input
              id="thumbnail"
              name="thumbnail"
              className="custom-input-file"
              type={'file'}
              onChange={(e) => setForm({ ...form, image: e.target.files[0] })}
            />
          </div>
          <div className="custom-input">
            <div className="custom-input-label">Video</div>
            <input
              id="video_custom"
              name="video_custom"
              className="custom-input-file"
              type={'file'}
              onChange={(e) => setForm({ ...form, video: e.target.files[0] })}
            />
            <img
              style={{ width: '35px', borderRadius: '50%', float: 'right' }}
              src={user ? user?.pic : ''}
              alt=""
            />
          </div>
        </>
      ) : (
        <div className="custom-input">
          <div className="custom-input-label">Video</div>
          <input
            id="video_custom"
            name="video_youtube"
            type={'text'}
            className="custom-input-field"
            onChange={(e) => setForm({ ...form, video: e.target.value })}
          />
        </div>
      )}

      <div className="custom-input">
        <label htmlFor='tags' className="custom-input-label">Tags</label>
        <input
          id='tags'
          name="tags"
          type={'text'}
          className="custom-input-field"
          onChange={(e) => setForm({ ...form, tags: e.target.value })}
        />
      </div>
      <div className="button-group flex justify-end">
        <>
          <button
            className="btn btn-primary mr-4 flex items-center justify-center"
            onClick={handleSubmit}
          >
            <span className="mr-2">Thêm</span>
            {uploading && <DotLoader size={15} color="#fff" />}
          </button>
          <button
            className="btn btn-dark"
            onClick={() => {
              setForm({
                title: '',
                description: '',
                file: null,
                tags: ''
              });
              handleClose();
            }}
          >
            Hủy
          </button>
        </>
      </div>
    </div>
  );
};

export default CreateLectureModal;
