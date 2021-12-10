import styled from 'styled-components';

const Wrapper = styled.main`
  padding: 5rem 20rem;
  .product-center {
    display: grid;
    gap: 4rem;
    margin-top: 2rem;
  }
  .price {
    opacity: 0.7;
  }
  .main {
    height: 600px;
  }
  .desc {
    line-height: 2;
    max-width: 45em;
  }
  .info {
    text-transform: capitalize;
    width: 300px;
    display: grid;
    grid-template-columns: 125px 1fr;
    span {
      font-weight: 700;
    }
  }
  .back-btn {
    padding: 0.6rem 1.5rem;
    border-radius: 10px;
    transition: var(--transition);
    background: white;
    border: 3px solid var(--main-blue);
    color: black;
    cursor: pointer;
    &:hover {
      background: var(--main-blue);
      color: white;
      border: 3px solid white;
      transform: scale(0.98);
    }
  }
  @media (min-width: 992px) {
    .product-center {
      grid-template-columns: 1fr 1fr;
      align-items: center;
    }
    .price {
      font-size: 1.25rem;
    }
  }
`;

export {Wrapper};
