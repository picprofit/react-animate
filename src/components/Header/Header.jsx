import React from 'react';
import styled from 'styled-components';

const StyledHeader = styled.header`
display: flex;
justify-content: flex-end;
align-items: center;
padding: 0 50px;
height: 100px;
& img {
width: 25px;
height: auto;
}
`;

const Header = () => {
  return (
    <StyledHeader>
      <img src="/assets/icons/square.png" alt="menu" />
    </StyledHeader>
  );
};

export default Header;
