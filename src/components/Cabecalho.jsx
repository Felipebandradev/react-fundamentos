import Menu from "./Menu.jsx";

/* Importação de modulo CSS como um objeto
chamado styles (o nome é a seu critério) */
import style from "./Cabecalho.module.css";

function Cabecalho() {
  return (
    <header>
      <h1 className={`${style["destaque-texto"]} centralizar`}>
        Olá <span className={style.sombra}>React!</span> 😎
      </h1>
      <hr />
      <p className={`${style["destaque-texto"]} centralizar`}>Classes Combinadas</p>
      <Menu />
    </header>
  );
}

export default Cabecalho;
