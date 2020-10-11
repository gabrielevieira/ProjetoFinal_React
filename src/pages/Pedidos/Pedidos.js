import React from "react";
import { Container } from "react-bootstrap";

import "./Pedidos.css";

const Pedidos = ({ produto }) => (
  <Container>
    <div className="card">
      <img
        src={produto.imageUrl}
        alt={produto.title}
        className=" card-img-top"
      />

      <div className="card-body">
        <div className="card-title">{produto.title}</div>
        <div className="card-descricao">{produto.descricao}</div>
      </div>
      <div className="card-footer">
        <div className="btn btn-light">Comprar</div>
      </div>
    </div>
  </Container>
);

export default Pedidos;
