import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';

const StyledIndex = styled.section`
  min-height: 80vh;
  width: 100%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  & img {
    width: 100px;
  }
`;

const StyledText = styled.h1`
  color: #fff;
  font-weight: 300;
  text-align: center;
  text-decoration: none;
`;

const Preloader = ({children}) => {
  const [logoMoved, setLogoMoved] = useState(true);

  const StyledLogo = styled(NavLink)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    & img {
      width: ${logoMoved ? '100px' : '50px'};
    }
  `;

  useEffect(() => {
    if (logoMoved) {
      setTimeout(() => {
        setLogoMoved(false);
      }, 1500);
    }
  }, []);

  const spring = {
    type: 'spring',
    damping: 100,
    stiffness: 40
  };

  return (
    <StyledIndex>
      <motion.div
        initial={{
          scale: 0.2
        }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5 }}
        style={
          logoMoved
            ? {}
            : {
              position: 'absolute',
              top: '30px',
              left: '30px'
            }
        }
        positionTransition={spring}
      >
        <StyledLogo to="/">
          <img src="/assets/icons/x.png" alt="X" />
          <StyledText>Da Guo</StyledText>
        </StyledLogo>
      </motion.div>
      <motion.div
        initial={{
          scale: 0,
          height: 0,
        }}
        animate={{ scale: 1, height: 'auto' }}
        transition={{ duration: 1.5, delay: 1.5 }}
      >
        {children}
      </motion.div>
    </StyledIndex>
  );
};

export default Preloader;
