import { StyledConteudo } from "../styles/styles.js";
import Artigo from "./Artigo";
/* Importando as assets de imagem */
import imagen1 from "../assets/abra-o-livro.png"
import imagen2 from "../assets/livro-magico.png"
import imagen3 from "../assets/pilha-de-livros.png"

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
        <Artigo
          img={imagen1}
          data={dataLivro[0]}
          icone="🏹"
          titulo="Senhor dos Anéis"
          descricao="Senhor com Anéis"
        />
        <Artigo
        img={imagen2}
          data={dataLivro[1]}
          icone="🐲"
          titulo="Game of Thrones"
          descricao="final que não pode ser visto"
        />
        <Artigo
        img={imagen3}
          data={dataLivro[2]}
          icone="🕷"
          titulo="Coven"
          descricao="Melhor linha de skins do lol"
        />
      </section>
    </StyledConteudo>
  );
}

export default Conteudo;
