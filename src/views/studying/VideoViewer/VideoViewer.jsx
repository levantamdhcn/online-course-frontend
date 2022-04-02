import React from 'react';

const VideoViewer = ({ videoId }) => {
  if (!videoId) {
    return <></>;
  }
  return (
    <div className="video-viewer">
      <div>
        <iframe
          src={`https://www.youtube.com/embed/${videoId}`}
          fsdfs
          frameBorder="0"
          title="Video player"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default VideoViewer;
