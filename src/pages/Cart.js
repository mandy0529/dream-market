import React from 'react';
import {Link} from 'react-router-dom';
import {CartContent} from '../components';
import {useCartContext} from '../context/CartContext';
import {Wrapper} from '../styles/pages/cart/cart';

function Cart() {
  const {cart} = useCartContext();

  if (cart.length < 1) {
    return (
      <Wrapper className="page-100">
        <div className="empty">
          <h2>카트에 담긴 꿈이 없습니다 . </h2>
          <Link to="/products" className="to-product-btn">
            꿈 담으러 가기
          </Link>
        </div>
      </Wrapper>
    );
  }
  return (
    <main>
      <div className="page">
        <CartContent />
      </div>
    </main>
  );
}

export default Cart;
