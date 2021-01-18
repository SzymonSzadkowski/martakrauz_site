import React from "react";
import "../../styles/Gallery.scss";
import GalleryBlock from "./GalleryBlock";
import cat1 from "../../../public/images/kategorie/cat1.webp";
import cat2 from "../../../public/images/kategorie/cat2.webp";
import cat3 from "../../../public/images/kategorie/cat3.webp";

export default function Gallery() {
  return (
    <section className="gallery">
      <GalleryBlock
        path="/sesje-indywidualne"
        image={cat1}
        alt="sesje indywidualne warszawa Marta Krauz"
        title="Sesje indywidualne"
        textbody="W ciągu godziny uchwycę Twoje piękno i wdzięk do którego będziesz powracać latami. Indywidualne podejście do każdego mojego klienta zapewni Tobie wyjątkową pamiątkę i wspomnienia na długi czas"
      />
      <GalleryBlock
        path="/reklamy-i-teledyski"
        image={cat2}
        alt="reklamy i teledyski"
        title="Reklamy i teledyski"
        textbody="Rozpromowanie własnego zespołu lub stworzenie spotu reklamowego to duże wyzwanie. Dzięki doświadczeniu które zdobyłam jestem w stanie podołać temu zadaniu."
      />
      <GalleryBlock
        path="/sesje-okolicznosciowe"
        image={cat3}
        alt="sesje okolicznościowe"
        title="Sesje okolicznościowe"
        textbody="Każde wydarzenie jest warte zapamiętania. Dzięki zdjęciom będziesz w stanie szczegółowo przypomineć sobie chwile które znaczą dla Ciebie najwięcej."
      />
    </section>
  );
}
