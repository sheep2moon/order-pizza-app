import React, { useState } from 'react';
import styled from 'styled-components';
import { FiShoppingBag } from 'react-icons/fi';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';

const NavCart = () => {
  const cart = useSelector((state) => state.shop.cart);
  const [cartTotal, setCartTotal] = useState(0);

  useEffect(() => {
    if (cart) {
      const total = cart.reduce((sum, item) => {
        return sum + item.price;
      }, 0);
      setCartTotal(total);
    }
  }, [cart]);

  return (
    <CartWrap>
      <p>{cartTotal.toFixed(2)}zł</p>
      <CartIcon />
      {cart && <span>{cart.length}</span>}
    </CartWrap>
  );
};

export default NavCart;

const CartWrap = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  > p {
    color: #fff;
    font-size: 1.2rem;
    margin-right: 1rem;
  }
  > span {
    width: 1.2rem;
    height: 1.2rem;
    position: absolute;
    color: #fff;
    right: -5px;
    bottom: -10px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    background: ${(props) => props.theme.secondary};
  }
`;

const CartIcon = styled(FiShoppingBag)`
  font-size: 1.8rem;
  color: ${(props) => props.theme.primary};
`;
