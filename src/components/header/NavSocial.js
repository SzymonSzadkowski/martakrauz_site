import React from "react";
import "../../styles/NavSocial.scss";

export default function NavSocial() {
  return (
    <div className="nav--social">
      <a
        href="https://www.facebook.com/"
        target="_blank"
        rel="noreferrer"
        title="Wejdź na mojego facebook'a"
      >
        <button
          title="Wejdź na mojego facebook'a"
          className="nav--social--btn fb"
        >
          <i class="fab fa-facebook-square"></i>
        </button>
      </a>
      <a
        href="https://www.instagram.com/"
        target="_blank"
        rel="noreferrer"
        title="Sprawdź mojego instagrama"
      >
        <button
          title="Sprawdź mojego instagrama"
          className="nav--social--btn insta"
        >
          <i class="fab fa-instagram-square"></i>
        </button>
      </a>
      <a
        href="https://www.youtube.com/"
        target="_blank"
        rel="noreferrer"
        title="Zobacz moje filmy na YouTube"
      >
        <button
          title="Zobacz moje filmy na YouTube"
          className="nav--social--btn youtube"
        >
          <i class="fab fa-youtube-square"></i>
        </button>
      </a>
    </div>
  );
}
