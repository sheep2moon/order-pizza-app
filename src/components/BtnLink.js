import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const BtnLink = ({ children, ...rest }) => {
  return <BtnWrap {...rest}>{children}</BtnWrap>;
};

export default BtnLink;

const BtnWrap = styled(Link)`
  padding: 0.5rem 1rem;
  text-decoration: none;
  font-size: 1.2rem;
  font-weight: bold;
  margin: 1rem 0;
  color: ${(props) => props.theme.primary};
  background: ${(props) => props.theme.dark};
  transition: all 0.2s ease-in;
  :hover {
    box-shadow: 0 2px 3px ${(props) => props.theme.secondary};
    transform: translateY(-2px);
    transition: all 0.2s ease-in;
  }
`;
