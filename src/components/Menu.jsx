/* Menu.jsx */

import styled from "styled-components";

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
    background-color: #d126e0;
    border-radius: 15px;
    color: #f5e3f8 ;
    transform: scale(1.05);
  }
}
`;

function Menu() {
  return (
    <StyledMenu>
      <a href="">Home</a>
      <a href="">Produtos</a>
      <a href="">Contato</a>
    </StyledMenu>
  );
}

export default Menu;
