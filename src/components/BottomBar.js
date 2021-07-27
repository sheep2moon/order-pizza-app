import React from 'react';
import styled from 'styled-components';

const BottomBar = ({ handleAddToCart, totalPrice }) => {
  return (
    <BottomBarContainer>
      <BottomWrapper>
        <p>{totalPrice.toFixed(2)}zł</p>
        <Btn onClick={handleAddToCart}>Dodaj do zamówienia</Btn>
      </BottomWrapper>
    </BottomBarContainer>
  );
};

export default BottomBar;

const BottomBarContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  height: 3rem;
  position: fixed;
  bottom: 0;
  left: 50%;
  background: ${(props) => props.theme.dark};
  color: #fff;
  border-top-left-radius: 1rem;
  border-top-right-radius: 1rem;
  transform: translateX(-50%);
`;
const BottomWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const Btn = styled.button`
  border: none;
  padding: 0.25rem 1rem;
  text-decoration: none;
  background: ${(props) => props.theme.primary};
  color: ${(props) => props.theme.dark};
`;