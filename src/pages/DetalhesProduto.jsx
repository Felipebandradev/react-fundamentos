import { useParams } from "react-router-dom";

function DetalhesProduto() {

  /* Os parametros tem que ter o mesmo nome */
  const { id } =  useParams();

  return (
    <article>
      <h2>Título...</h2>
      <p>
        <b>Categoria:</b> categoria...
      </p>
      <p>
        <b>Preco:</b> preco...
      </p>
      <p>Descrição...</p>
      <p>
        <img src="" alt="" />
      </p>
    </article>
  );
}

export default DetalhesProduto;
