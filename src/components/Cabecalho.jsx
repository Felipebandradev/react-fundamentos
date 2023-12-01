/* Cabecalho.jsx */
import Menu from "./Menu.jsx";
import { StyledCabecalho } from "../styles/styles.js";


function Cabecalho() {
  return (
    <StyledCabecalho>
      <h1>Olá React! 😎</h1>
      <hr />
      <Menu />
    </StyledCabecalho>
  );
}

export default Cabecalho;
