import React, { useState } from 'react';
import styled from 'styled-components';
import parse from 'html-react-parser';
import { motion } from 'framer-motion';

const StyledProject = styled(motion.div)`
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
  cursor: pointer;
  position: relative;
  &:hover {
    box-shadow: 10px 10px 15px -10px rgba(88, 89, 91, 0.45);
  }
`;

const pixelsToMove = 100;

const cssVisible = `
  opacity: 1;
  top: 0;
`;
const cssHidden = `
  opacity: 0;
`;

const StyledTitle = styled.h3`
  color: #000;
  font-size: 22px;
  font-weight: 500;
  position: relative;
  transition: all 1s;
  ${props =>
    props.ishover
      ? `
    top: -${pixelsToMove}px;
    position: absolute;
  ${cssHidden}
  `
      : cssVisible}
`;

const StyledDescription = styled.div`
  color: #000;
  font-size: 18px;
  position: relative;
  transition: all 0.7s;
  ${props =>
    props.ishover
      ? `
      ${cssVisible}
      position: relative;
      transform: scale(1);
      `
      : `
  ${cssHidden}
      position: absolute;
      transform: scale(0);
  `}
`;

const Project = ({ title, description }) => {
  const [isHover, setHover] = useState(false);

  return (
    <StyledProject
      onHoverStart={() => {
        setHover(true);
      }}
      onHoverEnd={() => {
        setHover(false);
      }}
    >
      <StyledTitle ishover={isHover ? 1 : 0}>{title}</StyledTitle>
      <StyledDescription ishover={isHover ? 1 : 0}>
        {parse(description)}
      </StyledDescription>
    </StyledProject>
  );
};

export default Project;
