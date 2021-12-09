import styled from 'styled-components';

const SidebarContainer = styled.aside`
  display: none;

  @media screen and (max-width: 981px) {
    display: none;
    z-index: -1;
    background: transparent;
    height: 100vh;
    width: 100vw;
    padding-top: 5rem;

    &.show {
      display: block;
    }

    .links {
      margin-bottom: 2rem;
    }
    .links a {
      display: block;
      text-align: left;
      font-size: 1rem;
      text-transform: capitalize;
      padding: 1rem 3rem;
      color: black;
      transition: var(--transition);
      letter-spacing: var(--spacing);
      &:hover {
        padding-left: 2.5rem;
        background: white;
        color: var(--main-blue);
      }
    }
    .header__cart {
      display: flex;
      justify-content: center;
      margin-top: 10rem;
      align-items: center;
      font-size: bold;
      font-size: 2.6rem;
      position: relative;
      .cart-icon {
        transition: var(--transition);
        cursor: pointer;
        &:hover {
          transform: rotate(8deg);
        }
      }

      .header__cart-count {
        display: inline-block;
        position: absolute;
        margin-left: -5px;
        font-size: 1rem;
        font-weight: bold;
        width: 1.5rem;
        height: 1.5rem;
        text-align: center;
        background: var(--main-light-pink);
        border-radius: 50%;
      }
      span {
        margin: 0 0.4rem;
      }
    }
  }
`;

export {SidebarContainer};
