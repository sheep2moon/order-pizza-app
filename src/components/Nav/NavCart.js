import React from 'react';
import styled from 'styled-components';
import { FiShoppingBag } from 'react-icons/fi';

const NavCart = () => {
  return (
    <NavCartContainer>
      <CartWrap>
        <TotalPrice>{}</TotalPrice>
        <CartIcon />
      </CartWrap>
    </NavCartContainer>
  );
};

export default NavCart;

const NavCartContainer = styled.div`
  width: 300px;
  margin-right: 1rem;
  @media screen and (max-width: 768px) {
    display: none;
  }
  @media screen and (max-width: 1200px) {
    width: 100px;
  }
`;

const CartWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-left: auto;
`;

const CartIcon = styled(FiShoppingBag)`
  font-size: 1.8rem;
  color: ${(props) => props.theme.primary};
`;

const TotalPrice = styled.p``;
