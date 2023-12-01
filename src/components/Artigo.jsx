import styled from "styled-components";

const StyledArtigo = styled.article`
  background: rgb(224, 172, 234);
  background: radial-gradient(
    circle,
    rgba(224, 172, 234, 1) 0%,
    rgba(212, 144, 226, 1) 19%,
    rgba(199, 115, 219, 1) 100%
  );
  padding: 1rem;
  margin: 0.5rem 0;

  border-radius: 15px 0;
  border: inset #eb418a 1px;

  h3 {
    /* color: #3f2875fb; */
    color: #5a2e64;
    border-bottom: solid #8662d8;
  }

  p {
    font-size: 1.1rem;
  }
`;

function Artigo() {
  return (
    <StyledArtigo>
      <h3>Artigo </h3>
      <p>Conteúdo do artigo ....</p>
    </StyledArtigo>
  );
}

export default Artigo;
