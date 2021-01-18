import React from "react";
import { Link } from "react-router-dom";
import "../../styles/Footer.scss";
import NavSocial from "../header/NavSocial";

export default function Footer() {
  return (
    <footer className="footer">
      <ul className="footer--list">
        <li>
          <Link to="/sesje-indywidualne" className="footer--list--item">
            Fotografia
          </Link>
        </li>
        <li>
          <Link to="/reklamy-i-teledyski" className="footer--list--item">
            Film
          </Link>
        </li>
        <li>
          <Link to="/kontakt" className="footer--list--item">
            Kontakt
          </Link>
        </li>
      </ul>
      <NavSocial />
      <p className="footer--local">
        Warszawa, Pruszków, Grodzisk Mazowiecki i okolice
      </p>

      <p className="footer--rights">
        All rights reserved. Copyrights by Marta Krauz
      </p>
      <p className="footer--author">Project by: Szymon Szadkowski</p>
    </footer>
  );
}
