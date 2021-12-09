import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding-top: 1rem;
  img {
    height: 100px;
    margin-left: 5rem;
  }

  .header__list,
  .header__logo {
    display: flex;
    justify-content: center;
    align-items: center;
    .nav-header {
      font-size: 2rem;
      font-size: bold;
      font-family: 'Luckiest Guy', cursive;
      padding-left: 1rem;
      transition: var(--transition);
      cursor: pointer;
    }
    .nav-header:hover {
      transform: rotate(-3deg);
    }
    li {
      margin: 0 1rem;
      font-size: 1.3rem;
      text-transform: uppercase;
      cursor: pointer;
      transition: var(--transition);
      border: 3px solid transparent;
      border-radius: 10px;
      padding: 0.5rem 1.5rem;
      &:hover {
        border: 3px solid white;
        background: var(--main-white);
        transform: scale(0.97);
      }
    }
  }
  .header__cart {
    display: flex;
    align-items: center;
    font-size: bold;
    font-size: 2rem;
    position: relative;
    .cart-icon {
      transition: var(--transition);
      cursor: pointer;
      &:hover {
        transform: rotate(-8deg);
      }
    }

    .header__cart-count {
      display: inline-block;
      position: absolute;
      margin-left: -5px;
      font-size: 1rem;
      font-weight: bold;
      width: 1.6rem;
      height: 1.6rem;
      text-align: center;
      background: var(--main-light-pink);
      border-radius: 50%;
    }
    span {
      margin: 0 0.4rem;
    }
  }
  .toggle__bar {
    display: none;
    font-size: 1.5rem;
    transition: var(--transition);
    cursor: pointer;
    &:hover {
      color: white;
    }
  }
  @media screen and (max-width: 981px) {
    grid-template-columns: 1fr 1fr;
    padding-left: 1rem;
    padding-right: 1.5rem;
    img {
      height: 60px;
      margin-left: 2rem;
    }
    .header__logo {
      margin-right: auto;

      span {
        font-size: 1.2rem;
      }
    }
    .header__list,
    .header__cart {
      display: none;
    }
    .toggle__bar {
      display: block;
    }
  }
`;

export {Wrapper};
