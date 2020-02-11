import React, { useState } from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

import Service from '../components/Service';
import { ReactComponent as IconA } from '../assets/icons/a.svg';
import { ReactComponent as IconLambda } from '../assets/icons/lambda.svg';
import { ReactComponent as IconData } from '../assets/icons/data.svg';
import { pageWidth } from '../config';

const ServicesWrap = styled(motion.div)`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  ${pageWidth};
  & > * {
    width: 33.3%;
    min-width: 333px;
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
      }}>
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
    </ServicesWrap>
  );
};

export default Services;
