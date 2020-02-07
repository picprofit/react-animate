import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

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
      <StyledLink to="/services">
        <img src="/assets/icons/x.png" alt="X" />
        <StyledText>Da Guo</StyledText>
      </StyledLink>
    </StyledIndex>
  );
};

export default Home;
