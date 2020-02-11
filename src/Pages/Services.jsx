import React from 'react';

import ServicesWrap from '../components/Services';
import Service from '../components/Services/Service';
import { ReactComponent as IconA } from '../assets/icons/a.svg';
import { ReactComponent as IconLambda } from '../assets/icons/lambda.svg';
import { ReactComponent as IconData } from '../assets/icons/data.svg';

const Services = () => {
  return (
    <ServicesWrap>
      <>
        <Service
          icon={<IconA />}
          text="Architecture"
          link="/architecture"
          border={true}
        />
        <Service
          icon={<IconLambda />}
          text="Software Development"
          link="/software"
          border={true}
        />
        <Service
          icon={<IconData />}
          text="Data science"
          disabled={true}
        />
      </>
    </ServicesWrap>
  );
};

export default Services;
