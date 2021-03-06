import { NavLink } from 'react-router-dom';
import React, { useState } from 'react';
import styled from 'styled-components';
import { Frame } from 'framer';
import { motion } from 'framer-motion';

import { upcomingText } from '../../config';

const StyledBorder = styled(motion.div)`
  display: block;
  height: 250px;
  width: 1px;
  background: #58595b;
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
  min-width: 333px;
  max-width: 100%;
  @media (max-width: 768px) {
    width: 100%;
  }
  margin: 0;
  box-sizing: border-box;
  ${props => (props.css.length > 0 ? props.css : '')};
  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transition: all 1s ease-in;
    background: ${props => (props.ishover ? '#d3d3d3' : 'transparent')};
    z-index: 11;
    @media (min-width: 768px) {
      -webkit-transform: skew(-25deg);
      -moz-transform: skew(-25deg);
      -o-transform: skew(-25deg);
    }
  }
`;

const StyledIcon = styled(motion.div)`
  z-index: 15;
  & svg {
    height: 100px;
    position: relative;
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
  @media (max-width: 768px) {
    opacity: 1 !important;
  }
  > span {
    min-width: 5px;
  }
`;

const StyledSubText = styled.div`
  color: #848484;
  font-weight: 700;
  text-transform: uppercase;
  font-size: 60px;
  position: absolute;
  transition: all 1s;
  transition-delay: 0.3s;
  z-index: 12;
  opacity: ${props => (props.ishover ? 1 : 0)};
`;

const StyledBackground = styled(motion.div)`
  position: absolute;
  z-index: 12;
  transition: all 0.8s ease-in;
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
  parentHover = false,
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
        onHoverStart={() => {
          setHover(true);
        }}
        onHoverEnd={() => {
          setHover(false);
        }}
        css={css}
        ishover={isHover}
      >
        {(isHover || !parentHover) && (
          <StyledIcon
            initial={{
              scale: parentHover ? 0.3 : 1
            }}
            animate={{
              scale: isHover ? 1.2 : 1
            }}
            exit={{
              scale: 0.3
            }}
            transition={{ duration: 1.2 }}
          >
            {icon}
          </StyledIcon>
        )}
        <StyledText
          center={'y'}
          height={26}
          width={'100%'}
          background={''}
          ishover={isHover ? 1 : 0}
          initial={{
            opacity: 0
          }}
          animate={{
            opacity: isHover ? 1 : 0
          }}
          exit={{
            opacity: 0
          }}
          transition={{ duration: 0.2 }}
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
        {border && !parentHover && (
          <StyledBorder transformTemplate={`rotate(25deg)`} />
        )}
        {background && (
          <StyledBackground
            ishover={parentHover && !isHover ? 1 : 0}
            // initial={{
            //   background: !isHover ? 'transparent' : '#000'
            // }}
            // animate={{
            //   background: parentHover && !isHover ? '#000' : 'transparent'
            // }}
            // exit={{
            //   background: 'transparent'
            // }}
            transition={{ duration: 1 }}
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
