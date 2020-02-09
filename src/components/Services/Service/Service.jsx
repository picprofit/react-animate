import { NavLink } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Frame } from 'framer';
import { motion } from 'framer-motion';

const StyledBorder = styled(motion.div)`
  display: block;
  height: 250px;
  width: 1px;
  background: #000;
  position: absolute;
  top: -60px;
  right: 0;
  & > a:last-child:after {
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
`;

const StyledSubText = styled.div`
  color: #848484;
  font-weight: 700;
  text-transform: uppercase;
  font-size: 60px;
  position: absolute;
  top: 20px;
  z-index: 5;
`;

const Service = ({ icon, text, subText = '', link }) => {
  const [isHover, setHover] = useState(false);

  useEffect(() => {
    if(isHover) {
      setTimeout(() => {
        setHover(false);
      }, 700);
    }
  }, [isHover]);

  if (typeof text === 'undefined') {
    return null;
  }

  const textString = Array.from(text);
  return (
    <NavLink to={link}>
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
          // setHover(false);
        }}
      >
        {icon}
        <StyledText
          center={'y'}
          height={26}
          width={'100%'}
          background={''}
          initial={{
            opacity: 0
          }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          {textString.map((letter, index) => (
            <Frame
              key={index}
              width={'auto'} // Set the width to the width of the letter
              height={26} // Set the height to the height of the text
              background={''}
              style={{ position: 'relative', minWidth: '10px' }} // Position elements
              animate={{
                y: isHover ? -10 : 0,
                transition: {
                  type: 'spring',
                  damping: 16,
                  stiffness: 200,
                  delay: 0.03 * index
                }
              }}
            >
              {letter}
            </Frame>
          ))}
        </StyledText>

        {subText.length > 0 && <StyledSubText>{subText}</StyledSubText>}
        <StyledBorder
          initial={{
            opacity: 0,
            rotate: -180
          }}
          animate={{ opacity: 1, rotate: 25 }}
          transition={{ duration: 1 }}
          transformTemplate={`rotate(25deg)`}
        />
      </StyledService>
    </NavLink>
  );
};

export default Service;
