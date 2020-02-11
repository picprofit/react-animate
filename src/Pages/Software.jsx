import React from 'react';
import styled from 'styled-components';

import Service from '../components/Service';
import Project from '../components/Project';
import { ReactComponent as IconLambda } from '../assets/icons/lambda.svg';
import { projects, pageWidth } from '../config';

const ServicesWrap = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  ${pageWidth};
`;

const StyledProjectsWrap = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  @media (max-width: 768px) {
    justify-content: center;
  }
  ${pageWidth};
  margin: 30px auto;
  @media (max-width: 768px) {
    margin-top: 20px;
  }
`;

const Software = () => {
  return (
    <>
      <ServicesWrap>
        <Service icon={<IconLambda />} text="Software Development" />
      </ServicesWrap>
      <StyledProjectsWrap>
        {projects.map(item => {
          const {
            title,
            image,
            tags,
            shortDescription,
            fullDescription
          } = item;
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
    </>
  );
};

export default Software;
