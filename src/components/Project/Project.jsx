import React, { useState } from 'react';
import styled from 'styled-components';
import parse from 'html-react-parser';
import { motion } from 'framer-motion';
import Modal from 'react-modal';

const StyledProject = styled(motion.div)`
  background: #fff;
  color: #58595b;
  border: 1px solid #eee;
  margin-bottom: 10px;
  width: 32%;
  min-width: 300px;
  height: 200px;
  padding: 15px 20px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  box-sizing: border-box;
  transition: all 0.2s;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  cursor: pointer;
  position: relative;
  &:hover {
    box-shadow: 10px 10px 15px -10px rgba(88, 89, 91, 0.45);
  }
`;

const pixelsToMove = 100;

const cssVisible = `
  opacity: 1;
  top: 0;
`;
const cssHidden = `
  opacity: 0;
`;

const StyledTitle = styled.h3`
  color: #000;
  font-size: 22px;
  font-weight: 500;
  position: relative;
  transition: all 1s;
  ${props =>
    props.ishover
      ? `
    top: -${pixelsToMove}px;
    position: absolute;
  ${cssHidden}
  `
      : cssVisible}
`;

const StyledDescription = styled.div`
  color: #000;
  font-size: 18px;
  position: relative;
  transition: all 0.7s;
  ${props =>
    props.ishover
      ? `
      ${cssVisible}
      position: relative;
      transform: scale(1);
      `
      : `
  ${cssHidden}
      position: absolute;
      transform: scale(0);
  `};
  @media (max-width: 768px) {
    position: relative;
    opacity: 1;
    transform: scale(1);
  }
`;

// Modal
Modal.setAppElement('#root');

const customStyles = {
  overlay: {
    zIndex: '30',
    background: 'rgba(0,0,0,0.7)'
  },
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    padding: '2rem',
    position: 'fixed',
    minWidth: '20rem',
    width: '80%',
    maxWidth: '60rem',
    minHeight: '5rem',
    height: '60vh',
    maxHeight: '60rem'
  }
};

const StyledClose = styled.button`
  background: transparent;
  border: 1px solid transparent;
  font-size: 35px;
  font-weight: 500;
  position: fixed;
  top: 15px;
  right: 15px;
  color: #58595b;
  cursor: pointer;
  transition: all 0.2s;
  &:hover {
    border-color: #eee;
  }
`;

const StyledModalContent = styled.section`
  color: #58595b;
  font-size: 22px;
  font-weight: 500;
  background: #fff;
  display: flex;
  align-items: stretch;
  justify-content: space-between;
  flex-wrap: wrap;
  padding-top: 30px;
  & h2 {
    text-align: center;
    margin-top: 0;
    padding-top: 0;
  }
`;

const StyledImage = styled.img`
  width: 50%;
  object-fit: cover;
  height: auto;
  @media (max-width: 768px) {
    width: 100%;
    height: 300px;
    margin-bottom: 30px;
  }
`;

const StyledContent = styled.section`
  width: 50%;
  padding-left: 30px;
  box-sizing: border-box;
  @media (max-width: 768px) {
    width: 100%;
    padding: 0;
  }
`;

const StyledTagsWrap = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  margin-bottom: 20px;
`;

const StyledTag = styled.div`
  font-weight: 300;
    font-size: 18px;
  margin-right: 10px;
  background: #929292;
  padding: 0 10px 4px;
  border-radius: 3px;
  color: #fff;
`;

const Project = ({ title, description, fullDescription, image, tags }) => {
  const [isHover, setHover] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <StyledProject
        onHoverStart={() => {
          setHover(true);
        }}
        onHoverEnd={() => {
          setHover(false);
        }}
        onClick={() => setModalOpen(true)}
      >
        <StyledTitle ishover={isHover ? 1 : 0}>{title}</StyledTitle>
        <StyledDescription ishover={isHover ? 1 : 0}>
          {parse(description)}
        </StyledDescription>
      </StyledProject>
      <Modal
        isOpen={modalOpen}
        onAfterOpen={() => {}}
        onRequestClose={() => setModalOpen(false)}
        contentLabel={title}
        style={customStyles}
        closeTimeoutMS={700}
      >
        {modalOpen && (
          <StyledClose onClick={() => setModalOpen(false)}>&times;</StyledClose>
        )}
        <StyledModalContent>
          <StyledImage src={`/assets/images/${image}`} />
          <StyledContent>
            <h2>{title}</h2>
            <StyledTagsWrap>
              {tags.map(item => {
                return <StyledTag key={item}>{item}</StyledTag>;
              })}
            </StyledTagsWrap>
            <div>{parse(fullDescription)}</div>
          </StyledContent>
        </StyledModalContent>
      </Modal>
    </>
  );
};

export default Project;
