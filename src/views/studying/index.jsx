import React, { useCallback, useEffect, useState } from 'react';
import Logo from 'assets/images/logo.png';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import VideoViewer from './VideoViewer/VideoViewer';
import TrackList from './TrackList';
import ListComments from './Comments/ListComments';
import Avatar from 'assets/images/avatar.jpg';
import { useHistory } from 'react-router-dom';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import moment from 'moment';
import { useFetchSubject, useSetCompleteSubject } from './hook/useQuery';
import { toast } from 'react-toastify';
import LoadingScreen from 'components/LoadingScreen';

const Studying = () => {
  const history = useHistory()
  const { id } = useParams();

  const [currentSubject, setCurrentSubject] = useState(null);

  const { data: subjects, isLoading, refetch } = useFetchSubject(id);

  const { mutate, isLoading: completing } = useSetCompleteSubject(() => {
    toast("Đã hoàn thành bài giảng", {
      position: "top-right",
      type: "success",
      hideProgressBar: true,
    });

    refetch()
  });

  const handleCompleteSubject = () => {
    const data = {
      courseId: id,
      subjectId: currentSubject._id,
    }

    mutate(data);
  }

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

  if(isLoading) return <LoadingScreen />;

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
                value={Math.round(completedSubject/subjects.length * 100 || 0)}
                text={`${completedSubject/subjects.length * 100 || 0}%`}
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
                  <VideoViewer onVideoEnd={handleCompleteSubject} videoId={currentSubject?.video} />
                  <div className="lecture-name">{currentSubject?.name}</div>
                  <div className="lecture-update">Cập nhật {moment(currentSubject?.updatedAt || '').lang('vi').format('HH:mm, DD/MM/YYYY')}</div>
                  {/* <ListComments avatar={Avatar} /> */}
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
