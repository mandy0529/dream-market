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
    opacity: 0.8;
    transform: scale(0.98);
  }
  .container:hover .link {
    opacity: 1;
  }
  footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 1.4rem;
    margin: 1rem 0;
    h5 {
      margin: 0 2rem;
    }
    p {
      opacity: 0.6;
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
