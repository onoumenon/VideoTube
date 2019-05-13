import React from "react";
import VideoItem from "./VideoItem";

function VideoList({ videos, onVideoSelect }) {
  const renderList = videos => {
    return videos.map((video, index) => (
      <VideoItem key={index} onVideoSelect={onVideoSelect} video={video} />
    ));
  };
  return (
    <div className="ui relaxed divided list">
      <p> {videos.length} videos found.</p>
      {renderList(videos)}
    </div>
  );
}

export default VideoList;
