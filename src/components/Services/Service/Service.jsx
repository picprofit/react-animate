import { NavLink } from 'react-router-dom';
import React, { useState } from 'react';
import styled from 'styled-components';
import { Frame } from 'framer';
import { motion } from 'framer-motion';

import { upcomingText } from '../../../config';

const StyledBorder = styled(motion.div)`
  display: block;
  height: 270px;
  width: 1px;
  background: #fff;
  position: absolute;
  top: -10px;
  right: 0;
  z-index: 30;
  @media (max-width: 768px) {
    display: none;
  }
`;

const StyledService = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 333px;
  max-width: 100%;
  margin: 0;
  box-sizing: border-box;
  ${props => props.css.length > 0 ? props.css : ""};
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
  opacity: ${props => (props.ishover ? 1 : 0)};
`;

const StyledSubText = styled.div`
  color: #848484;
  font-weight: 700;
  text-transform: uppercase;
  font-size: 60px;
  position: absolute;
  transition: all 0.8s;
  transition-delay: 0.3s;
  opacity: ${props => (props.ishover ? 1 : 0)};
`;

const StyledBackground = styled.div`
  position: absolute;
  z-index: 12;
  transition: all 0.8s ease-in;
  background: ${props => (props.ishover ? 'rgba(0,0,0,0.2)' : '#000')};
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  @media (min-width: 768px) {
    -webkit-transform: skew(-25deg);
    -moz-transform: skew(-25deg);
    -o-transform: skew(-25deg);
  }
`;

const Service = ({
  icon,
  text,
  link = '',
  disabled = false,
  border = false,
  background = false,
  css = ''
}) => {
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
        css={css}
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
            <span key={`${letter}${index}${textString.length}`}>{letter}</span>
          ))}
        </StyledText>

        {disabled && (
          <StyledSubText ishover={isHover ? 1 : 0}>
            {upcomingText}
          </StyledSubText>
        )}
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
        {background && <StyledBackground ishover={isHover ? 1 : 0} />}
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
