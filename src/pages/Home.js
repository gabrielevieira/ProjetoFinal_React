import React from "react";
import Header from "../components/Header/Header";
import Slide from "../components/Slide/Slide";
import Menu from "../components/Menu/Menu";
import Rodape from "../components/Rodape/Rodape";
import BarraInferior from "../components/Rodape/BarraInferior";

function Home() {
  return (
    <div className="Home">
      <header>
        <Header />
      </header>
      <div>
        <Slide />
      </div>
      <body>
        <Menu />
      </body>
      <footer>
        <Rodape />
        <BarraInferior />
      </footer>
    </div>
  );
}

export default Home;
