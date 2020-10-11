import React from "react";
import { Container, Row } from "react-bootstrap";
import Iframe from "react-iframe";
import "./Mapa.css";

function Mapa() {
  return (
    <Container>
      <Row className="justify-content-md-center">
        <div className="mapa">
          <h1>Localização: Costeira do Pirajubaé</h1>
          <Iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7069.411088887678!2d-48.52376534001317!3d-27.63363486087443!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x952739837ad0a263%3A0x10a22676e46f3ab1!2sCosteira%20do%20Pirajuba%C3%A9%2C%20Florian%C3%B3polis%20-%20SC!5e0!3m2!1spt-BR!2sbr!4v1600971796431!5m2!1spt-BR!2sbr"
            width="600"
            height="350"
            frameborder="0"
            allowfullscreen=""
            aria-hidden="false"
            tabindex="0"
          />
        </div>
      </Row>
    </Container>
  );
}

export default Mapa;
