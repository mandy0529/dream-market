import React, {useState} from 'react';
import {FiShoppingCart} from 'react-icons/fi';
import {Link} from 'react-router-dom';
import {AmountBtn} from '..';
import {useCartContext} from '../../context/CartContext';
import {Wrapper} from '../../styles/pages/products/addToCart';

function AddToCart({data}) {
  const {stock, singleProductId: id} = data;
  const [amount, setAmount] = useState(1);
  const {addToCart} = useCartContext();

  const handlePlus = () => {
    setAmount((current) => {
      if (current === Number(stock)) {
        return current;
      }
      return current + 1;
    });
  };

  const handleMinus = () => {
    setAmount((current) => {
      if (current === 1) {
        return current;
      }
      return current - 1;
    });
  };
  return (
    <Wrapper>
      <div className="btn-container">
        <AmountBtn
          amount={amount}
          handlePlus={handlePlus}
          handleMinus={handleMinus}
        />
        <Link
          onClick={() => addToCart(id, amount, data)}
          to="/cart"
          className="header__cart"
        >
          <FiShoppingCart />
          카트 담기
        </Link>
      </div>
    </Wrapper>
  );
}

export default AddToCart;
