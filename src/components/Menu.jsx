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
    
  }
  a:hover {
    background-color: pink;
    color: black ;
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
