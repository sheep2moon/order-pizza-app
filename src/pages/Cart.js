import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import BtnLink from '../components/BtnLink';
import CartItem from '../components/Cart/CartItem';
import { removeFromCart } from '../redux/shopSlice';

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.shop.cart);

  const handleDeleteItem = (id) => {
    dispatch(removeFromCart(id));
  };

  return (
    <CartContainer>
      <ColumnsNames>
        <p>Nazwa</p>
        <p>Dodatkowe Składniki</p>
        <p>Cena</p>
        <p>Usuń</p>
      </ColumnsNames>
      {cartItems.map((item) => (
        <CartItem item={item} handleDeleteItem={handleDeleteItem} />
      ))}
      <BtnLink to='/zamowienie'>Zamów</BtnLink>
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
  grid-template-columns: 1fr 2fr 0.5fr 0.2fr;
  background: ${(props) => props.theme.dark};
  color: ${(props) => props.theme.primary};
`;
