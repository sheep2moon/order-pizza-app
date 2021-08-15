import React from 'react';
import styled from 'styled-components';
import Ingredients from './Ingredient';

const SecondStep = ({
  addIngredient,
  removeIngredient,
  selectedIngredients,
}) => {
  return (
    <StepContainer>
      <h3>Dobierz składniki (+2.50zł)</h3>
      <Ingredients
        addIngredient={addIngredient}
        removeIngredient={removeIngredient}
        selectedIngredients={selectedIngredients}
      />
    </StepContainer>
  );
};

export default SecondStep;

const StepContainer = styled.div``;
