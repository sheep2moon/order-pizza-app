import React from 'react';
import styled from 'styled-components';
import { RiDeleteBinLine } from 'react-icons/ri';

const CartItem = ({ item, handleDeleteItem }) => {
  console.log(item);

  const sizeToString = (size) => {
    if (size === 0) return '32';
    if (size === 1) return '40';
    return '50';
  };

  return (
    <ItemContainer>
      <h4>
        {`${item.name} 
        (${sizeToString(item.size)}cm)`}
      </h4>
      <p>
        {item.ingredients.length
          ? item.ingredients.map((ingredient) => `${ingredient}, `)
          : 'brak'}
      </p>
      <p>{item.price.toFixed(2)}zł</p>
      <DeleteBtn onClick={() => handleDeleteItem(item.uniqueId)}>
        <RiDeleteBinLine />
      </DeleteBtn>
    </ItemContainer>
  );
};

export default CartItem;

const ItemContainer = styled.div`
  padding: 1rem;
  display: grid;
  align-items: center;
  background: #eaeaea;
  grid-template-columns: 1fr 2fr 0.5fr 0.2fr;
  border-bottom: 1px solid #00000020;
  > h4 {
    text-transform: capitalize;
  }
  > p {
    padding: 0.5rem;
  }
  @media screen and (max-width: 500px) {
    > p {
      font-size: 0.8rem;
    }
    > h4 {
      font-size: 0.8rem;
    }
  }
`;
const DeleteBtn = styled.button`
  border: none;
  background: none;
  font-size: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 3rem;
  height: 3rem;
  cursor: pointer;
  :hover {
    background: #00000010;
  }
`;
