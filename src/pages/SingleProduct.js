import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { selectProduct } from '../redux/shopSlice';
import productImg from '../assets/pizza.svg';

const SingleProduct = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const product = useSelector((state) => selectProduct(state, parseInt(id)));

  return (
    <SingleProductContainer>
      <LeftColumn>
        <img src={productImg} alt='' />
        <Sizes>
          <Option>
            <p>32cm</p>
            <h4>{product.prices[0]}</h4>
          </Option>
          <Option>
            <p>40cm</p>
            <h4>{product.prices[1]}</h4>
          </Option>
          <Option>
            <p>50cm</p>
            <h4>{product.prices[2]}</h4>
          </Option>
        </Sizes>
      </LeftColumn>
      <RightColumn>
        <h2>{product.name}</h2>
        <DoughThickness>
          <Option>
            <p>Cienkie</p>
            <h4>+0,00zł</h4>
          </Option>
          <Option>
            <p>Klasyczne</p>
            <h4>+0,00zł</h4>
          </Option>
          <Option>
            <p>Grube</p>
            <h4>+3,50zł</h4>
          </Option>
        </DoughThickness>
      </RightColumn>
    </SingleProductContainer>
  );
};

export default SingleProduct;

const SingleProductContainer = styled.div`
  margin: 4rem auto 0 auto;
  max-width: 1400px;
  display: flex;
`;
const LeftColumn = styled.div`
  display: flex;
  flex-direction: column;
  > img {
    width: 300px;
  }
`;
const RightColumn = styled.div``;
const Sizes = styled.div`
  display: flex;
`;
const Option = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const DoughThickness = styled.div`
  display: flex;
`;
