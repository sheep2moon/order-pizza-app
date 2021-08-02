import React from 'react';
import styled from 'styled-components';
import heroImg from '../assets/heropizza.png';
import BtnLink from '../components/BtnLink';

const Home = () => {
  return (
    <HomeContainer>
      <Hero>
        <HeroInfo>
          <h1>Pizza Online</h1>
          <p>
            Zamów online z dostawą do domu, zajmie Ci to zaledwie kilka minut.
            Dobierz dowolne składniki i stwórz swoją ulubioną pizze!
          </p>
          <BtnLink to='/oferta'>Zobacz Oferte</BtnLink>
        </HeroInfo>
        <HeroImgContainer>
          <img src={heroImg} alt='' />
        </HeroImgContainer>
      </Hero>
    </HomeContainer>
  );
};

export default Home;

const HomeContainer = styled.div`
  margin: 4rem auto 4rem auto;
  color: ${(props) => props.theme.dark};
  max-width: 1400px;
  min-height: calc(100vh - 4rem);
`;
const Hero = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  @media screen and (min-width: 1000px) {
    flex-direction: row;
  }
`;
const HeroInfo = styled.div`
  display: flex;
  flex-direction: column;
  background: ${(props) => props.theme.primary};
  align-items: center;
  margin: 2rem 1rem 1rem 1rem;
  border-radius: 1rem;
  > h1 {
    font-size: 2rem;
    color: ${(props) => props.theme.dark};
    border-bottom: 1px solid ${(props) => props.theme.dark};
  }
  > p {
    font-size: 1.2rem;
    font-weight: 600;
    padding: 1rem;
    max-width: 600px;
  }
`;

const HeroImgContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  > img {
    padding: 1rem;
    width: 100%;
    max-width: 700px;
  }
`;
