import React from 'react';
import styled from 'styled-components';

const prices = [22, 28, 34];

const FirstStep = ({
  selectedSize,
  setSelectedSize,
  selectedThickness,
  setSelectedThickness,
}) => {
  return (
    <StepContainer>
      <h3>Rozmiar</h3>
      <Sizes>
        {[32, 40, 50].map((size, index) => (
          <Option
            key={size}
            onClick={() => setSelectedSize(index)}
            isActive={selectedSize === index ? true : false}
          >
            <h4>{size}cm</h4>
            <p>{prices[index].toFixed(2)}zł</p>
          </Option>
        ))}
      </Sizes>
      <h3>Ciasto</h3>
      <DoughThickness>
        {[
          { size: 'cienkie', price: 0 },
          { size: 'standardowe', price: 0 },
          { size: 'grube', price: 3.5 },
        ].map((option, index) => (
          <Option
            key={option.size}
            onClick={() => setSelectedThickness(index)}
            isActive={selectedThickness === index ? true : false}
          >
            <h4>{option.size}</h4>
            <p>+{option.price.toFixed(2)}zł</p>
          </Option>
        ))}
      </DoughThickness>
    </StepContainer>
  );
};

export default FirstStep;

const StepContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 2rem;
`;

const Sizes = styled.div`
  display: flex;
`;
const DoughThickness = styled.div`
  display: flex;
`;

const Option = styled.div`
  width: 33%;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 1px 1px 4px #000000;
  margin: 0.2rem;
  cursor: pointer;
  transition: all 0.1s ease-in;
  border: 4px solid
    ${({ isActive, theme }) => (isActive ? theme.primary : '#fefefe')};
  :hover {
    transform: scale(1.03);
    transition: all 0.1s ease-in;
  }
`;
