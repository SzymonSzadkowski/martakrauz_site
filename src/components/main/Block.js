import React from "react";
import "../../styles/Block.scss";

export default function Block({ image, alt, title }) {
  return (
    <div className="block">
      <img className="block--img" src={image} alt={alt}></img>
      <p className="block--title">{title}</p>
    </div>
  );
}
