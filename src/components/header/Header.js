import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../styles/Header.scss";
import Nav from "./Nav";

export default function Header() {
  const [menu, setMenu] = useState(false);
  const showMenu = () => {
    setMenu(!menu);
  };

  return (
    <header className="header">
      <Link to="/" className="header--logo">
        <h1 className="header--logo--marta">Marta Krauz</h1>
        <h2 className="header--logo--foto">Fotografia i Film</h2>
      </Link>
      <button
        className="header--menu"
        aria-label="show menu"
        onClick={showMenu}
      >
        <i className={menu ? "fas fa-times" : "fas fa-bars"} />
      </button>
      <Nav menu={menu} />
    </header>
  );
}
