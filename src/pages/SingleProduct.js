import React, { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { addToCart, fetchItems, selectProduct } from '../redux/shopSlice';
import Ingredients from '../components/SingleProduct/Ingredient';
import Error from '../components/Error';
import BottomBar from '../components/BottomBar';

const SingleProduct = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const apiStatus = useSelector((state) => state.shop.status);
  const product = useSelector((state) => selectProduct(state, parseInt(id)));
  const [selectedIngredients, setSelectedIngredients] = useState([]);
  const [selectedSize, setSelectedSize] = useState(1);
  const [selectedThickness, setSelectedThickness] = useState(1);
  const [totalPrice, setTotalPrice] = useState(0);
  const [isBtnAnimated, setisBtnAnimated] = useState(false);

  const handleAddToCart = () => {
    const userProduct = {
      name: product.name,
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
    console.log(apiStatus);
    if (apiStatus === 'succed') {
      let total = product.prices[selectedSize];
      if (selectedThickness === 2) {
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
            <img src={product.imgUrl} alt='' />
            <BasicIngredients>
              <p>Składniki: {product.ingredients.join(',')}</p>
            </BasicIngredients>
            <h3>Rozmiar</h3>
            <Sizes>
              {[32, 40, 50].map((size, index) => (
                <Option
                  key={size}
                  onClick={() => setSelectedSize(index)}
                  isActive={selectedSize === index ? true : false}
                >
                  <h4>{size}cm</h4>
                  <p>{product.prices[index].toFixed(2)}zł</p>
                </Option>
              ))}
            </Sizes>
          </LeftColumn>
          <RightColumn>
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
            <h3>Dobierz składniki (+2.50zł)</h3>
            <Ingredients
              addIngredient={addIngredient}
              selectedIngredients={selectedIngredients}
            />
          </RightColumn>
          <BottomBar
            handleAddToCart={handleAddToCart}
            totalPrice={totalPrice}
            isBtnAnimated={isBtnAnimated}
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
  margin: 5rem auto 0 auto;
  max-width: 1200px;
  min-height: 100vh;
  display: flex;
  padding: 2rem;
  background: #fff;
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
    height: 300px;
    object-fit: cover;
    box-shadow: 0 0 2px #000;
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
  width: 33%;
  max-width: 100px;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 1px 1px 4px #000000;
  border-radius: 0.25rem;
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
