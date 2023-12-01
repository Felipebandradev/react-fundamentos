import styled from "styled-components";
import Artigo from "./Artigo";

const StyledConteudo = styled.main`
  width: 90vw;
  margin: 1rem auto;
  background-color: aliceblue;
  padding: 1rem;
  box-shadow: darkblue 0 0 1px inset;
  border-radius: 15px 0;
  flex: 1;
  
  h2,
  p {
    padding: 0.2rem 0;
  }

 @media screen and (min-width: 650px){
  .artigos{
      margin: 10px auto;
      display: flex;
      justify-content: space-around;
      align-items: center;
      
      & article{
       width: 32%;
      }
    }
 }

`;

function Conteudo() {
  return (
    <StyledConteudo>
      <h2>Conteúdo da aplicação</h2>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat,
        labore? Officia quae quo a quas excepturi distinctio sint voluptas
        labore iste veniam possimus facere adipisci sit repellat, voluptate,
        expedita aspernatur.
      </p>
      <section className="artigos">
        <Artigo />
        <Artigo />
        <Artigo />
      </section>
    </StyledConteudo>
  );
}

export default Conteudo;
