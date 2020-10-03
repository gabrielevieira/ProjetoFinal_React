import React from "react";
import PromotionCard from "../src/pages/Cardapio/Cardapio";

const App = () => {
  const produto = {
    id: 1,
    title: "Coxinha",
    price: "1,79",
    descrição: "Coxinha de Frango",
    imageurl:
      "https://cdn.gatry.com/gatry-static/promocao/imagem_url/2631517face1861bc4f46ae154d387de.png",
  };
  return (
    <div className="App">
      <header className="App-header">
        <PromotionCard produto={produto} />
      </header>
    </div>
  );
};

export default App;
