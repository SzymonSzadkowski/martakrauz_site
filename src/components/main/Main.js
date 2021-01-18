import React, { Suspense } from "react";
import "../../styles/Main.scss";
import BlockList from "./BlockList";
import About from "./About";
const Gallery = React.lazy(() => import("./Gallery"));

export default function Main() {
  return (
    <main className="main">
      <BlockList />
      <About />
      <Suspense fallback={<div>Loading...</div>}>
        <Gallery />
      </Suspense>
    </main>
  );
}
