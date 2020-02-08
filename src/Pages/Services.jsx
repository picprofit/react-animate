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
        <Service icon={<IconA />} text="Architecture" link="/architecture" />
        <Service icon={<IconLambda />} text="Software Development" link="/" />
        <Service
          icon={<IconData />}
          text="Data science"
          subText="Upcoming"
          link="/"
        />
      </>
    </ServicesWrap>
  );
};

export default Services;
