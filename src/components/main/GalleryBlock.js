import React from "react";
import { Link } from "react-router-dom";
import "../../styles/GalleryBlock.scss";

export default function GalleryBlock({ path, image, alt, title, textbody }) {
  return (
    <article className="gallery-block">
      <img src={image} alt={alt} className="gallery-block--image"></img>
      <div className="gallery-block--textfield">
        <h3 className="gallery-block--textfield--title">{title}</h3>
        <p className="gallery-block--textfield--textbody">{textbody}</p>
      </div>
      <Link
        className="gallery-block--link"
        to={path}
        title="Przejdź do galerii"
      >
        <button className="gallery-block--btn">przejdź do galerii</button>
      </Link>
    </article>
  );
}
