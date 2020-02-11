import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import { ReactComponent as IconLambda } from '../../assets/icons/lambda.svg';

const StyledHeader = styled.header`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 0 50px;
  height: 100px;
  & svg {
    width: 25px;
    height: auto;
    filter: brightness(0) invert(1); // to white color
  }
`;

const Header = ({ displayLogo }) => {
  return (
    <StyledHeader>
      <NavLink to={'/'}>
        <IconLambda />
      </NavLink>
    </StyledHeader>
  );
};

export default Header;
