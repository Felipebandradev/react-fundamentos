/* Importação da lid Styled-compoenents */
import styled from "styled-components";

const StyledRodape = styled.footer`
  background: rgb(115, 114, 114);
  background: linear-gradient(
    117deg,
    rgba(115, 114, 114, 1) 0%,
    rgba(0, 0, 0, 1) 100%
  );
  color: white;
  height: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;

  h2 {
    margin: 10px auto;
    text-align: center;
  }
`;

const StyledListaCursos = styled.section`


  .filtros {
    margin: 1rem 0;
    padding: 1rem 0;
    border-top: solid 2px;
    border-bottom: solid 2px;
  }

  .filtros button {
    color: purple;
    margin: 0.5rem;
    padding: 0.2rem;
    font-size: 1.1rem;
    border: none;
    background-color: lavender;
    border-radius: 10px;
    box-shadow: 0 0 10px #48424b  ;
  }

  .filtros button:hover {
    background-color: purple;
    color: lavender;
    box-shadow:  0 0 10px #48424b  inset;
  }

  .filtros b {
    color: #6c6371;
  }

  .filtros svg {
    color: #8797e2;
  }

  .qtd0{
    text-align: center;
    color: #ec7d87 ;
    margin: 0.5rem;
  }

  

 

  @media screen and (min-width: 650px) {
    .artigos {
      margin: 10px auto;
      display: flex;
      justify-content: space-around;
      align-items: center;
      flex-wrap: wrap;

      & article {
        width: 45%;
        margin: 1.5%;
      }
    }
  }
`;

const StyledMenu = styled.nav`
  height: 50px;
  display: flex;
  justify-content: space-around;
  align-items: center;

  a {
    text-decoration: none;
    color: white;
    width: 30%;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: transform 100ms;

    /* & -> referência ao
  seletor pai (a) */
    &:hover {
      background-color: #fff;
      border-radius: 15px;
      color: black;
      transform: scale(1.05);
    }
  }
`;

const StyledArtigo = styled.article`
  background-color: lavender;
  padding: 1rem;
  margin: 0.5rem 0;
  border: inset #eb418a 1px;
  border-radius: 15px;
  /* height: 450px; */
  max-width: 100%;
  .centralizar {
    text-align: center;
  }

  h3 {
    color: purple;
    border-bottom: solid #8662d8;
  }

  p {
    font-size: 1.1rem;
  }

  svg {
    font-size: 2rem;
  }
`;

const StyledCabecalho = styled.header`
  background: rgb(97, 97, 97);
  background: linear-gradient(332deg, #292828 0%, rgba(19, 19, 19, 1) 100%);
  color: white;
  font-size: 1.2rem;
  font-weight: bold;
  text-align: center;

  hr {
    width: 50%;
    background-color: #fff;
    border: none;
    height: 4px;
    margin: 8px auto;
  }
`;

const StyledContainer = styled.main`
 width: 90vw;
  margin: 1rem auto;
  background-color: aliceblue;
  padding: 1rem;
  box-shadow: darkblue 0 0 1px inset;
  border-radius: 15px 0;
  flex: 1;

  h2,
  p {
    padding: 0.2rem 0;
  }
`;

export {
  StyledRodape,
  StyledListaCursos,
  StyledMenu,
  StyledArtigo,
  StyledCabecalho,
  StyledContainer
};
