import React, { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { addToCart, fetchItems, selectProduct } from '../redux/shopSlice';
import productImg from '../assets/pizza.svg';
import Ingredients from '../components/SingleProduct/Ingredient';
import Error from '../components/Error';
import BottomBar from '../components/BottomBar';

const SingleProduct = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const apiStatus = useSelector((state) => state.shop.status);
  const product = useSelector((state) => selectProduct(state, parseInt(id)));
  const [selectedIngredients, setSelectedIngredients] = useState([]);
  const [selectedSize, setSelectedSize] = useState(2);
  const [selectedThickness, setSelectedThickness] = useState(2);
  const [totalPrice, setTotalPrice] = useState(0);

  const handleAddToCart = () => {
    const userProduct = {
      name: product.name,
      ingredients: selectedIngredients,
      size: selectedSize,
      thickness: selectedThickness,
    };
    dispatch(addToCart(userProduct));
  };

  useEffect(() => {
    console.log(apiStatus);
    if (apiStatus === 'succed') {
      let total = product.prices[selectedSize - 1];
      if (selectedThickness === 3) {
        total += 3.5;
      }
      total += selectedIngredients.length * 2.5;
      setTotalPrice(total);
    }
  }, [
    selectedSize,
    selectedThickness,
    selectedIngredients,
    product,
    apiStatus,
  ]);

  useEffect(() => {
    if (apiStatus === 'idle') {
      dispatch(fetchItems());
    }
  }, [apiStatus, dispatch]);

  const addIngredient = (name) => {
    let newArr = selectedIngredients;
    if (selectedIngredients.includes(name)) {
      newArr = selectedIngredients.filter((el) => el !== name);
      setSelectedIngredients(newArr);
    } else {
      newArr = [...selectedIngredients, name];
      setSelectedIngredients(newArr);
    }
  };

  console.log(apiStatus);

  return (
    <>
      {apiStatus === 'loading' ? (
        <h1>loading</h1>
      ) : apiStatus === 'succed' ? (
        <SingleProductContainer>
          <LeftColumn>
            <h2>{product.name}</h2>
            <img src={productImg} alt='' />
            <BasicIngredients>
              <p>Składniki: {product.ingredients.join(',')}</p>
            </BasicIngredients>
            <h3>Rozmiar</h3>
            <Sizes>
              <Option
                onClick={() => setSelectedSize(1)}
                isActive={selectedSize === 1 ? true : false}
              >
                <h4>32cm</h4>
                <p>{product.prices[0].toFixed(2)}zł</p>
              </Option>
              <Option
                onClick={() => setSelectedSize(2)}
                isActive={selectedSize === 2 ? true : false}
              >
                <h4>40cm</h4>
                <p>{product.prices[1].toFixed(2)}zł</p>
              </Option>
              <Option
                onClick={() => setSelectedSize(3)}
                isActive={selectedSize === 3 ? true : false}
              >
                <h4>50cm</h4>
                <p>{product.prices[2].toFixed(2)}zł</p>
              </Option>
            </Sizes>
          </LeftColumn>
          <RightColumn>
            <h3>Ciasto</h3>
            <DoughThickness>
              <Option
                onClick={() => setSelectedThickness(1)}
                isActive={selectedThickness === 1 ? true : false}
              >
                <h4>Cienkie</h4>
                <p>+0,00zł</p>
              </Option>
              <Option
                onClick={() => setSelectedThickness(2)}
                isActive={selectedThickness === 2 ? true : false}
              >
                <h4>Klasyczne</h4>
                <p>+0,00zł</p>
              </Option>
              <Option
                onClick={() => setSelectedThickness(3)}
                isActive={selectedThickness === 3 ? true : false}
              >
                <h4>Grube</h4>
                <p>+3,50zł</p>
              </Option>
            </DoughThickness>
            <h3>Dobierz składniki (+2.50zł)</h3>
            <Ingredients
              addIngredient={addIngredient}
              selectedIngredients={selectedIngredients}
            />
          </RightColumn>
          <BottomBar
            handleAddToCart={handleAddToCart}
            totalPrice={totalPrice}
          />
        </SingleProductContainer>
      ) : (
        <Error />
      )}
    </>
  );
};

export default SingleProduct;

const SingleProductContainer = styled.div`
  margin: 4rem auto 0 auto;
  max-width: 1200px;
  min-height: 100vh;
  display: flex;
  padding: 2rem;
  background: ${(props) => props.theme.primary};
  @media screen and (max-width: 1000px) {
    flex-direction: column;
  }
`;
const LeftColumn = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
  align-items: center;
  > img {
    width: 300px;
  }
  > h2 {
    text-transform: capitalize;
  }
  > h3 {
    margin-top: 2rem;
  }
  @media screen and (max-width: 1000px) {
    width: 100%;
  }
`;
const BasicIngredients = styled.div`
  padding: 0.5rem;
  color: ${(props) => props.theme.dark};
`;
const Sizes = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;
const Option = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 1px 1px 4px #000000;
  border-radius: 0.25rem;
  margin: 0.2rem;
  cursor: pointer;
  transition: all 0.1s ease-in;
  background: ${({ isActive, theme }) =>
    isActive ? theme.secondary : '#fefefe'};
  :hover {
    transform: scale(1.03);
  }
`;
const RightColumn = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  align-items: center;
  > h3 {
    margin-top: 2rem;
  }
  @media screen and (max-width: 1000px) {
    width: 100%;
  }
`;
const DoughThickness = styled.div`
  display: flex;
`;
