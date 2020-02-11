import React from 'react';
import styled from 'styled-components';
import {
  EmailIcon,
  EmailShareButton,
  FacebookIcon,
  FacebookShareButton,
  LinkedinIcon,
  LinkedinShareButton, TwitterIcon,
  TwitterShareButton
} from 'react-share';

const StyledShared = styled.section`
  position: absolute;
  left: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
`;


const Share = ({title}) => {
  const shareUrl = window.location.href;

  return (
    <StyledShared>
      <FacebookShareButton
        url={shareUrl}
        quote={title}
        className="share-button"
      >
        <FacebookIcon size={32} round />
      </FacebookShareButton>
      <LinkedinShareButton
        url={shareUrl}
        quote={title}
        className="share-button"
      >
        <LinkedinIcon size={32} round />
      </LinkedinShareButton>
      <TwitterShareButton
        url={shareUrl}
        quote={title}
        className="share-button"
      >
        <TwitterIcon size={32} round />
      </TwitterShareButton>
      <EmailShareButton
        url={shareUrl}
        body={`${title} : ${shareUrl}`}
        subject={title}
        quote={title}
        className="share-button"
      >
        <EmailIcon size={32} round />
      </EmailShareButton>
    </StyledShared>
  );
};

export default Share;
