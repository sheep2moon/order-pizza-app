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
  },
  {
    name: 'chilli',
    img: chilliImg,
  },
  {
    name: 'jalapeno',
    img: jalapenoImg,
  },
  {
    name: 'mozzarella',
    img: mozzarellaImg,
  },
  {
    name: 'cebula',
    img: onionImg,
  },
  {
    name: 'papryka',
    img: paprikaImg,
  },
  {
    name: 'salami',
    img: pepperoniImg,
  },
  {
    name: 'ananas',
    img: pineappleImg,
  },
  {
    name: 'pomidor',
    img: tomatoImg,
  },
  {
    name: 'pieczarki',
    img: champignonImg,
  },
  {
    name: 'ser',
    img: cheeseImg,
  },
];

const Ingredients = ({ addIngredient, selectedIngredients }) => {
  return (
    <IngredientContainer>
      {ingredientList.map((ingredient) => (
        <Ingredient
          key={ingredient.name}
          onClick={() => addIngredient(ingredient.name)}
          isActive={selectedIngredients.includes(ingredient.name)}
        >
          <h5>{ingredient.name}</h5>
          <img src={ingredient.img} alt='ingredient' />
        </Ingredient>
      ))}
    </IngredientContainer>
  );
};

export default Ingredients;

const IngredientContainer = styled.div`
  margin: 1.5rem 0;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 0.5rem;
  @media screen and (max-width: 500px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;
const Ingredient = styled.div`
  padding: 1rem 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in;
  border: 4px solid
    ${({ isActive, theme }) => (isActive ? theme.primary : '#fff')};
  border-radius: 0.25rem;
  box-shadow: 1px 1px 2px #000;
  :hover {
    cursor: pointer;
    transform: scale(1.03);
  }
  > h5 {
    margin-top: -1.2rem;
  }
  > img {
    width: 60px;
  }
`;
