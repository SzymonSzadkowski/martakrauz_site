import React from "react";
import "../../styles/VideoGallery.scss";

export default function VideoGallery({ videos }) {
  return (
    <section className="video-gallery">
      {videos.map((video) => {
        return (
          <div className="video-gallery--box">
            <h3 className="video-gallery--box--title">{video.title}</h3>
            <iframe
              className="video-gallery--box--video"
              src={video.src}
              frameborder="0"
              allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            ></iframe>
          </div>
        );
      })}
    </section>
  );
}
