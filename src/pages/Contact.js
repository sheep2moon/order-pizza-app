import React from 'react';
import { FiInstagram } from 'react-icons/fi';
import { FiFacebook } from 'react-icons/fi';
import { FiTwitter } from 'react-icons/fi';
import styled from 'styled-components';

const Contact = () => {
  return (
    <ContactContainer>
      <h1>Skontaktuj się z nami</h1>
      <ContactInfo>
        <h2>Adres naszego lokalu:</h2>
        <p>
          ul. Młyńska 20 <br /> 20-130 Lublin
        </p>
        <h2>Dane kontakowe:</h2>
        <p>tel: 389 893 389</p>
        <p>e-mail: pizzadelivery@mail.com</p>
        <h2>Owiedź nasze media społecznościowe</h2>
        <SocialMedia>
          <a href='http://localhost:3000/kontakt'>
            <FiInstagram />
          </a>
          <a href='http://localhost:3000/kontakt'>
            <FiTwitter />
          </a>
          <a href='http://localhost:3000/kontakt'>
            <FiFacebook />
          </a>
        </SocialMedia>
      </ContactInfo>
    </ContactContainer>
  );
};

export default Contact;

const ContactContainer = styled.div`
  margin: 6rem auto;
  background: #fff;
  display: flex;
  flex-direction: column;
  max-width: 1400px;
  > h1 {
    text-align: center;
    width: 100%;
    background: ${({ theme }) => theme.dark};
    color: ${({ theme }) => theme.primary};
  }
`;
const ContactInfo = styled.div`
  padding: 2rem;
`;
const SocialMedia = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  > a {
    margin: 1rem;
    background: ${({ theme }) => theme.dark};
    display: flex;
    padding: 1rem;
    border-radius: 50%;
  }
  > a > svg {
    color: ${({ theme }) => theme.primary};
    font-size: 1.5rem;
  }
`;
