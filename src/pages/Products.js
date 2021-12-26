import React from 'react';
import {Filters, Loader, ProductList, Sort} from '../components';
import {useProductContext} from '../context/ProductContext';
import {Wrapper} from '../styles/pages/products/products';

function Products() {
  const {products_loading: loading} = useProductContext();

  if (loading) {
    return <Loader />;
  }

  return (
    <Wrapper className="page">
      <div className="products">
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
