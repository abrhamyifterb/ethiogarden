import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { getCategory } from '../services/api';
import CategoryEntry from './CategoryEntry';

const CategoryListContainer = styled.div`
  padding: 50px 0; 
`;

const HeadingSection = styled.div`
  margin-top: 75px; 
  text-align: center;
  padding-bottom: 20px;

  .subheading {
    font-size: 1.2em;
    color: #6c757d;
    margin-bottom: 10px;
  }

  h3 {
    font-size: 2.5em;
    font-weight: bold;
    margin-bottom: 20px;
    color: #343a40;
  }
`;

const NoDataMessage = styled.div`
  text-align: center;
  margin-top: 50px;
  color: #777;
  font-size: 1.5em;
`;

function CategoryList({ limit = Infinity }) {
  const [categorys, setCategorys] = useState([]);

  useEffect(() => {
    const fetchCategory = async () => {
      try {
        const response = await getCategory();
        setCategorys(response.slice(0, limit));
      } catch (error) {
        console.error('Error fetching categorys:', error);
      }
    };

    fetchCategory();
  }, [limit]);

  return (
    <CategoryListContainer className="container" >
      <div className="row justify-content-center pb-4">
        <HeadingSection className="col-md-12 heading-section text-center ftco-animate">
          <span className="subheading"></span>
          <h3 className="mb-4">የግብርና ትምርት መሃል</h3>
        </HeadingSection>
      </div>
      <div className="row d-flex">
        {categorys.length === 0 ? (
          <NoDataMessage>ምንም ምድቦች አልተገኙም</NoDataMessage>
        ) : (
          categorys.map(category => (
            <CategoryEntry key={category.id} category={category} />
          ))
        )}
      </div>
    </CategoryListContainer>
  );
}

export default CategoryList;
