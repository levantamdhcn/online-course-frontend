import React, { useCallback, useEffect, useState } from 'react';
import Logo from 'assets/images/logo.png';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import VideoViewer from './VideoViewer/VideoViewer';
import TrackList from './TrackList';
import ListComments from './Comments/ListComments';
import Avatar from 'assets/images/avatar.jpg';
import { useHistory } from 'react-router-dom';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import axios from 'axios';
import config from '../../config';
import moment from 'moment';

const courseLearningInfo = {
  id: 1,
  courseName: 'HTML, CSS từ Zero đến Hero',
  lectureSection: [
    {
      id: 0,
      name: 'Bắt đầu',
      time: '1:46:14',
      lecturesList: [
        {
          id: 0,
          name: 'Làm được gì sau khóa học',
          time: '11:35',
          video: 'https://youtu.be/egSxAF-Sak4',
          isCompleted: true,
          exercises: [
            {
              id: 0,
              isCompleted: true
            },
            {
              id: 1,
              isCompleted: false
            },
            {
              id: 2,
              isCompleted: false
            }
          ]
        },
        {
          id: 1,
          name: 'HTML, CSS là gì?',
          time: '11:35',
          video: 'https://youtu.be/egSxAF-Sak4',
          isCompleted: false,
          exercises: [
            {
              id: 0,
              isCompleted: false
            },
            {
              id: 1,
              isCompleted: false
            }
          ]
        },
        {
          id: 1,
          name: 'HTML, CSS là gì?',
          time: '11:35',
          video: 'https://youtu.be/egSxAF-Sak4',
          isCompleted: false,
          exercises: [
            {
              id: 0,
              isCompleted: true
            },
            {
              id: 1,
              isCompleted: false
            }
          ]
        }
      ]
    },
    {
      id: 1,
      name: 'Môi trường, con người IT',
      isCompleted: false,
      time: '1:46:14',
      lecturesList: [
        {
          id: 1,
          name: 'Mô hình Client - Server là gì?',
          time: '11:35',
          video: 'https://youtu.be/egSxAF-Sak4',
          isCompleted: true,
          exercises: [
            {
              id: 1,
              isCompleted: true
            }
          ]
        }
      ]
    },
    {
      id: 2,
      name: 'Môi trường, con người IT',
      isCompleted: false,
      time: '1:46:14',
      lecturesList: [
        {
          id: 1,
          name: 'Mô hình Client - Server là gì?',
          time: '11:35',
          video: 'https://youtu.be/egSxAF-Sak4',
          isCompleted: true,
          exercises: [
            {
              id: 1,
              isCompleted: true
            }
          ]
        }
      ]
    },
    {
      id: 3,
      name: 'Môi trường, con người IT',
      isCompleted: false,
      time: '1:46:14',
      lecturesList: [
        {
          id: 1,
          name: 'Mô hình Client - Server là gì?',
          time: '11:35',
          video: 'https://youtu.be/egSxAF-Sak4',
          isCompleted: true,
          exercises: [
            {
              id: 1,
              isCompleted: true
            }
          ]
        }
      ]
    },
    {
      id: 4,
      name: 'Môi trường, con người IT',
      isCompleted: false,
      time: '1:46:14',
      lecturesList: [
        {
          id: 1,
          name: 'Mô hình Client - Server là gì?',
          time: '11:35',
          video: 'https://youtu.be/egSxAF-Sak4',
          isCompleted: true,
          exercises: [
            {
              id: 1,
              isCompleted: true
            }
          ]
        }
      ]
    },
    {
      id: 5,
      name: 'Môi trường, con người IT',
      isCompleted: false,
      time: '1:46:14',
      lecturesList: [
        {
          id: 1,
          name: 'Mô hình Client - Server là gì?',
          time: '11:35',
          video: 'https://youtu.be/egSxAF-Sak4',
          isCompleted: true,
          exercises: [
            {
              id: 1,
              isCompleted: true
            }
          ]
        }
      ]
    },
    {
      id: 6,
      name: 'Môi trường, con người IT',
      isCompleted: false,
      time: '1:46:14',
      lecturesList: [
        {
          id: 1,
          name: 'Mô hình Client - Server là gì?',
          time: '11:35',
          video: 'https://youtu.be/egSxAF-Sak4',
          isCompleted: true,
          exercises: [
            {
              id: 1,
              isCompleted: true
            }
          ]
        }
      ]
    },
    {
      id: 7,
      name: 'Môi trường, con người IT',
      isCompleted: false,
      time: '1:46:14',
      lecturesList: [
        {
          id: 1,
          name: 'Mô hình Client - Server là gì?',
          time: '11:35',
          video: 'https://youtu.be/egSxAF-Sak4',
          isCompleted: true,
          exercises: [
            {
              id: 1,
              isCompleted: true
            }
          ]
        }
      ]
    },
    {
      id: 8,
      name: 'Môi trường, con người IT',
      isCompleted: false,
      time: '1:46:14',
      lecturesList: [
        {
          id: 1,
          name: 'Mô hình Client - Server là gì?',
          time: '11:35',
          video: 'https://youtu.be/egSxAF-Sak4',
          isCompleted: true,
          exercises: [
            {
              id: 1,
              isCompleted: true
            }
          ]
        }
      ]
    },
    {
      id: 9,
      name: 'Môi trường, con người IT',
      isCompleted: false,
      time: '1:46:14',
      lecturesList: [
        {
          id: 1,
          name: 'Mô hình Client - Server là gì?',
          time: '11:35',
          video: 'https://youtu.be/egSxAF-Sak4',
          isCompleted: true,
          exercises: [
            {
              id: 1,
              isCompleted: true
            }
          ]
        }
      ]
    },
    {
      id: 10,
      name: 'Môi trường, con người IT',
      isCompleted: false,
      time: '1:46:14',
      lecturesList: [
        {
          id: 1,
          name: 'Mô hình Client - Server là gì?',
          time: '11:35',
          video: 'https://youtu.be/egSxAF-Sak4',
          isCompleted: true,
          exercises: [
            {
              id: 1,
              isCompleted: true
            }
          ]
        }
      ]
    }
  ]
};

const Studying = () => {
  const history = useHistory()
  const { id } = useParams();

  const [subjects, setSubjects] = useState([]);
  const [currentSubject, setCurrentSubject] = useState(null);

  useEffect(() => {
    const getSubject = async () => {
      const res = await axios.get(`${config.url}/subject/course/${id}`);
      if(res.data) {
        setSubjects(res.data);
      }
    }

    getSubject();
  }, [id])

  useEffect(() => {
    if(subjects.length > 0) {
      setCurrentSubject(subjects[0]);
    }
  }, [subjects]);

  const handleActiveSubject = useCallback((_id) => {
    const subject = subjects.find(el => el._id === _id);
    if(subject) {
      setCurrentSubject(subject);
    }
  }, [subjects]);
  
  const completedSubject = subjects.filter(el => el.isCompleted).length;

  return (
    <div className="studying">
      <div className="studying-header">
        <div className="px-4 flex items-center justify-between h-full w-full">
          <div className="studying-header-left">
            <span className="icon-arrow-left" onClick={history.goBack}></span>
            <img src={Logo} alt="logo" className="logo" />
            <div className="divide"></div>
            <div className="course-name">HTML, CSS từ Zero đến Hero</div>
          </div>
          <div className="studying-header-right">
            <div className="progress">
              <CircularProgressbar
                value={Math.round(completedSubject/subjects.length)}
                text={`${Math.round(completedSubject/subjects.length)}%`}
                styles={buildStyles({
                  textSize: '35px',
                  textColor: '#ffffff',
                  trailColor: '#d6d6d6',
                  pathColor: '#d70040'
                })}
              />
            </div>
            <div className="course-progress-count">
              Hoàn thành <span>{completedSubject}/{subjects.length}</span> bài học
            </div>
          </div>
        </div>
      </div>

      <section>
        <div className="grid grid-cols-12 gap-0">
          <div className="col-span-9">
            <div className="grid grid-cols-12 gap-4">
              <div className="col-span-12">
                <div className="scroll-wrapper">
                  <VideoViewer videoId={currentSubject?.video} />
                  <div className="lecture-name">{currentSubject?.name}</div>
                  <div className="lecture-update">Cập nhật {moment(currentSubject?.updatedAt || '').lang('vi').format('HH:mm, DD/MM/YYYY')}</div>
                  <ListComments avatar={Avatar} />
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-3">
            <div className="track-list">
              <div className="track-list-header">Nội dung khóa học</div>
              <TrackList handleActiveSubject={handleActiveSubject} subjects={subjects} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Studying;
