import React from 'react';
import styled from 'styled-components';

const TextInput = ({ big, ...rest }) => {
  return <StyledInput type='text' big={big ? 1 : 0} {...rest} />;
};

export default TextInput;

const StyledInput = styled.input`
  padding: 0.5rem 0.25rem;
  font-size: 1.2rem;
  outline: none;
  max-width: ${({ big }) => (big ? '500px' : '300px')};
  color: ${({ theme }) => theme.dark};
  border: ${({ theme }) => `1px solid ${theme.primary}`};
`;
