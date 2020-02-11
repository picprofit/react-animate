import { NavLink } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Frame } from 'framer';
import { motion } from 'framer-motion';

import { upcomingText } from '../../../config';

const StyledBorder = styled(motion.div)`
  display: block;
  height: 250px;
  width: 1px;
  background: #000;
  position: absolute;
  top: -60px;
  right: 0;
  @media (max-width: 768px) {
    display: none;
  }
`;

const StyledService = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 300px;
  max-width: 100%;
  margin: 50px 0;
  & svg {
    height: 110px;
    position: relative;
    z-index: 15;
  }
`;

const StyledText = styled(Frame)`
  color: #fff;
  font-weight: 700;
  text-transform: uppercase;
  font-size: 22px;
  letter-spacing: -0.04em;
  display: flex !important;
  justify-content: center;
  position: absolute;
  top: 40px;
  z-index: 20;
  transition: all 0.8s;
  opacity: ${props => props.ishover ? 1 : 0};
`;

const StyledSubText = styled.div`
  color: #848484;
  font-weight: 700;
  text-transform: uppercase;
  font-size: 60px;
  position: absolute;
  top: 20px;
  transition: all 0.8s;
  transition-delay: 0.3s;
  opacity: ${props => props.ishover ? 1 : 0};
`;

const Service = ({ icon, text, link = '', disabled = false, border = false }) => {
  const textString = Array.from(text);

  const ServiceResult = () => {
    const [isHover, setHover] = useState(false);

    if (typeof text === 'undefined') {
      return null;
    }

    return (
      <StyledService
        initial={{
          scale: 0
        }}
        animate={{ scale: 1 }}
        transition={{ duration: 1 }}
        onHoverStart={() => {
          setHover(true);
        }}
        onHoverEnd={() => {
          setHover(false);
        }}
      >
        {icon}
        <StyledText
          center={'y'}
          height={26}
          width={'100%'}
          background={''}
          ishover={isHover ? 1 : 0}
        >
          {textString.map((letter, index) => (
            <span key={`${letter}${index}`}>
              {letter}
            </span>
          ))}
        </StyledText>

        {disabled && <StyledSubText ishover={isHover ? 1 : 0}>{upcomingText}</StyledSubText>}
        {border && (
          <StyledBorder
            initial={{
              opacity: 0,
              rotate: -180
            }}
            animate={{ opacity: 1, rotate: 25 }}
            transition={{ duration: 1 }}
            transformTemplate={`rotate(25deg)`}
          />
        )}
      </StyledService>
    );
  };

  return link.length > 0 ? (
    <NavLink to={link}>
      <ServiceResult />
    </NavLink>
  ) : (
    <ServiceResult />
  );
};

export default Service;
