import React from 'react';
import styled from 'styled-components';

const MenuBtn = ({ isMenuOpen, toggleMenu }) => {
  return (
    <BtnContainer isMenuOpen={isMenuOpen} onClick={toggleMenu}>
      <span></span>
      <span></span>
      <span></span>
    </BtnContainer>
  );
};

export default MenuBtn;

const BtnContainer = styled.div`
  margin-right: 2rem;
  display: none;
  flex-direction: column;
  position: relative;
  width: 40px;
  height: 24px;
  cursor: pointer;
  > span {
    position: absolute;
    right: 0;
    width: 40px;
    height: 4px;
    border-radius: 2px;
    background: ${(props) => props.theme.primary};
    transition: all 0.5s ease-in-out;
    :nth-child(1) {
      top: ${({ isMenuOpen }) => (isMenuOpen ? '10px' : '0px')};
      transform: ${({ isMenuOpen }) =>
        isMenuOpen ? 'rotate(-135deg)' : 'none'};
    }
    :nth-child(2) {
      top: 10px;
      transform: ${({ isMenuOpen }) =>
        isMenuOpen ? 'translateX(50px)' : 'none'};
      opacity: ${({ isMenuOpen }) => (isMenuOpen ? '0' : '1')};
    }
    :nth-child(3) {
      top: ${({ isMenuOpen }) => (isMenuOpen ? '10px' : '20px')};
      transform: ${({ isMenuOpen }) =>
        isMenuOpen ? 'rotate(135deg)' : 'none'};
    }
  }

  @media screen and (max-width: 1200px) {
    width: 40px;
  }
  @media screen and (max-width: 768px) {
    display: flex;
  }
`;
