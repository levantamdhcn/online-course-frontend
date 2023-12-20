import axios from 'axios';
import config from '../../../../config';
import React, { useState, useEffect } from 'react';
import { DotLoader } from 'react-spinners';
import useSubject from 'hooks/useSubject';
import { toast } from 'react-toastify';

const required = {
  title: 'Tiêu đề',
  description: 'Mô tả',
  file: 'Video'
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
      {error}
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
        <div className="mb-2">
          <input
            checked={videoUploadType === 'upload'}
            type="radio"
            id="html"
            name="fav_language"
            value="HTML"
            onInput={() => handleChooseUploadType('upload')}
            onClick={() => handleChooseUploadType('upload')}
          />
          <label for="html" className="ml-2">
            Tải video lên Youtube
          </label>
          <br />
        </div>
        <div>
          <input
            checked={videoUploadType === 'video_id'}
            type="radio"
            id="css"
            name="fav_language"
            value="CSS"
            onInput={() => handleChooseUploadType('video_id')}
            onClick={() => handleChooseUploadType('video_id')}
          />
          <label for="css" className="ml-2">
            Nhập ID của video
          </label>
          <br />
        </div>
      </div>
      {videoUploadType === 'upload' ? (
        <>
          <div className="custom-input">
            <div className="custom-input-label">Ảnh thu nhỏ</div>
            <input
              className="custom-input-file"
              type={'file'}
              onChange={(e) => setForm({ ...form, image: e.target.files[0] })}
            />
          </div>
          <div className="custom-input">
            <div className="custom-input-label">Video</div>
            <input
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
            type={'text'}
            className="custom-input-field"
            onChange={(e) => setForm({ ...form, video: e.target.value })}
          />
        </div>
      )}

      <div className="custom-input">
        <div
          className="custom-input-label"
          onChange={(e) => setForm({ ...form, tags: e.target.value })}
        >
          Tags
        </div>
        <input type={'text'} className="custom-input-field" />
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
