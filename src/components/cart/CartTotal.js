import React from 'react';
import {useCartContext} from '../../context/CartContext';
import {Wrapper} from '../../styles/pages/cart/cartTotal';
import {formatPrice} from '../../utils/helper';

function CartTotal() {
  const {total_price, total_amount} = useCartContext();
  return (
    <Wrapper>
      <div>
        <article>
          <h4>
            총 꿈 수량 : <span>{total_amount}개</span>
          </h4>

          <h4>
            총 꿈 가격 : <span>{formatPrice(total_price)}</span>
          </h4>
        </article>
      </div>
    </Wrapper>
  );
}

export default CartTotal;
