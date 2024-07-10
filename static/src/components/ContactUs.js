import React, { useState } from 'react';
import styled from 'styled-components';
import { submitContactInquiry } from '../services/api';

const ContactSection = styled.section`
  margin-top: 60px;
  padding: 5rem 0;
  background: #f8f9fa;
`;

const ContactContainer = styled.div`
  max-width: 600px;
  margin: 0 auto;
  background: #fff;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const ContactHeading = styled.h2`
  font-size: 2rem;
  margin-bottom: 1.5rem;
  color: #008001;
  text-align: center;
`;

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  padding: 0.75rem;
  margin-bottom: 1rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 1rem;
`;

const Textarea = styled.textarea`
  padding: 0.75rem;
  margin-bottom: 1rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 1rem;
  resize: vertical;
`;

const SubmitButton = styled.button`
  padding: 0.75rem;
  border: none;
  border-radius: 5px;
  background: #008001;
  color: #fff;
  font-size: 1rem;
  cursor: pointer;
  &:hover {
    background: #005500;
  }
`;

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await submitContactInquiry(formData);
      setSubmitted(true);
    } catch (error) {
      console.error('Error submitting contact inquiry:', error);
    }
  };

  if (submitted) {
    return (
      <ContactSection>
        <ContactContainer>
          <ContactHeading>እናመሰግናለን!</ContactHeading>
          <p>ጥያቄዎ ገብቷል። በቅርቡ ወደ እርስዎ እንመለሳለን።</p>
        </ContactContainer>
      </ContactSection>
    );
  }

  return (
    
    <ContactSection><br/><br/>
      <ContactContainer>
        <ContactHeading>ያግኙን</ContactHeading>
        <ContactForm onSubmit={handleSubmit}>
          <Input
            type="text"
            name="name"
            placeholder="የእርስዎ ስም"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <Input
            type="email"
            name="email"
            placeholder="የእርስዎ ኢሜይል"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <Input
            type="text"
            name="phone"
            placeholder="ስልክዎ"
            value={formData.phone}
            onChange={handleChange}
          />
          <Textarea
            name="message"
            placeholder="የእርስዎ ጥያቄ"
            value={formData.message}
            onChange={handleChange}
            required
          />
          <SubmitButton type="submit">አስረክብ</SubmitButton>
        </ContactForm>
      </ContactContainer>
    </ContactSection>
  );
};

export default ContactUs;
