import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  padding-bottom: 8rem;
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
    margin: 3rem;
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
      border: 3px solid var(--main-light-blue);
      color: white;
    }
  }

  @media screen and (max-width: 991px) {
    flex-direction: column;
    padding-bottom: 6rem;
    text-align: left;
    width: 100vw;
    h1 {
      margin: 2rem 0;
      font-size: 2rem;
    }
    p {
      font-size: 1.1rem;
    }
    .hero__img1 {
      height: 250px;
      margin: 0 3rem;
    }
    .hero__img2,
    .hero__img5 {
      display: none;
    }
    .hero__main {
      margin: 2rem 3rem;
      margin-bottom: 3rem;
      h1,
      p,
      .hero__btn {
        min-width: 200px;
      }
      h1 {
        font-size: 1.7rem;
        margin: 1rem 0 0.4rem 0;
      }
      p {
        font-size: 0.9rem;
        margin: 1.5rem 0;
      }
    }
    .hero__btn {
      font-size: 0.5rem;
      margin: 1rem 0;
      padding: 0.3rem 1rem;
    }
  }
`;

export {Wrapper};
