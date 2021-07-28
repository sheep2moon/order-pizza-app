import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import CartItem from '../components/Cart/CartItem';

const Cart = () => {
  const cartItems = useSelector((state) => state.shop.cart);

  return (
    <CartContainer>
      <ColumnsNames>
        <p>Nazwa</p>
        <p>Dodatkowe Składniki</p>
        <p>Cena</p>
      </ColumnsNames>
      {cartItems.map((item) => (
        <CartItem item={item} />
      ))}
    </CartContainer>
  );
};

export default Cart;

const CartContainer = styled.div`
  margin: 5rem auto 2rem auto;
  max-width: 1400px;
  background: #fff;
  min-height: calc(100vh - 4rem);
`;
const ColumnsNames = styled.div`
  display: grid;
  padding: 1rem;
  grid-template-columns: 1fr 2fr 0.5fr;
  background: ${(props) => props.theme.dark};
  color: ${(props) => props.theme.primary};
`;
