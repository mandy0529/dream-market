import styled from 'styled-components';

const Wrapper = styled.div`
  padding: 5rem 20rem 5rem 20rem;
  background: var(--main-light-pink);
  .dream__title {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    p {
      font-size: 1.1rem;
      max-width: 600px;
      min-width: 300px;
      letter-spacing: 0.3rem;
      line-height: 2rem;
      margin: 3rem 5rem;
    }
  }
  .dream__list {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: 1rem 0 2rem 0;
    span {
      font-size: 2.5rem;
      padding: 0.4rem 1rem;
      background: var(--main-light-pink);
      border-radius: 50%;
    }

    .dream__list-menu {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin: 2rem;
      padding: 2rem;
      border-radius: 20px;
      background: var(--main-pink);
      p {
        max-width: 300px;
      }
    }
  }
  @media screen and (max-width: 991px) {
    padding: 3rem 0;
    .dream__title {
      h2 {
        max-width: 250px;
        line-height: 2rem;
        letter-spacing: 0.1rem;
      }
      p {
        display: none;
      }
    }
    .dream__list {
      flex-direction: column;
      margin: 2rem 0;
      .dream__list-menu {
        margin: 1.5rem;
        padding: 1.5rem;
        span {
          font-size: 2rem;
        }
        h3 {
          font-size: 1rem;
        }
        p {
          max-width: 250px;
          font-size: 0.8rem;
        }
      }
    }
  }
`;

export {Wrapper};
