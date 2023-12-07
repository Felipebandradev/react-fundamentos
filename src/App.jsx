import Cabecalho from "./components/Cabecalho";
import Container from "./components/Container";
// import Conteudo from "./components/Conteudo";
import Rodape from "./components/Rodape";
import Contato from "./pages/Contato";
import Home from "./pages/Home";
import Produtos from "./pages/Produtos";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Cabecalho />
        <Container>
          <Routes>
            <Route Component={Home} exact path="/" />
            <Route Component={Produtos} path="/produtos" />
            <Route Component={Contato} path="/contato" />
          </Routes>
        </Container>
        <Rodape />
      </BrowserRouter>
    </>
  );
}

export default App;
