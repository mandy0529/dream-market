import styled from 'styled-components';

const Wrapper = styled.article`
  padding: 0.7rem;
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
    margin-top: 0.8rem;
    h5 {
      margin: 0;
      margin-right: 2rem;
      font-size: 1.1rem;
    }
    p {
      opacity: 0.6;
      font-size: 1rem;
      margin: 0;
    }
  }
  @media screen and (max-width: 991px) {
    padding: 0.4rem;
    footer {
      margin-top: 0.8rem;
      h5 {
        margin: 0 1rem;
        margin-right: 2rem;
        font-size: 0.8rem;
      }
      p {
        font-size: 0.7rem;
      }
    }
  }
`;

export {Wrapper};
