import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  padding-bottom: 5rem;
  img {
    box-shadow: 0px 1px 18px 1px rgba(0, 0, 0, 0.75);
    -webkit-box-shadow: 0px 1px 18px 1px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 0px 1px 18px 1px rgba(0, 0, 0, 0.75);
    border-radius: 10px;
  }
  h1 {
    font-size: 2.7rem;
    font-weight: bold;
    margin: 1rem 0;
    letter-spacing: 0.4rem;
  }
  p {
    font-size: 1.5rem;
    margin: 2rem 0;
  }
  .hero__img1 {
    position: relative;
    height: 500px;
  }

  .hero__img2 {
    height: 200px;
    position: absolute;
    margin-top: 350px;
    left: 48%;
  }

  .hero__img5 {
    height: 200px;
    position: absolute;
    margin-top: 50px;
    left: 67%;
  }
  .hero__main {
    margin: 3rem 7rem;
  }
  .hero__btn {
    padding: 0.5rem 1.5rem;
    border: 3px solid white;
    border-radius: 5px;
    font-size: 1.5rem;
    color: white;
    cursor: pointer;
    transition: var(--transition);
    &:hover {
      background: var(--main-pink);
      border: 3px solid transparent;
      color: white;
    }
  }

  @media screen and (max-width: 991px) {
    flex-direction: column;
    text-align: center;
    h1 {
      margin: 2rem 0;
    }

    .hero__img2,
    .hero__img5 {
      display: none;
    }
    .hero__main {
      margin-bottom: 3rem;
      h1,
      p,
      .hero__btn {
        min-width: 300px;
      }
    }
    .hero__btn {
      font-size: 1rem;
      margin: 1rem;
    }
  }
`;

export {Wrapper};
