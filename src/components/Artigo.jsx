import { StyledArtigo } from "../styles/styles.js";

/* Definindo props para o componente */
function Artigo(props) {
  return (
    <StyledArtigo>
      <p className="centralizar">
        <img src={props.img} alt={props.titulo} />
      </p>
      <h3>
        {props.icone} {props.titulo}
      </h3>
      <p>{props.descricao}</p>
      <p>
        Lançamento: <time>{props.data}</time>
      </p>
    </StyledArtigo>
  );
}

export default Artigo;
