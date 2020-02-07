import React from 'react';
import styled from 'styled-components';

const StyledIndex = styled.section`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
min-height: calc(100vh - 200px);
width: 100%;
& img {
width: 100px;
}
`;

const StyledText = styled.h1`
  color: #fff;
  font-weight: 300;
`;

const Index = () => {
  return (
    <StyledIndex>
      <img src="/assets/icons/x.png" alt="X"/>
      <StyledText>
        Da Guo
      </StyledText>
    </StyledIndex>
  );
};

export default Index;
