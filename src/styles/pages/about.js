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
    height: 200px;
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
`;

export {Wrapper};
