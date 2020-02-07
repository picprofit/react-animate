import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';

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

const StyledLink = styled(NavLink)`
  text-decoration: none;
`;

const Home = () => {
  return (
    <StyledIndex>
      <motion.div
        initial={{
          scale: 0
        }}
        animate={{ scale: 1 }}
        transition={{ duration: 1 }}
      >
        <StyledLink to="/services">
          <img src="/assets/icons/x.png" alt="X" />
          <StyledText>Da Guo</StyledText>
        </StyledLink>
      </motion.div>
    </StyledIndex>
  );
};

export default Home;
