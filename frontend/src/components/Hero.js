import React from 'react';
import styled from 'styled-components';

const HeroWrap = styled.div`
  background-image: url('/images/bg.jpg');
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
  return (
    <HeroWrap className="hero-wrap">
      <Overlay className="overlay"></Overlay>
      <Container className="container">
        <div className="row no-gutters slider-text align-items-center">
          <div className="col-md-7 ftco-animate">
            <span className="subheading">Welcome to ETHIO GARDENING</span>
            <h2 className="mb-4">በየቀኑ የ ጋርደኒንግ እውቀት ያግኙ። የራስዎ ምግብ ይመገቡ አከባቢዎ ያሳምሩ።</h2>
          </div>
        </div>
      </Container>
    </HeroWrap>
  );
}

export default Hero;
