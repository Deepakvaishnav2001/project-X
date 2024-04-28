import React from 'react';

export const VideoBackground = () => {
  return (
    <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
      <video
        src={"bg1.mp4"}
        autoPlay
        muted
        loop
        className="min-w-full min-h-full object-cover" />
    </div>
  );
};