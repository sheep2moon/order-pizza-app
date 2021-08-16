import React, { useState } from 'react';
import styled from 'styled-components';
import { ingredientList } from '../../commons/ingredientList';

const Ingredients = ({
  addIngredient,
  removeIngredient,
  selectedIngredients,
}) => {
  return (
    <IngredientsContainer>
      {ingredientList.map((ingredient) => {
        return (
          <Ingredient key={ingredient.name}>
            <img src={ingredient.img} alt='ingredient' />
            <p>{ingredient.name}</p>
            <p>{ingredient.price.toFixed(2)}zł</p>
            <QuantityOptions>
              <span onClick={() => removeIngredient(ingredient)}>-</span>
              <p>
                {
                  selectedIngredients.filter((el) => el === ingredient.name)
                    .length
                }
              </p>
              <span onClick={() => addIngredient(ingredient)}>+</span>
            </QuantityOptions>
          </Ingredient>
        );
      })}
    </IngredientsContainer>
  );
};

export default Ingredients;

const IngredientsContainer = styled.div`
  margin: 1.5rem 0;
  width: 100%;
  padding: 1em;
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 0.5rem;
  font-size: 1.2rem;
  color: ${({ theme }) => theme.dark};
`;
const Ingredient = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: 0.5fr 1fr 0.5fr 1fr;
  border-bottom: 1px solid #000;
  padding: 0.5em;
  width: 100%;
  > img {
    width: 3em;
  }
`;
const QuantityOptions = styled.div`
  display: flex;
  justify-content: center;
  > p {
    border: 1px solid #00000020;
    width: 2em;
    display: grid;
    place-items: center;
  }
  > span {
    color: ${({ theme }) => theme.dark};
    width: 2.5em;
    height: 2.5em;
    display: grid;
    place-items: center;
    background: ${({ theme }) => theme.primary};
    opacity: 0.9;
    :hover {
      cursor: pointer;
      opacity: 1;
      box-shadow: inset 0 0 3px 2px #ffffff60;
    }
  }
`;
