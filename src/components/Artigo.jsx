import { StyledArtigo } from "../styles/styles.js";
import { DiCodeBadge } from "react-icons/di";

/* Definindo props para o componente */
function Artigo( props ) {
  const precoFormatado = props.preco.toLocaleString("pt-br", {
    style: "currency",
    currency: "BRL",
    minimumFractionDigits: 2,
  });

  return (
    <StyledArtigo>
      <h3>
        <DiCodeBadge /> {props.categoria}
      </h3>
      <p>
        <b>curso:</b> {props.titulo}
      </p>
      <p>
        <b>preço:</b> {precoFormatado}
      </p>
    </StyledArtigo>
  );
}

export default Artigo;
