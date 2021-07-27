import React from 'react';
import styled from 'styled-components';

const Home = () => {
  return (
    <HomeContainer>
      <h1>Home</h1>
    </HomeContainer>
  );
};

export default Home;

const HomeContainer = styled.div`
  margin-top: 4rem;
  color: ${(props) => props.theme.dark};
`;
