import styled from 'styled-components';

const Wrapper = styled.div`
  margin-top: 5rem;
  min-height: 75vh;
  .empty {
    text-align: center;
    h2 {
      margin-bottom: 3rem;
      text-transform: none;
    }
    .to-product-btn {
      padding: 0.5rem 1rem;
      border: 3px solid white;
      border-radius: 5px;
      font-size: 1rem;
      color: white;
      cursor: pointer;
      transition: var(--transition);
      &:hover {
        background: var(--main-pink);
        border: 3px solid var(--main-light-blue);
        color: white;
      }
    }
  }
  @media screen and (max-width: 768px) {
    .empty {
      h2 {
        font-size: 1rem;
      }
      .to-product-btn {
        font-size: 0.9rem;
        padding: 0.3rem 1rem;
      }
    }
  }
`;

export {Wrapper};
