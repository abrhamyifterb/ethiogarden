import React from 'react';
import styled from 'styled-components';

const AnswerContainer = styled.div`
  margin-top: 1rem;
  padding: 10px;
  background-color: #f5f8fb;
  border-radius: 5px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
`;


const FaqAnswer = ({ payload }) => {
    return <AnswerContainer>{payload.answer}</AnswerContainer>;
  };
  
  export default FaqAnswer;