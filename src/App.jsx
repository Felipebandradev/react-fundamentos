import Cabecalho from "./components/Cabecalho";
import Container from "./components/Container";
// import Conteudo from "./components/Conteudo";
import Rodape from "./components/Rodape";
import Contato from "./pages/Contato";
import Home from "./pages/Home";
import Produtos from "./pages/Produtos";

function App() {
  return (
    <>
      {/* fragmentação */}
      <Cabecalho />
      {/* <Conteudo /> */}
      <Container>
        <Home />
        <Produtos />
        <Contato />
      </Container>
      <Rodape />
    </>
  );
}

export default App;
