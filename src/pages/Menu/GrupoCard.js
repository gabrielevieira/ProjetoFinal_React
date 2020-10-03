import React from "react";
import { CardGroup, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

function CardTaxaEntrega(params) {
  return (
    <div>
      <CardGroup>
        <Card>
          <Card.Img
            variant="top"
            href="/cardapio"
            src="teleentrega2x200px.png"
          />
          <Card.Body>
            <Card.Title>Tele-Entrega</Card.Title>
            <Card.Text>
              <Link to="/">Clique aqui e confira as taxas da sua região</Link>
            </Card.Text>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img variant="top" href="/cardapio" src="empadão1x200px.png" />
          <Card.Body>
            <Card.Title>Cardápio</Card.Title>
            <Card.Text>
              <Link to="/cardapio">
                Clique aqui e veja os deliciosos sabores
              </Link>
            </Card.Text>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img variant="top" href="/sobrenos" src="imagem200px.png" />
          <Card.Body>
            <Card.Title>Nossa História</Card.Title>
            <Card.Text>
              <Link to="/sobrenos">Clique aqui e conheça a nossa história</Link>{" "}
            </Card.Text>
          </Card.Body>
        </Card>
      </CardGroup>
    </div>
  );
}

export default CardTaxaEntrega;
