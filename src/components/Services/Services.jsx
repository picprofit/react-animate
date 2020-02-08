import React from 'react';
import styled from 'styled-components';

const StyledServices = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  width: 1000px;
  max-width: 100%;
  & > a:last-child > div > div:last-child {
    display: none;
  }
`;

const Services = ({ children }) => {
  return <StyledServices>{children}</StyledServices>;
};

export default Services;
