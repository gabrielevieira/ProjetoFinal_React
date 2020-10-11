import axios from "axios";
import Header from "components/Header/Header";
import BarraInferior from "components/Rodape/BarraInferior";
import Rodape from "components/Rodape/Rodape";
import InformacaoCardapio from "../Cardapio/InformacaoCardapio";
import React, { useEffect, useState } from "react";
import Cardapio from "../Cardapio/Cardapio";

const PagesSearchProdutos = () => {
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/produtos").then((response) => {
      setProdutos(response.data);
    });
  }, []);

  return (
    <div className="pages-produtos-search__produtos-card">
      <Header />
      <InformacaoCardapio />
      {produtos.map((produto) => (
        <Cardapio produto={produto} />
      ))}
      <Rodape />
      <BarraInferior />
    </div>
  );
};

export default PagesSearchProdutos;
