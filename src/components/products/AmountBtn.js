import React from 'react';
import {FaMinus, FaPlus} from '../../icons/icons';
import {Wrapper} from '../../styles/pages/products/amountBtn';

function AmountBtn({amount, handlePlus, handleMinus}) {
  return (
    <Wrapper>
      <button onClick={handleMinus}>
        <FaMinus />
      </button>
      <h2>{amount}</h2>
      <button onClick={handlePlus}>
        <FaPlus />
      </button>
    </Wrapper>
  );
}

export default AmountBtn;
