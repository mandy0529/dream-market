import styled from 'styled-components';

const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  padding: 7rem 0rem 5rem 15rem;
  background: var(--main-blue);

  .about1 {
    border-radius: 10px;
    height: 600px;
    object-fit: cover;
  }
  .about2 {
    display: none;
    height: 250px;
    border-radius: 10px;
  }
  article {
    margin: 5rem 4rem;
  }

  p {
    line-height: 2;
    font-size: 1rem;
    letter-spacing: 0.1rem;
    line-height: 2rem;
    max-width: 45em;
    margin: 0 auto;
    margin-top: 4rem;
    color: var(--clr-grey-5);
    strong {
      font-size: 1.2rem;
    }
  }
  .title {
    display: flex;
    align-items: center;
    text-align: left;
    span {
      font-size: 2rem;
      margin-right: 1rem;
    }
    h1 {
      margin: 0;
    }
  }
  .underline {
    margin-left: 0;
  }
  @media (max-width: 991px) {
    flex-direction: column;
    padding: 5rem 3rem;
    .about1 {
      display: none;
    }
    .about2 {
      display: block;
    }
    p {
      max-width: 500px;
      margin: 3rem 0;
    }
    article {
      margin: 5rem 2rem 1.5rem 2rem;
    }
  }
  @media (max-width: 500px) {
    padding: 2rem;
    .about2 {
      height: 80px;
    }
    p {
      max-width: 700px;
      font-size: 0.8rem;
      line-height: 1.9;
      margin: 1rem 0;
      strong {
        font-size: 0.8rem;
      }
    }
    article {
      margin: 2rem 1rem;
    }
    .title {
      span {
        font-size: 1.4rem;
      }
      h1 {
        font-size: 1.4rem;
      }
    }
  }
`;

export {Wrapper};
