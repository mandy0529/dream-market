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
    h4 {
      font-size: 1.2rem;
    }
  }
`;

export {Wrapper};
