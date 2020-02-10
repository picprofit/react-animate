import React from 'react';
import styled from 'styled-components';
import parse from 'html-react-parser';

const StyledProject = styled.div`
  background: #fff;
  color: #58595b;
  border: 1px solid #eee;
  width: 32%;
  min-width: 300px;
  height: 200px;
  padding: 15px 20px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  box-sizing: border-box;
  transition: all 0.2s;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  &:hover {
    box-shadow: 10px 10px 15px -10px rgba(88, 89, 91, 0.45);
  }
`;

const StyledTitle = styled.h3`
  color: #000;
  font-size: 22px;
  font-weight: 500;
`;

const StyledDescription = styled.div`
  color: #000;
  font-size: 18px;
`;

const Project = ({ title, description }) => {
  return (
    <StyledProject>
      <StyledTitle>{title}</StyledTitle>
      <StyledDescription>{parse(description)}</StyledDescription>
    </StyledProject>
  );
};

export default Project;
