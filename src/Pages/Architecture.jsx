import React, { useState } from 'react';
import { Document, Page } from 'react-pdf';
import styled from 'styled-components';
import { Frame } from 'framer';
import { motion } from 'framer-motion';

import Service from '../components/Services/Service';
import { ReactComponent as IconA } from '../assets/icons/a.svg';

const PageWrap = styled.section`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  width: 1000px;
  max-width: 100%;
  & > a {
    width: 300px;
    & > div > div:last-child {
      display: none;
    }
  }
`;
const StyledDocument = styled(Document)`
  width: 100%;
  min-width: 700px;
    height: 80vh;
    min-height: 500px;
  & > div {
    height: 80vh;
    min-height: 500px;
  }
  & canvas {
    max-width: 100%;
    max-height: 100%;
  }
`;

const StyledPage = styled(Page)`
  > div {
    max-height: 100%;
    max-width: 100%;
  }
`;

const StyledPagination = styled.p`
  text-align: center;
  color: #000;
`;

const StyledButton = styled.button`
  background: transparent;
  border: 1px solid #000;
  margin: 0 10px;
  color: #000;
`;

const Architecture = () => {
  const [numPages, setNumPages] = useState(0);
  const [pageNumber, setPageNumber] = useState(1);

  const NextPage = () => {
    return (
      <StyledButton onClick={e => setPageNumber(pageNumber + 1)}>
        &gt;&gt;
      </StyledButton>
    );
  };
  const PrevPage = () => {
    return (
      <StyledButton onClick={e => setPageNumber(pageNumber - 1)}>
        &lt;&lt;
      </StyledButton>
    );
  };

  return (
    <PageWrap>
      <StyledDocument
        file="/assets/portfolio.pdf"
        onLoadSuccess={({ numPages }) => {
          setNumPages(numPages);
        }}
        onLoadError={console.error}
        options={{ workerSrc: '/pdf.worker.js' }}
      >
        <StyledPage
          pageNumber={pageNumber}
          customTextRenderer={() => {}}
          initial={{
            scale: 0
          }}
          animate={{ scale: 1 }}
          transition={{ duration: 1 }}
        />
        <StyledPagination>
          {pageNumber > 1 && <PrevPage />}
          Page {pageNumber} of {numPages}
          {pageNumber < numPages && <NextPage />}
        </StyledPagination>
      </StyledDocument>
    </PageWrap>
  );
};

export default Architecture;
