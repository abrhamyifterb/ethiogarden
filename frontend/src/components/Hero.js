import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { getHomePage } from '../services/api';

const HeroWrap = styled.div`
  background-image: url(${props => props.image});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  height: 100vh;
  position: relative;
  display: flex;
  align-items: center;
`;

const Overlay = styled.div`
  background: rgba(0, 0, 0, 0.5);
  position: absolute;
  width: 100%;
  height: 100%;
`;

const Container = styled.div`
  position: relative;
  z-index: 2;
  color: #fff;
  text-align: left;
  padding: 20px;

  .subheading {
    font-size: 1.5rem;
    margin-bottom: 10px;
    display: block;
  }

  h2 {
    font-size: 3rem;
    line-height: 1.2;
    margin-bottom: 20px;
  }

  @media (min-width: 768px) {
    padding: 50px;

    .subheading {
      font-size: 2rem;
    }

    h2 {
      font-size: 4rem;
    }
  }
`;

function Hero() {
  const [homePage, setHomePage] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchHomePage = async () => {
      try {
        const data = await getHomePage();
        setHomePage(data);
      } catch (error) {
        console.error('Error fetching about us data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchHomePage();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <HeroWrap className="hero-wrap" image={homePage.image}>
      <Overlay className="overlay"></Overlay>
      <Container className="container">
        <div className="row no-gutters slider-text align-items-center">
          <div className="col-md-7 ftco-animate">
            <span className="subheading">{homePage.title}</span>
            <h2 className="mb-4">{homePage.message}</h2>
          </div>
        </div>
      </Container>
    </HeroWrap>
  );
}

export default Hero;
