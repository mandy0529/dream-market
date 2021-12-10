import styled from 'styled-components';

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  background: var(--main-yellow);
  padding: 8rem 18rem;
  text-align: center;

  .featured__flex {
    display: flex;
    align-items: center;
    justify-content: center;
    span {
      font-size: 2.7rem;
      margin: 0 1rem;
    }
    h1 {
      margin: 0;
    }
  }
  .featured {
    margin: 4rem auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 2.5rem;
    img {
      height: 225px;
    }
  }
  .btn {
    width: 180px;
    margin: 0 auto;
    text-align: center;
    border: 3px solid var(--main-blue);
    background: var(--main-blue);
    color: white;
    border-radius: 10px;
    padding: 0.5rem 1.5rem;
    font-size: 1.2rem;
    font-weight: bold;
    transition: var(--transition);
    &:hover {
      transform: scale(0.97);
      border: 3px solid var(--main-blue);
      color: var(--main-blue);
      background: white;
    }
  }
  @media screen and (max-width: 991px) {
    padding: 3rem;
    .featured {
      grid-template-columns: 1fr;
      img {
        height: 300px;
      }
    }
    .btn {
      font-size: 1rem;
    }
  }
`;
export {Wrapper};
