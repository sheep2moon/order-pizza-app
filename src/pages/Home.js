import React from 'react';
import styled from 'styled-components';

const Home = () => {
  return (
    <HomeContainer>
      <Hero>
        <HeroInfo>
          <h3>Masz ochote na pizze?</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
            ipsum laboriosam unde voluptatem ex natus!
          </p>
        </HeroInfo>
      </Hero>
    </HomeContainer>
  );
};

export default Home;

const HomeContainer = styled.div`
  margin: 4rem auto 4rem auto;
  color: ${(props) => props.theme.dark};
  max-width: 1400px;
`;
const Hero = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;
const HeroInfo = styled.div`
  display: flex;
  flex-direction: column;
`;
