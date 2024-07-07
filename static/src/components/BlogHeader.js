import React from 'react';
import styled from 'styled-components';

const HeroWrap = styled.div`
  background-image: url('/images/bg.jpg');
  height: 300px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
  .overlay {
    background: rgba(0, 0, 0, 0.5);
    position: absolute;
    width: 100%;
    height: 100%;
  }
`;

const Container = styled.div`
  position: relative;
  z-index: 2;
  color: #fff;
  text-align: left;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 80%;
  max-width: 1200px; 
  padding-top: 50px;
`;

const Breadcrumbs = styled.p`
  margin-bottom: 20px;
  font-size: 20px; 
  a {
    color: #fff;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
  .fa-chevron-right {
    margin: 0 10px;
  }
`;

const BlogHeader = ({ breadcrumbs }) => {
  return (
    <HeroWrap className="hero-wrap">
      <div className="overlay"></div>
      <Container className="container">
        <Breadcrumbs className="breadcrumbs">
          {breadcrumbs.map((breadcrumb, index) => (
            <span key={index}>
              <a href={breadcrumb.link}>{breadcrumb.label} <i className="fa fa-chevron-right"></i></a>
            </span>
          ))}
        </Breadcrumbs>
      </Container>
    </HeroWrap>
  );
};

export default BlogHeader;
