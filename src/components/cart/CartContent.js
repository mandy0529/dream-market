import React from 'react';
import {Link} from 'react-router-dom';
import {CartColumns, CartItem, CartTotal} from '..';
import {useCartContext} from '../../context/CartContext';
import {Wrapper} from '../../styles/pages/cart/cartContent';

function CartContent() {
  const {cart, clearCartItem} = useCartContext();

  return (
    <Wrapper className="section section-center">
      <CartColumns />
      {cart.map((item) => {
        return <CartItem key={item.id} {...item} />;
      })}
      <hr className="hr" />
      <div className="link-container">
        <Link to="/products" className="link-btn products-btn ">
          꿈 담기
        </Link>
        <button
          className="link-btn clear-btn"
          type="button"
          onClick={clearCartItem}
        >
          꿈 비우기
        </button>
      </div>
      <CartTotal />
    </Wrapper>
  );
}

export default CartContent;
