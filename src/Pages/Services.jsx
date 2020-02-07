import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const StyledServices = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  width: 1000px;
  max-width: 100%;
  & > a {
    position: relative;
  }
  & > a:after {
    content: '';
    display: block;
    height: 250px;
    width: 1px;
    background: #000;
    position: absolute;
    top: -60px;
    right: 0;
    transform: rotate(25deg);
  }
  & > a:last-child:after {
    display: none;
  }
`;

const StyledService = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 300px;
  max-width: 100%;
  & img {
    height: 110px;
  }
`;

const StyledText = styled.div`
  color: #fff;
  font-weight: 700;
  text-transform: uppercase;
  font-size: 22px;
  position: absolute;
  top: 40px;
`;

const Service = ({ icon, text, link }) => {
  return (
    <NavLink to={link}>
      <StyledService>
        <img src={`/assets/icons/${icon}`} alt={text} />
        <StyledText>{text}</StyledText>
      </StyledService>
    </NavLink>
  );
};

const Services = () => {
  return (
    <StyledServices>
      <Service icon="a.png" text="Architecture" link="/" />
      <Service icon="a.png" text="Software Development" link="/" />
      <Service icon="a.png" text="Data science" link="/" />
    </StyledServices>
  );
};

export default Services;
