import React from "react";
import "../../styles/FotoGallery.scss";

export default function FotoGallery({ images }) {
  return (
    <section className="foto-gallery">
      {images.map((image) => {
        return (
          <img
            src={image.src}
            alt={image.alt}
            className="foto-gallery--image"
          />
        );
      })}
    </section>
  );
}
