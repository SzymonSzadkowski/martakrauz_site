import React from "react";
import "../../styles/Sesje.scss";
import FotoGallery from "./FotoGallery";
import image1 from "../../../public/images/sesje indywidualne/cat-indy1.jpg";
import image2 from "../../../public/images/sesje indywidualne/cat-indy2.jpg";
import image3 from "../../../public/images/sesje indywidualne/cat-indy3.jpg";
import image4 from "../../../public/images/sesje indywidualne/cat-indy4.jpg";
import image5 from "../../../public/images/sesje indywidualne/cat-indy5.jpg";
import image6 from "../../../public/images/sesje indywidualne/cat-indy6.jpg";
import image7 from "../../../public/images/sesje indywidualne/cat-indy7.jpg";
import image8 from "../../../public/images/sesje indywidualne/cat-indy8.jpg";
import image9 from "../../../public/images/sesje indywidualne/cat-indy9.jpg";
import image10 from "../../../public/images/sesje indywidualne/cat-indy10.jpg";
import image11 from "../../../public/images/sesje indywidualne/cat-indy11.jpg";
import image12 from "../../../public/images/sesje indywidualne/cat-indy12.jpg";
import image13 from "../../../public/images/sesje indywidualne/cat-indy13.jpg";
import image14 from "../../../public/images/sesje indywidualne/cat-indy14.jpg";
import FotoGalleryText from "./FotoGalleryText";

export default function SesjeIndywidualne() {
  return (
    <main className="sesje-indywidualne">
      <FotoGalleryText title="Sesje Indywidualne" />
      <FotoGallery
        images={[
          {
            src: image1,
            alt: "Sesja zdjęciowa indywidualna zdjecie pierwsze",
          },
          {
            src: image2,
            alt: "Sesja zdjęciowa indywidualna zdjecie drugie",
          },
          {
            src: image3,
            alt: "Sesja zdjęciowa indywidualna zdjecie trzecie",
          },
          {
            src: image4,
            alt: "Sesja zdjęciowa indywidualna zdjecie czwarte",
          },
          {
            src: image5,
            alt: "Sesja zdjęciowa indywidualna zdjecie piąte",
          },
          {
            src: image6,
            alt: "Sesja zdjęciowa indywidualna zdjecie szóste",
          },
          {
            src: image7,
            alt: "Sesja zdjęciowa indywidualna zdjecie siódme",
          },
          {
            src: image8,
            alt: "Sesja zdjęciowa indywidualna zdjecie ósme",
          },
          {
            src: image9,
            alt: "Sesja zdjęciowa indywidualna zdjecie dziewiąte",
          },
          {
            src: image10,
            alt: "Sesja zdjęciowa indywidualna zdjecie dziesiąte",
          },
          {
            src: image11,
            alt: "Sesja zdjęciowa indywidualna zdjecie jedenaste",
          },
          {
            src: image12,
            alt: "Sesja zdjęciowa indywidualna zdjecie dwunaste",
          },
          {
            src: image13,
            alt: "Sesja zdjęciowa indywidualna zdjecie trzynaste",
          },
          {
            src: image14,
            alt: "Sesja zdjęciowa indywidualna zdjecie czternaste",
          },
        ]}
      />
    </main>
  );
}
