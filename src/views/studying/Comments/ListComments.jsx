import React, { useState } from 'react';
import Comment from './Comment';

const ListComments = ({ avatar }) => {
  const [isCommenting, setIsCommenting] = useState(false);
  const [value, setValue] = useState(null);

  return (
    <div className="comments-wrapper">
      <div className="comment-create">
        <img src={avatar} alt="avatar" className="comment-author-img" />
        <div className="comment-form">
          <input
            type="text"
            placeholder="Bạn có thắc mắc gì trong bài học này?"
            onClick={() => setIsCommenting(true)}
            onInput={(e) => setValue(e.target.value)}
          />
        </div>
      </div>
      {isCommenting && (
        <div className="comment-form-buttons">
          <button className="btn" onClick={() => setIsCommenting(false)}>
            Hủy
          </button>
          <button className={`btn btn-primary ${!value && 'deactive'}`}>Bình luận</button>
        </div>
      )}
      <div className="comment-list-wrapper">
        <Comment
          author={{ avatar: avatar, name: 'Lê Văn Tâm' }}
          content={'cho mình hỏi sao có mấy bài có khóa vậy'}
          time={'một ngày trước'}
          liked={true}
        />
        <Comment
          author={{ avatar: avatar, name: 'Lê Văn Tâm' }}
          content={'cho mình hỏi sao có mấy bài có khóa vậy'}
          time={'một ngày trước'}
        />
        <Comment
          author={{ avatar: avatar, name: 'Lê Văn Tâm' }}
          content={'cho mình hỏi sao có mấy bài có khóa vậy'}
          time={'một ngày trước'}
        />
      </div>
    </div>
  );
};

export default ListComments;
