import { useEffect, useState } from "react";
import { StyledProdutoCard } from "../styles/styles";

import Imgloading from "../assets/loading.svg";
import { Link } from "react-router-dom";

function Produtos() {
  /* O state "produtos" é iniciado como um array vazio
     posteriormente (após p carregamento da API),
    ele  será prenchido com os objetos/produtos*/
  const [produtos, setProdutos] = useState([]);

  /* State de Loading */

  const [loading, setLoading] = useState(true);

  /* Gerenciando efeito colateral
    do componente para o gerenciamento dos dados da API 
    
    Fluxo geral de  funcionamento do código abaixo:
    
    1) useEffect é carregado uma vez e após a montagem do page (produtos)
    Obs: o [] indica que o useEffect não tem dependências adicionais 
    e que será executado uma vez.

    2) Em seguida, ele executa a função carregarProdutos

    3) Ao término dela, atualiza o state (Produtos)

    */
  useEffect(() => {
    const carregarDados = async () => {
      try {
        const resposta = await fetch(`https://fakestoreapi.com/products`);
        const dados = await resposta.json();
        console.log(dados);
        setProdutos(dados);
        setLoading(false);
      } catch (error) {
        console.error("Houve um erro: " + error);
      }
    };

    carregarDados();
  }, []);

  return (
    <article>
      <h2>Produtos</h2>

      {loading ? (
        <p style={{ textAlign: "center" }}>
          <img src={Imgloading} alt="carregando..." />
        </p>
      ) : (
        produtos.map((produto) => {
          return (
            <StyledProdutoCard key={produto.id}>
              <hr />
              <h3>{produto.title}</h3>
              <p>
                <b>Preço: </b>
                {produto.price}
              </p>
              <p>
                <b>Descrição: </b>
                {produto.description}
              </p>

              <p>
                {" "}
                <Link to={`/produtos/${produto.id}`}> Ver detalhes </Link>
              </p>
            </StyledProdutoCard>
          );
        })
      )}
    </article>
  );
}

export default Produtos;
