import React from 'react';
import {GridView, ListView} from '..';
import {useProductContext} from '../../context/ProductContext';

function ProductList() {
  const {isGridView, products} = useProductContext();
  if (isGridView === false) {
    return <ListView products={products} />;
  }
  return <GridView products={products}>product list</GridView>;
}

export default ProductList;
