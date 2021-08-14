import React from 'react';
import styled from 'styled-components';
import Btn from '../Btn';

const BottomBar = ({
  totalPrice,
  handlePreviousStep,
  handleNextStep,
  currentStep,
}) => {
  return (
    <BottomBarContainer>
      <BottomWrapper>
        <Btn onClick={handlePreviousStep} isDisabled={currentStep === 1}>
          Wstecz
        </Btn>
        <p>Cena: {totalPrice.toFixed(2)}zł</p>
        <Btn onClick={handleNextStep} isDisabled={currentStep === 3}>
          Dalej
        </Btn>
      </BottomWrapper>
    </BottomBarContainer>
  );
};

export default BottomBar;

const BottomBarContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  height: 3rem;
  position: fixed;
  bottom: 0;
  left: 50%;
  background: ${(props) => props.theme.dark};
  color: #fff;
  transform: translateX(-50%);
`;
const BottomWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  > p {
    font-size: 1.2rem;
  }
`;
