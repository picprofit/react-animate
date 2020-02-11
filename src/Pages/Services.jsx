import React from 'react';

import ServicesWrap from '../components/Services';
import Service from '../components/Services/Service';
import { ReactComponent as IconA } from '../assets/icons/a.svg';
import { ReactComponent as IconLambda } from '../assets/icons/lambda.svg';
import { ReactComponent as IconData } from '../assets/icons/data.svg';

const Services = () => {
  const serviceCss = `
  padding: 60px 0; 
  height: 250px;
  `;
  return (
    <ServicesWrap>
      <>
        <Service
          icon={<IconA />}
          text="Architecture"
          link="/architecture"
          border={true}
          background={true}
          css={serviceCss}
        />
        <Service
          icon={<IconLambda />}
          text="Software Development"
          link="/software"
          border={true}
          background={true}
          css={serviceCss}
        />
        <Service
          icon={<IconData />}
          text="Data science"
          disabled={true}
          background={true}
          css={serviceCss}
        />
      </>
    </ServicesWrap>
  );
};

export default Services;
