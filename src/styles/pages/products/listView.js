import styled from 'styled-components';

const Wrapper = styled.section`
  margin: 4rem 0;
  display: grid;
  grid-template-columns: 1fr;
  column-gap: 2rem;
  img {
    display: block;
    max-width: 400px;
    width: 100%;
    height: 400px;
    object-fit: cover;
    border-radius: var(--radius);
    margin-bottom: 1rem;
  }
  h4 {
    margin-bottom: 0.2rem;
    margin: 1rem 0;
  }
  article {
    display: flex;
    div {
      margin: 0 3rem;
      span {
        opacity: 0.7;
      }
    }
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
    font-size: 1.1rem;
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
  @media (max-width: 991px) {
    grid-template-columns: auto;
    width: 100%;
    article {
      div {
        margin: 0 2rem;
      }
    }
    img {
      display: block;
      width: 200px;
      object-fit: cover;
      border-radius: var(--radius);
      margin-bottom: 1rem;
    }
    .detail-btn {
      font-size: 0.8rem;
    }
  }
`;

export {Wrapper};
