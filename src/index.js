import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import Footer from "./components/footer/Footer";
import "./styles/index.scss";
import Contact from "./components/main/Contact";
const SesjeIndywidualne = React.lazy(() =>
  import("./components/sites/SesjeIndywidualne")
);
const SesjeOkolicznosciowe = React.lazy(() =>
  import("./components/sites/SesjeOkolicznosciowe")
);
const ReklamyITeledyski = React.lazy(() =>
  import("./components/sites/ReklamyITeledyski")
);
import { Helmet } from "react-helmet";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Suspense fallback={<div>loading...</div>}>
        <Switch>
          <Route exact path="/">
            <Helmet>
              <title>
                Warszawa Fotograf | Marta Krauz sesje zdjęciowe i fotografia
                okolicznościowa
              </title>
              <meta
                name="description"
                content="Usługi fotograficzne Marta Krauz, skupiające się na fotografii indywidualnej i okolicznościowej oraz teledyskach i reklamie"
              />
            </Helmet>
            <Main />
          </Route>
          <Route exact path="/sesje-indywidualne">
            <Helmet>
              <title>Sesje indywidualne | Marta Krauz</title>
              <meta
                name="description"
                content="Sesje indywidualne usługa Marta Krauz. Portrety, sesje modelowe"
              />
            </Helmet>
            <SesjeIndywidualne />
          </Route>
          <Route exact path="/sesje-okolicznosciowe">
            <Helmet>
              <title>Sesje okolicznościowe | Marta Krauz</title>
              <meta
                name="description"
                content="Sesje okolicznościowe usługa Marta Krauz. Urodziny, imprezy, osiemnastki"
              />
            </Helmet>
            <SesjeOkolicznosciowe />
          </Route>
          <Route exact path="/reklamy-i-teledyski">
            <Helmet>
              <title>Reklamy i teledyski | Marta Krauz</title>
              <meta
                name="description"
                content="Reklamy i teledyski usługa Marta Krauz. Spoty reklamowe, materiały promocyjne, teledyski"
              />
            </Helmet>
            <ReklamyITeledyski />
          </Route>
        </Switch>
      </Suspense>
      <Contact />
      <Footer />
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
