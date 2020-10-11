import React from "react";
import "./Rodape.css";
import { Link } from "react-router-dom";

function Rodape() {
  return (
    <footer className="footer">
      <div className="localizacao">
        <div>
          <p>Localização:</p>
          <p>
            Rua Alberto Nunes, 187 esquina com Euclides de Castro – <br></br>
            Coqueiros, Florianópolis
          </p>
          <p>Tel: (48) 98763637</p>
        </div>
      </div>
      <div className="horario">
        <div>
          <p>Horário de Funcionamento:</p>
          <p>08:00 às 19:00</p>
        </div>
      </div>
      <div className="outros">
        <Link to="/formulario">Pedidos Aqui</Link>
        <br></br>
        <Link to="/faleconosco">Fale Conosco</Link>
        <br></br>
        <Link to="/cardapio">Cardápio</Link>
        <br></br>
        <Link to="/sobrenos">Sobre Nós</Link>
      </div>
      <br></br>
      <br></br>
    </footer>
  );
}

export default Rodape;
