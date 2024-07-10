import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Modal from 'react-modal';

const VideoContainer = styled.div`
  .video-entry {
    margin-bottom: 30px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;

    .block-20 {
      height: 200px;
      background-size: cover;
      background-position: center;
      cursor: pointer;
    }

    .text {
      padding: 15px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      flex-grow: 1;
    }
  }
`;

const Block20 = styled.div`
  display: block;
  background-image: url(${props => `https://img.youtube.com/vi/${props.videoId}/0.jpg`});
`;

const Excerpt = styled.p`
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3; /* Limit to 3 lines */
  -webkit-box-orient: vertical;
`;

const ReadMore = styled.div`
  margin-top: auto;
`;

const Heading = styled.h3`
  color: #66b032; /* Set color for heading */
`;

const CustomLink = styled(Link)`
  color: #66b032; /* Set color for link */
  &:hover {
    text-decoration: underline;
  }
`;

const ReadMoreLink = styled(Link)`
  background-color: #66b032; 
  color: #fff; 
  padding: 10px 20px; 
  border-radius: 5px; 
  text-align: center; 
  display: inline-block;
  &:hover {
    text-decoration: none; 
    background-color: #558a28; 
  }
`;

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    width: '80%',
    maxWidth: '800px',
    height: 'auto',
  },
};

function extractYouTubeVideoId(url) {
  const regex = /(?:youtube\.com\/(?:[^/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?/\s]{11})/;
  const match = url.match(regex);
  return match ? match[1] : null;
}

function VideoEntry({ video }) {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const videoId = extractYouTubeVideoId(video.video_url);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <VideoContainer className="col-lg-4 ftco-animate">
      <div className="video-entry">
        <Block20 className="block-20" videoId={videoId} onClick={openModal}></Block20>
        <div className="text d-block">
          <div className="meta">
            <p>
              <span className="fa fa-calendar mr-2"></span> {new Date(video.published_date).toLocaleDateString()}
              <span style={{ marginLeft: '22px' }} className="fa fa-user mr-2"></span> {video.author ?? 'Admin'}
            </p>
          </div>
          <Heading className="heading">
            <CustomLink to={`/video/${video.id}`}>{video.title}</CustomLink>
          </Heading>
          <Excerpt><p key={video.id} dangerouslySetInnerHTML={{ __html: video.description }}></p></Excerpt>
          <ReadMore>
            <ReadMoreLink to={`/video/${video.id}`} className="btn btn-secondary py-2 px-3">ተጨማሪ ያንብቡ</ReadMoreLink>
          </ReadMore>
        </div>
      </div>
      <Modal isOpen={modalIsOpen} onRequestClose={closeModal} style={customStyles}>
        <div>
          <iframe
            width="100%"
            height="400"
            src={`https://www.youtube.com/embed/${videoId}`}
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </Modal>
    </VideoContainer>
  );
}

export default VideoEntry;
