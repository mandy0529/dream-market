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
  @media screen and (max-width: 991px) {
    padding-top: 0rem;
  }
`;
export default Home;
