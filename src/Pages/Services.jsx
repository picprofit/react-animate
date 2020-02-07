import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';

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
  & img {
    height: 110px;
    position: relative;
    z-index: 15;
  }
`;

const StyledText = styled.div`
  color: #fff;
  font-weight: 700;
  text-transform: uppercase;
  font-size: 22px;
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
  return (
    <NavLink to={link}>
      <StyledService
        initial={{
          scale: 0
        }}
        animate={{ scale: 1 }}
        transition={{ duration: 1 }}
      >
        <img src={`/assets/icons/${icon}`} alt={text} />
        <StyledText>{text}</StyledText>
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

const Services = () => {
  return (
    <StyledServices>
      <Service icon="a.png" text="Architecture" link="/" />
      <Service icon="a.png" text="Software Development" link="/" />
      <Service icon="a.png" text="Data science" subText="Upcoming" link="/" />
    </StyledServices>
  );
};

export default Services;
