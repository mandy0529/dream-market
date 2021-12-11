import React from 'react';
import {Wrapper} from '../../styles/pages/cart/cartColumns';

function CartColumns() {
  return (
    <Wrapper>
      <div className="content">
        <h4>꿈</h4>
        <h4>가격</h4>
        <h4>수량</h4>
        <h4>총 가격</h4>
        <span></span>
      </div>
    </Wrapper>
  );
}

export default CartColumns;
