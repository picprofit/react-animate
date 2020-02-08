import { NavLink } from 'react-router-dom';
import { Frame } from 'framer';
import React from 'react';
import styled from 'styled-components';
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

// Variants for animating each letter
const letterVariants = {
  before: {
    opacity: 0,
    y: 20,
    transition: {
      type: 'spring',
      damping: 16,
      stiffness: 200
    }
  },
  after: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      damping: 16,
      stiffness: 200
    }
  }
};

// Add staggering effect to the children of the container
const containerVariants = {
  before: {},
  after: { transition: { staggerChildren: 0.06 } }
};

const Service = ({ icon, text, subText = '', link }) => {
  if(typeof text === 'undefined') {
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
      >
        {icon}
        <StyledText
          center={'y'}
          height={26}
          width={'100%'}
          background={''}
          variants={containerVariants}
          initial={'before'}
          animate={'after'}
        >
          {textString.map((letter, index) => (
            <Frame
              key={index}
              width={'auto'} // Set the width to the width of the letter
              height={26} // Set the height to the height of the text
              background={''}
              style={{ position: 'relative', minWidth: '10px' }} // Position elements
              variants={letterVariants}
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
