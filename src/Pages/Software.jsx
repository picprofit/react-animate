import React, { useEffect, useState } from 'react';
import { Document, Page } from 'react-pdf';
import styled from 'styled-components';
import { motion } from 'framer-motion';

import { ReactComponent as IconA, ReactComponent as IconArchitecture } from '../assets/icons/a.svg';
import ServicesWrap from '../components/Services/Services';
import Service from '../components/Services/Service';
import { ReactComponent as IconLambda } from '../assets/icons/lambda.svg';
import { ReactComponent as IconData } from '../assets/icons/data.svg';


const Software = () => {

  return (
    <>
      <ServicesWrap>
        <>
          <Service icon={<IconLambda />} text="Software Development" />
        </>
      </ServicesWrap>
    </>
  );
};

export default Software;
