import React from "react";
import Header from "../../components/Header/Header";

import Rodape from "../../components/Rodape/Rodape";
import BarraInferior from "../../components/Rodape/BarraInferior";
import { Container } from "react-bootstrap";
import "./SobreNos.css";

function SobreNos() {
  return (
    <div>
      <Header />

      <div className="sobre-nos">
        <Container>
          <h1>Nossa História :</h1>
          <div>
            <img className="sobrenos-img" src="Bruna.png" alt="ImagemBruna" />
          </div>

          <p className="sobrenos-info">
            Somos uma família empreenderoda, que começou em 2018 em uma
            lanchonete "Caribes Sucos" <br></br>
            em Florianópolis, no bairro estreito. O nosso comércio era o orgulho
            de nossa família, trabalhamos<br></br>
            com amor e dedicação para agradar todos os nossos clientes. Com a
            chegada da pandemia tivemos <br></br>
            que fecha-lo,como muitos empresários e pequenos do nosso ramo Porém
            não deixamos isso nos abalar, <br></br>e reerguemos novamente como
            "Das Irmãs Salgados". Nossa familia prepara os produtos com muito
            amor <br></br>e carinho, levando a alegria para os nossos clientes.
          </p>
        </Container>
      </div>

      <Rodape />
      <BarraInferior />
    </div>
  );
}

export default SobreNos;
