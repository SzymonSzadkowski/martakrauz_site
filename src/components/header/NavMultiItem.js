import React, { useState } from "react";
import NavSingleItem from "./NavSingleItem";
import "../../styles/NavMultiItem.scss";

export default function NavMultiItem({ mainTitle, items }) {
  const [icon, setIcon] = useState(false);
  const changeIcon = () => setIcon(!icon);
  return (
    <div className="nav-multi">
      <div className="nav-multi__normal" onClick={changeIcon}>
        <span className="nav-multi__normal--title">{mainTitle}</span>
        <button
          className="nav-multi__normal--icon"
          aria-label="show more items"
        >
          <i className={icon ? "fas fa-angle-up" : "fas fa-angle-down"} />
        </button>
      </div>
      <ul className={icon ? "nav-multi--list active-item" : "nav-multi--list"}>
        {items.map((item) => {
          return (
            <li>
              <NavSingleItem path={item.path} title={item.title} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
