import React from "react";
import { Jumbotron, Button, Container } from "react-bootstrap";
import "./Menu.css";
import GrupoCard from "./GrupoCard";
import Mapa from "./Mapa";

function Menu() {
  return (
    <Container>
      <div className="cardCardapio">
        <Jumbotron>
          <h1>Confira o cardápio aqui</h1>
          <p>
            Deliciosas coxinhas com diversos sabores, confira o cardápio aqui
          </p>
          <p>
            <Button variant="light" href="/cardapio">
              Clique
            </Button>
          </p>
        </Jumbotron>

        <div>
          <GrupoCard />
        </div>
        <div>
          <Mapa />
        </div>
      </div>
    </Container>
  );
}

export default Menu;
