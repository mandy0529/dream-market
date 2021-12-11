import React from 'react';
import {Product} from '..';
import {Wrapper} from '../../styles/pages/products/gridView';

function GridView({products}) {
  return (
    <Wrapper>
      <div className="products-container">
        {products &&
          products.map((item) => {
            const {id} = item;
            return <Product key={id} {...item} />;
          })}
      </div>
    </Wrapper>
  );
}

export default GridView;
