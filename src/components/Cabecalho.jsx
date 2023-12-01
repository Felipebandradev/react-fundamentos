/* Cabecalho.jsx */
import Menu from "./Menu.jsx";

/* Importação da lib styled-components */
import styled from "styled-components";

const StyledCabecalho = styled.header`
  background: rgb(97, 97, 97);
  background: linear-gradient(
    332deg,
    #292828 0%,
    rgba(19, 19, 19, 1) 100%
  );
  color: white;
  font-size: 1.2rem;
  font-weight: bold;
  text-align: center;

  hr {
    width: 50%;
    background-color: #d43bb3;
    border: none;
    height: 4px;
    margin: 8px auto;
  }
`;

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
