import React from "react";
import { Route, BrowserRouter } from "react-router-dom";

import Home from "./pages/Home";
import FormuPedidos from "./pages/Forms/FormuPedidos";
import FaleConosco from "./pages/Forms/FaleConosco";
import Cardapio from "./pages/Cardapio/Cardapio";
import SobreNos from "./pages/SobreNos/SobreNos";

function Routes() {
  return (
    <BrowserRouter>
      <Route component={Home} path="/" exact />
      <Route component={FormuPedidos} path="/formulario" />
      <Route component={FaleConosco} path="/faleconosco" />
      <Route component={Cardapio} path="/cardapio" />
      <Route component={SobreNos} path="/sobrenos" />
    </BrowserRouter>
  );
}

export default Routes;
