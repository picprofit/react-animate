import React, { useEffect, useState } from 'react';
import { Document, Page } from 'react-pdf';
import styled from 'styled-components';
import { motion } from 'framer-motion';

import { ReactComponent as IconArchitecture } from '../assets/icons/a.svg';

const PageWrap = styled.section`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  width: 1000px;
  max-width: 100%;
  position: relative;
  & > a {
    width: 300px;
    & > div > div:last-child {
      display: none;
    }
  }
`;

const StyledDocumentWrap = styled.section`
  border: 1px solid #eee;
  width: 100%;
  min-width: 700px;
  height: 792px;
  max-height: 80vh;
`;

const StyledDocument = styled(Document)`
  width: 100%;
  min-width: 700px;
  height: 792px;
  max-height: 80vh;
  transition: opacity 1s;
  opacity: ${props => (props.isloading ? 0 : 1)};
  overflow-y: scroll;
  & > div {
    height: 70vh;
    min-height: 500px;
  }
  & canvas {
    max-width: 100%;
  }
`;

const StyledPagination = styled.div`
  width: 100%;
  min-width: 700px;
  text-align: center;
  color: #000;
  margin-top: 20px;
`;

const StyledButton = styled(motion.button)`
  background: transparent;
  border: 1px solid #000;
  margin: 0 10px;
  color: #000;
`;

const StyledIcon = styled(IconArchitecture)`
  position: absolute;
  top: 30px;
  left: -70px;
  width: 30px;
  height: auto;
  z-index: 20;
`;

const StyledPage = styled(Page)`
  > div {
    max-height: 100%;
    max-width: 100%;
  }
`;

const Architecture = () => {
  const [numPages, setNumPages] = useState(0);
  const [pageNumber, setPageNumber] = useState(1);
  const [pageLoading, setPageLoading] = useState(false);

  const changePage = count => {
    setPageLoading(true);
    setTimeout(() => {
      setPageNumber(pageNumber + count);
      setPageLoading(false);
    }, 1000);
  };

  const NextPage = () => {
    return (
      <StyledButton
        onClick={() => {
          changePage(1);
        }}
      >
        &gt;&gt;
      </StyledButton>
    );
  };
  const PrevPage = () => {
    return (
      <StyledButton
        onClick={() => {
          changePage(-1);
        }}
      >
        &lt;&lt;
      </StyledButton>
    );
  };

  return (
    <motion.div
      initial={{
        opacity: 0
      }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
    >
      <PageWrap>
        <StyledIcon />
        <StyledDocumentWrap>
          <StyledDocument
            file="/assets/portfolio.pdf" // from public/assets
            onLoadSuccess={({ numPages }) => {
              setNumPages(numPages);
            }}
            onLoadError={console.error}
            options={{ workerSrc: '/pdf.worker.js' }}
            isloading={pageLoading ? 1 : 0}
          >
            <StyledPage pageNumber={pageNumber} renderTextLayer={false} />
          </StyledDocument>
        </StyledDocumentWrap>
        <StyledPagination>
          {pageNumber > 1 && <PrevPage />}
          Page {pageNumber} of {numPages}
          {pageNumber < numPages && <NextPage />}
        </StyledPagination>
      </PageWrap>
    </motion.div>
  );
};

export default Architecture;
