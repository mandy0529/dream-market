import styled from 'styled-components';

const Wrapper = styled.section`
  font-size: 1.6rem;
  margin-left: 3rem;

  button {
    display: block;
    margin: 1.5em 0;
    padding: 0.5rem 1.5rem;
    text-transform: capitalize;
    font-size: 1rem;
    background: transparent;
    border: none;
    border: 3px solid transparent;
    border-radius: 10px;
    letter-spacing: var(--spacing);
    color: black;
    cursor: pointer;
    transition: all 0.3s linear;
    &:hover {
      background: white;
      border: 3px solid var(--main-blue);
    }
  }
  .filter-control {
    margin-top: 4rem;
  }

  .active {
    background: white;
    border: 3px solid var(--main-blue);
    opacity: 1;
  }

  .price {
    margin-bottom: 0.25rem;
    font-size: 1.2rem;
  }

  .clear-btn {
    color: black;
    background: white;
    border: 3px solid var(--main-blue);
    padding: 0.5rem 1.5rem;
    border-radius: var(--radius);
    &:hover {
      background: var(--main-blue);
      color: white;
      border: 3px solid white;
    }
  }
  @media (max-width: 991px) {
    margin-left: 0;
    padding: 0 1.5rem 2rem 1.5rem;
    border-bottom: 2px dotted black;
    button {
      margin: 0.3rem 0;
      padding: 0.3rem 1rem;
      font-size: 0.7rem;
    }
    .form-control {
      margin: 0 1rem;
    }
    .filter-control {
      margin-top: 1rem;
    }
    .category-control {
      display: flex;
      flex-wrap: wrap;
    }
    .filter-control-flex {
      display: flex;
      align-items: center;
      p {
        margin: 0 1.3rem;
      }
    }
    .clear-btn {
      margin: 0 auto;
      margin-top: 1.5rem;
      padding: 0.3rem 1rem;
      font-size: 0.8rem;
      text-align: center;
    }
    .price {
      font-size: 0.8rem;
    }
  }
`;

export {Wrapper};
