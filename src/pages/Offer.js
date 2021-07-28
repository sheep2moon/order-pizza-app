import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import Product from '../components/Offer/Product';
import { fetchItems } from '../redux/shopSlice';
import Error from '../components/Error';

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
      {apiStatus === 'loading' ? (
        <Loading>loading</Loading>
      ) : apiStatus === 'failed' ? (
        <Error />
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
  margin: 5rem auto 1rem auto;
  width: 100%;
  max-width: 1200px;
  background: #fff;
  min-height: calc(100vh - 6rem);
`;
const ItemsContainer = styled.div`
  padding: 2rem;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  grid-row-gap: 1rem;
`;
