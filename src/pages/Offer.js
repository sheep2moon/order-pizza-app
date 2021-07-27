import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import Product from '../components/Offer/Product';
import { fetchItems } from '../redux/shopSlice';

const Offer = () => {
  const dispatch = useDispatch();
  const apiStatus = useSelector((state) => state.shop.status);
  const items = useSelector((state) => state.shop.items);

  useEffect(() => {
    if (apiStatus === 'idle') {
      dispatch(fetchItems());
    }
    console.log(apiStatus);
  }, [apiStatus, dispatch]);

  return (
    <OfferContainer>
      <h1>shop</h1>
      {apiStatus === 'loading' ? (
        <Loading>loading</Loading>
      ) : (
        <ItemsContainer>
          {items.map((item) => (
            <Product key={item.id} product={item} />
          ))}
        </ItemsContainer>
      )}
    </OfferContainer>
  );
};

export default Offer;

const Loading = styled.div``;
const OfferContainer = styled.div`
  margin: 4rem auto 0 auto;
  width: 100%;
  max-width: 1200px;
`;
const ItemsContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-row-gap: 1rem;
`;
const ProductContainer = styled.div``;
