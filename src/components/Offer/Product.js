import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import productImage from '../../assets/pizza.svg';
import { BiCustomize } from 'react-icons/bi';

const Product = ({ product }) => {
  return (
    <ProductContainer>
      <img src={productImage} alt='product' />
      <h3>{product.name}</h3>
      <Info>
        <Prices>
          <Price>
            <p>32cm</p>
            <h4>{product.prices[0].toFixed(2)}zł</h4>
          </Price>
          <Price>
            <p>40cm</p>
            <h4>{product.prices[1].toFixed(2)}zł</h4>
          </Price>
          <Price>
            <p>50cm</p>
            <h4>{product.prices[2].toFixed(2)}zł</h4>
          </Price>
        </Prices>
        <CustomizeLink to={`/produkt/${product.id}`}>
          <CustomizeIcon />
        </CustomizeLink>
      </Info>
    </ProductContainer>
  );
};

export default Product;

const ProductContainer = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  box-shadow: 1px 2px 3px ${(props) => props.theme.dark};
  border-radius: 0.5rem;
  > img {
    width: 280px;
    padding: 1rem;
  }
  > h3 {
    margin-top: 1rem;
    text-align: center;
    text-transform: capitalize;
    background: ${(props) => props.theme.dark};
    color: ${(props) => props.theme.primary};
  }
`;
const Info = styled.div`
  display: flex;
`;
const Prices = styled.div`
  display: flex;
`;
const Price = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  > h4 {
    font-weight: 300;
  }
  padding: 0.5rem;
`;
const CustomizeLink = styled(Link)`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const CustomizeIcon = styled(BiCustomize)`
  font-size: 2rem;
  color: ${(props) => props.theme.primary};
`;
