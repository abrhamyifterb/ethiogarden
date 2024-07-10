import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const CategoryContainer = styled.div`
  .category-entry {
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

const Heading = styled.h3`
  color: #66b032; 
`;

const CustomLink = styled(Link)`
  color: #66b032; 
  &:hover {
    text-decoration: underline;
  }
`;

function CategoryEntry({ category }) {
  return (
    <CategoryContainer className="col-lg-4 ftco-animate">
      <div className="category-entry">
        <Block20 className="block-20" image={category.image}></Block20>
        <div className="text d-block">
          <Heading className="heading">
            <CustomLink>{category.name}</CustomLink>
          </Heading>
          <Excerpt dangerouslySetInnerHTML={{ __html: category.description }} />
        </div>
      </div>
    </CategoryContainer>
  );
}

export default CategoryEntry;
