import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';

import Services from './Services';
import { ReactComponent as IconA } from '../assets/icons/a.svg';
import { ReactComponent as IconLambda } from '../assets/icons/lambda.svg';
import { ReactComponent as IconData } from '../assets/icons/data.svg';

const StyledIndex = styled.section`
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

const Home = () => {
  const [logoMoved, setLogoMoved] = useState(true);

  const StyledLogo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
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
        <StyledLogo to="/services">
          <img src="/assets/icons/x.png" alt="X" />
          <StyledText>Da Guo</StyledText>
        </StyledLogo>
      </motion.div>
      <motion.div
        initial={{
          scale: 0
        }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, delay: 1.5 }}
      >
        <Services />
      </motion.div>
    </StyledIndex>
  );
};

export default Home;
