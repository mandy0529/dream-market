import styled from 'styled-components';

const Wrapper = styled.footer`
  height: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background: var(--clr-black);
  text-align: center;
  font-size: 1rem;
  span {
    color: var(--clr-primary-5);
  }
  h5 {
    color: var(--clr-white);
    margin: 0.1rem;
    font-weight: 400;
    text-transform: none;
    line-height: 1.25;
  }
  @media screen and (max-width: 768px) {
    flex-direction: column;
    height: 4rem;
    h5 {
      font-size: 0.7rem;
    }
  }
`;
export {Wrapper};
