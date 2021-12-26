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
    margin: 2rem auto;
    .products {
      grid-template-columns: 1fr;
      padding: 0;
      gap: 1rem;
    }
    .products-content {
      margin-left: 0;
      margin: 1rem 2rem;
    }
  }
`;

export {Wrapper};
