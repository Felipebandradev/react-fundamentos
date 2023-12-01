import { StyledConteudo } from "../styles/styles.js";
import Artigo from "./Artigo";



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
