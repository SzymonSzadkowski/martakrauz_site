import React from "react";
import FotoGalleryText from "./FotoGalleryText";
import VideoGallery from "./VideoGallery";

export default function ReklamyITeledyski() {
  return (
    <main className="reklamy-i-teledyski">
      <FotoGalleryText title="Reklamy i teledyski" />
      <VideoGallery
        videos={[
          {
            title: "JangaBeatz x DR3AMER - 'Full of lies'",
            src: "https://www.youtube.com/embed/ZEm69VUpoBY",
          },
          {
            title: "Pawtrait - Portrety dla zwierząt",
            src: "https://www.youtube.com/embed/Fvvy8p8gCi4",
          },
          {
            title: "Bezdźwięk",
            src: "https://www.youtube.com/embed/B4XBhJC3jlY",
          },
          {
            title: "Na przekór",
            src: "https://www.youtube.com/embed/VeoiZdE0OSo",
          },
        ]}
      />
    </main>
  );
}
