import styled from 'styled-components';

const Wrapper = styled.article`
  .container {
    position: relative;
    background: black;
    opacity: 0.8;
    border-radius: var(--radius);
  }
  img {
    width: 100%;
    display: block;
    object-fit: cover;
    border-radius: var(--radius);
    transition: var(--transition);
    cursor: pointer;
  }

  .container:hover img {
    opacity: 0.6;
    transform: scale(0.98);
  }
  .container:hover .link {
    opacity: 1;
  }
  footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 0.6rem;

    span {
      opacity: 0.6;
    }

    h5 {
      margin: 0;
      margin-right: 2rem;
    }
    p {
      opacity: 0.6;
      font-size: 1rem;
    }
  }
  @media screen and (max-width: 991px) {
    footer {
      h5 {
        margin: 0 1rem;
        margin-right: 2rem;
      }
    }
  }
`;

export {Wrapper};
