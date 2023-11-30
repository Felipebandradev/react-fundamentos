import Artigo from "./Artigo/Artigo";

function Conteudo() {
  return (
    <main>
      <section>
        <h2>Conteúdo da aplicação</h2>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat,
          labore? Officia quae quo a quas excepturi distinctio sint voluptas
          labore iste veniam possimus facere adipisci sit repellat, voluptate,
          expedita aspernatur.
        </p>

        <article className={`flex`}>
          <Artigo />
          <Artigo />
          <Artigo />
        </article>
      </section>
    </main>
  );
}

export default Conteudo;
