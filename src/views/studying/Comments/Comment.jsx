import React, { useState } from 'react';

const Comment = ({ author, content, time, liked }) => {
  const { avatar, name } = author;
  const [value, setValue] = useState(null);
  const [isReply, setIsReply] = useState(false);

  return (
    <div className="comment-item-wrapper">
      <img src={avatar} alt="avatar" className="comment-author-img" />
      <div className="comment-section">
        <div className="comment-body">
          <div className="comment-author-name">{name}</div>
          <div className="comment-content">{content}</div>
        </div>
        <div className="comment-actions">
          <span className="comment-reaction">{liked ? 'Đã thích' : 'Thích'}</span>
          <span className="dot-divide">·</span>
          <span onClick={() => setIsReply(true)}>Trả lời</span>
          <span className="dot-divide">·</span>
          <span className="comment-time">{time}</span>
        </div>
        {isReply ? (
          <>
            <div className="comment-create">
              <img src={avatar} alt="avatar" className="comment-author-img" />
              <div className="comment-form">
                <input
                  type="text"
                  placeholder="Bạn có thắc mắc gì trong bài học này?"
                  onInput={(e) => setValue(e.target.value)}
                />
              </div>
            </div>
            <div className="comment-form-buttons">
              <button
                className="btn"
                onClick={() => {
                  setIsReply(false);
                }}
              >
                Hủy
              </button>
              <button className={`btn btn-primary ${!value && 'deactive'}`}>Bình luận</button>
            </div>
          </>
        ) : (
          ''
        )}
      </div>
    </div>
  );
};

export default Comment;
