import React from 'react';
import styled from 'styled-components';
import BtnLink from '../components/BtnLink';
import { RiArrowRightSFill } from 'react-icons/ri';
import HomeBg from '../assets/homebg.jpg';

const steps = [
  'Dobierz dowolną liczbe dodatkowych składników',
  'Zmień rozmiar oraz grubość ciasta',
  'Do każdej pizzy sos gratis',
  'Darmowa dostawa zamówienia od kwoty 50zł',
];

const Home = () => {
  return (
    <HomeContainer bgImg={HomeBg}>
      <HeroInfo>
        <h1>Zamów pizze online</h1>
        {steps.map((step, index) => (
          <InfoStep key={index}>
            <p>
              <StepArrow />
              {step}
            </p>
          </InfoStep>
        ))}
        <BtnWrap>
          <BtnLink to='/oferta'>Zobacz Oferte</BtnLink>
        </BtnWrap>
      </HeroInfo>
    </HomeContainer>
  );
};

export default Home;

const HomeContainer = styled.div`
  margin-top: 4rem;
  color: ${(props) => props.theme.dark};
  min-height: calc(100vh - 4rem);
  display: flex;
  background-image: ${({ bgImg }) => `url(${bgImg})`};
  @media screen and (max-width: 1000px) {
    font-size: 0.8rem;
  }
`;

const HeroInfo = styled.section`
  margin: auto auto;
  padding: 1em;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background: #fff;
  box-shadow: 4px 8px 12px #00000070;
  position: relative;
  > h1 {
    width: 100%;
    font-size: 2.4em;
    text-align: center;
    padding: 0 0.5em;
    position: relative;
    margin-bottom: 2rem;
    ::after {
      content: '';
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      height: 1rem;
      background: ${({ theme }) => theme.primary};
      transform: rotate(-1deg);
      box-shadow: 0 4px 2px #00000060;
    }
  }
`;
const InfoStep = styled.div`
  position: relative;
  z-index: 1;
  margin: 0.25em;
  color: ${({ theme }) => theme.dark};
  > p {
    display: flex;
    align-items: center;
    padding: 0.5rem;
    font-size: 1.6em;
    position: relative;
  }
`;

const StepArrow = styled(RiArrowRightSFill)`
  font-size: 1.6em;
  color: ${({ theme }) => theme.primary};
`;

const BtnWrap = styled.div`
  margin: 0 auto;
`;
