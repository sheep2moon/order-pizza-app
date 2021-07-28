import React from 'react';
import styled from 'styled-components';

const CartItem = ({ item }) => {
  console.log(item);
  return (
    <ItemContainer>
      <h4>{item.name}</h4>
      <p>{item.ingredients.length ? item.ingredients.join(',') : 'brak'}</p>
      <p>{item.price.toFixed(2)}zł</p>
    </ItemContainer>
  );
};

export default CartItem;

const ItemContainer = styled.div`
  padding: 1rem;
  display: grid;
  grid-template-columns: 1fr 2fr 0.5fr;
  > h4 {
    text-transform: capitalize;
  }
`;
