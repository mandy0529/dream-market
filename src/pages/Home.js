import React from 'react';
import styled from 'styled-components';
import {DreamDetail, FeaturedProducts, Hero} from '../components';

function Home() {
  return (
    <Wrapper>
      <Hero />
      <FeaturedProducts />
      <DreamDetail />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  padding-top: 8rem;
  width: 100vw;
  @media screen and (max-width: 768px) {
    padding-top: 0rem;
    text-align: center;
    width: 100vw;
  }
`;
export default Home;
