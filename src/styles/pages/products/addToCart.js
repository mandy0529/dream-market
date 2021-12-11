import styled from 'styled-components';

const Wrapper = styled.section`
  margin-top: 2rem;

  .btn-container {
    margin-top: 2rem;
  }
  .header__cart {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.3rem;
    margin-top: 4rem;
    transition: var(--transition);
    background: var(--main-blue);
    padding: 0.3rem 1.5rem;
    border-radius: 10px;
    border: 3px solid transparent;
    transition: var(--transition);
    color: white;
    cursor: pointer;
    &:hover {
      background: white;
      border: 3px solid var(--main-blue);
      color: black;
    }
    &:hover svg {
      transform: rotate(-15deg);
    }
    svg {
      transition: var(--transition);
      font-size: 2rem;
      margin: 0 1rem;
      transition: var(--transition);
    }
  }
`;

export {Wrapper};
