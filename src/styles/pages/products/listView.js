import styled from 'styled-components';

const Wrapper = styled.section`
  display: grid;
  margin: 4rem 0;
  img {
    width: 100%;
    display: block;
    width: 300px;
    height: 200px;
    object-fit: cover;
    border-radius: var(--radius);
    margin-bottom: 1rem;
  }
  h4 {
    margin-bottom: 0.5rem;
    margin: 0;
  }
  .price {
    color: var(--clr-primary-6);
    margin-bottom: 0.75rem;
  }
  .list-p {
    max-width: 45em;
    margin-bottom: 1.4rem;
  }
  .detail-btn {
    font-size: 0.8rem;
    padding: 0.3rem 1.3rem;
    background: var(--main-blue);
    border: 3px solid transparent;
    border-radius: 10px;
    transition: var(--transition);

    &:hover {
      background: white;
      border: 3px solid var(--main-blue);
    }
  }
  @media (min-width: 992px) {
    display: grid;
    grid-template-columns: auto 1fr;
    column-gap: 2rem;
    align-items: center;
  }
`;

export {Wrapper};
