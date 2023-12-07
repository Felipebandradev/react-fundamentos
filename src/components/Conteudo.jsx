import { useState } from "react";
import { StyledConteudo } from "../styles/styles.js";

import Artigo from "./Artigo";

/* Importando os cursos */
import cursos from "../api/cursos.js";

function Conteudo() {
  const aplicarFiltro = (event) => {
    console.log(event.currentTarget.innerText);
  };

  return (
    <StyledConteudo>
      <h2>Conteúdo da aplicação</h2>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat,
        labore? Officia quae quo a quas excepturi distinctio sint voluptas
        labore iste veniam possimus facere adipisci sit repellat, voluptate,
        expedita aspernatur.
      </p>

      <div className="filtros">
        <p>
          <b>Filtrar por: </b>
          <button onClick={aplicarFiltro}>Front-end</button>
          <button onClick={aplicarFiltro}>Back-End</button>
          <button onClick={aplicarFiltro}>Design</button>
        </p>
      </div>
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
