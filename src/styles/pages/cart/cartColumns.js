import styled from 'styled-components';

const Wrapper = styled.div`
  display: block;
  padding: 3rem;
  .content {
    display: grid;
    grid-template-columns: 316px 1fr 1fr 1fr auto;
    justify-items: center;
    column-gap: 1rem;
    h4 {
      color: var(--clr-grey-5);
      font-weight: bold;
    }
  }
  span {
    width: 2rem;
    height: 2rem;
  }
  @media (max-width: 991px) {
    display: none;
    padding: 0;
  }
`;

export {Wrapper};
