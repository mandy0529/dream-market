import styled from 'styled-components';

const Wrapper = styled.div`
  min-height: 79vh;
  margin: 5rem;
  .products {
    display: grid;
    gap: 3rem 1.5rem;
    grid-template-columns: auto 1fr;
    padding: 4rem 10rem;
  }
  .products-content {
    margin-left: 7rem;
  }

  @media screen and (max-width: 991px) {
    .products {
      grid-template-columns: 1fr;
      padding: 2rem 0rem;
      gap: 1rem;
    }
    .products-content {
      margin-left: 0;
      margin: 2rem 1rem;
    }
  }

  @media screen and (max-width: 768px) {
    margin: 2rem auto;
  }
`;

export {Wrapper};
