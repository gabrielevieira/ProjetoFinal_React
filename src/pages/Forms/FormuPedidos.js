import React from "react";
import Header from "../../components/Header/Header";
import { Form, Button, Container } from "react-bootstrap";
import Rodape from "../../components/Rodape/Rodape";
import "./FormuPedidos.css";
import BarraInferior from "../../components/Rodape/BarraInferior";

function FormuPedidos() {
  return (
    <div>
      <Header />
      <Container>
        <div className="formupedidos"></div>
        <Form>
          <Form.Group>
            <div>
              <h1>Pedidos</h1>
              <br></br>
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
          <Form.Group controlId="exampleForm.ControlSelect2">
            <Form.Label>Item:</Form.Label>
            <Form.Control as="select" multiple>
              <option>Coxinha Frango</option>
              <option>Risoles</option>
              <option>Salsicha</option>
              <option>Lasanha</option>
              <option>Empadão</option>
            </Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Label>Quantidade</Form.Label>
            <Form.Control as="select">
              <option>5</option>
              <option>6</option>
              <option>7</option>
              <option>8</option>
              <option>9</option>
              <option>Mais: descreva a quantidade em outros</option>
            </Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Label>Outros</Form.Label>
            <Form.Control as="textarea" rows="3" />
          </Form.Group>
        </Form>
        <div>
          <Button variant="success" type="submit" value="Enviar">
            Enviar
          </Button>
        </div>
      </Container>
      <Rodape />
      <BarraInferior />
    </div>
  );
}

export default FormuPedidos;
