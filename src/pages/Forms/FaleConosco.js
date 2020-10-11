import React from "react";
import Header from "../../components/Header/Header";
import { Form, Button, Container } from "react-bootstrap";
import Rodape from "../../components/Rodape/Rodape";
import "./FaleConosco.css";
import BarraInferior from "../../components/Rodape/BarraInferior";

function FaleConosco() {
  return (
    <div cla>
      <Header />
      <Container>
        <div class="faleconosco">
          <Form>
            <Form.Group>
              <div>
                <h1>Fale Conosco</h1>
                <br></br>
                <h4>
                  Preenche o formulário e deixe a sua mensagem, retornaremos o
                  mais breve possível
                </h4>
              </div>
              <Form.Label>Nome Completo</Form.Label>
              <Form.Control type="text" />
            </Form.Group>
            <Form.Group>
              <Form.Label>Endereço</Form.Label>
              <Form.Control type="text" />
            </Form.Group>
            <Form.Group>
              <Form.Label>Telefone</Form.Label>
              <Form.Control type="text" />
            </Form.Group>

            <Form.Group>
              <Form.Label>Mensagem</Form.Label>
              <Form.Control as="textarea" rows="3" />
            </Form.Group>
          </Form>
          <div>
            <Button variant="success" type="submit" value="Enviar">
              Enviar
            </Button>
          </div>
        </div>
      </Container>
      <Rodape />
      <BarraInferior />
    </div>
  );
}

export default FaleConosco;
