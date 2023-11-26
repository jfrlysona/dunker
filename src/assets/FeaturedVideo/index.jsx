//aysel
import "./style.scss";
import React, { useState } from "react";

function FeaturedVideo() {
  const [videoShow, setVideoShow] = useState(false);

  const playVideo = () => {
    setVideoShow(true);
  };

  const closeVideo = () => {
    setVideoShow(false);
  };

  return (
    <div className={`featuredVideo ${videoShow ? "video-show" : ""}`}>
    
      <img
        src="https://dunker.qodeinteractive.com/wp-content/uploads/2022/12/h1-video-img-1.jpg"
        alt=""
      />

      {!videoShow && (
        <div className="play" onClick={playVideo}>
          <i className="fa-light fa-play"></i>
        </div>
      )}

      {videoShow && (
        <>
          <div className="close" onClick={closeVideo}>
            <i className="fa-light fa-times"></i>
          </div>
          <iframe
            src="https://player.vimeo.com/video/529300981?autoplay=1"
            frameBorder="0"
          ></iframe>
        </>
      )}
    </div>
  );
}

export default FeaturedVideo;
