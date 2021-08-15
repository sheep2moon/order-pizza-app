import React from 'react';
import styled from 'styled-components';
import baconImg from '../../assets/ingredients/bacon.svg';
import chilliImg from '../../assets/ingredients/chilli.svg';
import jalapenoImg from '../../assets/ingredients/jalapeno.svg';
import mozzarellaImg from '../../assets/ingredients/mozzarella.svg';
import onionImg from '../../assets/ingredients/onion.svg';
import paprikaImg from '../../assets/ingredients/paprika.svg';
import pepperoniImg from '../../assets/ingredients/pepperoni.svg';
import pineappleImg from '../../assets/ingredients/pineapple.svg';
import tomatoImg from '../../assets/ingredients/tomato.svg';
import champignonImg from '../../assets/ingredients/champignon.svg';
import cheeseImg from '../../assets/ingredients/cheese.svg';

const ingredientList = [
  {
    name: 'boczek',
    img: baconImg,
    price: 3,
  },
  {
    name: 'chilli',
    img: chilliImg,
    price: 3,
  },
  {
    name: 'jalapeno',
    img: jalapenoImg,
    price: 3,
  },
  {
    name: 'mozzarella',
    img: mozzarellaImg,
    price: 3,
  },
  {
    name: 'cebula',
    img: onionImg,
    price: 2,
  },
  {
    name: 'papryka',
    img: paprikaImg,
    price: 3,
  },
  {
    name: 'salami',
    img: pepperoniImg,
    price: 3,
  },
  {
    name: 'ananas',
    img: pineappleImg,
    price: 3,
  },
  {
    name: 'pomidor',
    img: tomatoImg,
    price: 3,
  },
  {
    name: 'pieczarki',
    img: champignonImg,
    price: 3,
  },
  {
    name: 'ser',
    img: cheeseImg,
    price: 3,
  },
];

const Ingredients = ({
  addIngredient,
  removeIngredient,
  selectedIngredients,
}) => {
  return (
    <IngredientContainer>
      {ingredientList.map((ingredient) => {
        const quantity = selectedIngredients.filter(
          (el) => el === ingredient.name
        ).length;
        return (
          <Ingredient key={ingredient.name}>
            <img src={ingredient.img} alt='ingredient' />
            <p>{ingredient.name}</p>
            <p>{ingredient.price.toFixed(2)}zł</p>
            <QuantityOptions>
              <span onClick={() => removeIngredient(ingredient.name)}>-</span>
              <span>{quantity}</span>
              <span onClick={() => addIngredient(ingredient.name)}>+</span>
            </QuantityOptions>
          </Ingredient>
        );
      })}
    </IngredientContainer>
  );
};

export default Ingredients;

const IngredientContainer = styled.div`
  margin: 1.5rem 0;
  width: 100%;
  padding: 1em;
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 0.5rem;
  font-size: 1.2rem;
`;
const Ingredient = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: 0.5fr 1fr 0.5fr 1fr;

  background: #eee;
  width: 100%;
  > img {
    width: 3em;
  }
`;
const QuantityOptions = styled.div`
  display: flex;
  justify-content: center;
  > span {
    width: 2em;
    height: 2em;
    display: grid;
    place-items: center;
    background: ${({ theme }) => theme.primary};
  }
`;
