import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';

import { ReactComponent as MenuIcon } from '../../assets/icons/menu.svg';

const StyledMenu = styled.section`
  color: #000;
  display: flex;
  flex-direction: column;
  width: 200px;
  height: 100%;
  position: absolute;
  right: 0;
  top: 0;
  background: rgba(0, 0, 0, 0.6);
  padding: 30px 20px;
  box-sizing: border-box;
  > a {
    display: block;
    padding: 5px 10px;
    text-align: left;
    color: #fff;
    width: 100%;
    font-size: 20px;
    font-weight: 500;
    text-decoration: none;
    border: 0;
  }
  svg {
    width: 25px;
    height: auto;
    filter: brightness(0) invert(1); // to white color
  }
  button {
    background: transparent;
    border: 0;
    cursor: pointer;
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto 30px;
  }
`;

const Menu = ({ menuVisible, setMenuVisible }) => {
  return menuVisible ? (
    <motion.div
      initial={{
        opacity: 0
      }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      exit={{ opacity: 0 }}
    >
      <StyledMenu>
        <button onClick={() => setMenuVisible(false)}>
          <MenuIcon />
        </button>
        <NavLink to="/">Main</NavLink>
        <NavLink to="/architecture">Architecture</NavLink>
        <NavLink to="/software">Software Development</NavLink>
      </StyledMenu>
    </motion.div>
  ) : null;
};

export default Menu;
