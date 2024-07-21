import React from 'react';

function VideoSection({ videos  }) {
    return (
        <div className="video-section">
          <h2>Videos</h2>
          {videos.map((videoSrc, index) => (
            <div key={index} className="video-container">
              <video controls>
                <source src={videoSrc} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          ))}
        </div>
      );
}

export default VideoSection;
