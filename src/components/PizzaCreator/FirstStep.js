import React from 'react';
import styled from 'styled-components';
import thickImg from '../../assets/height.svg';
import sizeImg from '../../assets/diameter.svg';
import { BsPersonFill } from 'react-icons/bs';

const prices = [22, 28, 34];

const FirstStep = ({
  selectedSize,
  setSelectedSize,
  selectedThickness,
  setSelectedThickness,
}) => {
  return (
    <StepContainer>
      <OptionInfo>
        <img src={sizeImg} alt='' />
        <h3>Rozmiar pizzy</h3>
      </OptionInfo>
      <OptionsWrap>
        {[32, 40, 50].map((size, index) => (
          <Option
            key={size}
            onClick={() => setSelectedSize(index)}
            isActive={selectedSize === index ? true : false}
          >
            <span>
              <PersonIcon />
              {`${index + 1}-${index + 2}`}
            </span>
            <h4>{size}cm</h4>
            <p>{prices[index].toFixed(2)}zł</p>
          </Option>
        ))}
      </OptionsWrap>
      <OptionInfo>
        <img src={thickImg} alt='' />
        <h3>Grubość ciasta</h3>
      </OptionInfo>
      <OptionsWrap>
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
      </OptionsWrap>
    </StepContainer>
  );
};

export default FirstStep;

const StepContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const OptionInfo = styled.div`
  display: flex;
  > img {
    width: 4em;
    margin-right: 2em;
  }
  > h3 {
    font-size: 4em;
  }
`;

const OptionsWrap = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  width: 100%;
  font-size: 1.4rem;
`;

const Option = styled.div`
  padding: 1rem;
  height: 7em;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: 1px 1px 4px #000000;
  margin: 0.2rem;
  cursor: pointer;
  transition: all 0.1s ease-in;
  background: ${(props) => (props.isActive ? props.theme.primary : 'none')};
  :hover {
    transform: scale(1.03);
    transition: all 0.1s ease-in;
  }
`;

const PersonIcon = styled(BsPersonFill)`
  font-size: 1em;
`;
