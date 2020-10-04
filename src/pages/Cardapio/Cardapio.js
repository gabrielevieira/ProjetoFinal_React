import React from "react";
import Header from "../../components/Header/Header";
import Rodape from "../../components/Rodape/Rodape";

const Cardapio = ({ produto }) => (
  <div>
    <Header />

    <div className="produto-card">
      <img
        src={produto.produtos.imageUrl}
        alt={produto.produtos.title}
        className="produto-card__image"
      />
      <div className="produto-card__info">
        <h1 className="produto-card__title">{produto.produtos.title}</h1>
        <span className="produto-card__price">R${produto.produtos.price}</span>
        <footer className="produto-card__footer"></footer>
      </div>
    </div>

    <Rodape />
  </div>
);

export default Cardapio;
