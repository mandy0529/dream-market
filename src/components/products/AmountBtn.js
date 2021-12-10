import React from 'react';
import {FaMinus, FaPlus} from '../../icons/icons';
import {Wrapper} from '../../styles/pages/products/amountBtn';

function AmountBtn() {
  return (
    <Wrapper>
      <button>
        <FaMinus />
      </button>
      <h2>1</h2>
      <button>
        <FaPlus />
      </button>
    </Wrapper>
  );
}

export default AmountBtn;
