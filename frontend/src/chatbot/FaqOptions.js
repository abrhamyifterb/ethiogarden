import React, { useState }  from 'react';
import styled from 'styled-components';

const OptionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 1rem;
  width: 100%;
`;

const OptionWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`;

const OptionButton = styled.button`
  background-color: #66b032;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  margin: 5px;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.3s;
  
  &:hover {
    background-color: #d55b00;
  }
`;

const AnswerContainer = styled.div`
  margin-top: 5px;
  padding: 10px;
  background-color: #00c2f9;
  border-radius: 5px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  display: ${props => (props.expanded ? 'block' : 'none')};
  margin-left: 20px;
  flex: 1;
`;

const FaqOptions = ({ faqs, actionProvider }) => {
  const [expandedFaq, setExpandedFaq] = useState(null);

  const toggleAnswer = (faqId) => {
    if (expandedFaq === faqId) {
      setExpandedFaq(null); 
    } else {
      setExpandedFaq(faqId); 
    }
  };

  return (
    <OptionsContainer>
      {faqs.map((faq) => (
        <div key={faq.id}>
          <OptionButton onClick={() => toggleAnswer(faq.id)}>
            {faq.question}
          </OptionButton>
          <AnswerContainer expanded={expandedFaq === faq.id}>
            {faq.answer}
          </AnswerContainer>
        </div>
      ))}
    </OptionsContainer>
  );
};

export default FaqOptions;
