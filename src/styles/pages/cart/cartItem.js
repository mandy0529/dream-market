import styled from 'styled-components';

const Wrapper = styled.article`
  display: grid;
  gap: 3rem 1rem;
  justify-items: center;
  margin-bottom: 3rem;
  grid-template-columns: 1fr 1fr 1fr 1fr auto;
  align-items: center;
  grid-template-rows: 75px;
  padding: 0 2rem;
  .subtotal {
    display: block;
    margin-bottom: 0;
    color: var(--clr-grey-5);
    font-weight: 400;
    font-size: 1rem;
  }

  .price {
    display: block;
    font-size: 1rem;
    color: var(--clr-primary-5);
    font-weight: 400;
  }
  .title {
    height: 100%;
    display: grid;
    grid-template-columns: 100px 150px;
    align-items: center;
    gap: 1rem;
    text-align: left;
  }

  img {
    width: 100%;
    height: 70px;
    display: block;
    border-radius: var(--radius);
    object-fit: cover;
  }
  h5 {
    font-size: 0.75rem;
    margin: 0;
  }

  .remove-btn {
    background: transparent;
    border: transparent;
    letter-spacing: var(--spacing);
    color: white;
    background: transparent;
    padding: 0.4rem;
    border-radius: 5px;
    font-size: 1.6rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: var(--radius);
    cursor: pointer;
    transition: var(--transition);
    svg {
      color: var(--main-blue);
    }
    &:hover {
      background: white;
      color: var(--main-blue);
    }
  }
  @media (max-width: 991px) {
    grid-template-columns: 200px auto auto auto;
    align-items: center;
    grid-template-rows: 75px;
    padding: 2rem 4rem;
    img {
      height: 50px;
    }
    .title {
      font-size: 0.75rem;
    }
    .subtotal {
      display: none;
    }

    .name {
      font-size: 0.85rem;
    }

    .amount-btns {
      width: 100px;
      button {
        width: 1.5rem;
        height: 1rem;
        font-size: 1rem;
      }
      h2 {
        font-size: 1.5rem;
      }
    }
  }
  @media (max-width: 768px) {
    grid-template-columns: 100px;
    padding: 2rem 4rem;
    gap: 1rem;

    .price {
      font-size: 0.7rem;
    }
    .title {
      font-size: 0.75rem;
    }
    .remove-btn {
      font-size: 1rem;
    }
  }
`;

export {Wrapper};
