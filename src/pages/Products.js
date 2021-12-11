import React from 'react';
import {Filters, ProductList, Sort} from '../components';

import {Wrapper} from '../styles/pages/products/products';

function Products() {
  return (
    <Wrapper className="page">
      <div className="section-center products">
        <Filters />
        <div className="products-content">
          <Sort />
          <ProductList />
        </div>
      </div>
    </Wrapper>
  );
}

export default Products;
