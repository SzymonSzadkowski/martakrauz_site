import React from "react";
import "../../styles/FotoGalleryText.scss";

export default function FotoGalleryText({ title }) {
  return (
    <div className="foto-gallery-text">
      <h3 className="foto-gallery-text--title">{title}</h3>
    </div>
  );
}
