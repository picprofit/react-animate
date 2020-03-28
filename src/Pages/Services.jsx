import React, { useState } from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import Helmet from 'react-helmet';

import Service from '../components/Service';
import { ReactComponent as IconA } from '../assets/icons/a.svg';
import { ReactComponent as IconLambda } from '../assets/icons/lambda.svg';
import { ReactComponent as IconData } from '../assets/icons/data.svg';
import { pageWidth, servicesBgImage } from '../config';

const ServicesWrap = styled(motion.div)`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  ${pageWidth};
  & > * {
    width: 33.333%;
    min-width: 333px;
  }
  position: relative;
`;
const ServicesBg = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transition: all 1.2s ease-in;
    background-position: center center;
    opacity: ${props => (props.ishover ? 1 : 0)};
    transform: skew(-25deg);
    overflow: hidden;
  &:after {
    content: '';
    position: absolute;
    top: -10%;
    left: -10%;
    width: 120%;
    height: 120%;
    transform: skewX(25deg);
    background: #000;
    background-size: cover;
    ${servicesBgImage.length > 0 && `background-image: url('${servicesBgImage}')`};
  }
`;

const Services = () => {
  const [isHover, setHover] = useState(false);

  const serviceCss = `
  padding: 60px 0; 
  height: 230px;
  `;
  return (
    <ServicesWrap
      onHoverStart={() => {
        setHover(true);
      }}
      onHoverEnd={() => {
        setHover(false);
      }}
    >
      <>
        <Service
          icon={<IconA />}
          text="Architecture"
          link="/architecture"
          border={true}
          background={true}
          css={serviceCss}
          parentHover={isHover}
        />
        <Service
          icon={<IconLambda />}
          text="Software Development"
          link="/software"
          border={true}
          background={true}
          css={serviceCss}
          parentHover={isHover}
        />
        <Service
          icon={<IconData />}
          text="Data science"
          disabled={true}
          background={true}
          css={serviceCss}
          parentHover={isHover}
        />
      </>
      <ServicesBg ishover={isHover} />
    </ServicesWrap>
  );
};

export default Services;
