import { StyledArtigo } from "../styles/styles.js";
import { DiCode } from "react-icons/di";

/* Definindo props para o componente */
function Artigo({ titulo, categoria, preco }) {
  const precoFormatado = preco.toLocaleString("pt-br", {
    style: "currency",
    currency: "BRL",
    minimumFractionDigits: 2,
  });

  return (
    <StyledArtigo>
      <h3>
        <DiCode /> {categoria}
      </h3>
      <p>
        <b>curso:</b> {titulo}
      </p>
      <p>
        <b>preço:</b> {precoFormatado}
      </p>
    </StyledArtigo>
  );
}

export default Artigo;
