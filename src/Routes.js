import React from "react";
import { Route, BrowserRouter } from "react-router-dom";

import Home from "./pages/Home";
import FaleConosco from "./pages/Forms/FaleConosco";
import SearchProdutos from "./pages/SearchProdutos/SearchProdutos";
import SearchCardapio from "./pages/SearchCardapio/SearchCardapio";
import SobreNos from "./pages/SobreNos/SobreNos";

function Routes() {
  return (
    <BrowserRouter>
      <Route component={Home} path="/" exact />
      <Route component={FaleConosco} path="/faleconosco" />
      <Route component={SearchProdutos} path="/formulario" />
      <Route component={SearchCardapio} path="/cardapio" />

      <Route component={SobreNos} path="/sobrenos" />
    </BrowserRouter>
  );
}

export default Routes;
