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
  @media screen and (max-width: 768px) {
    grid-template-columns: auto;
    gap: 0rem;
    grid-template-rows: 60px;
    padding: 1rem;
    margin-bottom: 1rem;
    justify-items: flex-end;

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
    .price {
      font-size: 0.7rem;
    }

    .remove-btn {
      display: none;
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
`;

export {Wrapper};
