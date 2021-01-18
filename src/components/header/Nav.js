import React from "react";
import "../../styles/Nav.scss";
import "../../styles/NavSingleItem.scss";
import NavMultiItem from "./NavMultiItem";
import NavSingleItem from "./NavSingleItem";
import NavSocial from "./NavSocial";

export default function Nav({ menu }) {
  return (
    <nav className={menu ? "nav active" : "nav"}>
      <NavSingleItem path="/" title="Strona Główna" />
      <NavMultiItem
        mainTitle="Sesje fotograficzne"
        items={[
          { path: "/sesje-indywidualne", title: "Sesje Indywidualne" },
          { path: "/sesje-okolicznosciowe", title: "Sesje Okolicznościowe" },
        ]}
      />
      <NavSingleItem path="/reklamy-i-teledyski" title="Reklamy i teledyski" />
      <NavSingleItem path="/kontakt" title="Kontakt" />
      <a
        href="https://www.instagram.com/mkrauz_art/"
        className="nav-single-item"
        rel="noreferrer"
        target="_blank"
      >
        Instagram
      </a>
      <NavSocial />
    </nav>
  );
}
