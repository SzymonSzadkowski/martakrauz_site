import React from "react";
import "../../styles/BlockList.scss";
import Carousel from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import Block from "./Block";
import catWide1 from "../../../public/images/kategorie/cat-wide1.webp";
import catWide2 from "../../../public/images/kategorie/cat-wide2.webp";
import catWide3 from "../../../public/images/kategorie/cat-wide3.webp";

export default function BlockList() {
  return (
    <section className="block-list">
      <Carousel infinite autoPlay={3500} animationSpeed={2500}>
        <Block
          image={catWide1}
          alt="Sesja indywidualna Slideshow"
          title="Sesje Indywidualne"
        />
        <Block
          image={catWide2}
          alt="Reklama i film Slideshow"
          title="Reklama i film"
        />
        <Block
          image={catWide3}
          alt="Sesje okolicznościowe Slideshow"
          title="Sesje okolicznościowe"
        />
      </Carousel>
    </section>
  );
}
