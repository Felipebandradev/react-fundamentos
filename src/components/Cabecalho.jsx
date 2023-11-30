import Menu from "./Menu.jsx";
import "./Cabecalho.module.css";

function Cabecalho() {
  return (
    <header>
      <h1>Olá <span className="sombra">React!</span> 😎</h1>
      <hr />
      <Menu />
    </header>
  );
}

export default Cabecalho;
