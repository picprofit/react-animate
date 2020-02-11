import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

import ServicesWrap from '../components/Services/Services';
import Service from '../components/Services/Service';
import Project from '../components/Project';
import { ReactComponent as IconLambda } from '../assets/icons/lambda.svg';
import { projects } from '../config';

const StyledWrap = styled.section`
  margin-top: 30px;
`;

const StyledProjectsWrap = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  @media (max-width: 768px) {
    justify-content: center;
  }
  width: 1000px;
  max-width: 100vw;
  margin: 100px auto 30px;
  @media (max-width: 768px) {
    margin-top: 20px;
  }
`;

const Software = () => {
  return (
    <StyledWrap>
      <ServicesWrap>
        <>
          <Service icon={<IconLambda />} text="Software Development" />
        </>
      </ServicesWrap>
      <StyledProjectsWrap>
        {projects.map(item => {
          const { title, image, tags, shortDescription, fullDescription} = item;
          return (
            <Project
              key={title}
              title={title}
              image={image}
              tags={tags}
              description={shortDescription}
              fullDescription={fullDescription}
            />
          );
        })}
      </StyledProjectsWrap>
    </StyledWrap>
  );
};

export default Software;
