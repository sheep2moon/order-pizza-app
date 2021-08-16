import React from 'react';
import styled from 'styled-components';

const ThirdStep = () => {
  return (
    <StepContainer>
      <h2>Zamówienie</h2>
      <PizzaDetailsCard></PizzaDetailsCard>
    </StepContainer>
  );
};

export default ThirdStep;

const StepContainer = styled.div``;
const PizzaDetailsCard = styled.div``;
