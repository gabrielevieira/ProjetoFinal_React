import axios from "axios";
import React, { useEffect, useState } from "react";
import Cardapio from "../Cardapio/Cardapio";

const PagesSearchProdutos = () => {
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    axios.get("http://http://localhost:5000/produto").then((response) => {
      setProdutos(response.data);
    });
  }, []);

  return (
    <div className="pages-produtos-search__produtos-card">
      {produtos.map((produto) => (
        <Cardapio produto={produto} />
      ))}
    </div>
  );
};

export default PagesSearchProdutos;
