import React, { useState } from 'react';
import { Document, Page } from 'react-pdf';
import styled from 'styled-components';

import Service from '../components/Services/Service';
import { ReactComponent as IconA } from '../assets/icons/a.svg';

const PageWrap = styled.section`
  display: flex;
  flex-wrap: wrap;
  width: 1000px;
  max-width: 100%;
  & > a {
  width: 100px;
  }
`;
const StyledDocument = styled(Document)`
  width: 900px;
  max-width: 100%;
  height: 400px;
  & canvas {
  max-width: 100%;
  max-height: 100%;
  }
`;

const Architecture = () => {
  const [numPages, setNumPages] = useState(0);
  return (
    <PageWrap>
      <Service icon={<IconA />} text="Architecture" link="/services" />
      <StyledDocument
        file="/assets/portfolio.pdf"
        onLoadSuccess={({ numPages }) => {
          setNumPages(numPages);
        }}
        onLoadError={console.error}
        options={{ workerSrc: '/pdf.worker.js' }}
      >
        <Page pageNumber={numPages} />
      </StyledDocument>
    </PageWrap>
  );
};

export default Architecture;
