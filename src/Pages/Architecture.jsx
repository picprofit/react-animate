import React from 'react';

import { ReactComponent as IconA } from '../assets/icons/a.svg';
import ServicesWrap from '../components/Services';
import Service from '../components/Services/Service';


const Architecture = () => {
  return (
    <>
      <ServicesWrap>
        <Service icon={<IconA />} text="Architecture" link="/" />
      </ServicesWrap>
      
    </>
  );
};

export default Architecture;
