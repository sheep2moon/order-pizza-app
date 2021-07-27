import React from 'react';
import styled from 'styled-components';

const Error = () => {
  return (
    <ErrorContainer>
      <h2>Wystąpił błąd.</h2>
      <p>Spróbuj ponownie później.</p>
    </ErrorContainer>
  );
};

export default Error;

const ErrorContainer = styled.div`
  margin-top: 12rem;
  width: 100%;
  display: flex;
  justify-content: center;
`;
