import React from 'react';
import styled from 'styled-components';

const Btn = ({ isDisabled, children, ...rest }) => {
  return (
    <StyledButton disabled={isDisabled} isDisabled={isDisabled} {...rest}>
      {children}
    </StyledButton>
  );
};

export default Btn;

const StyledButton = styled.button`
  border: none;
  padding: 0.5em 3em;
  text-decoration: none;
  background: ${({ theme }) => theme.primary};
  color: ${(props) => props.theme.dark};
  font-size: 1rem;
  font-weight: 600;
  opacity: ${({ isDisabled }) => (isDisabled ? '0.2' : '1')};
  transition: all 0.2s ease-in;
  :hover {
    transition: all 0.2s ease-in;
    cursor: pointer;
    box-shadow: 0 1px 3px #ffffff80;
  }
`;
