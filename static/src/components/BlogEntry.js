import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const BlogContainer = styled.div`
  .blog-entry {
    margin-bottom: 30px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;

    .block-20 {
      height: 200px;
      background-size: cover;
      background-position: center;
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

const Block20 = styled(Link)`
  display: block;
  background-image: url(${props => props.image});
`;

const Excerpt = styled.p`
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
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

function BlogEntry({ blog }) {
  const imageUrl = blog.image ? blog.image : '/images/work-3.png';

  return (
    <BlogContainer className="col-lg-4 ftco-animate">
      <div className="blog-entry">
        <Block20 to={`/blog/${blog.id}`} className="block-20" image={imageUrl}></Block20>
        <div className="text d-block">
          <div className="meta">
            <p>
              <span className="fa fa-calendar mr-2"></span>  {new Date(blog.published_date).toLocaleDateString()}
              <span style={{ marginLeft: '22px' }} className="fa fa-user mr-2"></span>  {blog.author}
            </p>
          </div>
          <Heading className="heading">
            <CustomLink to={`/blog/${blog.id}`}>{blog.title}</CustomLink>
          </Heading>
          <Excerpt>{blog.excerpt}</Excerpt>
          <ReadMore>
            <ReadMoreLink to={`/blog/${blog.id}`} className="btn btn-secondary py-2 px-3">ተጨማሪ ያንብቡ</ReadMoreLink>
          </ReadMore>
        </div>
      </div>
    </BlogContainer>
  );
}

export default BlogEntry;
