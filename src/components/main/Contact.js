import React from "react";
import emailjs from "emailjs-com";
import "../../styles/Contact.scss";

export default function Contact() {
  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm("SERVICE_ID", "TEMPLATE_ID", e.target, "USER_ID").then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );
    e.target.reset();
  }

  return (
    <form className="contact" onSubmit={sendEmail}>
      <h2 className="contact--title">Zapytaj o termin</h2>
      <label htmlFor="name" className="contact--name-label">
        Imię i nazwisko:
      </label>
      <input
        type="text"
        id="name"
        name="name"
        placeholder="Wprowadź imię i nazwisko"
        className="contact--name"
        required
      ></input>
      <label htmlFor="email" className="contact--email-label">
        Email:
      </label>
      <input
        type="email"
        id="email"
        name="email"
        placeholder="Wprowadź e-mail"
        className="contact--email"
        required
      ></input>
      <label htmlFor="message" className="contact--message-label">
        Wiadomość:
      </label>
      <textarea
        id="message"
        name="message"
        placeholder="Wprowadź treść wiadomości"
        rows="7"
        className="contact--message"
        required
      ></textarea>

      <p className="contact--mailto">
        Napisz maila na:{" "}
        <a
          href="mailto:test@gmail.com?subject=Sesja Zdjęciowa Marta Krauz"
          className="contact--mailto--email"
          rel="noreferrer"
        >
          m.m.krauz@gmail.com
        </a>
      </p>

      <p className="contact--insta">
        Skontaktuj się przez instagrama:{" "}
        <a
          href="https://www.instagram.com/"
          className="contact--insta--direct"
          rel="noreferrer"
          target="_blank"
        >
          mkrauz_art
        </a>
      </p>

      <button type="submit" className="contact--btn">
        prześlij
      </button>
    </form>
  );
}
