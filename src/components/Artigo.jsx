import { StyledArtigo } from "../styles/styles.js";

/* Definindo props para o componente */
function Artigo({ img, icone, titulo, descricao, data, children }) {
  return (
    <StyledArtigo>
      <p className="centralizar">
        <img src={img} alt={titulo} />
      </p>
      <h3>
        {icone} {titulo}
      </h3>
      <p>{descricao}</p>
      <p>
        Lançamento: <time>{data}</time>
      </p>
      {children}
    </StyledArtigo>
  );
}

export default Artigo;
