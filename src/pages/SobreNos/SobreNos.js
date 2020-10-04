import React from "react";
import Header from "../../components/Header/Header";
import { Jumbotron, Button, Container } from "react-bootstrap";
import Rodape from "../../components/Rodape/Rodape";

function SobreNos() {
  return (
    <div>
      <Header />
      <Container>
        <Jumbotron>
          <h1>Sobre Nós</h1>
          <p>
            Deliciosas coxinhas com diversos sabores, confira o cardápio aqui
          </p>
          <p>
            <Button variant="primary">Clique</Button>
          </p>
        </Jumbotron>
      </Container>
      <Rodape />
    </div>
  );
}

export default SobreNos;
