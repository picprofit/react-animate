import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';

import { ReactComponent as MenuIcon } from '../../assets/icons/menu.svg';
import { ReactComponent as LogoIcon } from '../../assets/icons/logo.svg';

const StyledMenu = styled(motion.div)`
  color: #000;
  display: flex;
  flex-direction: column;
  top: 0;
  right: 0;
  width: 0;
  position: absolute;
  z-index: 50;
  overflow: hidden;
  height: 100%;
  background: rgba(0, 0, 0, 0.9);
  padding: ${props => (props.isVisible ? '30px 20px' : '30px 0')};
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
    white-space: nowrap;
  }
  svg {
    width: 25px;
    height: auto;
    filter: brightness(0) invert(1); // to white color
    margin: 0;
  }
  button {
    width: 40px;
    height: 40px;
    margin: 0 auto 30px;
    background: transparent;
    border: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const Menu = ({ menuVisible, setMenuVisible }) => {
  return (
    <StyledMenu
      initial={{
        width: '0'
      }}
      animate={{
        width: menuVisible ? '200px' : 0
      }}
      transition={{ duration: 1 }}
      exit={{ width: '0' }}
      isVisible={menuVisible}
    >
      <button onClick={() => setMenuVisible(false)}>
        <LogoIcon />
      </button>
      <NavLink to="/">Main</NavLink>
      <NavLink to="/architecture">Architecture</NavLink>
      <NavLink to="/software">Software Development</NavLink>
    </StyledMenu>
  );
};

export default Menu;
