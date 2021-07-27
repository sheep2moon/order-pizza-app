import React, { useState } from 'react';
import styled from 'styled-components';
import MenuBtn from './MenuBtn';
import logoIcon from '../../assets/pizza.svg';
import Links from './Links';
import NavCart from './NavCart';
import Sidebar from './Sidebar';

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <NavContainer>
      <NavWrapper>
        <Logo>
          <img src={logoIcon} alt='pizza-logo' />
          <h2>pizza delivery</h2>
        </Logo>
        <Links setIsMenuOpen={setIsMenuOpen} />
        <MenuBtn isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
        <NavCart />
      </NavWrapper>

      <Sidebar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
    </NavContainer>
  );
};

export default Nav;

const NavContainer = styled.div`
  position: fixed;
  top: 0;
  width: 100vw;
  height: 4rem;
  z-index: 999;
  background: ${(props) => props.theme.dark};
`;
const NavWrapper = styled.nav`
  max-width: 1400px;
  height: 100%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Logo = styled.div`
  display: flex;
  width: 300px;
  color: ${(props) => props.theme.primary};
  > img {
    width: 4rem;
  }
  > h2 {
    text-align: center;
    font-size: 2.4rem;
    margin-left: 1rem;
    font-family: 'Qahiri', sans-serif;
  }
`;
