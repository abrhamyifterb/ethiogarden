import React from 'react';
import styled from 'styled-components';

const ContentContainer = styled.div`
  padding: 30px;
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0,0,0,0.1);
  border-radius: 10px;
  flex: 3; 
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  .blog-image, .blog-video {
    max-width: 100%;
    margin-bottom: 20px;
    border-radius: 10px;
  }

  h2 {
    margin-bottom: 20px;
    font-weight: bold;
  }

  p {
    font-size: 16px;
    line-height: 1.6;
  }
`;

function extractYouTubeVideoId(url) {
  const regex = /(?:youtube\.com\/(?:[^/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?/\s]{11})/;
  const match = url.match(regex);
  return match ? match[1] : null;
}

const VideoContent = ({ content, isVideo }) => {
  const videoUrl = content.video_url ?? '';
  const videoId = extractYouTubeVideoId(videoUrl);

  return (
    <ContentContainer className="ftco-animate pl-md-4 py-md-5">
      <h2 className="mb-3">{content.title}</h2>
      {isVideo && videoId ? (
        <div className="blog-video">
          <iframe
            width="100%"
            height="575"
            src={`https://www.youtube.com/embed/${videoId}`}
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      ) : (
        <img src={videoUrl} alt="" className="blog-image img-fluid" />
      )}
      <p key={content.id} dangerouslySetInnerHTML={{ __html: content.description }}></p>
    </ContentContainer>
  );
};

export default VideoContent;
