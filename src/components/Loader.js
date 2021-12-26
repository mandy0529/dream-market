import React from 'react';
import {BiMoon} from 'react-icons/bi';
import styled from 'styled-components';

function Loader() {
  return (
    <Wrapper>
      <BiMoon />
      <div className="loader"></div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  margin: 25rem auto;
  text-align: center;
  svg {
    width: 70px;
    height: 70px;
  }
  .loader {
    border: 10px solid #f3f3f3;
    border-top: 10px solid var(--main-blue);
    border-radius: 50%;
    width: 20px;
    height: 20px;
    animation: spin 2s linear infinite;
    margin: 0 auto;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  @media screen and (max-width: 500px) {
    margin: 12rem auto;
    svg {
      width: 40px;
      height: 40px;
    }
  }
`;

export default Loader;
