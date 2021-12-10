import styled from 'styled-components';

const Wrapper = styled.div`
  min-height: 79vh;
  .products {
    display: grid;
    gap: 3rem 1.5rem;
    grid-template-columns: auto 1fr;
    padding: 4rem 15rem;
  }
  .products-content {
    margin-left: 5rem;
  }
  p {
    margin: 0;
    font-size: 1rem;
  }
  @media (max-width: 991px) {
    .products {
      grid-template-columns: 1fr;
      padding: 4rem 5rem;
    }
    .products-content {
      margin-left: 0;
    }
  }
`;

export {Wrapper};
