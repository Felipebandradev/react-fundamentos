import styled from "styled-components";

const StyledRodape = styled.footer`
  background: rgb(115, 114, 114);
  background: linear-gradient(
    117deg,
    rgba(115, 114, 114, 1) 0%,
    rgba(0, 0, 0, 1) 100%
  );
  color: white;
  height: 30vh;
  display: flex;
  justify-content: center;
  align-items: center;

  h2{
    margin: 10px auto;
    text-align: center;
  }
  


`;

function Rodape() {
  return (
    <StyledRodape>
      <h2>Rodapé da aplicação</h2>
    </StyledRodape>
  );
}

export default Rodape;
