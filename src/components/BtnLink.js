import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const BtnLink = ({ children, ...rest }) => {
  return <BtnWrap {...rest}>{children}</BtnWrap>;
};

export default BtnLink;

const BtnWrap = styled(Link)`
  display: inline-block;
  padding: 0.5em 1em;
  text-decoration: none;
  text-align: center;
  font-size: 1.6em;
  font-weight: bold;
  margin: 1rem 1rem;
  color: ${(props) => props.theme.primary};
  background: ${(props) => props.theme.dark};
  transition: all 0.2s ease-in;
  :hover {
    box-shadow: 0 2px 3px ${(props) => props.theme.primary};
    transform: translateY(-2px);
    transition: all 0.2s ease-in;
  }
`;
