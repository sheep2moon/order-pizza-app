import React from 'react';
import styled from 'styled-components';

const BottomBar = ({ handleAddToCart, totalPrice, isBtnAnimated }) => {
  return (
    <BottomBarContainer>
      <BottomWrapper>
        <p>Cena: {totalPrice.toFixed(2)}zł</p>
        <Btn isBtnAnimated={isBtnAnimated} onClick={handleAddToCart}>
          {isBtnAnimated ? 'Pomyślnie dodano' : 'Dodaj do zamówienia'}
        </Btn>
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
  transform: translateX(-50%);
`;
const BottomWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  > p {
    font-size: 1.2rem;
  }
`;

const Btn = styled.button`
  border: none;
  width: 12rem;
  padding: 0.25rem 1rem;
  text-decoration: none;
  background: ${({ theme, isBtnAnimated }) =>
    isBtnAnimated ? theme.secondary : theme.primary};
  color: ${(props) => props.theme.dark};
  font-size: 1rem;
  font-weight: 600;
  transition: all 0.2s ease-in;
  :hover {
    transition: all 0.2s ease-in;
    cursor: pointer;
    box-shadow: 0 1px 3px #ffffff80;
  }
`;
