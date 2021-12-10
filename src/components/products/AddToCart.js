import React from 'react';
import {FiShoppingCart} from 'react-icons/fi';
import {Link} from 'react-router-dom';
import {AmountBtn} from '..';
import {Wrapper} from '../../styles/pages/products/addToCart';

function AddToCart() {
  return (
    <Wrapper>
      <div className="btn-container">
        <AmountBtn />
        <Link to="/cart" className="header__cart">
          <FiShoppingCart />
          <span>카트 담기</span>
        </Link>
      </div>
    </Wrapper>
  );
}

export default AddToCart;
