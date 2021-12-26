import styled from 'styled-components';

const Wrapper = styled.main`
  padding: 5rem 20rem;
  .title {
    margin-top: 4rem;
  }
  .main {
    height: 600px;
    margin-right: 9rem;
    border-radius: 10px;
  }
  .product-center {
    display: flex;
    justify-content: center;
    align-items: center;
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
    font-size: 1.2rem;
  }
  .info {
    text-transform: capitalize;
    width: 300px;
    display: grid;
    grid-template-columns: 125px 1fr;
    font-weight: bold;
    font-size: 1.1rem;
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
    letter-spacing: 0.2rem;
    &:hover {
      background: var(--main-blue);
      color: white;
      border: 3px solid white;
      transform: scale(0.98);
    }
  }

  @media (max-width: 991px) {
    padding: 5rem 3rem;
    .main {
      height: 300px;
      margin: 0;
      margin-bottom: 3rem;
    }
    .product-center {
      flex-direction: column;
    }

    .title {
      margin-top: 2rem;
    }
  }
  @media (max-width: 768px) {
    padding: 1rem;
    .content {
      text-align: center;
    }
    .main {
      height: 200px;
    }
    .desc {
      font-size: 1rem;
    }
    .title {
      font-size: 1rem;
      margin-top: 0;
    }
    .price {
      font-size: 0.8rem;
    }
    .desc {
      font-size: 0.7rem;
    }
    .info {
      font-size: 0.9rem;
    }
    .back-btn {
      display: none;
    }
  }
`;

export {Wrapper};
