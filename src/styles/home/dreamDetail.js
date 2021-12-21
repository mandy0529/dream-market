import styled from 'styled-components';

const Wrapper = styled.div`
  padding: 5rem 20rem 5rem 20rem;
  background: var(--main-light-pink);
  .dream__title {
    display: flex;
    justify-content: center;
    align-items: center;

    p {
      font-size: 1.2rem;
      max-width: 500px;
      min-width: 300px;
      letter-spacing: 0.2rem;
      line-height: 1.7rem;
      margin: 0 5rem;
    }
  }
  .dream__list {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: 5rem 0 2rem 0;
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
        max-width: 300px;
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
    }
  }
`;

export {Wrapper};
