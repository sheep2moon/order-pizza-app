import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Links = ({ setIsMenuOpen }) => {
  return (
    <LinksContainer>
      <RouterLink to='/' onClick={() => setIsMenuOpen(false)}>
        Strona Główna
      </RouterLink>
      <RouterLink to='/oferta' onClick={() => setIsMenuOpen(false)}>
        Oferta
      </RouterLink>
      <RouterLink to='/kontakt' onClick={() => setIsMenuOpen(false)}>
        Kontakt
      </RouterLink>
    </LinksContainer>
  );
};

export default Links;

const LinksContainer = styled.div`
  display: flex;
  margin: 0 auto;
  justify-content: center;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
const RouterLink = styled(Link)`
  text-decoration: none;
  padding: 1rem;
  font-weight: 600;
  font-size: 1.2rem;
  color: ${(props) => props.theme.primary};
  :hover {
    background: #ffffff10;
  }
`;
