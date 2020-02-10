import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

import ServicesWrap from '../components/Services/Services';
import Service from '../components/Services/Service';
import Project from '../components/Project';
import { ReactComponent as IconLambda } from '../assets/icons/lambda.svg';

const projects = [
  {
    title: '.CANs',
    shortDescription:
      'Lorem ipsum <b>dolor sit amet</b>, consectetur <i>adipisicing elit</i>. Atque culpa, unde.',
    longDescription: `<div> Ducimus eveniet fugiat illum impedit incidunt inventore, iste iusto laboriosam, laudantium, nemo pariatur quis quod repellendus tempora tenetur veniam?</div>
    <div>Ab aperiam consequuntur corporis, eius eligendi eos error excepturi expedita fugit in molestiae porro, quia sunt. A alias delectus explicabo illum odio reiciendis soluta tempora totam vero voluptatum! Fuga, sunt.</div>
    <div>Aliquid aperiam beatae consectetur culpa cumque debitis eaque eius, enim, fugiat maiores nemo non nostrum quasi repudiandae, totam vel velit voluptatum! Corporis dolor hic laborum nam, quae veritatis voluptatem. Est?</div>
    <div>A atque eaque excepturi ipsam magni molestias nulla quos, ullam unde vitae. Alias aliquid architecto, doloremque eaque facere in ipsum laborum nam natus placeat provident quas qui sequi tempore totam!</div>
    <div>Aperiam asperiores, aut commodi consequuntur cum, earum, eos eum hic in labore libero magnam molestiae molestias quam quisquam sapiente sequi veniam voluptas. Dolore eligendi ex id iusto. Dicta, iusto, nihil?</div>`
  },
  {
    title: '_V',
    shortDescription:
      'Aliquid aperiam beatae consectetur <b>culpa cumque debitis</b> eaque eius, <em>enim, fugiat maiores nemo</em>.',
    longDescription: `<div> Ducimus eveniet fugiat illum impedit incidunt inventore, iste iusto laboriosam, laudantium, nemo pariatur quis quod repellendus tempora tenetur veniam?</div>
    <div>Ab aperiam consequuntur corporis, eius eligendi eos error excepturi expedita fugit in molestiae porro, quia sunt. A alias delectus explicabo illum odio reiciendis soluta tempora totam vero voluptatum! Fuga, sunt.</div>
    <div>Aliquid aperiam beatae consectetur culpa cumque debitis eaque eius, enim, fugiat maiores nemo non nostrum quasi repudiandae, totam vel velit voluptatum! Corporis dolor hic laborum nam, quae veritatis voluptatem. Est?</div>
    <div>A atque eaque excepturi ipsam magni molestias nulla quos, ullam unde vitae. Alias aliquid architecto, doloremque eaque facere in ipsum laborum nam natus placeat provident quas qui sequi tempore totam!</div>
    <div>Aperiam asperiores, aut commodi consequuntur cum, earum, eos eum hic in labore libero magnam molestiae molestias quam quisquam sapiente sequi veniam voluptas. Dolore eligendi ex id iusto. Dicta, iusto, nihil?</div>`
  },
  {
    title: 'TotallyNotVirus',
    shortDescription:
      'A atque eaque <u>excepturi ipsam magni</u> molestias nulla quos, <s>ullam unde vitae</s>. Alias aliquid architecto.',
    longDescription: `<div> Ducimus eveniet fugiat illum impedit incidunt inventore, iste iusto laboriosam, laudantium, nemo pariatur quis quod repellendus tempora tenetur veniam?</div>
    <div>Ab aperiam consequuntur corporis, eius eligendi eos error excepturi expedita fugit in molestiae porro, quia sunt. A alias delectus explicabo illum odio reiciendis soluta tempora totam vero voluptatum! Fuga, sunt.</div>
    <div>Aliquid aperiam beatae consectetur culpa cumque debitis eaque eius, enim, fugiat maiores nemo non nostrum quasi repudiandae, totam vel velit voluptatum! Corporis dolor hic laborum nam, quae veritatis voluptatem. Est?</div>
    <div>A atque eaque excepturi ipsam magni molestias nulla quos, ullam unde vitae. Alias aliquid architecto, doloremque eaque facere in ipsum laborum nam natus placeat provident quas qui sequi tempore totam!</div>
    <div>Aperiam asperiores, aut commodi consequuntur cum, earum, eos eum hic in labore libero magnam molestiae molestias quam quisquam sapiente sequi veniam voluptas. Dolore eligendi ex id iusto. Dicta, iusto, nihil?</div>`
  }
];

const StyledProjectsWrap = styled.section`
display: flex;
flex-wrap: wrap;
justify-content: space-between;
width: 1000px;
max-width: 100%;
margin: 30px auto;
`;

const Software = () => {
  return (
    <>
      <ServicesWrap>
        <>
          <Service icon={<IconLambda />} text="Software Development" />
        </>
      </ServicesWrap>
      <StyledProjectsWrap>
        {projects.map(item => {
          return (
            <Project title={item.title} description={item.shortDescription} />
          );
        })}
      </StyledProjectsWrap>
    </>
  );
};

export default Software;
