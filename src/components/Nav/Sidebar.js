import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import NavCart from './NavCart';

const Sidebar = ({ isMenuOpen, setIsMenuOpen }) => {
  return (
    <SidebarContainer isMenuOpen={isMenuOpen}>
      <SidebarLinks>
        <RouterLink to='/' onClick={() => setIsMenuOpen(false)}>
          Strona Główna
        </RouterLink>
        <RouterLink to='/oferta' onClick={() => setIsMenuOpen(false)}>
          Oferta
        </RouterLink>
        <RouterLink to='/kontakt' onClick={() => setIsMenuOpen(false)}>
          Kontakt
        </RouterLink>
      </SidebarLinks>
      <NavCartLink to='/koszyk' onClick={() => setIsMenuOpen(false)}>
        <NavCart />
        <h4>Zobacz Koszyk</h4>
      </NavCartLink>
    </SidebarContainer>
  );
};

export default Sidebar;

const SidebarContainer = styled.div`
  border-top: 1px solid #ffffff10;
  position: absolute;
  top: 4rem;
  transition: all 0.3s ease-in-out;
  right: ${({ isMenuOpen }) => (isMenuOpen ? '0' : '-100vw')};
  height: 100vh;
  width: 100vw;
  z-index: 10;
  background: ${(props) => props.theme.dark};
`;

const SidebarLinks = styled.div`
  display: flex;
  flex-direction: column;
`;
const RouterLink = styled(Link)`
  border-bottom: 1px solid #ffffff10;
  padding: 1rem;
  font-size: 1.2rem;
  text-decoration: none;
  text-align: center;
  color: ${(props) => props.theme.primary};
  :hover {
    background: #ffffff10;
  }
`;
const NavCartLink = styled(Link)`
  margin-top: 2rem;
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 1rem;
  text-decoration: none;
  > h4 {
    color: #fff;
    font-size: 1.2rem;
    margin-left: 1rem;
  }
  :hover {
    background: #ffffff10;
  }
`;
