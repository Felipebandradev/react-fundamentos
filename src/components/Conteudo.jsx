import { StyledConteudo } from "../styles/styles.js";
import Artigo from "./Artigo";

/* Importando os cursos */
import cursos from "../api/cursos.js";

const dataLivro = ["10/10/1980", "10/07/2010", "14/04/2016"];

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
        {cursos.map((curso) => (
          <Artigo
            key={curso.id}
            titulo={curso.titulo}
            categoria={curso.categoria}
            preco={curso.preco}
          />
        ))}
      </section>
    </StyledConteudo>
  );
}

export default Conteudo;
