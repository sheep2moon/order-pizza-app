import React from 'react';
import styled from 'styled-components';
import TextInput from '../components/TextInput';

const Order = () => {
  return (
    <OrderContainer>
      <h1>Podaj dane do zamówienia</h1>
      <StyledForm>
        <StyledLabel>Imie</StyledLabel>
        <TextInput />
        <StyledLabel>Nazwisko</StyledLabel>
        <TextInput />
        <StyledLabel>Adres 1</StyledLabel>
        <TextInput big='true' />
        <StyledLabel>Miasto</StyledLabel>
        <TextInput />
        <StyledLabel>Kod Pocztowy</StyledLabel>
        <TextInput />
        <StyledLabel>Telefon</StyledLabel>
        <TextInput />
        <OrderBtn>Zamów</OrderBtn>
      </StyledForm>
    </OrderContainer>
  );
};

export default Order;

const OrderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 4rem;
  min-height: calc(100vh - 4rem);
  background: #fff;
  color: ${({ theme }) => theme.dark};
  > h1 {
    text-align: center;
  }
`;
const StyledForm = styled.form`
  width: 100%;
  max-width: 500px;
  display: flex;
  flex-direction: column;
  box-shadow: ${({ theme }) => `1px 2px 4px ${theme.dark}`};
  margin: 1rem;
  padding: 1rem;
`;
const StyledLabel = styled.label`
  font-size: 1.1rem;
  color: ${({ theme }) => theme.dark};
`;
const OrderBtn = styled.button`
  padding: 0.5rem 5rem;
  background: ${({ theme }) => theme.dark};
  color: ${({ theme }) => theme.primary};
  font-weight: 700;
  font-size: 1.2rem;
  max-width: 300px;
  margin: 1rem auto;
  transition: all 0.2s ease-out;
  cursor: pointer;
  :hover {
    transition: all 0.2s ease-out;
    color: ${({ theme }) => theme.secondary};
  }
`;
