import React from "react";
import { Link } from "react-router-dom";
import "../../styles/NavSingleItem.scss";

export default function NavSingleItem({ path, title }) {
  return (
    <Link to={path} className="nav-single-item">
      {title}
    </Link>
  );
}
