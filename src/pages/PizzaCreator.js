import React, { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { addToCart } from '../redux/shopSlice';
import BottomBar from '../components/PizzaCreator/BottomBar';
import FirstStep from '../components/PizzaCreator/FirstStep';
import SecondStep from '../components/PizzaCreator/SecondStep';
import ThirdStep from '../components/PizzaCreator/ThirdStep';

const prices = [22, 28, 34];

const SingleProduct = () => {
  const dispatch = useDispatch();
  const [selectedIngredients, setSelectedIngredients] = useState([]);
  const [selectedSize, setSelectedSize] = useState(1);
  const [selectedThickness, setSelectedThickness] = useState(1);
  const [totalPrice, setTotalPrice] = useState(0);
  const [isBtnAnimated, setisBtnAnimated] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);

  const handleNextStep = () => setCurrentStep(currentStep + 1);
  const handlePreviousStep = () => setCurrentStep(currentStep - 1);

  const uniqueId = () => {
    return '_' + Math.random().toString(36).substr(2, 9);
  };

  const handleAddToCart = () => {
    const userProduct = {
      uniqueId: uniqueId(),
      ingredients: selectedIngredients,
      size: selectedSize,
      thickness: selectedThickness,
      price: totalPrice,
    };
    dispatch(addToCart(userProduct));
    setisBtnAnimated(true);
    setTimeout(() => {
      setisBtnAnimated(false);
    }, 3000);
  };

  // calculate price for product
  useEffect(() => {
    let total = prices[selectedSize];
    if (selectedThickness === 2) {
      total += 3.5;
    }
    total += selectedIngredients.length * 2.5;
    setTotalPrice(total);
  }, [selectedSize, selectedThickness, selectedIngredients]);

  const addIngredient = (name) => {
    setSelectedIngredients([...selectedIngredients, name]);
  };
  const removeIngredient = (name) => {
    const index = selectedIngredients.indexOf(name);
    console.log(index);
    if (index > -1) {
      const newArr = selectedIngredients;
      newArr.splice(index, 1);
      setSelectedIngredients(newArr);
    }
  };

  return (
    <>
      <CreatorFormContainer>
        <Header>
          <h1>Stwórz doskonałe połączenie</h1>
        </Header>

        {currentStep === 1 ? (
          <FirstStep
            selectedSize={selectedSize}
            selectedThickness={selectedThickness}
            setSelectedSize={setSelectedSize}
            setSelectedThickness={setSelectedThickness}
          />
        ) : currentStep === 2 ? (
          <SecondStep
            addIngredient={addIngredient}
            removeIngredient={removeIngredient}
            selectedIngredients={selectedIngredients}
          />
        ) : currentStep === 3 ? (
          <ThirdStep />
        ) : (
          <FirstStep />
        )}

        <BottomBar
          currentStep={currentStep}
          handleNextStep={handleNextStep}
          handlePreviousStep={handlePreviousStep}
          totalPrice={totalPrice}
          isBtnAnimated={isBtnAnimated}
        />
      </CreatorFormContainer>
    </>
  );
};

export default SingleProduct;

const CreatorFormContainer = styled.div`
  margin: 5rem auto 0 auto;
  max-width: 1200px;
  min-height: calc(100vh - 6rem);
  display: flex;
  flex-direction: column;
  background: #fff;
  border-top-left-radius: 1rem;
  border-top-right-radius: 1rem;
  @media screen and (max-width: 768px) {
    font-size: 0.7rem;
  }
`;
const Header = styled.div`
  padding: 0.5rem;
  width: 100%;
  display: flex;
  justify-content: center;
  background: ${(props) => props.theme.dark};
  margin-bottom: 1rem;
  color: ${(props) => props.theme.primary};
  position: relative;
  border-top-left-radius: 1rem;
  border-top-right-radius: 1rem;
  > h2 {
    text-transform: capitalize;
    border-bottom: 1px solid ${(props) => props.theme.light};
  }
`;
