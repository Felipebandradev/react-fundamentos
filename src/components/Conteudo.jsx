import { useState } from "react";
import { StyledListaCursos } from "../styles/styles.js";
import { CgCopy, CgAttachment} from "react-icons/cg";
import { IoBookOutline } from "react-icons/io5";

import Artigo from "./Artigo";

/* Importando os cursos */
import cursos from "../api/cursos.js";

function ListaCursos() {
  /* Criando um gerenciador de state para mudança filtro
  de categorias. Inicialmente, começa null pois ainda não temos uma escolha/ seleção de categoria (aparece tudo) */
  const [categoria, setCategoria] = useState(null);

  const aplicarFiltro = (event) => {
    // Capturamos (após o click) o texto esccrito em cada botão;
    const categoriaEscolhida = event.currentTarget.innerText;
    /* Em seguida passamos este texto para o state de categoria */
    setCategoria(categoriaEscolhida);
  };

  const limpaFiltro = () => setCategoria(null);

  /* Gerando um novo array de cursos filtrados */
  const cursosFiltrados = cursos.filter((curso) => {
    /*  Se o state categoria for igual a uma     das categorias dos cursos, então será retornada    a lista de cursos daquela categoria. Senão, será     retornada lista completa devido ao state ser null (ou seja,    não há uma categoria para filtrar) */
    return curso.categoria === categoria || categoria === null;
  });

  /* Guardando a quantidade de cursos filtrados */
  const quantidade = cursosFiltrados.length ;

  return (
    <StyledListaCursos>
      <h2>Conteúdo da aplicação</h2>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat,
        labore? Officia quae quo a quas excepturi distinctio sint voluptas
        labore iste veniam possimus facere adipisci sit repellat, voluptate,
        expedita aspernatur.
      </p>

      <div className="filtros">
        <p>
          <b>
            Filtrar por <CgCopy />:
          </b>
          <button onClick={aplicarFiltro}>Front-end</button>
          <button onClick={aplicarFiltro}>Back-End</button>
          <button onClick={aplicarFiltro}>Design</button>
          <button onClick={aplicarFiltro}>Mobile</button>
          <button onClick={aplicarFiltro}>Música</button>
          <button onClick={aplicarFiltro}>Gastronomia</button>
        </p>

        <p>Quantidade de Cursos: <b>{quantidade} </b><IoBookOutline /></p>

        {/* Rederização condicional o texto/tag/componente será renderizado se o state categoria existir (ou seja não é null, undefined, false)
         */}
        {categoria !== null && (
          <p>
            Você Escolheu: <b> {categoria} <CgAttachment /> </b>
            <button onClick={limpaFiltro}>🧹 Limpar Filtro</button>
          </p>
        )}

      </div>
      { quantidade === 0 &&(
      <h2 className="qtd0">Não há cursos dessa categoria</h2>)
}
      <section className="artigos">
        {cursosFiltrados.map((curso) => (
          <Artigo
            key={curso.id}
            titulo={curso.titulo}
            categoria={curso.categoria}
            preco={curso.preco}
          />
        ))}
      </section>
    </StyledListaCursos>
  );
}

export default ListaCursos;
