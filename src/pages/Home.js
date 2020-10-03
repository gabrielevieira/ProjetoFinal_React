import React from "react";
import Header from "./Header/Header";
import Slide from "./Slide/Slide";
import Menu from "./Menu/Menu";
import Rodape from "./Rodape/Rodape";
import BarraInferior from "./Rodape/BarraInferior";

function Home() {
  return (
    <div class="Home">
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
