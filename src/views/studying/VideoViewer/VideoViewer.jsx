import React, { useEffect } from 'react';
import YouTube from 'react-youtube';

const opts = {
  playerVars: {
    // https://developers.google.com/youtube/player_parameters
    autoplay: 1
  }
};

const VideoViewer = ({ onVideoEnd, videoId }) => {
  if (!videoId) {
    return <></>;
  }

  const checkElapsedTime = (e) => {
    if(e.data === 0) {
      onVideoEnd();
    }
  }
  return (
    <div className="video-viewer">
      <YouTube
          videoId={videoId}
          containerClassName="embed embed-youtube"
          onStateChange={(e) => checkElapsedTime(e)}
          opts={opts}
        />
    </div>
  );
};

export default VideoViewer;
