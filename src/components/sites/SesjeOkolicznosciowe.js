import React from "react";
import "../../styles/Sesje.scss";
import FotoGallery from "./FotoGallery";
import FotoGalleryText from "./FotoGalleryText";
import image1 from "../../../public/images/sesje okolicznosciowe/cat-oko1.jpg";
import image2 from "../../../public/images/sesje okolicznosciowe/cat-oko2.jpg";
import image3 from "../../../public/images/sesje okolicznosciowe/cat-oko3.jpg";
import image4 from "../../../public/images/sesje okolicznosciowe/cat-oko4.jpg";

export default function SesjeOkolicznosciowe() {
  return (
    <main className="sesje-indywidualne">
      <FotoGalleryText title="Sesje Okolicznosciowe" />
      <FotoGallery
        images={[
          {
            src: image1,
            alt: "Sesja zdjęciowa okolicznościowa zdjecie pierwsze",
          },
          {
            src: image2,
            alt: "Sesja zdjęciowa okolicznościowa zdjecie drugie",
          },
          {
            src: image3,
            alt: "Sesja zdjęciowa okolicznościowa zdjecie trzecie",
          },
          {
            src: image4,
            alt: "Sesja zdjęciowa okolicznościowa zdjecie czwarte",
          },
        ]}
      />
    </main>
  );
}
