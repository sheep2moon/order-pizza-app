import React from 'react';
import styled from 'styled-components';
import Ingredients from './Ingredients';

const SecondStep = ({
  selectedIngredients,
  setSelectedIngredients,
  totalIngredientsPrice,
  setTotalIngredientsPrice,
}) => {
  const addIngredient = (ingredient) => {
    setSelectedIngredients([...selectedIngredients, ingredient.name]);
    setTotalIngredientsPrice(totalIngredientsPrice + ingredient.price);
  };

  const removeIngredient = (ingredient) => {
    const index = selectedIngredients.indexOf(ingredient.name);
    if (index > -1) {
      const newArr = [...selectedIngredients];
      newArr.splice(index, 1);
      setSelectedIngredients(newArr);
      setTotalIngredientsPrice(totalIngredientsPrice - ingredient.price);
    }
  };
  return (
    <StepContainer>
      <h2>Wybierz ulubione składniki</h2>
      <Ingredients
        selectedIngredients={selectedIngredients}
        addIngredient={addIngredient}
        removeIngredient={removeIngredient}
      />
    </StepContainer>
  );
};

export default SecondStep;

const StepContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 2rem 0;
  > h2 {
    font-size: 2em;
  }
`;
