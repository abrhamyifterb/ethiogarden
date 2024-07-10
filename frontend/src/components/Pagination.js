import React from 'react';
import styled from 'styled-components';

const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;

const PaginationButton = styled.button`
  background-color: #66b032;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  margin: 0 5px;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.3s ease;
  
  &:hover {
    background-color: #4aaf03;
  }

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;

const PageNumberContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 0 10px;
`;

const PageNumber = styled.span`
  margin: 0 5px;
  padding: 8px 12px;
  font-size: 1rem;
  color: ${props => (props.isActive ? '#fff' : '#66b032')};
  background-color: ${props => (props.isActive ? '#66b032' : '#fff')};
  border: 1px solid #66b032;
  border-radius: 5px;
  font-weight: ${props => (props.isActive ? 'bold' : 'normal')};
  cursor: pointer;
  transition: background-color 0.3s ease, color 0.3s ease;

  &:hover {
    background-color: ${props => (props.isActive ? '#4aaf03' : '#f3f6f4')};
    color: ${props => (props.isActive ? '#fff' : '#4aaf03')};
  }
`;

const Pagination = ({ currentPage, totalPages, paginate }) => {
  if (totalPages <= 1) {
    return null;
  }

  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <PaginationContainer>
      <PaginationButton
        onClick={() => paginate(currentPage - 1)}
        disabled={currentPage === 1}
      >
        Previous
      </PaginationButton>
      <PageNumberContainer>
        {pageNumbers.map(number => (
          <PageNumber
            key={number}
            isActive={number === currentPage}
            onClick={() => paginate(number)}
          >
            {number}
          </PageNumber>
        ))}
      </PageNumberContainer>
      <PaginationButton
        onClick={() => paginate(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        Next
      </PaginationButton>
    </PaginationContainer>
  );
};

export default Pagination;
