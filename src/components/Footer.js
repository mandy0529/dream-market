import React from 'react';
import {BiMoon} from 'react-icons/bi';
import {Wrapper} from '../styles/footer';

function Footer() {
  return (
    <Wrapper>
      <h5>
        &copy; {new Date().getFullYear()}
        <span> Dream Market </span>
        <span>
          <BiMoon />
        </span>
      </h5>
      <h5> This is Demo </h5>
    </Wrapper>
  );
}

export default Footer;
