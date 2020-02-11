import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

import { ReactComponent as MenuIcon } from '../../assets/icons/menu.svg';
import Menu from '../Menu';

const StyledHeader = styled.header`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 0 30px;
  height: 100px;
  & svg {
    width: 25px;
    height: auto;
    filter: brightness(0) invert(1); // to white color
  }
  button {
    background: transparent;
    border: 0;
    cursor: pointer;
  }
`;

const Header = () => {
  const [menuVisible, setMenuVisible] = useState(false);

  const _onMouseMove = e => {
    console.log({ x: e.screenX, y: e.screenY });
  };

  return (
    <>
      <StyledHeader>
        <motion.div
          initial={{
            opacity: 0
          }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          exit={{ opacity: 0 }}
        >
          {!menuVisible && (
            <button onClick={() => setMenuVisible(true)}>
              <MenuIcon />
            </button>
          )}
        </motion.div>
      </StyledHeader>
      <Menu menuVisible={menuVisible} setMenuVisible={setMenuVisible} />
    </>
  );
};

export default Header;
