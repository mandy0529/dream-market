import styled from 'styled-components';

const Wrapper = styled.div`
  background: var(--main-light-yellow);
  min-height: 81vh;
  padding: 0 10rem;
  .link-container {
    display: flex;
    justify-content: space-between;
    margin-top: 2rem;
  }
  .link-btn {
    padding: 0.4rem 1.5rem;
    border-radius: 10px;
    color: black;
    cursor: pointer;
    letter-spacing: 0.2rem;
  }
  .products-btn {
    color: black;
    border: 3px solid transparent;
    background: var(--main-blue);
    transition: var(--transition);
    &:hover {
      background: white;
      color: var(--main-blue);
      border: 3px solid var(--main-blue);
      transform: scale(0.98);
    }
  }
  .clear-btn {
    background: black;
    color: white;
    border: 3px solid transparent;
    transition: var(--transition);
    &:hover {
      background: white;
      color: black;
      border: 3px solid transparent;
      transform: scale(0.98);
    }
  }
  @media screen and (max-width: 991px) {
    padding: 2rem 0;

    .link-btn {
      font-size: 0.8rem;
      padding: 0.4rem 1rem;
      margin: 0 1rem;
    }
  }
  @media (max-width: 768px) {
    background: transparent;
    .link-btn {
      font-size: 0.5rem;
    }
    .hr {
      display: none;
    }
  }
`;

export {Wrapper};
