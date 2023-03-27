import React, { useState, useEffect } from "react";
import "./RandomVideo.css";

function RandomVideo() {
  const [videoSrc, setVideoSrc] = useState("");
  const [videoIds, setVideoId] = useState("");

  useEffect(() => {
    const videoIds = [
      "IRvGZffXhfk",
      "y6120QOlsfU",
      "MxFfS-X3Xoo"
    ];

    const randomVideoId = videoIds[Math.floor(Math.random() * videoIds.length)];
    setVideoId(randomVideoId);
    setVideoSrc(`https://www.youtube.com/embed/${randomVideoId}?autoplay=1`);
  }, []);

  return (
    <div className="RandomVideo">
      <div className="RandomVideo-header">
        <div>Random Video of the Day</div>
      </div>
      <iframe src={videoSrc} title="random-video" allowFullScreen></iframe>
    </div>
  );
}

export default RandomVideo;