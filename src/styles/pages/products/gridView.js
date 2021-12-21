import styled from 'styled-components';

const Wrapper = styled.section`
  img {
    height: 200px;
  }
  .products-container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem 1.5rem;
  }

  @media (max-width: 991px) {
    .products-container {
      grid-template-columns: auto;
      gap: 2rem 0.3rem;
    }
  }
`;

export {Wrapper};
