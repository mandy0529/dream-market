import React from 'react';
import {Product} from '..';
import {Wrapper} from '../../styles/pages/products/gridView';

function GridView({products}) {
  return (
    <Wrapper>
      <div className="products-container">
        <Product />
      </div>
    </Wrapper>
  );
}

export default GridView;
