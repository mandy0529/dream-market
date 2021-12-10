import styled from 'styled-components';

const Wrapper = styled.section`
  display: grid;
  grid-template-columns: auto auto 1fr auto;
  align-items: center;
  margin-bottom: 2rem;
  column-gap: 2rem;
  .sort-p {
    text-transform: capitalize;
    margin-bottom: 0;
    font-size: 1.1rem;
  }
  .btn-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 0.5rem;
    button {
      background: transparent;
      border: 1px solid transparent;
      margin-left: 0.6rem;
      color: black;
      width: 1.9rem;
      border-radius: var(--radius);
      height: 1.9rem;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      svg {
        font-size: 1.4rem;
      }
    }
    .active {
      background: black;
      color: white;
    }
  }

  @media (max-width: 991px) {
    .btn-container {
      width: 50px;
    }
    .sort-p {
      margin: 0 2rem;
    }
  }
`;

export {Wrapper};
