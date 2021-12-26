import styled from 'styled-components';

const Wrapper = styled.section`
  margin-top: 5rem;
  display: flex;
  justify-content: flex-end;
  article {
    border: 1px solid var(--clr-grey-8);
    border-radius: var(--radius);
    padding: 1.5rem 2rem;
  }
  h4 {
    display: grid;
    grid-template-columns: 200px 1fr;
    margin-top: 2rem;
  }

  @media (max-width: 776px) {
    justify-content: center;
    article {
      padding: 1.5rem 0.5rem;
    }
    h4 {
      font-size: 0.8rem;
      grid-template-columns: 100px 1fr;
    }
  }
`;

export {Wrapper};
