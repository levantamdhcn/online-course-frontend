import React from 'react';
import Logo from 'assets/images/logo.png';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import VideoViewer from './VideoViewer/VideoViewer';
import TrackList from './TrackList';
import ListComments from './Comments/ListComments';
import Avatar from 'assets/images/avatar.jpg';
import { useHistory } from 'react-router-dom';

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
                value={75}
                text={`${75}%`}
                styles={buildStyles({
                  textSize: '35px',
                  textColor: '#ffffff',
                  trailColor: '#d6d6d6',
                  pathColor: '#d70040'
                })}
              />
            </div>
            <div className="course-progress-count">
              Hoàn thành <span>100/145</span> bài học
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
                  <VideoViewer videoId={'ypvjxw5qBK0'} />
                  <div className="lecture-name">Làm được gì sau khóa học?</div>
                  <div className="lecture-update">Cập nhật tháng 2 năm 2022</div>
                  <ListComments avatar={Avatar} />
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-3">
            <div className="track-list">
              <div className="track-list-header">Nội dung khóa học</div>
              <TrackList lectureSection={courseLearningInfo?.lectureSection} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Studying;
