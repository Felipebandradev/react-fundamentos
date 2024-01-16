import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loading from "../components/Loading";

function DetalhesProduto() {
  /* Os parametros tem que ter o mesmo nome */
  const { id } = useParams();

  const [produto, setProduto] = useState({});

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const carregarDados = async () => {
      try {
        const resposta = await fetch(`https://fakestoreapi.com/products/${id}`);
        const dados = await resposta.json();
        setProduto(dados);
        setLoading(false);
      } catch (error) {
        console.error("Erro ao Carregar produto: " + error);
      }
    };
    carregarDados();
  }, [id]);

  return (
    <article>
      <h2 style={{ textAlign: "center" }}>Produto</h2>
      {loading ? (
        <Loading />
      ) : (
        <div className="produto">
          <p style={{ textAlign: "center" }}>
            <img
              style={{ maxWidth: "350px", margin: "0.5rem auto" }}
              src={produto.image}
              alt={produto.title}
            />
          </p>
          <h3>{produto.title}</h3>
          <p>
            <b>Categoria:</b> {produto.category}
          </p>
          <p>
            <b>Preço:</b> {produto.price}
          </p>
          <p>{produto.description}</p>
        </div>
      )}
    </article>
  );
}

export default DetalhesProduto;
