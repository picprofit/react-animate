import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import Services from './Services';

const StyledButton = styled(NavLink)`
  background: transparent;
  border: 0;
  text-decoration: none;
  font-size: 24px;
  font-weight: 500;
  color: #000;
  text-align: center;
  display: block;
  width: 300px;
  padding: 10px 20px;
  margin: 30px auto;
`;

const Home = () => {
  return (
    <>
      <Services />
      <StyledButton to="/">See my CV</StyledButton>
    </>
  );
};

export default Home;
