import React from 'react';
import {FaTrash} from 'react-icons/fa';
import {AmountBtn} from '..';
import {useCartContext} from '../../context/CartContext';
import {Wrapper} from '../../styles/pages/cart/cartItem';
import {formatPrice} from '../../utils/helper';

function CartItem({id, title, price, img, amount, stock}) {
  const {handleCart, removeItem} = useCartContext();
  return (
    <Wrapper>
      <div className="title">
        <img src={img} alt={title} />
        <h5 className="name">{title}</h5>
      </div>
      <h5 className="price">{formatPrice(price)}</h5>

      <AmountBtn
        amount={amount}
        handleMinus={() => handleCart(id, stock, 'minus')}
        handlePlus={() => handleCart(id, stock, 'plus')}
      />

      <h5 className="subtotal">{formatPrice(price * amount)}</h5>

      <button className="remove-btn" onClick={() => removeItem(id)}>
        <FaTrash />
      </button>
    </Wrapper>
  );
}

export default CartItem;
