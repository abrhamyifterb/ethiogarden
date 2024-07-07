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

const BlogContent = ({ content }) => {
  const imageUrl = content.image ?? '';
  const videoUrl = content.video ?? '';

  return (
    <ContentContainer className="ftco-animate pl-md-4 py-md-5">
      <h2 className="mb-3">{content.title}</h2>
      {content.video ? (
        <video controls className="blog-video">
          <source src={videoUrl} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      ) : (
        <img src={imageUrl} alt="" className="blog-image img-fluid" />
      )}
      <p key={content.id} dangerouslySetInnerHTML={{ __html: content.content }}></p>
    </ContentContainer>
  );
};

export default BlogContent;
