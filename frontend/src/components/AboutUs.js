import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { getAboutUs } from '../services/api';

const AboutSection = styled.section`
  padding: 5rem 0;
  background: #f8f9fa;
`;

const AboutContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
`;

const AboutImage = styled.img`
  max-width: 100%;
  height: auto;
  border-radius: 10px;
  margin-bottom: 2rem;
  @media (min-width: 768px) {
    flex: 1 1 45%;
    order: 2;
    margin-bottom: 0;
    margin-left: 2rem;
  }
`;

const AboutContent = styled.div`
  flex: 1 1 45%;
  @media (max-width: 768px) {
    text-align: center;
  }
`;

const AboutHeading = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
  color: #008001;
`;

const AboutText = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  color: #666;
  margin-bottom: 1rem;
`;

const AboutUs = () => {
  const [aboutUs, setAboutUs] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAboutUs = async () => {
      try {
        const data = await getAboutUs();
        setAboutUs(data);
      } catch (error) {
        console.error('Error fetching about us data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchAboutUs();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }
  const defaultContent = {
    title: "About Us",
    content: `
      <p>Welcome to EthioGardening, your number one source for all things gardening. We're dedicated to providing you the best of gardening tips, with a focus on sustainability, homegrown produce, and environmental enrichment.</p>
      <p>Founded in 2020, EthioGardening has come a long way from its beginnings in Bole, Addis Ababa. When we first started out, our passion for eco-friendly gardening drove us to start our own blog.</p>
      <p>We hope you enjoy our gardening tips as much as we enjoy offering them to you. If you have any questions or comments, please don't hesitate to contact us.</p>
    `,
    image: "/images/work-3.png"
  };

//   if (!aboutUs) {
//     return <div>About Us content Coming-Soon</div>;
//   }

  const content = aboutUs ?? defaultContent;
  const imageUrl = content.image ? content.image : 'static/images/work-3.png';
  return (
    <AboutSection>
      <br/><div className="container">
        <AboutContainer>
          <AboutImage src={imageUrl} alt="About Us" />
          <AboutContent>
            <AboutHeading>{content.title}</AboutHeading>
            <div dangerouslySetInnerHTML={{ __html: content.content }}></div>
          </AboutContent>
        </AboutContainer>
      </div>
    </AboutSection>
  );
};

export default AboutUs;